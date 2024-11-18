<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\UtilitiesLibrary as Util;

class BorrowerService
{
    public function getBorrowers($aRequestParams)
    {
        return HttpReq::requestInternalApi('borrowers/get', 'get', $aRequestParams);
    }

    public function createBorrower($aCreateParams)
    {
        return HttpReq::requestInternalApi('borrowers/create', 'post', Util::transformAllToUppercase($aCreateParams));
    }

    public function updateBorrower($iId, $aUpdateParams)
    {
        return HttpReq::requestInternalApi("borrowers/update/{$iId}", 'patch', Util::transformAllToUppercase($aUpdateParams));
    }
}