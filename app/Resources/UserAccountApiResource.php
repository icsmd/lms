<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserAccountApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'temp_id'       => str_pad($this->user_id, 5, '0', STR_PAD_LEFT),
            'user_id'       => $this->user_id,
            'employee_id'   => $this->employee_id,
            'firstname'     => $this->firstname,
            'lastname'      => $this->lastname,
            'username'      => $this->username,
            'user_type'     => $this->user_type,
            'status'        => $this->status,
            'first_login'   => $this->first_login,
            'login_attempt' => $this->login_attempt,
            'date_created'  => $this->date_created,
            'date_modified' => $this->date_modified,
        ];
    }
}