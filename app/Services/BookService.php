<?php

namespace App\Services;
use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\UtilitiesLibrary as Util;

class BookService
{
    public function getBooks($aRequestParams)
    {
        return HttpReq::requestInternalApi('books/get', 'get', $aRequestParams);
    }

    public function createBook($aCreateParams)
    {
        return HttpReq::requestInternalApi('books/create', 'post', Util::transformAllToUppercase($aCreateParams));
    }

    public function updateBook($iId, $aUpdateParams)
    {
        return HttpReq::requestInternalApi("books/update/{$iId}", 'patch', Util::transformAllToUppercase($aUpdateParams));
    }
}