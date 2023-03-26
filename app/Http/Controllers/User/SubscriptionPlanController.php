<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
// use App\Http\Requests\User\UserSubscription\SubscribeUserSubscriptionRequest;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Response;

class SubscriptionPlanController extends Controller
{
    public function index(): Response
    {
        $subscription_plans = SubscriptionPlan::all();

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscription_plans' => $subscription_plans,
            'user_subscription' => null
        ]);
    }

    public function subscribe(Request $request, SubscriptionPlan $subscription_plan): Response
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = config('services.midtrans.server');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = config('services.midtrans.is_production');
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = config('services.midtrans.is_sanitized');
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = config('services.midtrans.is_3ds');

        $data = [
            'user_id' => auth()->id(),
            'subscription_plan_id' => $subscription_plan->id,
            'price' => $subscription_plan->price,
            'payment_status' => 'pending'
        ];

        
        $user_subscription = UserSubscription::create($data);
        
        $params = [
            'transaction_details' => [
                'order_id' => $user_subscription->id . '-' . Str::random(5),
                'gross_amount' => $user_subscription->price
            ]
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        $user_subscription->update(['snap_token' => $snapToken]);

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'user_subscription' => $user_subscription
        ]);
    }

    public function midtransCallback(Request $request): JsonResponse
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = config('services.midtrans.server');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = config('services.midtrans.is_production');
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = config('services.midtrans.is_sanitized');
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = config('services.midtrans.is_3ds');

        $notif = new \Midtrans\Notification();

        $transaction_status = $notif->transaction_status;
        $fraud = $notif->fraud_status;

        $transaction_id = explode('-', $notif->order_id)[0];
        $userSubscription = UserSubscription::find($transaction_id);

        if ($transaction_status == 'capture') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'challenge'
                $userSubscription->payment_status = 'pending';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'success'
                $userSubscription->payment_status = 'paid';
                $userSubscription->expired_date = now()->addMonths($userSubscription->subscription_plan->active_period_in_months);
            }
        }
        else if ($transaction_status == 'cancel') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
        }
        else if ($transaction_status == 'deny') {
            // TODO Set payment status in merchant's database to 'failure'
            $userSubscription->payment_status = 'failed';
        }
        else if ($transaction_status == 'settlement') {
            // TODO set payment status in merchant's database to 'Settlement'
            $userSubscription->payment_status = 'paid';
            $userSubscription->expired_date = now()->addMonths($userSubscription->subscription_plan->active_period_in_months);
        }
        else if ($transaction_status == 'pending') {
            // TODO set payment status in merchant's database to 'Pending'
            $userSubscription->payment_status = 'pending';
        }
        else if ($transaction_status == 'expire') {
            // TODO set payment status in merchant's database to 'expire'
            $userSubscription->payment_status = 'failed';
        }

        $userSubscription->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Payment success'
        ]);
    }
}
