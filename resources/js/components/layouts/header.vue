<template>
    <!-- Start: Header -->
    <header class="navbar navbar-fixed-top navbar-shadow">
        
     
        <div class="navbar-branding">
            
            <a class="navbar-brand" style="padding-left: 15%;">
                <img src="../../../img/DVII_logo.png" width="25%"/>
                <b style="padding-left: 5%;">DVII LMS</b>
            </a>
            <span id="toggle_sidemenu_l" class="ad ad-lines"></span>
        </div>
        <ul class="nav navbar-nav navbar-left">
            <li class="hidden-xs">
                <a class="request-fullscreen toggle-active" href="#">
                    <span class="ad ad-screen-full fs18"></span>
                </a>
            </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
            <!-- Button for Full Screen -->
            <li class="dropdown menu-merge">
                <div class="navbar-btn btn-group">
                    <button data-toggle="dropdown" class="btn btn-sm dropdown-toggle" data-custom_class="notif-btn">
                        <span class="fa fa-bell-o fs14 va-m" data-custom_class="notif-btn"></span>
                        <span v-if="iNotifCount > 0" class="badge badge-danger">{{ iNotifCount }}</span>
                    </button>
                    <div class="dropdown-menu dropdown-persist w350 animated animated-shorter fadeIn" role="menu">
                        <div class="panel mbn">
                            <div class="panel-menu">
                                <span class="panel-icon"><i class="fa fa-warning"></i></span>
                                <span class="panel-title fw600"> Unopened Notifications</span>
                                <!-- <button class="btn btn-default light btn-xs pull-right" type="button">
                                    <i class="fa fa-refresh" data-action="refresh-notif"></i>
                                </button> -->
                            </div>
                            <div class="panel-body panel-scroller scroller-navbar scroller-overlay scroller-pn pn">
                                <ol class="timeline-list">
                                    <li v-if="iNotifCount <= 0" class="timeline-item">
                                        <p style="text-align: center">--- No Notifications --</p>
                                    </li>
                                    <div v-else v-for="notif in aNotifRows">
                                        <li v-if="notif.notif_status === 1" class="timeline-item">
                                            <div class="timeline-icon bg-dark light">
                                                <span class="fa fa-exclamation-circle"></span>
                                            </div>
                                            <div class="timeline-desc">
                                                <p style="margin-right: 5px; color: #4e4e4e">{{ notif.notif_desc }}<br>
                                                    <a class="notif-url" :href="notif.notif_url + notif.notif_no"
                                                        style="color: #1289e8">Click to View
                                                        Details</a>
                                                </p>
                                            </div>
                                            <div class="timeline-date" style="color: #4e4e4e">
                                                {{ convertDateFormat(notif.date_created, 'MMM DD') }}
                                                <br>
                                                {{ convertDateFormat(notif.date_created, 'h:mm:ss a') }}
                                            </div>
                                        </li>
                                        <li v-else class="timeline-item" style="background-color:#d4ecff;">
                                            <div class="timeline-icon bg-warning dark">
                                                <span class="fa fa-exclamation-triangle"></span>
                                            </div>
                                            <div class="timeline-desc">
                                                <p style="margin-right: 5px; color: #4e4e4e">{{ notif.notif_desc }}<br>
                                                    <a class="notif-url" :href="notif.notif_url + notif.notif_no"
                                                        style="color: #1289e8">Click to View
                                                        Details</a>
                                                </p>
                                            </div>
                                            <div class="timeline-date" style="color: #4e4e4e">
                                                {{ convertDateFormat(notif.date_created, 'MMM DD') }}
                                                <br>
                                                {{ convertDateFormat(notif.date_created, 'h:mm:ss a') }}
                                            </div>
                                        </li>
                                    </div>
                                </ol>
                            </div>
                            <div class="panel-footer text-center p7">
                                <a :href="getNotifPageRedirectUrl()" class="link-unstyled"> View All </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="menu-divider hidden-xs">
                <i class="fa fa-circle"></i>
            </li>
            <!-- Profile Details -->
            <li class="dropdown menu-merge">
                <!-- IMG of USER (FOR REPLACEMENT)-->
                <a href="#" class="dropdown-toggle fw600 p15" data-toggle="dropdown">
                    <img src="../../../img/user-profile.jpg" alt="avatar" class="mw30 br64" />
                    <span class="hidden-xs pl15"> {{ $root.aUserInfo.firstname }} {{ $root.aUserInfo.lastname }} </span>
                    <span class="caret caret-tp hidden-xs"></span>
                </a>
                <ul class="dropdown-menu list-group dropdown-persist w250" role="menu">
                    <li class="list-group-item">
                        <a :href="getNotifPageRedirectUrl()" class="animated animated-short fadeInUp">
                            <span class="fa fa-bell"></span> Notifications </a>
                    </li>
                    <li class="list-group-item">
                        <a :href="getChangePassUrl()" class="animated animated-short fadeInUp">
                            <span class="fa fa-unlock"></span> Change Password </a>
                    </li>
                    <li class="dropdown-footer">
                        <a href="#" class="" :onclick="logout">
                            <span class="fa fa-power-off pr5"></span> Logout </a>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
    <!-- End: Header -->
</template>
<script>
import Swal from 'sweetalert2'
import utilities from '../../libraries/utilities.js'
import HttpRequest from "../../libraries/request.js"
export default {
    mixins: [
        utilities,
        HttpRequest
    ],
    data() {
        return {
            iNotifCount:0,
            aNotifRows: [],
        }
    },
    created () {
      //  this.initNotifications();
    },
    mounted() {
        this.$root.initializeTemplatePlugins();
        // this.checkNotifReadFlag();
    },
    methods: {
        getNotifPageRedirectUrl: function () {
            return '/front/' + this.$root.sUserType + '/notifications'; 
        },

        getChangePassUrl: function () {
            return '/front/' + this.$root.sUserType + '/change-pass'; 
        },
 
        // initNotifications: function () {
        //     this.getRequest('notif/get-list', (mResponse) => {
        //         this.iNotifCount = mResponse.data.count;
        //         this.aNotifRows = mResponse.data.rows;
        //     }, { notif_status: 0 });
        // },

        // checkNotifReadFlag: function () {
        //     let iNId = this.$route.query.nId;
        //     if (iNId) {
        //         let oParams = {
        //             notif_no: iNId,
        //             notif_status: 1
        //         };
        //         this.postRequest('notif/update/' + iNId, oParams, () => {
        //             this.initNotifications();
        //         });
        //     }
        // },

        logout: function () {
            let mSelf = this;
            Swal.fire({
                title: "Confirmation",
                text: "Are you sure you want to logout",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log me out."
            }).then((result) => {
                if (result.isConfirmed) {
                    this.postRequest('auth/log-out', {}, () => {
                        mSelf.$root.clearLocalStorage();
                        window.location.replace('/');
                    });
                }
            });
        }
    }
}
</script>
<style scoped></style>