<?php

namespace App\Repositories;

use App\Models\BookModel;
use App\Resources\BookApiResource;

class BookRepository
{
    public $oModel;
    public $aFillable;
    public $aSearchable;

    public function __construct()
    {
        $this->oModel = new BookModel();
        $this->aFillable = $this->oModel->getFillable();
        $this->aSearchable = $this->oModel->searchable;
    }

    public function getBooks($aParams)
    {
        return BookApiResource::collection($this->oModel::where($aParams)->get());
    }

    public function createBook($aParams)
    {
        $this->oModel::insert($aParams);
        return BookApiResource::collection([ $this->oModel::latest()->first() ]);
    }

    public function updateBook($iId, $aParams)
    {
        return $this->oModel::where(['book_id' => $iId])->update($aParams);
    }
}