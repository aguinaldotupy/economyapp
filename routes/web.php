<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{path}', function () {
    return view('app');
})->where('path', '.*');

Route::get('/log/{message}', function ($message) {
    Log::info("Hello my log, message: $message");
    return view('teste');
});
