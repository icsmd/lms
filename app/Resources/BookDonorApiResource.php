<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class BookDonorApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'temp_id'    => str_pad($this->donor_id, 5, '0', STR_PAD_LEFT),
            'donor_id'   => $this->donor_id,
            'donor_name' => $this->donor_name,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}