<?php

namespace App\Repositories;

use App\Models\BorrowLogRemarksModel;
use App\Resources\BorrowLogRemarksApiResource;

class BorrowLogRemarksRepository
{
    public $oModel;
    public $aFillable;
    public $aSearchable;

    public function __construct()
    {
        $this->oModel = new BorrowLogRemarksModel();
        $this->aFillable = $this->oModel->getFillable();
        $this->aSearchable = $this->oModel->searchable;
    }

    public function getBorrowLogRemarkss($aParams)
    {
        return BorrowLogRemarksApiResource::collection($this->oModel::where($aParams)->get());
    }

    public function createBorrowLogRemarks($aParams)
    {
        $this->oModel::insert($aParams);
        return BorrowLogRemarksApiResource::collection([ $this->oModel::latest()->first() ]);
    }

    public function updateBorrowLogRemarks($iId, $aParams)
    {
        return $this->oModel::where(['blr_id' => $iId])->update($aParams);
    }
}