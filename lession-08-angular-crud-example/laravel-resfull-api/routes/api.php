<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/customers', 'CustomerController@index')->name('customers.all');
Route::get('/customers/{customerId}', 'CustomerController@show')->name('customers.show');


// jwt-open api
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');

// jwt-authenticate api
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');

    // customers
    Route::post('/customers', 'CustomerController@store')->name('customers.store');
    Route::put('/customers/{customerId}', 'CustomerController@update')->name('customers.update');
    Route::delete('/customers/{customerId}', 'CustomerController@destroy')->name('customers.destroy');
    Route::post('/customers/search/{first_name}', 'CustomerController@search')->name('customers.search');

    //Route::get('closed', 'DataController@closed');
});
