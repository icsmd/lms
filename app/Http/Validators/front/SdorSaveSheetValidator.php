<?php

namespace App\Http\Validators\front;

/**
 * Class   : SdorSaveSheetValidator
 * Author  : C.O.B
 * Dated   : 04/18/24
 * Version : 1.0
 */
class SdorSaveSheetValidator
{
    /**
     * Validates the email field 
     * Rules: (Varies depending on the field)
     * @param $request
     */
    public static function validate($request)
    {
        $request->validate([
            'sheet_fund_type' => 'required|in:ps,mooe,sr',
            'transact_month'  => 'required_if:sheet_fund_type,ps|string|min:2|max:2',
            'transact_year'   => 'required_if:sheet_fund_type,ps|string|min:4|max:4',
            'month_year'      => 'required_if:sheet_fund_type,mooe,sr|string',
            'fs_id'           => 'required_if:sheet_fund_type,sr|int|exists:t_fund_source,fs_id',
            'remarks'         => 'nullable|string|max:1000',
        ]);
    }
}