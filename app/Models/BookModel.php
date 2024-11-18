<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookModel extends Model {

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    protected $table = "t_books";
    protected $primaryKey = "book_id";
    protected $fillable = [
        "title",
        "author",
        "publication_year",
        "publisher",
        "edition",
        "donor_id",
        "qr_code",
        "status"
    ];
    public $searchable = [
        "book_id",
        "author",
        "publication_year",
        "publisher",
        "status",
        "created_at"
    ];
    public function donor()
    {
        return $this->belongsTo(BookDonorModel::class, 'donor_id', 'donor_id');
    }
}