<?php

namespace App\Http\Controllers\front;


use App\Http\Controllers\Controller;
use App\Services\BorrowLogService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Libraries\SessionHelperLibrary as Session;

class BorrowLogFrontController extends Controller
{
    private $oBorrowLogService;

    public function __construct()
    {
        $this->oBorrowLogService = new BorrowLogService();
    }

    public function getBorrowLogs()
    {
        try {
            $aResult = $this->oBorrowLogService->getBorrowLogs(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBorrowLog()
    {
        try {
            $aResult = $this->oBorrowLogService->createBorrowLog(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function updateBorrowLog($iId)
    {
        try {
            $aResult = $this->oBorrowLogService->updateBorrowLog($iId, request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}