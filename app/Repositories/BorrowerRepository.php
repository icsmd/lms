<?php

namespace App\Repositories;

use App\Models\BorrowerModel;
use App\Resources\BorrowerApiResource;

class BorrowerRepository
{
    public $oModel;
    public $aFillable;
    public $aSearchable;

    public function __construct()
    {
        $this->oModel = new BorrowerModel();
        $this->aFillable = $this->oModel->getFillable();
        $this->aSearchable = $this->oModel->searchable;
    }

    public function getBorrowers($aParams)
    {
        return BorrowerApiResource::collection($this->oModel::where($aParams)->get());
    }

    public function createBorrower($aParams)
    {
        $this->oModel::insert($aParams);
        return BorrowerApiResource::collection([ $this->oModel::latest()->first() ]);
    }

    public function updateBorrower($iId, $aParams)
    {
        return $this->oModel::where(['borrower_id' => $iId])->update($aParams);
    }
}