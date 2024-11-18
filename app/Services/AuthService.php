<?php

namespace App\Services;

use App\Libraries\HttpRequestHandlerLibrary as HttpReq;
use App\Libraries\AppConstantsLibrary as Constants;
use App\Libraries\SessionHelperLibrary as Session;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\HttpFoundation\Response;

class AuthService
{
    const LOGIN_ATTEMPT_LIMIT = 3;

    public function authenticateUser($sUsername, $sPassword)
    {
        $sRetrievedPassword = data_get(HttpReq::requestInternalTokenlessApi("users/get/password/$sUsername", 'get'), 'data.password', null);
        if (empty($sRetrievedPassword) === true) {
            return self::generateAuthResponse(Response::HTTP_UNAUTHORIZED, 'Wrong Credentials. Please Try Again.');
        }
        $oUserAccountService = new UserAccountService();
        $sDecryptedPassword = Crypt::decryptString($sRetrievedPassword);
        $aUserData = data_get(HttpReq::requestInternalTokenlessApi("users/get/$sUsername", 'get'), 'data.0');
       
        $iUserId = data_get($aUserData, 'user_id');
        $iLoginAttempt = data_get($aUserData, 'login_attempt');
        
        if ($sPassword === $sDecryptedPassword) {
            if ($aUserData['status'] !== 'active') {
                return self::generateAuthResponse(Response::HTTP_UNAUTHORIZED, 'The account has been deactivated. Contact your administrator for concerns.');
            } else {
                // Retrieve access token
                $aToken = $oUserAccountService->authUserAccount($sUsername, $sPassword);
                $sEncryptedToken = Crypt::encryptString($aToken['data']['token']);
                $aUserData['token_id'] = $aToken['data']['token_id'];
                $aUserData['token'] = $sEncryptedToken;
                $this->setUserSession($aUserData);
               
                
                $sUserId = $aUserData['user_id'];
                $sUserType = $aUserData['user_type'];
                $sUrl = $aUserData['first_login'] === 1 ? '/front/change-password' : sprintf('/front/%s/bkmgt', $sUserType);
                $oUserAccountService->updateUserAccount($iUserId, [ 'login_attempt' => 0 ]);
                $this->saveUserLog($sUserId);
                
                return self::generateAuthResponse(Response::HTTP_OK, 'Successfully authenticated', $sUrl, $sUserType);
            }
        } else {   
            if ($iLoginAttempt >= self::LOGIN_ATTEMPT_LIMIT) {
                if (data_get($aUserData, 'user_id') === 'active') {
                    $oUserAccountService->updateUserAccount($iUserId, [ 'status' => 'deactivated' ]);
                }
                return self::generateAuthResponse(Response::HTTP_UNAUTHORIZED, 'Account has been locked. Please contact your administrator for password reset.');
            } else {
                $iAddAttempt = $iLoginAttempt + 1;
                $iRemainingAttempt = self::LOGIN_ATTEMPT_LIMIT - $iAddAttempt;
                $oUserAccountService->updateUserAccount($iUserId, [ 'login_attempt' => $iAddAttempt ]);
                return self::generateAuthResponse(Response::HTTP_UNAUTHORIZED, "Wrong Credentials. Please Try Again. Remaining attempts: $iRemainingAttempt");
            }
        }
    }

    private static function generateAuthResponse($iCode, $sMessage, $sRedirectUrl = '', $sUserType = '')
    {
        return [
            Constants::CODE    => $iCode,
            Constants::DATA    => [
                'href' => $sRedirectUrl,
                'amho' => $sUserType,
            ],
            Constants::MESSAGE => $sMessage,
        ];
    }

    private function setUserSession($aUserData)
    {
        Session::setSession('u_session', [
            "user_id"     => $aUserData['user_id'],
            "firstname"   => $aUserData['firstname'],
            "lastname"    => $aUserData['lastname'],
            "username"    => $aUserData['username'],
            "user_type"   => $aUserData['user_type'],
            "status"      => $aUserData['status'],
            "first_login" => $aUserData['first_login'],
            "actkn"       => $aUserData['token']
        ]);
    }

    private function saveUserLog($iUserId)
    {
        $oUserLogService = new UserLogService();
        return $oUserLogService->createLog([
            'user_id' => $iUserId,
        ]);
    }

    public function changePassword($sCurrPass, $sNewPass, $sConfPass)
    {
        $iUserId = Session::getSession('u_session.user_id');
        $sUsername = Session::getSession('u_session.username');
        $sRetrievedPassword = data_get(HttpReq::requestInternalApi("users/get/password/$sUsername", 'get'), 'data.password', null);
        $sDecryptedPassword = Crypt::decryptString($sRetrievedPassword);
        if ($sCurrPass === $sDecryptedPassword) {
            if ($sCurrPass === $sNewPass) {
                return [
                    Constants::CODE    => Response::HTTP_BAD_REQUEST,
                    Constants::DATA    => false,
                    Constants::MESSAGE => "Your new password must not be the same with your current password!",
                ];
            } else if ($sNewPass === $sConfPass) {
                $oUserAccountService = new UserAccountService();
                $oUserAccountService->updateUserAccount($iUserId, [ 'password' => $sNewPass, 'first_login' => 0 ]);
                
                return [
                    Constants::CODE    => Response::HTTP_CREATED,
                    Constants::DATA    => true,
                    Constants::MESSAGE => 'Successfully changed the password!',
                ];
            } else {
                return [
                    Constants::CODE    => Response::HTTP_BAD_REQUEST,
                    Constants::DATA    => false,
                    Constants::MESSAGE => "New password doesn't match!",
                ];
            }
        } else {
            return [
                Constants::CODE    => Response::HTTP_BAD_REQUEST,
                Constants::DATA    => false,
                Constants::MESSAGE => "Current password doesn't match!",
            ];
        }
    }
}