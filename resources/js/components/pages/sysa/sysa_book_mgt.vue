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
                            <a href="dashboard.html">Library Management</a>
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
                            <!-- COLLAPSIBLE-->
                            <div>
                                <!-- Basic AdminPanel - All features disabled except "minimized" option -->
                                <button type="button" class="collapsible"> <span class="fa fa-plus-square"></span>&nbsp;
                                    Add New Book Record</button>
                                <div class="content" style="padding: 1%;">
                                    <div class="form-group">
                                        <div class="row" style="margin: 1%;">
                                            <div class="col-md-10">
                                                <div class="col-lg-6">
                                                    <label for="inp_title"
                                                        class="col-lg-12 control-label">Title:</label>
                                                    <input type="text" id="inp_title" class="form-control"
                                                        placeholder="Enter Book Title"
                                                        style="text-transform: uppercase;">
                                                    <p id="p_title" style="display: none" class="error_msg">Title is
                                                        required!
                                                    </p>
                                                </div>
                                                <div class="col-lg-4">
                                                    <label for="inp_author"
                                                        class="col-lg-12 control-label">Author</label>
                                                    <input type="text" id="inp_author" class="form-control"
                                                        placeholder="Enter Author"
                                                        style="text-transform: uppercase;">
                                                    <p id="p_author" style="display: none" class="error_msg">
                                                        Author is required!
                                                    </p>
                                                </div>
                                                <div class="col-lg-2">
                                                    <label for="inp_publishing_year"
                                                        class="col-lg-12 control-label">Publishing Year</label>
                                                    <input type="text" id="inp_publishing_year" class="form-control"
                                                        placeholder="Enter Pub Year"
                                                        style="text-transform: uppercase;">
                                                    <p id="p_publishing_year" style="display: none" class="error_msg">
                                                        Publishing Year is required!
                                                    </p>
                                                </div>
                                                <div class="col-lg-3" style="margin-top: 15px;">
                                                    <label for="inp_publisher"
                                                        class="col-lg-12 control-label">Publisher</label>
                                                    <input type="text" id="inp_publisher" class="form-control"
                                                        placeholder="Enter Publisher Name/Description"
                                                        style="text-transform: uppercase;">
                                                    <p id="p_publisher" style="display: none" class="error_msg">
                                                        Publisher is required!
                                                    </p>
                                                </div>
                                                <div class="col-lg-3" style="margin-top: 15px;">
                                                    <label for="inp_edition"
                                                        class="col-lg-12 control-label">Edition</label>
                                                    <input type="text" id="inp_edition" class="form-control"
                                                        placeholder="Enter Book Edition"
                                                        style="text-transform: uppercase;">
                                                    <p id="p_edition" style="display: none" class="error_msg">Edition is
                                                        required!
                                                    </p>
                                                </div>
                                                <div class="col-lg-3" style="margin-top: 15px">
                                                    <label for="inp_donor" class="col-lg-12 control-label">Donated
                                                        By:</label>
                                                    <select class="select2-single form-control donor-select"
                                                        id="inp_donor" style="width: 100%;">
                                                        <option disabled value="0" selected>Select donor
                                                        </option>
                                                        <option v-for="item in aDonors" :value="item.donor_id">{{
                                                            item.donor_name }}</option>
                                                    </select>
                                                    <p id="p_donor" style="display: none" class="error_msg">Donor is
                                                        required!
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
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
                            <!-- COLLAPSIBLE-->
                        </div>
                    </div>
                    <!-- END: ADD NEW BOOK -->



                    <!-- START: PANEL SECTION FOR ORS COUNT -->
                    <div class="panel panel-colorbox-open panel-primary" id="spy2" style="margin: 1%">
                        <br>
                        <div class="panel-heading ">
                            <div class="panel-title hidden-xs">
                                <span class="fa fa-list"></span>Book List
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <table class="table table-striped table-hover" id="tbl_records" cellspacing="0"
                                width="100%">
                                <thead>
                                    <tr>
                                        <th style="text-align: center;">SysId</th>
                                        <th style="text-align: center;">Title</th>
                                        <th style="text-align: center;">Author</th>
                                        <th style="text-align: center;">Publisher</th>
                                        <th style="text-align: center;">Publishing Year</th>
                                        <th style="text-align: center;">Edition</th>
                                        <th style="text-align: center;">Status</th>
                                        <th style="text-align: center;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in aRecordList">
                                        <td style="width: 5%;text-align: center;">{{ item.temp_id }}</td>
                                        <td style="width: 35%;text-align: left;">{{ item.title }}</td>
                                        <td style="width: 15%;text-align: left;">{{ item.author }}</td>
                                        <td style="width: 10%;text-align: center;">{{ item.publisher }}</td>
                                        <td style="width: 5%;text-align: center;">{{ item.publication_year }}</td>
                                        <td style="width: 10%;text-align: center;">{{ item.edition }}</td>
                                        <td v-if="item.status === 'AVAILABLE'"
                                            style="width: 10%; text-align: center; background-color: #91fd93;"><b>{{ item.status
                                                }}</b></td>
                                        <td v-else style="width: 10%; text-align: center; background-color: #f99899;"><b>{{
                                            item.status }}</b></td>
                                        <td style="width: 5%; text-align: center;" width="20%">
                                            <button type="button" data-action="editDetails" :data-id="item.book_id"
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
                    <!-- END: PANEL SECTION FOR ORS COUNT -->


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
                    [1, 'asc']
                ],
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [7]
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
            aDonors: [],
            aRecordList: [],
            iActiveRecord: 0,
            bUpdateData: false,
        }
    },
    mounted() {
        this.initCollapsible();
        this.getDonors();
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
        getDonors: function () {
            $('.donor-select').select2();
            this.getRequest('donors/get', (mResponse) => {
                this.aDonors = mResponse.data;
            });
        },
        getRecordList: function () {
            let mSelf = this;
            this.getRequest('books/get', (mResponse) => {
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
            let inpTitle = sAction === 'create' ? '#inp_title' : '#inp_title_edit';
            let pErrTitle = sAction === 'create' ? '#p_title' : '#p_title_edit';

            // let inpPublisher = sAction === 'create' ? '#inp_publisher' : '#inp_publisher_edit';
            // let pErrPublisher = sAction === 'create' ? '#p_publisher' : '#p_publisher_edit';

            // let inpEdition = sAction === 'create' ? '#inp_edition' : '#inp_edition_edit';
            // let pErrEdition = sAction === 'create' ? '#p_edition' : '#p_edition_edit';

            let inpDonor = sAction === 'create' ? '#inp_donor' : '#inp_donor_edit';
            let pErrDonor = sAction === 'create' ? '#p_donor' : '#p_donor_edit';

            if ($(inpTitle).val() === '') {
                $(pErrTitle).css('display', '');
                bResult = false;
            }
            // if ($(inpPublisher).val() === '') {
            //     $(pErrPublisher).css('display', '');
            //     bResult = false;
            // }
            // if ($(inpEdition).val() === '') {
            //     $(pErrEdition).css('display', '');
            //     bResult = false;
            // }
            if ($(inpDonor).val() === '') {
                $(pErrDonor).css('display', '');
                bResult = false;
            }

            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_title').val(''),
            $('#inp_author').val(''),
            $('#inp_publishing_year').val(''),
            $('#inp_publisher').val(''),
            $('#inp_edition').val(''),
            // $('#inp_donor').val(''),
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_title_edit').val(''),
            $('#inp_author_edit').val(''),
            $('#inp_publishing_year_edit').val(''),
            $('#inp_publisher_edit').val(''),
            $('#inp_edition_edit').val(''),
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                title: $('#inp_title').val(),
                donor_id: $('#inp_donor').val(),
            };
            let sAuthor = $('#inp_author').val();
            let sPubYear = $('#inp_publishing_year').val();
            let sPublisher = $('#inp_publisher').val();
            let sEdition = $('#inp_edition').val();
            oParams = sAuthor !== '' ? Object.assign(oParams, {author : sAuthor}) : oParams;
            oParams = sPubYear !== '' ? Object.assign(oParams, {publication_year : sPubYear}) : oParams;
            oParams = sPublisher !== '' ? Object.assign(oParams, {publisher : sPublisher}) : oParams;
            oParams = sEdition !== '' ? Object.assign(oParams, {edition : sEdition}) : oParams;
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('books/create', oParams, (mResponse) => {
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
            const filteredRecord = this.aRecordList.filter(record => record.book_id == this.iActiveRecord);
            $('#inp_title_edit').val(filteredRecord[0].title);
            $('#inp_author_edit').val(filteredRecord[0].author);
            $('#inp_publishing_year_edit').val(filteredRecord[0].publication_year);
            $('#inp_publisher_edit').val(filteredRecord[0].publisher);
            $('#inp_edition_edit').val(filteredRecord[0].edition);
        },

        showEditModal: function () {
            let mSelf = this;
            Swal.fire({
                title: "<strong>Update Books's Details</strong>",
                width: 450,
                html: `
                <hr>
                                <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">
                                    <label for="inp_title_edit" class="col-lg-12 control-label" style="font-size: 14px">Title</label>
                                    <input type="text" id="inp_title_edit" class="form-control"
                                        placeholder="Enter title" style="text-transform:uppercase">
                                    <p id="p_title_edit" style="display: none" class="error_msg_edit">Title is required!</p>

                                </div>
                                 <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">
                                    <label for="inp_author_edit" class="col-lg-12 control-label" style="font-size: 14px">Author</label>
                                    <input type="text" id="inp_author_edit" class="form-control"
                                        placeholder="Enter Author" style="text-transform:uppercase">
                                    <p id="p_author_edit" style="display: none" class="error_msg_edit">Author is required!</p>
                                </div>
                                 <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">
                                    <label for="inp_publishing_year_edit" class="col-lg-12 control-label" style="font-size: 14px">Publishing Year</label>
                                    <input type="text" id="inp_publishing_year_edit" class="form-control"
                                        placeholder="Enter Year" style="text-transform:uppercase">
                                    <p id="p_publishing_year_edit" style="display: none" class="error_msg_edit">Publishing Year is required!</p>
                                </div>
                                 <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">
                                    <label for="inp_publisher_edit" class="col-lg-12 control-label" style="font-size: 14px">Publisher</label>
                                    <input type="text" id="inp_publisher_edit" class="form-control"
                                        placeholder="Enter Publisher" style="text-transform:uppercase">
                                    <p id="p_publisher_edit" style="display: none" class="error_msg_edit">Publisher is required!</p>
                                </div>
                                 <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">
                                    <label for="inp_edition_edit" class="col-lg-12 control-label" style="font-size: 14px">Edition</label>
                                    <input type="text" id="inp_edition_edit" class="form-control"
                                        placeholder="Enter Edition" style="text-transform:uppercase">
                                    <p id="p_edition_edit" style="display: none" class="error_msg_edit">Edition is required!</p>
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
                title: $('#inp_title_edit').val(),
            };
            let sAuthor = $('#inp_author_edit').val();
            let sPubYear = $('#inp_publishing_year_edit').val();
            let sPublisher = $('#inp_publisher_edit').val();
            let sEdition = $('#inp_edition_edit').val();
            oParams = sAuthor !== '' ? Object.assign(oParams, {author : sAuthor}) : oParams;
            oParams = sPubYear !== '' ? Object.assign(oParams, {publication_year : sPubYear}) : oParams;
            oParams = sPublisher !== '' ? Object.assign(oParams, {publisher : sPublisher}) : oParams;
            oParams = sEdition !== '' ? Object.assign(oParams, {edition : sEdition}) : oParams;
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('books/update/' + this.iActiveRecord, oParams, (mResponse) => {
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
</style>