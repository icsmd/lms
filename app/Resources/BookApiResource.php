<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class BookApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'temp_id'          => str_pad($this->book_id, 5, '0', STR_PAD_LEFT),
            'book_id'          => $this->book_id,
            'title'            => $this->title,
            'author'           => $this->author,
            'publisher'        => $this->publisher,
            'publication_year' => $this->publication_year,
            'edition'          => $this->edition,
            'donor_id'         => $this->donor_id,
            'donor_name'       => $this->donor->donor_name,
            'status'           => $this->status,
            'qr_code'          => $this->qr_code,
            'created_at'       => $this->created_at,
            'updated_at'       => $this->updated_at,
        ];
    }
}