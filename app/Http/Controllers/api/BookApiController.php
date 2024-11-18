<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Repositories\BookRepository;

class BookApiController extends Controller
{
    
    private $oBookRepository;
    public function __construct()
    {
        $this->oBookRepository = new BookRepository();
    }
    public function getBooks()
    {
        try {
            $aWhereParams = request()->only($this->oBookRepository->aSearchable);
            $aResult = $this->oBookRepository->getBooks($aWhereParams);
            return Response::formatSuccessResponse("Successfully retrieved book(s)", $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBook()
    {
        try {
            $aRequestParams = request()->only($this->oBookRepository->aFillable);
            $aResult = $this->oBookRepository->createBook($aRequestParams);
            return Response::formatSuccessResponse('Successfully created a book', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }  

    public function updateBook($iId)
    {
        try {
            $aRequestParams = request()->all();
            $aResult = $this->oBookRepository->updateBook($iId, $aRequestParams);
            return Response::formatSuccessResponse('Successfully updated the book details', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    } 
}
