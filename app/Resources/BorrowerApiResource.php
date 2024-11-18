<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class BorrowerApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'temp_id'              => str_pad($this->borrower_id, 5, '0', STR_PAD_LEFT),
            'borrower_id'          => $this->borrower_id,
            'borrower_name'        => $this->borrower_name,
            'borrower_designation' => $this->borrower_designation,
            'created_at'           => $this->created_at,
            'updated_at'           => $this->updated_at
        ];
    }
}