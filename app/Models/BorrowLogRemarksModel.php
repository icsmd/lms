<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BorrowLogRemarksModel extends Model {

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
    protected $table = "t_bl_remarks";
    protected $primaryKey = "blr_id";
    protected $fillable = [
        "bl_id",
        "bl_remarks",
        "user_id"
    ];
    public $searchable = [
        "bl_id",
        "user_id",
    ];

    public function borrowLog()
    {
        return $this->belongsTo(BorrowLogModel::class, 'bl_id', 'bl_id');
    }

    public function user()
    {
        return $this->belongsTo(UserAccountModel::class, 'user_id', 'user_id');
    }
}