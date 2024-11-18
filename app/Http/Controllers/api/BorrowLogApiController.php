<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Repositories\BorrowLogRepository;

class BorrowLogApiController extends Controller
{
    
    private $oBorrowLogRepository;
    public function __construct()
    {
        $this->oBorrowLogRepository = new BorrowLogRepository();
    }
    public function getBorrowLogs()
    {
        try {
            $aWhereParams = request()->only($this->oBorrowLogRepository->aSearchable);
            $aResult = $this->oBorrowLogRepository->getBorrowLogs($aWhereParams);
            return Response::formatSuccessResponse("Successfully retrieved borrow log(s)", $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBorrowLog()
    {
        try {
            $aRequestParams = request()->only($this->oBorrowLogRepository->aFillable);
            $aResult = $this->oBorrowLogRepository->createBorrowLog($aRequestParams);
            return Response::formatSuccessResponse('Successfully created a borrow log', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }  

    public function updateBorrowLog($iId)
    {
        try {
            $aRequestParams = request()->all();
            $aResult = $this->oBorrowLogRepository->updateBorrowLog($iId, $aRequestParams);
            return Response::formatSuccessResponse('Successfully updated the borrow log details', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    } 
}
