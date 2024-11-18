<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\SessionHelperLibrary as Session;

class BorrowLogService
{
    public function getBorrowLogs($aRequestParams)
    {
        return HttpReq::requestInternalApi('borrow-log/get', 'get', $aRequestParams);
    }

    public function createBorrowLog($aCreateParams)
    {
        $oBookService = new BookService();
        $oBookService->updateBook($aCreateParams['book_id'], ['status' => 'ISSUED']);
        return HttpReq::requestInternalApi('borrow-log/create', 'post', $aCreateParams);
    }

    public function updateBorrowLog($iId, $aUpdateParams)
    {
        if (array_key_exists('bl_remarks', $aUpdateParams)) {
            $oBLRemarksService = new BorrowLogRemarkService();
            $oBLRemarksService->createBorrowLogRemarks([
                'bl_remarks' => $aUpdateParams['bl_remarks'],
                'bl_id'      => $iId,
                'user_id'    => Session::getSession('u_session.user_id')
            ]);
            unset($aUpdateParams['bl_remarks']);
        }
        if (array_key_exists('date_returned', $aUpdateParams)) {
            $oBookService = new BookService();
            $oBookService->updateBook($aUpdateParams['book_id'], ['status' => 'AVAILABLE']);
        }
        return HttpReq::requestInternalApi("borrow-log/update/{$iId}", 'patch', $aUpdateParams);
    }
}