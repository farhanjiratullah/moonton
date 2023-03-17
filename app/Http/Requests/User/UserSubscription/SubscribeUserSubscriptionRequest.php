<?php

namespace App\Http\Requests\User\UserSubscription;

use Illuminate\Foundation\Http\FormRequest;

class SubscribeUserSubscriptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        // $now = now()->format('Y-m-d H:i:s');
        // $date_after_adding_active_period_in_months = now()->addMonths($this->)->format('Y-m-d H:i:s');

        // return [
        //     'user_id' => 'required|integer|exists:users,id',
        //     'subscription_plan_id' => 'required|integer|exists:subscription_plans,id',
        //     'price' => 'required|integer',
        //     'expired_date'  => 'required|date_format:Y-m-d H:i:s|after_or_equal:' . $now,
        //     'payment_status' => 'required|string',
        //     'snap_token' => 'nullable|string'
        // ];
    }

    // protected function prepareForValidation(): void
    // {
    //     $this->merge([
    //         'user_id' => auth()->id(),
    //         'subscription_plan_id' => $this->subscription_plan_id,
    //     ]);
    // }
}
