<?php

namespace App\Http\Validators\front;

/**
 * Class   : SdorUpdateCdEntryValidator
 * Author  : C.O.B
 * Dated   : 04/18/24
 * Version : 1.0
 */
class SdorUpdateCdEntryValidator
{
    /**
     * Validates the email field 
     * Rules: (Varies depending on the field)
     * @param $request
     */
    public static function validate($request)
    {
        $request->validate([
            'fund_type'      => 'in:ps,mooe,sr',
            'fs_id'          => 'int|exists:t_fund_source,fs_id',
            'transact_date'  => 'date',
            'uacs_id'        => 'int|exists:r_uacs,uacs_id',
            'nature_payment' => 'string|max:500',
            'net_amount'     => 'numeric',
            'gross_amount'   => 'numeric',
            'or_number'      => 'string|max:20',
            'tcl_id'         => 'int|exists:r_tax_class,tcl_id',
            'tax_amount'     => 'numeric',
            'payee_id'       => 'int|exists:t_payee,payee_id',
            'payee_name'     => 'string|max:500',
            'remarks'        => 'string|max:'
        ]);
    }
}