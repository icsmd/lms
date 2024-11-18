<?php

namespace App\Http\Validators\api;

/**
 * Class   : UserAuthValidator
 * Author  : C.O.B
 * Dated   : 10/08/24
 * Version : 1.0
 */
class UserAuthValidator
{
    /**
     * Validates the authentication fields
     * Rules: (Varies depending on the field)
     * @param $request
     */
    public static function validate($request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
    }
}