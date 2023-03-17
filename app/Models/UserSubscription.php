<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'subscription_plan_id', 'price', 'expired_date', 'payment_status', 'snap_token'];

    protected $casts = [
        'expired_date' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function subscription_plan(): BelongsTo
    {
        return $this->belongsTo(SubscriptionPlan::class);
    }
}
