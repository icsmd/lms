<?php

namespace App\Libraries;

class SessionHelperLibrary
{
    public static function getSession($sKey)
    {
        return session($sKey);
    }

    public static function getSessionValue($sKey, $sValue)
    {
        return session($sKey, $sValue);
    }

    public static function setSession($sKey, $mValue)
    {
        session([$sKey => $mValue]);
    }
}