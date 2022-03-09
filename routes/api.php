<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::post("register",[UserController::class , "register"]);
Route::post("login",[UserController::class,"login"]);
Route::get('login',[UserController::class,"unauthorize"])->name("login");
Route::middleware('auth:api')->get("test",[UserController::class,"index"]);
Route::middleware('auth:api')->post("logout",[UserController::class,'logout']);
Route::middleware('auth:api')->get('check_token',[UserController::class,"checkToken"]);
Route::middleware(['auth', 'second'])->group(function () {
    
});
Route::middleware('auth:api')->post("profile",[UserController::class,'profile']);