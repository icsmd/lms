<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Validators\api\UserAuthValidator;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Repositories\UserAccountRepository;

class UserAccountApiController extends Controller
{
    private $oUserAccountRepository;
    const SEARCHABLE_FIELDS = [
        "user_id",
        "employee_id"
    ];

    const SUCCESS_RETRIEVE_MSG = "Successfully retrieved user accounts";

    public function __construct()
    {
        $this->oUserAccountRepository = new UserAccountRepository();
    }
    public function getAllUserAccount()
    {
        try {
            $aWhereParams = request()->only(self::SEARCHABLE_FIELDS);
            $aResult = $this->oUserAccountRepository->getAllUserAccount($aWhereParams);
            return Response::formatSuccessResponse(self::SUCCESS_RETRIEVE_MSG, $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }


    public function createUserAccount()
    {
        try {
            $aWhereParams = request()->all();
            $aResult = $this->oUserAccountRepository->createUserAccount($aWhereParams);
            return Response::formatSuccessResponse('Successfully created a user account', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function getUserAccount($sUsername)
    {
        try {
            $aResult = $this->oUserAccountRepository->getUserAccount($sUsername);
            return Response::formatSuccessResponse(self::SUCCESS_RETRIEVE_MSG, $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function getUserPassword($sUserName)
    {
        try {
            $aResult = $this->oUserAccountRepository->getUserPassword($sUserName);
            return Response::formatSuccessResponse(self::SUCCESS_RETRIEVE_MSG, $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function updateUserAccount($iId)
    {
        try {
            $aRequestParams = request()->all();
            $aResult = $this->oUserAccountRepository->updateUserAccount($iId, $aRequestParams);
            return Response::formatSuccessResponse('Successfully updated the user account', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    } 

    /**
     * Authenticates user 
     * - Issues access token
     * @return \Illuminate\Http\JsonResponse
     */
    public function authUserAccount()
    {
        try {
            UserAuthValidator::validate(request());
            $sUsername = request()->input('username');
            $sEPassword = request()->input('password');
            $aResult = $this->oUserAccountRepository->authUserAccount($sUsername, $sEPassword);
           
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function revokeUserAccess($iTokenId)
    {
        try {
            $this->oUserAccountRepository->revokeUserAccess($iTokenId);
           
            return Response::formatSuccessResponse('Successfully revoked the user access', null);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}
