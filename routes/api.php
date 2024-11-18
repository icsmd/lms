<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\BookApiController;
use App\Http\Controllers\api\BookDonorApiController;
use App\Http\Controllers\api\BorrowerApiController;
use App\Http\Controllers\api\BorrowLogApiController;
use App\Http\Controllers\api\BorrowLogRemarksApiController;
use App\Http\Controllers\api\UserAccountApiController;
use App\Http\Controllers\api\UserLogApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('401', function () {
    return response()->json([
        'code'    => 401,
        'message' => 'Request is unauthorized.',
        'data'    => null
    ], 401);
})->name('401');

Route::prefix('v1')->group(function () {

    // Auth User
    Route::post('auth-user', [UserAccountApiController::class, 'authUserAccount']);

    
    Route::prefix('users')->group(function () {
        Route::get('get-all', [UserAccountApiController::class, 'getAllUserAccount']);
        Route::get('get/{username}', [UserAccountApiController::class, 'getUserAccount']);
        Route::get('get/password/{username}', [UserAccountApiController::class, 'getUserPassword']);
        Route::post('create', [UserAccountApiController::class, 'createUserAccount']);
        Route::patch('update/{id}', [UserAccountApiController::class, 'updateUserAccount']);

        Route::prefix('logs')->group(function () {
            Route::get('get-all', [UserLogApiController::class, 'getAllUserLog']);
            Route::get('get-by-date', [UserLogApiController::class, 'getUserLogsByDate']);
            Route::post('create', [UserLogApiController::class, 'createUserLog']);
        });
    });

    Route::prefix('books')->group(function () {
        Route::get('get', [BookApiController::class, 'getBooks']);
        Route::post('create', [BookApiController::class, 'createBook']);
        Route::patch('update/{id}', [BookApiController::class, 'updateBook']);
    });

    Route::prefix('donors')->group(function () {
        Route::get('get', [BookDonorApiController::class, 'getBookDonors']);
        Route::post('create', [BookDonorApiController::class, 'createBookDonor']);
        Route::patch('update/{id}', [BookDonorApiController::class, 'updateBookDonor']);
    });

    Route::prefix('borrowers')->group(function () {
        Route::get('get', [BorrowerApiController::class, 'getBorrowers']);
        Route::post('create', [BorrowerApiController::class, 'createBorrower']);
        Route::patch('update/{id}', [BorrowerApiController::class, 'updateBorrower']);
    });

    Route::prefix('borrow-log')->group(function () {
        Route::get('get', [BorrowLogApiController::class, 'getBorrowLogs']);
        Route::post('create', [BorrowLogApiController::class, 'createBorrowLog']);
        Route::patch('update/{id}', [BorrowLogApiController::class, 'updateBorrowLog']);
    });

    Route::prefix('remarks')->group(function () {
        Route::get('get', [BorrowLogRemarksApiController::class, 'getBorrowLogRemarks']);
        Route::post('create', [BorrowLogRemarksApiController::class, 'createBorrowLogRemarks']);
        Route::patch('update/{id}', [BorrowLogRemarksApiController::class, 'updateBorrowLogRemarks']);
    });


    // Routes with API Token Authentication Middleware
    Route::middleware('auth:sanctum')->group(function () {

        Route::put('revoke-user/{iId}', [UserAccountApiController::class, 'revokeUserAccess']);

        Route::prefix('users')->group(function () {

        });
    }); // End of API Token Authentication Middleware 
});

