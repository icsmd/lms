<template>
    <C_Layout_Header></C_Layout_Header>
    <C_Layout_SYSA_Sidebar></C_Layout_SYSA_Sidebar>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">
        <!-- Start: Topbar -->
        <header id="topbar" class="alt">
            <div class="topbar-left">
                <ol class="breadcrumb">
                    <li class="crumb-trail"> System Management
                    </li>
                    <li class="crumb-active"><a>Account Management</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel-heading">
            <span class="panel-title">Account Management</span>
        </div>
        <div class="panel">
            <div class="panel-body">
                <!-- START: USER ACCOUNT CREATE NEW -->
                <div class="panel panel-colorbox-open panel-system" id="spy2" v-if="bUpdateData === false">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-plus-square-o"></span>Add New User Account
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="form-group">
                            <div class="row" style="margin: 1%;">
                                <div class="col-lg-3">
                                    <label for="inp_emp_id" class="col-lg-12 control-label">Employee Id:</label>
                                    <input type="text" id="inp_emp_id" class="form-control"
                                        placeholder="Enter Employee Id">
                                    <p id="p_emp_id" style="display: none" class="error_msg">Employee Id is required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <label for="inp_firstname" class="col-lg-12 control-label">First Name</label>
                                    <input type="text" id="inp_firstname" class="form-control"
                                        placeholder="Enter First Name">
                                    <p id="p_firstname" style="display: none" class="error_msg">First name is required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <label for="inp_lastname" class="col-lg-12 control-label">Last Name</label>
                                    <input type="text" id="inp_lastname" class="form-control"
                                        placeholder="Enter Last Name">
                                    <p id="p_lastname" style="display: none" class="error_msg">Last name is required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <label for="inp_username" class="col-lg-12 control-label">Username</label>
                                    <input type="text" id="inp_username" class="form-control"
                                        placeholder="Enter Username">
                                    <p id="p_username" style="display: none" class="error_msg">Username is required!
                                    </p>
                                </div>
                                <div class="col-lg-5" style="margin-top: 15px">
                                    <label for="inp_password" class="col-lg-12 control-label">Password</label>
                                    <input type="password" id="inp_password" class="form-control"
                                        placeholder="Enter Password">
                                    <p id="p_password" style="display: none" class="error_msg">Password is required!
                                    </p>
                                </div>
                                <div class="col-lg-2" style="margin-top: 15px">
                                    <label for="inp_usertype" class="col-lg-12 control-label">User Type</label>
                                    <select class="select2-single form-control usertype-select" id="inp_usertype">
                                        <option disabled value="0" selected>Please select type</option>
                                        <option v-for="item in aUserTypes" :value="item.code">{{ item.desc }}</option>
                                    </select>
                                    <p id="p_usertype" style="display: none" class="error_msg">UserType is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-3" style="margin-top: 15px">
                                    <label for="inp_office" class="col-lg-12 control-label">Assigned Office</label>
                                    <select class="select2-single form-control office-select" id="inp_office">
                                        <option disabled value="0" selected>Please select office</option>
                                        <option v-for="item in aRegionList" :value="item.region_id">{{ item.region_abbr
                                            }} ({{
                    item.region_desc }})</option>
                                    </select>
                                    <p id="p_office" style="display: none" class="error_msg">Office is
                                        required!
                                    </p>
                                </div>

                                <div class="col-lg-2" style="margin-top: 15px">
                                    <button type="button" id="btnSaveNewDetails" class="btn btn-block btn-success"
                                        style="margin-right: 7%; margin-top: 21px; font-size: 16px">
                                        <i class="fa fa-floppy-o "></i>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: USER ACCOUNT CREATE NEW -->

                <!-- START: USER ACCOUNT UPDATE EXISTING -->
                <div class="panel panel-colorbox-open panel-warning" v-else>
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-pencil-square-o"></span>Update Existing User Account
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="form-group">
                            <div class="row" style="margin: 1%;">
                                <div class="col-lg-3">
                                    <label for="inp_emp_id_edit" class="col-lg-12 control-label">Employee Id:</label>
                                    <input type="text" id="inp_emp_id_edit" class="form-control"
                                        placeholder="Enter Employee Id">
                                    <p id="p_emp_id_edit" style="display: none" class="error_msg_edit">Employee Id is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <label for="inp_firstname_edit" class="col-lg-12 control-label">First Name</label>
                                    <input type="text" id="inp_firstname_edit" class="form-control"
                                        placeholder="Enter First Name">
                                    <p id="p_firstname_edit" style="display: none" class="error_msg_edit">First name is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <label for="inp_lastname_edit" class="col-lg-12 control-label">Last Name</label>
                                    <input type="text" id="inp_lastname_edit" class="form-control"
                                        placeholder="Enter Last Name">
                                    <p id="p_lastname_edit" style="display: none" class="error_msg_edit">Last name is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <label for="inp_username_edit" class="col-lg-12 control-label">Username</label>
                                    <input type="text" id="inp_username_edit" class="form-control"
                                        placeholder="Enter Username">
                                    <p id="p_username_edit" style="display: none" class="error_msg_edit">Username is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-5" style="margin-top: 15px">
                                    <label for="inp_password_edit" class="col-lg-12 control-label">Password</label>
                                    <input type="password" id="inp_password_edit" class="form-control"
                                        placeholder="Enter Password">
                                    <p id="p_password_edit" style="display: none" class="error_msg_edit">Password is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-2" style="margin-top: 15px">
                                    <label for="inp_usertype_edit" class="col-lg-12 control-label">User Type</label>
                                    <select class="select2-single form-control usertype-select_edit"
                                        id="inp_usertype_edit">
                                        <option disabled value="0" selected>Please select type</option>
                                        <option v-for="item in aUserTypes" :value="item.code">{{ item.desc }}</option>
                                    </select>
                                    <p id="p_usertype_edit" style="display: none" class="error_msg_edit">UserType is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-3" style="margin-top: 15px">
                                    <label for="inp_office_edit" class="col-lg-12 control-label">Assigned Office</label>
                                    <select class="select2-single form-control office-select_edit" id="inp_office_edit">
                                        <option disabled value="0" selected>Please select office</option>
                                        <option v-for="item in aRegionList" :value="item.region_id">{{ item.region_abbr
                                            }} ({{
                    item.region_desc }})</option>
                                    </select>
                                    <p id="p_office_edit" style="display: none" class="error_msg_edit">Office is
                                        required!
                                    </p>
                                </div>

                                <div class="col-lg-2">
                                    <button type="button" id="btnSaveUpdate" class="btn btn-md btn-success"
                                        style="margin-right:0px; margin-top: 38px;">
                                        <i class="fa fa-pencil-square-o "></i>
                                        Update
                                    </button>
                                    &nbsp;
                                    <button type="button" id="btnCancelUpdate" class="btn btn-md btn-default"
                                        style="margin-right:0px; margin-top: 38px;">
                                        <i class="fa fa-times "></i>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: USER ACCOUNT UPDATE EXISTING -->

                <!-- START: PAYEES' TABLE -->
                <div class="panel panel-colorbox-open panel-dark" id="spy2">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-list"></span>List of User Accounts
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <table class="table table-striped table-hover" id="tbl_records" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="text-align: center;">SysId</th>
                                    <th style="text-align: center;">Username</th>
                                    <th style="text-align: center;">Emp Id</th>
                                    <th style="text-align: center;">Office</th>
                                    <th style="text-align: center;">Type</th>
                                    <th style="text-align: center;">Active</th>
                                    <th style="text-align: center;">Date Created</th>
                                    <th style="text-align: center;">Last Modified</th>
                                    <th style="text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in aRecordList">
                                    <td style="text-align: center;">{{ item.temp_id }}</td>
                                    <td style="text-align: left;">{{ item.username }}</td>
                                    <td style="text-align: left;">{{ item.employee_id }}</td>
                                    <td style="text-align: left;">{{ item.region_abbr }}</td>
                                    <td style="text-align: center;">{{ item.user_type }}</td>
                                    <td style="text-align: center;">{{ item.status }}</td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_created, 'date') }} </td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_modified, 'date') }}
                                    </td>
                                    <td style="text-align: left;" width="20%">
                                        <button type="button" data-action="editDetails" :data-id="item.user_id"
                                            class="btn btn-md btn-warning editDetails"
                                            style="margin-left: 20px; margin-right: 10px;">
                                            <i class="fa fa-pencil-square-o "></i>
                                            Edit
                                        </button>
                                        <button v-if="item.status === 'deactivated'" type="button"
                                            data-action="activateUser" :data-id="item.user_id"
                                            class="btn btn-md btn-success activateUser">
                                            <i class="fa fa-check-circle-o"></i>
                                            Activate
                                        </button>
                                        <button v-else type="button" data-action="deactivateUser"
                                            :data-id="item.user_id" class="btn btn-md btn-danger deactivateUser">
                                            <i class="fa fa-times "></i>
                                            Deactivate
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- END: PAYEES' TABLE -->
            </div>
        </div>
    </section>
