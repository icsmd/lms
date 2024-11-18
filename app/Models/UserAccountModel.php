<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;


use Illuminate\Database\Eloquent\Model;

class UserAccountModel extends Authenticatable {
    
    use HasApiTokens, Notifiable;
    
    protected $table = "t_user_account";

    protected $primaryKey = "user_id";

    protected $fillable = [
        "employee_id",
        "firstname",
        "lastname",
        "username",
        "user_type",
        "status",
        "first_login",
        "login_attempt",
        "date_modified"
    ];

    protected $encrypted_attributes = [
        "password"
    ];
}