<?php

namespace App\Libraries;


use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Mail;


/**
 * Class: MailSendingLibrary
 * Namespace: App\Libraries
 * Author: Cristian Balatbat
 * Created: 01/16/2024
 * Version: 1.0
 */
class MailSendingLibrary
{
    const DEVMAIL = 'icsmd.dev@gmail.com';

    public static function sendMail($sMessageBody)
    {
        try {
            $bSendingEnabled = config('mail.alert_sending', false);
            if ($bSendingEnabled === true) {
                Mail::raw($sMessageBody, function (Message $oMessage) {
                    $oMessage
                    ->subject('[scms-pampam.tech] SYSTEM MAIL ALERT')
                    ->to(self::DEVMAIL)
                    ->from('no-reply-official@pampam.tech');
                });
                return 'Email successfully sent';
            } else {
                return 'Email sending disabled';
            }
        } catch (\Throwable $oException) {
            return HttpResponseHandlerLibrary::formatErrorResponse($oException);
        }
    }
}