</template>
<script>
import Swal from 'sweetalert2';
import HttpRequest from "../../../../libraries/request.js"
import Utilities from "../../../../libraries/utilities.js"
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            aTableConfig: {
                "aaSorting": [
                    [0, 'asc']
                ],
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [5]
                }],
                "oLanguage": {
                    "oPaginate": {
                        "sPrevious": "",
                        "sNext": ""
                    }
                },
                "iDisplayLength": 10,
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
                "oTableTools": {
                    "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
                }
            },
            aUserTypes: [
                { code: 'sdor', desc: 'SDO' },
                { code: 'actg', desc: 'Accounting' },
                { code: 'bdgt', desc: 'Budget' },
                { code: 'cash', desc: 'Cash' },
            ],
            aRecordList: [],
            aRegionList: [],
            iActiveRecord: 0,
            bUpdateData: false,
        }
    },
    mounted() {
        this.getRecordList();
        this.getRegionList();
        this.initPlugins();
        this.initEventListeners();
    },
    methods: {
        initPlugins: function () {
            $('.usertype-select').select2();
        },
        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.id === 'btnSaveNewDetails') {
                    mSelf.saveEntries();
                }
                if (event.target.id === 'btnSaveUpdate') {
                    mSelf.updateEntries();
                }
                if (event.target.id === 'btnCancelUpdate') {
                    mSelf.clearUpdateEntries();
                    mSelf.bUpdateData = false;
                }
                if (event.target.dataset.action === 'editDetails') {
                    mSelf.clearCreateEntries();
                    mSelf.bUpdateData = true;
                    mSelf.iActiveRecord = event.target.dataset.id;
                    setTimeout(function () { mSelf.getDetailsToEdit(); }, 100);
                }
                if (event.target.dataset.action === 'activateUser') {
                    mSelf.changeUserStatus(event.target.dataset.id, 'active');
                }
                if (event.target.dataset.action === 'deactivateUser') {
                    mSelf.changeUserStatus(event.target.dataset.id, 'deactivated');
                }
            }, false);
        },



        getDetailsToEdit: function () {
            const filteredOffice = this.aRecordList.filter(record => record.user_id == this.iActiveRecord);
            $('#inp_emp_id_edit').val(filteredOffice[0].employee_id);
            $('#inp_firstname_edit').val(filteredOffice[0].firstname);
            $('#inp_lastname_edit').val(filteredOffice[0].lastname);
            $('#inp_username_edit').val(filteredOffice[0].username);
            $(".office-select_edit").select2().val(filteredOffice[0].region_id).trigger('change');
            $('.usertype-select_edit').select2().val(filteredOffice[0].user_type).trigger('change');
        },
        getRegionList: function () {
            this.getRequest('region/get-list', (mResponse) => {
                this.aRegionList = mResponse.data;
                $('.office-select').select2();
            });
        },
        getRecordList: function () {
            let mSelf = this;
            this.getRequest('user/get-all', (mResponse) => {
                this.aRecordList = mResponse.data;
                setTimeout(function () {
                    mSelf.initTblRecords();
                }, 500);
            });
        },
        initTblRecords: function () {
            $('#tbl_records').DataTable(this.aTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
        },

        validateEntries: function (sAction) {
            let bResult = true;

            let inpEmpId = sAction === 'create' ? '#inp_emp_id' : '#inp_emp_id_edit';
            let pErrEmpId = sAction === 'create' ? '#p_emp_id' : '#p_emp_id_edit';
            if ($(inpEmpId).val() === '') {
                $(pErrEmpId).css('display', '');
                bResult = false;
            }

            let inpFname = sAction === 'create' ? '#inp_firstname' : '#inp_firstname_edit';
            let pErrFname = sAction === 'create' ? '#p_firstname' : '#p_firstname_edit';
            if ($(inpFname).val() === '') {
                $(pErrFname).css('display', '');
                bResult = false;
            }

            let inpLname = sAction === 'create' ? '#inp_lastname' : '#inp_lastname_edit';
            let pErrLname = sAction === 'create' ? '#p_lastname' : '#p_lastname_edit';
            if ($(inpLname).val() === '') {
                $(pErrLname).css('display', '');
                bResult = false;
            }

            let inpUname = sAction === 'create' ? '#inp_username' : '#inp_username_edit';
            let pErrUname = sAction === 'create' ? '#p_username' : '#p_username_edit';
            if ($(inpUname).val() === '') {
                $(pErrUname).css('display', '');
                bResult = false;
            }

            let inpPassword = '#inp_password';
            let pErrPassword = '#p_password';
            if ($(inpPassword).val() === '') {
                $(pErrPassword).css('display', '');
                bResult = false;
            }

            let inpType = sAction === 'create' ? '#inp_usertype' : '#inp_usertype_edit';
            let pErrType = sAction === 'create' ? '#p_usertype' : '#p_usertype_edit';
            if ($(inpType).val() === null) {
                $(pErrType).css('display', '');
                bResult = false;
            }

            let inpOffice = sAction === 'create' ? '#inp_office' : '#inp_office_edit';
            let pErrOffice = sAction === 'create' ? '#p_office' : '#p_office_edit';
            if ($(inpOffice).val() === null) {
                $(pErrOffice).css('display', '');
                bResult = false;
            }

            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_emp_id').val('');
            $('#inp_firstname').val('');
            $('#inp_lastname').val('');
            $('#inp_username').val('');
            $('#inp_password').val('');
            $(".office-select").select2().val(0).trigger('change');
            $('.usertype-select').select2().val(0).trigger('change');
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_emp_id_edit').val('');
            $('#inp_firstname_edit').val('');
            $('#inp_lastname_edit').val('');
            $('#inp_username_edit').val('');
            $('#inp_password_edit').val('');
            $(".office-select_edit").select2().val(0).trigger('change');
            $('.usertype-select_edit').select2().val(0).trigger('change');
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                employee_id: $('#inp_emp_id').val(),
                firstname: $('#inp_firstname').val(),
                lastname: $('#inp_lastname').val(),
                username: $('#inp_username').val(),
                password: $('#inp_password').val(),
                user_type: $('#inp_usertype').val(),
                region_id: $('#inp_office').val(),
            };
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('user/create', oParams, (mResponse) => {
                    this.showSuccessAlert('Successfully saved your entry');
                    mSelf.clearCreateEntries();
                    $('#tbl_records').DataTable().destroy();
                    mSelf.getRecordList();
                });
            } else {
                this.showErrorAlert('Please double check and correct all your entries!')
            }
        },

        updateEntries: function () {
            let mSelf = this;
            let oParams = {
                employee_id: $('#inp_emp_id_edit').val(),
                firstname: $('#inp_firstname_edit').val(),
                lastname: $('#inp_lastname_edit').val(),
                username: $('#inp_username_edit').val(),
                password: $('#inp_password_edit').val(),
                user_type: $('#inp_usertype_edit').val(),
                region_id: $('#inp_office_edit').val(),
            };
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('user/update/' + this.iActiveRecord, oParams, (mResponse) => {
                    this.showSuccessAlert(mResponse.message);
                    $('.error_msg_edit').css('display', 'none');
                    $('#tbl_records').DataTable().destroy();
                    mSelf.getRecordList();
                });
            } else {
                this.showErrorAlert('Please double check and correct all your entries!');
                this.getDetailsToEdit(this.iActiveRecord);
            }

        },

        changeUserStatus: function (iId, sStatus) {
            let mSelf = this;
            let sMessage = sStatus === 'active' ? 'You understand that by activating this user can allow him/her to operate the system based on his/her account type. Are sure you want to proceed?' 
                                                : 'You understand that by deactivating this user, his/her access in the system will be revoked. Are you sure you want to proceed?';
            let sConfirmMsg = sStatus === 'active' ? 'Activate' : 'Deactivate';
            let sConfirmColor = sStatus === 'active' ? '#00a623' : '#d33';
            Swal.fire({
                title: "Confirmation",
                text: sMessage,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: sConfirmColor,
                cancelButtonColor: "#c7baba",
                confirmButtonText: sConfirmMsg
            }).then((result) => {
                if (result.isConfirmed) {
                    this.postRequest('user/update/' + iId, {status: sStatus}, (mResponse) => {
                        this.showSuccessAlert(mResponse.message);
                        $('#tbl_records').DataTable().destroy();
                        mSelf.getRecordList();
                    });
                }
            });
        },
    }
}
</script>
<style scoped>
.error_msg,
.error_msg_edit {
    color: red !important;
}
</style>