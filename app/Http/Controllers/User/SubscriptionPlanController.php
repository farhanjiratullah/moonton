<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
// use App\Http\Requests\User\UserSubscription\SubscribeUserSubscriptionRequest;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class SubscriptionPlanController extends Controller
{
    public function index(): Response
    {
        $subscription_plans = SubscriptionPlan::all();

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscription_plans' => $subscription_plans
        ]);
    }

    public function subscribe(Request $request, SubscriptionPlan $subscription_plan): RedirectResponse
    {
        $data = [
            'user_id' => auth()->id(),
            'subscription_plan_id' => $subscription_plan->id,
            'price' => $subscription_plan->price,
            'expired_date' => now()->addMonths($subscription_plan->active_period_in_months),
            'payment_status' => 'paid'
        ];

        UserSubscription::create($data);

        return to_route('user.dashboard.index');
    }
}
