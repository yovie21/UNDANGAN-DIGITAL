<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RsvpController;

Route::get('/rsvps', [RsvpController::class, 'index']);
Route::post('/rsvps', [RsvpController::class, 'store']);
Route::delete('/rsvps/{id}', [RsvpController::class, 'destroy']);
Route::get('/rsvps-statistics', [RsvpController::class, 'statistics']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');