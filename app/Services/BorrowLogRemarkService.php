<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\UtilitiesLibrary as Util;

class BorrowLogRemarkService
{
    public function getBorrowLogRemarks($aRequestParams)
    {
        return HttpReq::requestInternalApi('remarks/get', 'get', $aRequestParams);
    }

    public function createBorrowLogRemarks($aCreateParams)
    {
        return HttpReq::requestInternalApi('remarks/create', 'post', $aCreateParams);
    }

    public function updateBorrowLogRemarks($iId, $aUpdateParams)
    {
        return HttpReq::requestInternalApi("remarks/update/{$iId}", 'patch', $aUpdateParams);
    }
}