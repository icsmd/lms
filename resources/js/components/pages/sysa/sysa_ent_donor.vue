<template>
    <div id="main">
        <C_Layout_Header></C_Layout_Header>
        <C_Layout_SYSA_Sidebar></C_Layout_SYSA_Sidebar>
        <!-- Start: Content-Wrapper -->
        <section id="content_wrapper">
            <!-- Start: Topbar -->
            <header id="topbar" class="alt">
                <div class="topbar-left">
                    <ol class="breadcrumb">
                        <li class="crumb-active" style="margin-top: 7px;">
                            <a href="dashboard.html">Manage Donor Records</a>
                        </li>
                    </ol>
                </div>
            </header>
            <!-- End: Topbar -->

            <!-- TEMPORARY PENDING FOR DEVELOPMENT (ON-HOLD) -->
            <div class="panel">
                <!-- <div class="panel-heading">
                    <span class="panel-title">Summary of Entries for Special</span>
                </div> -->
                <div class="panel-body">

                    <!-- START: ADD NEW BOOK  -->
                    <div class="panel panel-colorbox-open panel-primary" id="spy2" style="margin: 1%">
                        <br>
                        <div class="panel-body pn">
                            <div>
                                <!-- Basic AdminPanel - All features disabled except "minimized" option -->
                                <button type="button" class="collapsible"> <span class="fa fa-plus-square"></span>&nbsp;
                                    Add New Book Donor Record</button>
                                <div class="content active" style="padding: 1%;">
                                    <div class="form-group">
                                        <div class="row" style="margin: 1%;">
                                            
                                            <div class="col-lg-5">
                                                <label for="inp_donor_name" class="col-lg-12 control-label">Donor's Name:</label>
                                                <input type="text" id="inp_donor_name" class="form-control"
                                                    placeholder="Enter Donor's Name" style="text-transform: uppercase;">
                                                <p id="p_donor_name" style="display: none" class="error_msg">Donor's Name
                                                    is required!
                                                </p>
                                            </div>
                                            <div class="col-lg-2">
                                                <button type="button" id="btnSaveNewDetails"
                                                    class="btn btn-block btn-success"
                                                    style="margin-right: 7%; margin-top: 21px; font-size: 16px">
                                                    <i class="fa fa-floppy-o "></i>
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: ADD NEW BOOK -->

                    <!-- START: PANEL SECTION FOR BOOK DONOR -->
                    <div class="panel panel-colorbox-open panel-primary" id="spy2" style="margin: 1%">
                        <br>
                        <div class="panel-heading ">
                            <div class="panel-title hidden-xs">
                                <span class="fa fa-list"></span>Book Donor List
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <table class="table table-striped table-hover" id="tbl_records" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="text-align: center;">SysId</th>
                                    <th style="text-align: center;">Name</th>
                                    <th style="text-align: center;">Date Created</th>
                                    <th style="text-align: center;">Last Modified</th>
                                    <th style="text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in aRecordList">
                                    <td style="text-align: center;">{{ item.temp_id }}</td>
                                    <td style="text-align: left;">{{ item.donor_name }}</td>
                                    <td style="text-align: center;">{{ nullCheck(item.created_at, 'date') }} </td>
                                    <td style="text-align: center;">{{ nullCheck(item.updated_at, 'date') }}
                                    </td>
                                    <td style="text-align: center;" width="20%">
                                        <button type="button" data-action="editDetails" :data-id="item.donor_id"
                                            class="btn btn-md btn-warning editDetails"
                                            style="margin-left: 20px; margin-right: 10px;">
                                            <i class="fa fa-pencil-square-o "></i>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <!-- END: PANEL SECTION FOR BOOK DONOR -->
                </div>
            </div>
        </section>
        <!-- End: Content-Wrapper -->
    </div>
</template>
<script>
import Swal from 'sweetalert2';
import HttpRequest from "../../../libraries/request"
export default {
    mixins: [
        HttpRequest
    ],
    data() {
        return {
            aTableConfig: {
                "aaSorting": [
                    [0, 'asc']
                ],
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [3]
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
        this.initCollapsible();
        this.getRecordList();
        this.initEventListeners();
    },
    methods: {

        initCollapsible: function () {
            var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                });
            }
        },

        getRecordList: function () { 
            let mSelf = this;
            this.getRequest('donors/get', (mResponse) => {
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
                    mSelf.showEditModal();
                    mSelf.iActiveRecord = event.target.dataset.id;
                    setTimeout(function () { mSelf.getDetailsToEdit(); }, 100);
                }
            }, false);
        },

        validateEntries: function (sAction) {
            let bResult = true;
            let inpDonorName = sAction === 'create' ? '#inp_donor_name' : '#inp_donor_name_edit';
            let pErrDonorName = sAction === 'create' ? '#p_donor_name' : '#p_donor_name_edit';
            if ($(inpDonorName).val() === '') {
                $(pErrDonorName).css('display', '');
                bResult = false;
            }
            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_donor_name').val('');
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_donor_name_edit').val('');
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                donor_name: $('#inp_donor_name').val()
            };
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('donors/create', oParams, (mResponse) => {
                    this.showSuccessAlert('Successfully saved your entry');
                    mSelf.clearCreateEntries();
                    $('#tbl_records').DataTable().destroy();
                    mSelf.getRecordList();
                });
            } else {
                this.showErrorAlert('Please double check and correct all your entries!')
            }
        },

        getDetailsToEdit: function () {
            const filteredOffice = this.aRecordList.filter(record => record.donor_id == this.iActiveRecord);
            $('#inp_donor_name_edit').val(filteredOffice[0].donor_name);
        },

        showEditModal: function () {
            let mSelf = this;
            Swal.fire({
                title: "<strong>Update Donor's Details</strong>",
                width: 450,
                html: `
                <hr>
                <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">
                                    <label for="inp_donor_name_edit" class="col-lg-12 control-label" style="font-size: 14px">Donor's Name</label>
                                    <input type="text" id="inp_donor_name_edit" class="form-control"
                                        placeholder="Enter Donor's Name" style="text-transform:uppercase">
                                    <p id="p_donor_name_edit" style="display: none" class="error_msg_edit">Donor's name is
                                        required!</p>

                </div>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `<i class="fa fa-floppy-o"></i> Save Details`,
                confirmButtonAriaLabel: "Save",
                cancelButtonText: `<i class="fa fa-times"></i> Cancel`,
                cancelButtonAriaLabel: "Cancel"
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    mSelf.updateEntries();
                }
            });
        },

        updateEntries: function () {
            let mSelf = this;
            let oParams = {
                donor_name: $('#inp_donor_name_edit').val()
            };
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('donors/update/' + this.iActiveRecord, oParams, (mResponse) => {
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
/* Style the button that is used to open and close the collapsible content */
.collapsible {
    background-color: #04aa6d;
    color: #ffffff;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.collapsible:hover {
    background-color: #43816a;
}
/* Style the collapsible content. Note: hidden by default */
.content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #ffffff;
}
.error_msg, .error_msg_edit {
    color: red;
}
</style>