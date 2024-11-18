<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BorrowLogModel extends Model {

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    protected $table = "t_borrow_logs";
    protected $primaryKey = "bl_id";
    protected $fillable = [
        "book_id",
        "borrower_id",
        "date_borrowed",
        "date_due",
        "date_returned"
    ];
    public $searchable = [
        "bl_id",
        "book_id",
        "borrower_id",
        "date_borrowed"
    ];

    public function book()
    {
        return $this->belongsTo(BookModel::class, 'book_id', 'book_id');
    }

    public function borrower()
    {
        return $this->belongsTo(BorrowerModel::class, 'borrower_id', 'borrower_id');
    }

    public function remarks()
    {
        return $this->hasMany(BorrowLogRemarksModel::class, 'bl_id', 'bl_id');
    }
}