<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\front\AuthFrontController;
use App\Http\Controllers\front\BookFrontController;
use App\Http\Controllers\front\BookDonorFrontController;
use App\Http\Controllers\front\BorrowerFrontController;
use App\Http\Controllers\front\BorrowLogFrontController;
use App\Http\Controllers\front\BorrowLogRemarksFrontController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/', [ AuthFrontController::class, 'checkSession' ]);
Route::post('auth/log-in', [ AuthFrontController::class, 'login' ]);
Route::post('auth/log-out', [ AuthFrontController::class, 'logout' ]);

Route::middleware([ 'session.check'])->group(function () {

    Route::get('front/{any?}', function () {
        return view('main');
    })->where('any', '.*');

    Route::post('auth/change-password', [ AuthFrontController::class, 'changePassword' ]);
    Route::prefix('user')->group(function () {
        Route::get('session', [ AuthFrontController::class, 'getUserSession' ]);
    });
    
    // USER LOG
    Route::get('user-logs/get-list', );

    // BOOKS
    Route::prefix('books')->group(function () {
        Route::get('get', [BookFrontController::class, 'getBooks']);
        Route::post('create', [BookFrontController::class, 'createBook']);
        Route::post('update/{id}', [BookFrontController::class, 'updateBook']);
    });

    Route::prefix('donors')->group(function () {
        Route::get('get', [BookDonorFrontController::class, 'getBookDonors']);
        Route::post('create', [BookDonorFrontController::class, 'createBookDonor']);
        Route::post('update/{id}', [BookDonorFrontController::class, 'updateBookDonor']);
    });

    Route::prefix('borrowers')->group(function () {
        Route::get('get', [BorrowerFrontController::class, 'getBorrowers']);
        Route::post('create', [BorrowerFrontController::class, 'createBorrower']);
        Route::post('update/{id}', [BorrowerFrontController::class, 'updateBorrower']);
    });

    Route::prefix('borrow-log')->group(function () {
        Route::get('get', [BorrowLogFrontController::class, 'getBorrowLogs']);
        Route::post('create', [BorrowLogFrontController::class, 'createBorrowLog']);
        Route::post('update/{id}', [BorrowLogFrontController::class, 'updateBorrowLog']);
    });

    Route::prefix('remarks')->group(function () {
        Route::get('get', [BorrowLogRemarksFrontController::class, 'getBorrowLogRemarks']);
        Route::post('create', [BorrowLogRemarksFrontController::class, 'createBorrowLogRemarks']);
        Route::post('update/{id}', [BorrowLogRemarksFrontController::class, 'updateBorrowLogRemarks']);
    });
});

Route::get('sys-clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('optimize');
    return 'Cleared all cache!';
});
