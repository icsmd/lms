<template>
  <div class="external-page external-alt sb-l-c sb-r-c">

    <!-- Start: Main -->
    <div id="main" class="animated fadeIn center">
      <!-- Start: Content-Wrapper -->
      <section id="content_wrapper">
        <!-- Begin: Content -->
        <section id="content">
          <div class="admin-form theme-info mw500" id="login">
            <!-- Login Logo -->
            <div class="row table-layout" style="text-align: left; font-size: 40px;">
              <div class="col-md-12">
                <div class="alert alert-danger ">
                  <i class="fa fa-warning pr10"></i>
                  Note: Changing of password is required for users with default password. It is recommended to change
                  your password before using this system.
                  <br><br>Fill in the fields below and click the change password button. If successful, you'll be
                  redirected to your respective home page.
                  <br><br>Else, you may choose to skip this process, but it will be prompted again on your next login.
                </div>
                <button id="btnBypass" class="button btn-system mr10 pull-right">
                  <i class="fa fa-sign-in"></i>
                  Skip, maybe next time
                </button>
              </div>
            </div>
            <!-- Login Panel/Form -->
            <div class="panel mt30 mb25">
              <div class="panel-body bg-light p25 pb15">
                <!-- Current Password Input -->
                <div class="section">
                  <label for="inp_currpass" class="field-label text-muted fs18 mb10">Current Password: <span
                      style="color:red">*</span></label>
                  <label for="inp_currpass" class="field prepend-icon">
                    <input v-model="sCurrPassword" type="password" name="inp_currpass" id="inp_currpass"
                      class="gui-input" placeholder="Enter old password">
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
                  <label for="inp_newpass" class="field-label text-muted fs18 mb10">New Password: <span
                      style="color:red">*</span></label>
                  <label for="inp_newpass" class="field prepend-icon">
                    <input v-model="sNewPassword" type="password" name="inp_newpass" id="inp_newpass" class="gui-input"
                      placeholder="Enter new password">
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
                  <label for="inp_confirmpass" class="field-label text-muted fs18 mb10">Confirm Password: <span
                      style="color:red">*</span></label>
                  <label for="inp_confirmpass" class="field prepend-icon">
                    <input v-model="sConfPassword" type="password" name="inp_confirmpass" id="inp_confirmpass"
                      class="gui-input" placeholder="Retype new password">
                    <b class="tooltip tip-left-bottom">
                      <em>You must re-type your new password for security purposes. (Copy-Paste is disabled)
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
        </section>
        <!-- End: Content -->
      </section>
      <!-- End: Content-Wrapper -->
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import HttpRequest from "../../libraries/request.js"
import Utilities from "../../libraries/utilities.js"
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
      sRedirectUrl: window.location.protocol + '//' + window.location.host + '/front/' + this.$root.sUserType + '/bkmgt'
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
        if (event.target.id === "btnBypass") {
          location.replace(mSelf.sRedirectUrl);
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
<style scoped>
.center {
  border: 5px solid;
  margin: auto;
  width: 40%;
  position: absolute;
}
</style>