<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class UserLogApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'log_no'       => str_pad($this->log_no, 5, '0', STR_PAD_LEFT),
            'user_id'      => $this->user_id,
            'username'     => $this->user->username,
            'user_type'    => $this->user->user_type,
            'date_created' => Carbon::parse($this->date_created)->format('Y-m-d H:i:s'),
        ];
    }
}