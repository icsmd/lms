<?php

namespace App\Libraries;
use Illuminate\Http\Response;


/**
 * Class: HttpResponseHandlerLibrary
 * Namespace: App\Libraries
 * Author: Cristian Balatbat
 * Created: 01/16/2024
 * Version: 1.0
 */
class HttpResponseHandlerLibrary
{
    const CODE = "code";
    const MESSAGE = "message";
    const DATA = "data";

    /**
     * Formats success responses
     * 
     * @param string $sMessage
     * @param mixed  $mData
     * @param int    $iCode
     * return array
     */
    public static function formatSuccessResponse($sMessage, $mData, $iCode = Response::HTTP_OK)
    {
        LoggingLibrary::execLog($iCode, $sMessage);
        return response()->json([
            self::CODE    => $iCode,
            self::MESSAGE => $sMessage,
            self::DATA    => $mData,
        ])->setStatusCode($iCode);
    }

    /**
     * Formats error responses
     * 
     * @param \Throwable $oException
     * return array
     */
    public static function formatErrorResponse(\Throwable $oException)
    {
        $iErrCode = empty($oException->getCode()) ? Response::HTTP_INTERNAL_SERVER_ERROR : $oException->getCode();
        $sErrMessage = $oException->getMessage();
        LoggingLibrary::execLog($iErrCode, $sErrMessage);
        MailSendingLibrary::sendMail(self::generateMailAlertMessage($oException));

        return response()->json([
            self::CODE    => $iErrCode,
            self::MESSAGE => $sErrMessage,
            self::DATA    => null,
        ])->setStatusCode(500);
    }


    /**
     * Generate Mail Alert Message
     * 
     * @param \Throwable $oException 
     * return string
     */
    private static function generateMailAlertMessage($oException)
    {
        $iErrCode = empty($oException->getCode()) ? Response::HTTP_INTERNAL_SERVER_ERROR : $oException->getCode();
        $sErrMessage = $oException->getMessage();
        $sErrTraceStack = $oException->getTraceAsString();
        $sMessage = "Error: $sErrMessage \nCode: $iErrCode \nTrace Stack: $sErrTraceStack";

        return $sMessage;
    }
}


