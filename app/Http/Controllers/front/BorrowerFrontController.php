<?php

namespace App\Http\Controllers\front;


use App\Http\Controllers\Controller;
use App\Services\BorrowerService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Libraries\SessionHelperLibrary as Session;

class BorrowerFrontController extends Controller
{
    private $oBorrowerService;

    public function __construct()
    {
        $this->oBorrowerService = new BorrowerService();
    }

    public function getBorrowers()
    {
        try {
            $aResult = $this->oBorrowerService->getBorrowers(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBorrower()
    {
        try {
            $aResult = $this->oBorrowerService->createBorrower(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function updateBorrower($iId)
    {
        try {
            $aResult = $this->oBorrowerService->updateBorrower($iId, request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}