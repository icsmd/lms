<?php

namespace App\Repositories;

use App\Models\BookDonorModel;
use App\Resources\BookDonorApiResource;

class BookDonorRepository
{
    public $oModel;
    public $aFillable;
    public $aSearchable;

    public function __construct()
    {
        $this->oModel = new BookDonorModel();
        $this->aFillable = $this->oModel->getFillable();
        $this->aSearchable = $this->oModel->searchable;
    }

    public function getBookDonors($aParams)
    {
        return BookDonorApiResource::collection($this->oModel::where($aParams)->get());
    }

    public function createBookDonor($aParams)
    {
        $this->oModel::insert($aParams);
        return BookDonorApiResource::collection([ $this->oModel::latest()->first() ]);
    }

    public function updateBookDonor($iId, $aParams)
    {
        return $this->oModel::where(['donor_id' => $iId])->update($aParams);
    }
}