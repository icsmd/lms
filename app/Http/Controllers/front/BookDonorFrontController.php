<?php

namespace App\Http\Controllers\front;


use App\Http\Controllers\Controller;
use App\Services\BookDonorService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Libraries\SessionHelperLibrary as Session;

class BookDonorFrontController extends Controller
{
    private $oBookDonorService;

    public function __construct()
    {
        $this->oBookDonorService = new BookDonorService();
    }

    public function getBookDonors()
    {
        try {
            $aResult = $this->oBookDonorService->getBookDonors(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBookDonor()
    {
        try {
            $aResult = $this->oBookDonorService->createBookDonor(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function updateBookDonor($iId)
    {
        try {
            $aResult = $this->oBookDonorService->updateBookDonor($iId, request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}