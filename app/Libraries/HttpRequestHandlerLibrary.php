<?php

namespace App\Libraries;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Crypt;

class HttpRequestHandlerLibrary
{
    public static function requestInternalApi($sRequestUrl, $sMethod, $aParams = [])
    {
        try {
            $sInternalApiHost = config("app.api_url");
            $sApiVersion = config("app.api_version");
            $sCompleteUrl = "$sInternalApiHost/$sApiVersion/$sRequestUrl";
            $sToken = Crypt::decryptString(SessionHelperLibrary::getSession('u_session.actkn'));
            $oHttpExecute = config('app.env') === 'local' ? Http::withToken($sToken)->withoutVerifying()->$sMethod($sCompleteUrl, $aParams) 
                                                               : Http::withToken($sToken)->$sMethod($sCompleteUrl, $aParams);
            return $oHttpExecute->json();
        } catch (\Throwable $oException) {
            return $oException;
        }
    }

    public static function requestInternalTokenlessApi($sRequestUrl, $sMethod, $aParams = [])
    {
        try {
            $sInternalApiHost = config("app.api_url");
            $sApiVersion = config("app.api_version");
            $sCompleteUrl = "$sInternalApiHost/$sApiVersion/$sRequestUrl";
            $oHttpExecute = config('app.env') === 'local' ? Http::withoutVerifying()->$sMethod($sCompleteUrl, $aParams) : Http::$sMethod($sCompleteUrl, $aParams);
         
            return $oHttpExecute->json();
        } catch (\Throwable $oException) {
            return $oException;
        }
    }
}