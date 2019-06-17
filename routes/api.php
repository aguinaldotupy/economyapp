<?php

use Illuminate\Http\Request;

Route::prefix('user')->group(function() {
    Route::get('/', 'AuthenticateController@authenticateUser')->middleware('jwt.auth');
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::post('logout', 'AuthenticateController@logout');
    Route::get('get_token', 'AuthenticateController@getToken');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('billingCycles', 'billingCycleController');
Route::resource('debit', 'debitController');
Route::resource('credit', 'creditController');
