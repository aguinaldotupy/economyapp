<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class debit extends Model
{
    protected $table = 'debit';

    protected $fillable = ['name', 'value', 'status'];
}
