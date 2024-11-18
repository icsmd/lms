<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class BorrowLogRemarksApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'temp_id'    => str_pad($this->blr_id, 5, '0', STR_PAD_LEFT),
            'blr_id'     => $this->blr_id,
            'bl_id'      => $this->bl_id,
            'user_id'    => $this->user_id,
            'username'   => $this->user->username,
            'bl_remarks' => $this->bl_remarks,
            'created_at' => $this->created_at,
            'deleted_at' => $this->deleted_at
        ];
    }
}