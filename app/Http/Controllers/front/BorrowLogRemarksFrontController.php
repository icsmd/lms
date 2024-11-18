<?php

namespace App\Http\Controllers\front;


use App\Http\Controllers\Controller;
use App\Services\BorrowLogRemarkService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Libraries\SessionHelperLibrary as Session;

class BorrowLogRemarksFrontController extends Controller
{
    private $oBorrowLogRemarkService;

    public function __construct()
    {
        $this->oBorrowLogRemarkService = new BorrowLogRemarkService();
    }

    public function getBorrowLogRemarks()
    {
        try {
            $aResult = $this->oBorrowLogRemarkService->getBorrowLogRemarks(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBorrowLogRemarks()
    {
        try {
            $aResult = $this->oBorrowLogRemarkService->createBorrowLogRemarks(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function updateBorrowLogRemarks($iId)
    {
        try {
            $aResult = $this->oBorrowLogRemarkService->updateBorrowLogRemarks($iId, request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}