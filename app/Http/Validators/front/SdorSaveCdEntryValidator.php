<?php

namespace App\Http\Validators\front;

/**
 * Class   : SdorSaveCdEntryValidator
 * Author  : C.O.B
 * Dated   : 04/18/24
 * Version : 1.0
 */
class SdorSaveCdEntryValidator
{
    /**
     * Validates the email field 
     * Rules: (Varies depending on the field)
     * @param $request
     */
    public static function validate($request)
    {
        $aRules = [
            'fund_type'      => 'required|in:ps,mooe,sr',
            'fs_id'          => 'required|int|exists:t_fund_source,fs_id',
            'transact_date'  => 'required|date',
            'uacs_id'        => 'required|int|exists:r_uacs,uacs_id',
            'nature_payment' => 'required|string|max:500',
            'net_amount'     => 'required|numeric',
            'gross_amount'   => 'required|numeric',
            'or_number'      => 'required_if:fund_type,mooe,sr|string|max:20',
            'tcl_id'         => 'required_if:fund_type,mooe,sr|int|exists:r_tax_class,tcl_id',
            'tax_amount'     => 'required_if:fund_type,mooe,sr|numeric',
        ];
        if ($request->input('fund_type') !== 'ps') {
            $aRules = array_merge($aRules, [
                'payee_id'   => 'required_without:payee_name|int|exists:t_payee,payee_id',
                'payee_name' => 'required_without:payee_id|string|max:500',
            ]);
        }

        $request->validate($aRules);
    }
}