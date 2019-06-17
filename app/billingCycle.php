<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class billingCycle extends Model
{
    protected $table = 'billing_cycle';

    protected $fillable = ['name', 'month', 'year', 'credit_id', 'debit_id'];

    public function credits() {
        return $this->hasMany('App\credit');
    }

    public function debits() {
        return $this->hasMany('App\debit');
    }
}
