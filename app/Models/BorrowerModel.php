<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BorrowerModel extends Model {

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    protected $table = "t_book_borrowers";
    protected $primaryKey = "borrower_id";
    protected $fillable = [
        "borrower_name",
        "borrower_designation"
    ];
    public $searchable = [
        "borrower_id",
        "borrower_name"
    ];
}