<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Repositories\BookDonorRepository;

class BookDonorApiController extends Controller
{
    
    private $oBookDonorRepository;
    public function __construct()
    {
        $this->oBookDonorRepository = new BookDonorRepository();
    }
    public function getBookDonors()
    {
        try {
            $aWhereParams = request()->only($this->oBookDonorRepository->aSearchable);
            $aResult = $this->oBookDonorRepository->getBookDonors($aWhereParams);
            return Response::formatSuccessResponse("Successfully retrieved book donor(s)", $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function createBookDonor()
    {
        try {
            $aRequestParams = request()->only($this->oBookDonorRepository->aFillable);
            $aResult = $this->oBookDonorRepository->createBookDonor($aRequestParams);
            return Response::formatSuccessResponse('Successfully created a book donor', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }  

    public function updateBookDonor($iId)
    {
        try {
            $aRequestParams = request()->all();
            $aResult = $this->oBookDonorRepository->updateBookDonor($iId, $aRequestParams);
            return Response::formatSuccessResponse('Successfully updated the book donor details', $aResult);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    } 
}
