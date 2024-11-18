<?php

namespace App\Libraries;

/**
 * Class: UtilitiesLibrary
 * Namespace: App\Libraries
 * Author: Cristian Balatbat
 * Created: 11/11/2024
 * Version: 1.0
 */
class UtilitiesLibrary
{
    /**
     * Transforms all array values to uppercase
     * @param mixed $aParameters
     * @return array|null
     */
    public static function transformAllToUppercase($aParameters)
    {
        $aParameters = array_flip($aParameters);
        $aParameters = array_change_key_case($aParameters, CASE_UPPER);
        return array_flip($aParameters);
    }
}