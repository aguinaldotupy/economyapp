<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class credit extends Model
{
    protected $table = 'credit';

    protected $fillable = ['name', 'value'];

    public function billingCredit() {
        return $this->hasMany('App\billingCycle');
    }
}
