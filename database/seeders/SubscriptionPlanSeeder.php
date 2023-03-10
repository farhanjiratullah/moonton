<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscription_plans = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_months' => 3,
                'features' => json_encode(['Unlock 10 basic movies', 'Up to 3 users', 'Support 24/7 ready']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Premium',
                'price' => 899000,
                'active_period_in_months' => 6,
                'features' => json_encode(['Unlock 200 awards movies', '180 subtitles available', 'iOS, Android, TV', 'Offline Mode', 'Up to 20 users', 'Support 24/7 ready']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        SubscriptionPlan::insert($subscription_plans);
    }
}
