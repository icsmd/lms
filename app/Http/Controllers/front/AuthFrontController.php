<?php

namespace App\Http\Controllers\front;


use App\Http\Controllers\Controller;
use App\Services\AuthService;
use App\Libraries\HttpResponseHandlerLibrary as Response;
use App\Libraries\SessionHelperLibrary as Session;

class AuthFrontController extends Controller
{
    private $oAuthService;

    public function __construct()
    {
        $this->oAuthService = new AuthService();
    }

    public function checkSession()
    {
        $aSession = Session::getSession('u_session');
        if ($aSession === null) {
            return view('main');
        } else {
            $iFirstLogin = data_get($aSession, 'first_login', 1);
            if ($iFirstLogin == 1) {
                return redirect("/front/change-password");
            } else {
                $sSessionType = $aSession['user_type'];
                return redirect("/front/$sSessionType/bkmgt");
            }
        }
    }

    public function getUserSession()
    {
        try {
            $aSession = Session::getSession('u_session');
            return Response::formatSuccessResponse('Successfully retrieved the session', [
                'firstname'   => $aSession['firstname'],
                'lastname'    => $aSession['lastname'],
                'status'      => $aSession['status'],
                'first_login' => $aSession['first_login'],
                'type'        => $aSession['user_type'],
            ]);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function login()
    {
        try {
            $sUsername = base64_decode(request()->input('username'));
            $sPassword = base64_decode(request()->input('password'));

            $aResult = $this->oAuthService->authenticateUser($sUsername, $sPassword);
           
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function changePassword()
    {
        try {
            $aPayload = json_decode(base64_decode(request()->input('payload')));
            $sCurrPass = base64_decode(data_get($aPayload, 'currpass', ''));
            $sNewPass = base64_decode(data_get($aPayload, 'newpass', ''));
            $sConfPass = base64_decode(data_get($aPayload, 'confpass', ''));
        
            $aResult = $this->oAuthService->changePassword($sCurrPass, $sNewPass, $sConfPass);
            return Response::formatSuccessResponse($aResult['message'], $aResult['data'], $aResult['code']);
        } catch (\Throwable $oException) {
            return Response::formatErrorResponse($oException);
        }
    }

    public function logout()
    {
        session()->flush();
        return redirect('/');
    }
}