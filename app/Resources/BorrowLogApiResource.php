<?php

namespace App\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use DateTime;

class BorrowLogApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $date1 = empty($this->date_returned) ? new DateTime(now()) : new DateTime($this->date_returned);
        $date2 = new DateTime($this->date_borrowed);
        return [
            'temp_id'       => str_pad($this->bl_id, 5, '0', STR_PAD_LEFT),
            'bl_id'         => $this->bl_id,
            'book_id'       => $this->book_id,
            'title'         => $this->book->title,
            'borrower_id'   => $this->borrower_id,
            'borrower_name' => $this->borrower->borrower_name,
            'date_borrowed' => $this->date_borrowed,
            'date_due'      => $this->date_due,
            'date_returned' => $this->date_returned,
            'days_borrowed' => $date1->diff($date2)->format("%d"),
            'remarks'       => BorrowLogRemarksApiResource::collection($this->remarks),
            'created_at'    => $this->created_at,
            'updated_at'    =>$this->updated_at
        ];
    }
}