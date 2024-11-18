<?php

namespace App\Repositories;

use App\Models\BorrowLogModel;
use App\Resources\BorrowLogApiResource;

class BorrowLogRepository
{
    public $oModel;
    public $aFillable;
    public $aSearchable;

    public function __construct()
    {
        $this->oModel = new BorrowLogModel();
        $this->aFillable = $this->oModel->getFillable();
        $this->aSearchable = $this->oModel->searchable;
    }

    public function getBorrowLogs($aParams)
    {
        return BorrowLogApiResource::collection($this->oModel::where($aParams)->get());
    }

    public function createBorrowLog($aParams)
    {
        $this->oModel::insert($aParams);
        return BorrowLogApiResource::collection([ $this->oModel::latest()->first() ]);
    }

    public function updateBorrowLog($iId, $aParams)
    {
        return $this->oModel::where(['bl_id' => $iId])->update($aParams);
    }
}