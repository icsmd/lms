<?php

namespace App\Http\Middleware\Custom;

use Closure;
use App\Libraries\SessionHelperLibrary as Session;
use App\Libraries\SecuredRoutesLibrary as SecRoutes;
use Illuminate\Http\Request;

class checkSession
{

    /**
     * Handle an incoming request.
     *
     */
    public function handle(Request $request, Closure $next)
    {
        $sRequestPath = $request->getPathInfo();
        $sUserType = Session::getSession('u_session.user_type');
        if ($sUserType === null) {
            return redirect('/');
        } else {
            $sRevisedPath = preg_replace('/\d+/', '', $sRequestPath); // Remove trailing numbers
            $aRetrievedRoute = array_filter(
                SecRoutes::SECURED_ROUTES[$sUserType],
                function ($sValue, $sKey) use ($sRevisedPath) {
                    return $sValue === $sRevisedPath;
                },
                ARRAY_FILTER_USE_BOTH
            );
            if (empty($aRetrievedRoute) === true) {
                return redirect('/404');
            } else {
                return $next($request);
            }
        }
    }
}
