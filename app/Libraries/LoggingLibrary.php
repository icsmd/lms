<?php

namespace App\Libraries;

use Illuminate\Support\Facades\Log;


/**
 * Class: LoggingLibrary
 * Namespace: App\Libraries
 * Author: Cristian Balatbat
 * Created: 01/16/2024
 * Version: 1.0
 */
class LoggingLibrary
{
    public static function execLog($iCode, $sMessage)
    {
        if ($iCode < 299) {
            $sLogType = 'INFO';
        } else if ($iCode > 299 && $iCode < 400) {
            $sLogType = 'NOTICE';
        } else {
            $sLogType = 'ERROR';
        }
        $sUrl = request()->getUri();
        Log::info("[$sLogType] Code: $iCode; Message: $sMessage; URL: $sUrl");
    }
}