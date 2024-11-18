<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLogModel extends Model {
    const CREATED_AT = 'created_at';
    protected $table = "t_user_log";

    protected $primaryKey = "log_no";

    protected $fillable = [
        "user_id",
        "created_at"
    ];

    public $searchable = [
        "user_id",
        "created_at"
    ];

    public function user()
    {
        return $this->belongsTo(UserAccountModel::class, 'user_id', 'user_id');
    }

}