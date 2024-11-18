<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Repositories\BorrowLogRemarksRepository;

class BorrowLogRemarksApiController extends Controller
{
    
    private $oBorrowLogRemarksRepository;
    public function __construct()
    {
        $this->oBorrowLogRemarksRepository = new BorrowLogRemarksRepository();
    }
    public function getBorrowLogRemarks()
    {
        try {
            $aWhereParams = request()->only($this->oBorrowLogRemarksRepository->aSearchable);
            $aResult = $this->oBorrowLogRemarksRepository->getBorrowLogRemarkss($aWhereParams);
            return Response::formatSuccessResponse("Successfully retrieved borrow log remarks", $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBorrowLogRemarks()
    {
        try {
            $aRequestParams = request()->only($this->oBorrowLogRemarksRepository->aFillable);
            $aResult = $this->oBorrowLogRemarksRepository->createBorrowLogRemarks($aRequestParams);
            return Response::formatSuccessResponse('Successfully created a borrow log remarks', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }  

    public function updateBorrowLogRemarks($iId)
    {
        try {
            $aRequestParams = request()->all();
            $aResult = $this->oBorrowLogRemarksRepository->updateBorrowLogRemarks($iId, $aRequestParams);
            return Response::formatSuccessResponse('Successfully updated the borrow log remarks details', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    } 
}
