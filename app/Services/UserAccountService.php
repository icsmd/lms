<?php

namespace App\Services;
use App\Libraries\HttpRequestHandlerLibrary as HttpReq;

class UserAccountService
{
    public function getUserAccountList($aRequestParams)
    {
        return HttpReq::requestInternalTokenlessApi('users/get-all', 'get', $aRequestParams);
    }

    /**
     * No Token
     * @param mixed $aCreateParams
     * @return mixed
     */
    public function createUserAccount($aCreateParams)
    {
        return HttpReq::requestInternalTokenlessApi('users/create', 'post', $aCreateParams);
    }

    /**
     * No Token
     * @param mixed $iId
     * @param mixed $aUpdateParams
     * @return mixed
     */
    public function updateUserAccount($iId, $aUpdateParams)
    {   
        return HttpReq::requestInternalTokenlessApi("users/update/$iId", 'patch', $aUpdateParams);
    }

    /**
     * No Token
     * @param mixed $sUsername
     * @param mixed $sPassword
     * @return mixed
     */
    public function authUserAccount($sUsername, $sPassword)
    {
        return HttpReq::requestInternalTokenlessApi('auth-user', 'post', [
            'username' => $sUsername,
            'password' => $sPassword
        ]);
    }
}