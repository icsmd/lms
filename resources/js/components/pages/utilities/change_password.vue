<template>
    <C_Layout_Header></C_Layout_Header>
    <C_Layout_SDOR_Sidebar v-if="$root.sUserType === 'sdor'"></C_Layout_SDOR_Sidebar>
    <C_Layout_ACTG_Sidebar v-else-if="$root.sUserType === 'actg'"></C_Layout_ACTG_Sidebar>
    <C_Layout_BDGT_Sidebar v-else-if="$root.sUserType === 'bdgt'"></C_Layout_BDGT_Sidebar>
    <C_Layout_CASH_Sidebar v-else-if="$root.sUserType === 'cash'"></C_Layout_CASH_Sidebar>
    <C_Layout_SYSA_Sidebar v-else-if="$root.sUserType === 'sysa'"></C_Layout_SYSA_Sidebar>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">
        <!-- Start: Topbar -->
        <header id="topbar" class="alt">
            <div class="topbar-left">
                <ol class="breadcrumb">
                    <li class="crumb-active"><a>Change Password</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title"> Change Password </span>
            </div>
            <div class="panel-body">
                <!-- START: NOTIFICATIONS TABLE -->
                <div class="col-md-5" style="margin-left: 25%;">
                    <!-- Begin: Content -->
                    <div class="admin-form " id="login">
                        <!-- Login Panel/Form -->
                        <div class="panel mt30 mb25">
                            <div class="panel-body bg-light p25 pb15">
                                <!-- Current Password Input -->
                                <div class="section">
                                    <label for="inp_currpass" class="field-label text-muted fs18 mb10">Current
                                        Password: <span style="color:red">*</span></label>
                                    <label for="inp_currpass" class="field prepend-icon">
                                        <input v-model="sCurrPassword" type="password" name="inp_currpass"
                                            id="inp_currpass" class="gui-input" placeholder="Enter old password">
                                        <b class="tooltip tip-left-bottom">
                                            <em>You must re-type your current password for security purposes.
                                            </em>
                                        </b>
                                        <label for="inp_currpass" class="field-icon">
                                            <i class="fa fa-lock"></i>
                                        </label>
                                    </label>
                                </div>
                                <!-- New Password Input -->
                                <div class="section">
                                    <label for="inp_newpass" class="field-label text-muted fs18 mb10">New
                                        Password: <span style="color:red">*</span></label>
                                    <label for="inp_newpass" class="field prepend-icon">
                                        <input v-model="sNewPassword" type="password" name="inp_newpass"
                                            id="inp_newpass" class="gui-input" placeholder="Enter new password">
                                        <b class="tooltip tip-left-bottom">
                                            <em>Your new password must be different from your current password.
                                            </em>
                                        </b>
                                        <label for="inp_newpass" class="field-icon">
                                            <i class="fa fa-lock"></i>
                                        </label>
                                    </label>
                                </div>
                                <!-- Confirm Password Input -->
                                <div class="section">
                                    <label for="inp_confirmpass" class="field-label text-muted fs18 mb10">Confirm
                                        Password: <span style="color:red">*</span></label>
                                    <label for="inp_confirmpass" class="field prepend-icon">
                                        <input v-model="sConfPassword" type="password" name="inp_confirmpass"
                                            id="inp_confirmpass" class="gui-input" placeholder="Retype new password">
                                        <b class="tooltip tip-left-bottom">
                                            <em>You must re-type your new password for security purposes.
                                                (Copy-Paste is disabled)
                                            </em>
                                        </b>
                                        <label for="inp_confirmpass" class="field-icon">
                                            <i class="fa fa-lock"></i>
                                        </label>
                                    </label>
                                </div>
                            </div>

                            <div class="panel-footer clearfix">
                                <button id="btnChangePassword" class="button btn-primary mr10 pull-right">
                                    <i class="fa fa-unlock"></i>
                                    Change Password
                                </button>
                            </div>
                        </div>

                    </div>
                    <!-- End: Content-Wrapper -->
                </div>
                <!-- END: NOTIFICATIONS TABLE -->
            </div>
        </div>
    </section>
</template>
<script>
import Utilities from '../../../libraries/utilities.js';
import HttpRequest from '../../../libraries/request.js';
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            sCurrPassword: '',
            sNewPassword: '',
            sConfPassword: '',
            sRedirectUrl: window.location.protocol + '//' + window.location.host + '/front/' + this.$root.sUserType + '/home'
        }
    },
    mounted() {
        this.initializeActions();
        this.initializeDefaultElementBehavior();
    },
    methods: {
        initializeDefaultElementBehavior: function () {
            const oInpConfPass = document.getElementById('inp_confirmpass');
            oInpConfPass.onpaste = e => e.preventDefault();
        },
        initializeActions: function () {
            let mSelf = this;
            document.body.addEventListener("click", function (event) {
                if (event.target.id === "btnChangePassword") {
                    mSelf.changePassword();
                }
            });
        },

        changePassword: function () {
            let mSelf = this;
            let bValidForm = this.validateForm();
            if (bValidForm === true) {
                let oParams = {
                    currpass: btoa(this.sCurrPassword),
                    newpass: btoa(this.sNewPassword),
                    confpass: btoa(this.sConfPassword)
                };
                oParams = btoa(JSON.stringify(oParams));
                this.postRequest('auth/change-password', { payload: oParams }, (mResponse) => {
                    this.showSuccessAlert(mResponse.message + "\n\rRedirecting to home page...");
                    setTimeout(function () {
                        location.replace(mSelf.sRedirectUrl);
                    }, 3000);
                });
            }
        },

        validateForm: function () {
            let bResult = false;
            if (this.sCurrPassword === '' || this.sNewPassword === '' || this.sConfPassword === '') {
                this.showErrorAlert('All fields are required! Please double check your entries.');
                bResult = false;
            } else {
                if (this.sNewPassword === this.sConfPassword) {
                    bResult = true;
                } else {
                    this.showErrorAlert("Your new password doesn't match!");
                    bResult = false;
                }
            }
            return bResult;
        }
    }
}
</script>