<?php

namespace App\Repositories;

use App\Models\UserAccountModel;
use App\Resources\UserAccountApiResource;
use Illuminate\Support\Facades\Crypt;
use Symfony\Component\HttpFoundation\Response;

class UserAccountRepository
{
    public $oModel; 

    public function __construct()
    {
        $this->oModel = new UserAccountModel();
    }

    public function authUserAccount($sUsername, $sPassword)
    {
        $sMessage = 'Wrong credentials, Please try again.';
        $mData = null;
        $iCode = Response::HTTP_UNAUTHORIZED;
        $oUser = $this->oModel::where(['username' => $sUsername])->first();
        if ($oUser !== null) {
            $aData = $oUser->toArray();
            $sDecryptedPassword = Crypt::decryptString(data_get($aData, 'password'));
            if ($sPassword === $sDecryptedPassword) {
                $aToken = explode('|', $oUser->createToken('API Token', ['*'], now()->addHours(3))->plainTextToken);
                $sMessage = 'Successfully authenticated';
                $mData = [
                    'token_id' => $aToken[0],
                    'token'    => $aToken[1]
                ];
                $iCode = Response::HTTP_OK;
            }
        } 

        return [
            'message' => $sMessage,
            'data'    => $mData,
            'code'    => $iCode
        ];
    }

    public function getAllUserAccount($aWhereParams)
    {
        return UserAccountApiResource::collection($this->oModel::where($aWhereParams)->get());
    }

    public function getUserAccount($iId)
    {
        return UserAccountApiResource::collection($this->oModel::where(['username' => $iId])->get());
    }

    public function getUserPassword($sUserName)
    {
        $aResult = $this->oModel::where(['username' => $sUserName])->get();
        return ['password' => data_get($aResult, '0.password', [])];
    }

    public function createUserAccount($aParams)
    {
        $aParams['password'] = Crypt::encryptString($aParams['password']);
        return $this->oModel::insert($aParams);
    }

    public function updateUserAccount($iId, $aParams)
    {
        if(!empty($aParams['password'])) {
            $aParams['password'] = Crypt::encryptString($aParams['password']);
        } else {
            unset($aParams['password']);
        }
        return $this->oModel::where(['user_id' => $iId])->update($aParams);
    }

    public function revokeUserAccess($iTokenId)
    {   
        return $this->oModel->tokens()->where('id', $iTokenId)->delete();
    }
    
}