<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookDonorModel extends Model {

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    protected $table = "t_book_donors";
    protected $primaryKey = "donor_id";
    protected $fillable = [
        "donor_name",
    ];
    public $searchable = [
        "donor_id",
        "donor_name"
    ];
}