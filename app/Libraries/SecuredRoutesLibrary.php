<?php

namespace App\Libraries;

class SecuredRoutesLibrary
{
    const SECURED_ROUTES = [
        'sysa' => [
            '/user-manual',
            '/user/session',
            '/user/get-all',
            '/user/create',
            '/user/update/',
            '/front/change-password',

            '/front/sysa/bkmgt',
            '/front/sysa/brwlg',
            '/front/sysa/donors',
            '/front/sysa/borrowers',

            // NEW
            '/books/get',
            '/books/create',
            '/books/update/',
            '/borrowers/get',
            '/borrowers/create',
            '/borrowers/update/',
            '/donors/get',
            '/donors/create',
            '/donors/update/',
            '/borrow-log/get',
            '/borrow-log/create',
            '/borrow-log/update/',
            '/remarks/get',
            '/remarks/create',
            '/remarks/update/',
            

            // '/front/sysa/mgt/acc-mgt',
            // '/front/sysa/mgt/setup/office',
            // '/front/sysa/mgt/setup/uacs',
            // '/front/sysa/mgt/setup/tax',
            // '/front/sysa/mgt/user-logs',
            // '/front/sysa/misc/help-desk',

            // '/front/sysa/notifications',
            // '/front/sysa/change-pass',

            '/auth/change-password',
            // '/notif/get-list',
            // '/notif/update/',
            // '/notif/mass/update',

           
            // '/user-logs/get-list',
        ],
    ];
}