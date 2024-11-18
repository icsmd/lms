<?php

namespace App\Repositories;

use App\Models\UserLogModel;
use App\Resources\UserLogApiResource;

class UserLogRepository
{
    public $oModel;
    public $aFillable;
    public $aSearchable;

    public function __construct()
    {
        $this->oModel = new UserLogModel();
        $this->aFillable = $this->oModel->getFillable();
        $this->aSearchable = $this->oModel->searchable;
    }

    public function getAllUserLog($aParams)
    {
        return UserLogApiResource::collection($this->oModel::where($aParams)->get());
    }

    public function getUserLogByDate($sStartDate, $sEndDate)
    {
        return UserLogApiResource::collection($this->oModel::whereDate('date_created', '>=', $sStartDate)
            ->whereDate('date_created', '<=', $sEndDate)->get());
    }

    public function createUserLog($aParams)
    {
        $this->oModel::insert($aParams);
        return UserLogApiResource::collection([ $this->oModel::latest()->first() ]);
    }
}