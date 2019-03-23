<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class billingCycle extends Model
{
    protected $table = 'billing_cycle';

    protected $fillable = ['name', 'month', 'year'];
}
