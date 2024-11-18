<?php

namespace App\Services;
use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\UtilitiesLibrary as Util;

class BookDonorService
{
    public function getBookDonors($aRequestParams)
    {
        return HttpReq::requestInternalApi('donors/get', 'get', $aRequestParams);
    }

    public function createBookDonor($aCreateParams)
    {
        return HttpReq::requestInternalApi('donors/create', 'post', Util::transformAllToUppercase($aCreateParams));
    }

    public function updateBookDonor($iId, $aUpdateParams)
    {   
        return HttpReq::requestInternalApi("donors/update/{$iId}", 'patch', Util::transformAllToUppercase($aUpdateParams));
    }
}