<?php

namespace App\Services;
use App\Libraries\HttpRequestHandlerLibrary as HttpReq;

class UserLogService
{
    public function getUserLogs($aRequestParams)
    {
        return HttpReq::requestInternalApi('users/logs/get-by-date', 'get', $aRequestParams);
    }

    public function createLog($aCreateParams)
    {
        return HttpReq::requestInternalApi('users/logs/create', 'post', $aCreateParams);
    }
}