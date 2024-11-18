<?php

namespace App\Http\Validators\front;

/**
 * Class   : SdorUpdatePayeeValidator
 * Author  : C.O.B
 * Dated   : 04/18/24
 * Version : 1.0
 */
class SdorUpdatePayeeValidator
{
    /**
     * Validates the email field 
     * Rules: (Varies depending on the field)
     * @param $request
     */
    public static function validate($request)
    {
        $request->validate([
            'payee_name'    => 'string|max:500',
            'payee_tin'     => 'string|nullable|max:50',
            'payee_address' => 'string|nullable|max:500',
        ]);
    }
}