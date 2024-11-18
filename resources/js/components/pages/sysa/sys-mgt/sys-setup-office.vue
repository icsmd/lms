<template>
    <C_Layout_Header></C_Layout_Header>
    <C_Layout_SYSA_Sidebar></C_Layout_SYSA_Sidebar>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">
        <!-- Start: Topbar -->
        <header id="topbar" class="alt">
            <div class="topbar-left">
                <ol class="breadcrumb">
                    <li class="crumb-trail">System Management</li>
                    <li class="crumb-trail">System Setup</li>
                    <li class="crumb-active"><a>Office/Region Entity Setup</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title">Office/Region Entity Setup</span>
            </div>
            <div class="panel-body">
                <!-- START: OFFICE CREATE NEW -->
                <div class="panel panel-colorbox-open panel-system" id="spy2" v-if="bUpdateData === false">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-plus-square-o"></span>Add New Office
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="form-group">
                            <div class="row" style="margin: 1%;">
                                <div class="col-lg-3">
                                    <label for="inp_office_abbr" class="col-lg-12 control-label">Office Abbreviation / Code:</label>
                                    <input type="text" id="inp_office_abbr" class="form-control" v-model="sOfficeAbbr"
                                        placeholder="Enter Office Abbreviation / Code">
                                    <p id="p_office_abbr" style="display: none" class="error_msg">Abbreviation/Code is
                                        required!</p>

                                </div>
                                <div class="col-lg-5">
                                    <label for="inp_office_desc" class="col-lg-12 control-label">Office Description</label>
                                    <input type="text" id="inp_office_desc" class="form-control" v-model="sOfficeDesc"
                                        placeholder="Enter Office Description">
                                    <p id="p_office_desc" style="display: none" class="error_msg">Description is required!
                                    </p>

                                </div>
                              
                                <div class="col-lg-2">
                                    <button type="button" id="btnSaveNewDetails" class="btn btn-lg btn-success"
                                        style="margin-right: 7%; margin-top: 21px;">
                                        <i class="fa fa-floppy-o "></i>
                                        Save 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: OFFICE CREATE NEW -->

                <!-- START: OFFICE UPDATE EXISTING -->
                <div class="panel panel-colorbox-open panel-warning" v-else>
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-pencil-square-o"></span>Update Existing Office 
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="form-group">
                            <div class="row" style="margin: 1%;">
                                <div class="col-lg-3">
                                    <label for="inp_office_abbr_edit" class="col-lg-12 control-label">Office Abbreviation / Code:</label>
                                    <input type="text" id="inp_office_abbr_edit" class="form-control"
                                        placeholder="Enter Office Abbreviation / Code">
                                    <p id="p_office_abbr_edit" style="display: none" class="error_msg_edit">Abbreviation/Code is
                                        required!</p>

                                </div>
                                <div class="col-lg-5">
                                    <label for="inp_office_desc_edit" class="col-lg-12 control-label">Office Description</label>
                                    <input type="text" id="inp_office_desc_edit" class="form-control"
                                        placeholder="Enter Office Description">
                                    <p id="p_office_desc_edit" style="display: none" class="error_msg_edit">Description is required!
                                    </p>

                                </div>
                                <div class="col-lg-3">
                                    <button type="button" id="btnSaveUpdate" class="btn btn-lg btn-success"
                                        style="margin-right:0px; margin-top: 21px;">
                                        <i class="fa fa-pencil-square-o "></i>
                                        Update
                                    </button>
                                    &nbsp;
                                    <button type="button" id="btnCancelUpdate" class="btn btn-lg btn-default"
                                        style="margin-right:0px; margin-top: 21px;">
                                        <i class="fa fa-times "></i>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: OFFICE UPDATE EXISTING -->

                <!-- START: PAYEES' TABLE -->
                <div class="panel panel-colorbox-open panel-dark" id="spy2">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-list"></span>List of Offices
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <table class="table table-striped table-hover" id="tbl_records" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="text-align: center;">SysId</th>
                                    <th style="text-align: center;">Office Abbreviation</th>
                                    <th style="text-align: center;">Office Description</th>
                                    <th style="text-align: center;">Date Created</th>
                                    <th style="text-align: center;">Last Modified</th>
                                    <th style="text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in aRecordList">
                                    <td style="text-align: center;">{{ item.temp_id }}</td>
                                    <td style="text-align: left;">{{ item.region_abbr }}</td>
                                    <td style="text-align: left;">{{ item.region_desc }}</td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_created, 'date') }} </td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_modified, 'date') }}
                                    </td>
                                    <td style="text-align: center;">
                                        <button type="button" data-action="editDetails" :data-id="item.region_id"
                                            class="btn btn-md btn-warning editDetails" style="margin-right: 9%;">
                                            <i class="fa fa-pencil-square-o "></i>
                                            Edit
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
            aRecordList: [],
            iActiveRecord: 0,
            bUpdateData: false,
        }
    },
    mounted() {
        this.getRecordList();
        this.initEventListeners();
    },
    methods: {
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
            }, false);
        },

        getDetailsToEdit: function () {
            const filteredOffice = this.aRecordList.filter(record => record.region_id == this.iActiveRecord);
            $('#inp_office_abbr_edit').val(filteredOffice[0].region_abbr);
            $('#inp_office_desc_edit').val(filteredOffice[0].region_desc);
        },

        getRecordList: function () {
            let mSelf = this;
            this.getRequest('region/get-list', (mResponse) => {
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

            let inpOfficeAbbr = sAction === 'create' ? '#inp_office_abbr' : '#inp_office_abbr_edit';
            let pErrOfficeAbbr = sAction === 'create' ? '#p_office_abbr' : '#p_office_abbr_edit';
            if ($(inpOfficeAbbr).val() === '') {
                $(pErrOfficeAbbr).css('display', '');
                bResult = false;
            }

            let inpOfficeDesc = sAction === 'create' ? '#inp_office_desc' : '#inp_office_desc_edit';
            let pErrOfficeDesc = sAction === 'create' ? '#p_office_desc' : '#p_office_desc_edit';
            if ($(inpOfficeDesc).val() === '') {
                $(pErrOfficeDesc).css('display', '');
                bResult = false;
            }
         
            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_office_abbr').val('');
            $('#inp_office_desc').val('');
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_office_abbr_edit').val('');
            $('#inp_office_desc_edit').val('');
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                region_abbr: $('#inp_office_abbr').val(),
                region_desc: $('#inp_office_desc').val(),
            };
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('region/create', oParams, (mResponse) => {
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
                region_abbr: $('#inp_office_abbr_edit').val(),
                region_desc: $('#inp_office_desc_edit').val()
            };
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('region/update/' + this.iActiveRecord, oParams, (mResponse) => {
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
    }
}
</script>
<style scoped>
.error_msg,
.error_msg_edit {
    color: red;
}
</style>