<?php

namespace App\Http\Controllers\front;


use App\Http\Controllers\Controller;
use App\Services\BookService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Libraries\SessionHelperLibrary as Session;

class BookFrontController extends Controller
{
    private $oBookService;

    public function __construct()
    {
        $this->oBookService = new BookService();
    }

    public function getBooks()
    {
        try {
            $aResult = $this->oBookService->getBooks(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBook()
    {
        try {
            $aResult = $this->oBookService->createBook(request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function updateBook($iId)
    {
        try {
            $aResult = $this->oBookService->updateBook($iId, request()->all());
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }
}