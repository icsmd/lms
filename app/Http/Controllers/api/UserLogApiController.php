<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Repositories\UserLogRepository;

class UserLogApiController extends Controller
{
    
    private $oUserLogRepository;
    public function __construct()
    {
        $this->oUserLogRepository = new UserLogRepository();
    }
    public function getAllUserLog()
    {
        try {
            $aWhereParams = request()->only($this->oUserLogRepository->aSearchable);
            $aResult = $this->oUserLogRepository->getAllUserLog($aWhereParams);
            return Response::formatSuccessResponse("Successfully retrieved the user log(s)", $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function getUserLogsByDate()
    {
        try {
            $sStartDate = request()->input('start_date', now()->format('Y-m-d'));
            $sEndDate = request()->input('end_date', now()->format('Y-m-d'));
            $aResult = $this->oUserLogRepository->getUserLogByDate($sStartDate, $sEndDate);
            return Response::formatSuccessResponse("Successfully retrieved the user log(s)", $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createUserLog()
    {
        try {
            $aRequestParams = request()->only($this->oUserLogRepository->aFillable);
            $aResult = $this->oUserLogRepository->createUserLog($aRequestParams);
            return Response::formatSuccessResponse('Successfully created a user log', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }  
}
