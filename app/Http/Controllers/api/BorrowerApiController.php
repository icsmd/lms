<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Repositories\BorrowerRepository;

class BorrowerApiController extends Controller
{
    
    private $oBorrowerRepository;
    public function __construct()
    {
        $this->oBorrowerRepository = new BorrowerRepository();
    }
    public function getBorrowers()
    {
        try {
            $aWhereParams = request()->only($this->oBorrowerRepository->aSearchable);
            $aResult = $this->oBorrowerRepository->getBorrowers($aWhereParams);
            return Response::formatSuccessResponse("Successfully retrieved borrower(s)", $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBorrower()
    {
        try {
            $aRequestParams = request()->only($this->oBorrowerRepository->aFillable);
            $aResult = $this->oBorrowerRepository->createBorrower($aRequestParams);
            return Response::formatSuccessResponse('Successfully created a borrower', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }  

    public function updateBorrower($iId)
    {
        try {
            $aRequestParams = request()->all();
            $aResult = $this->oBorrowerRepository->updateBorrower($iId, $aRequestParams);
            return Response::formatSuccessResponse('Successfully updated the borrower details', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    } 
}
