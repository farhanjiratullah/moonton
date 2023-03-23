<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'active_plan' => $this->active_plan()
            ],
            'flash_message' => [
                'message' => session('message'),
                'type' => session('type'),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }

    private function active_plan() {
        $active_plan = auth()->user()->user_subscription_paid ?? null;

        if( !$active_plan ) return null;

        $last_day = $active_plan->updated_at->addMonths($active_plan->subscription_plan->active_period_in_months);
        $active_days = $active_plan->updated_at->diffInDays($last_day);
        $remaining_active_days = $active_plan->expired_date->diffInDays(now());

        return [
            'name' => $active_plan->subscription_plan->name,
            'active_days' => $active_days,
            'remaining_active_days' => $remaining_active_days,
        ];
    }
}
