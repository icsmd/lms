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
                            <a href="dashboard.html">Borrowing Log</a>
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
                    <div id="div_add_log" class="panel panel-colorbox-open panel-primary" style="margin: 1%">
                        <br>
                        <div class="panel-body pn">
                            <!-- COLLAPSIBLE-->
                            <div>
                                <!-- Basic AdminPanel - All features disabled except "minimized" option -->
                                <button type="button" class="collapsible"> <span class="fa fa-plus-square"></span>&nbsp;
                                    Add New Borrow Log Record</button>
                                <div class="content" style="padding: 1%;">
                                    <div class="form-group">
                                        <div class="row" style="margin: 1%;">
                                            <div class="col-md-10">
                                                <div class="col-lg-8" style="margin-top: 15px">
                                                    <label for="inp_book" class="col-lg-12 control-label">Book to
                                                        Borrow:</label>
                                                    <select class="select2-single form-control books-select"
                                                        id="inp_book" style="width: 100%;">
                                                        <option disabled value="0" selected>Select Book
                                                        </option>
                                                        <option v-for="item in aBooks" :value="item.book_id">{{
                                                            item.title }}</option>
                                                    </select>
                                                    <p id="p_book" style="display: none" class="error_msg">Book is
                                                        required!
                                                    </p>
                                                </div>
                                                <div class="col-lg-4" style="margin-top: 15px">
                                                    <label for="inp_borrower"
                                                        class="col-lg-12 control-label">Borrower:</label>
                                                    <select class="select2-single form-control borrower-select"
                                                        id="inp_borrower" style="width: 100%;">
                                                        <option disabled value="0" selected>Select Borrower
                                                        </option>
                                                        <option v-for="item in aBorrowers" :value="item.borrower_id">{{
                                                            item.borrower_name }}</option>
                                                    </select>
                                                    <p id="p_borrower" style="display: none" class="error_msg">Borrower
                                                        is
                                                        required!
                                                    </p>
                                                </div>

                                                <!-- DATES -->
                                                <div class="admin-form mw1000">
                                                    <!-- DATE BORROWED -->
                                                    <div class="col-lg-4" style="margin-top: 15px;">
                                                        <span style="font-weight: 700; margin-left: 10px;">Date
                                                            Borrowed:</span>
                                                        <label for="datetimeborrowed" class="field prepend-picker-icon">
                                                            <input type="text" id="datetimeborrowed"
                                                                name="datetimeborrowed" class="gui-input"
                                                                placeholder="Enter date and time borrowed">
                                                        </label>
                                                        <p id="p_datetimeborrowed" style="display: none"
                                                            class="error_msg">
                                                            Date and Time of Borrowed is required!</p>
                                                    </div>
                                                    <!-- DATE DUE -->
                                                    <div class="col-lg-4" style="margin-top: 15px;">
                                                        <span style="font-weight: 700; margin-left: 10px;">Date
                                                            Due:</span>
                                                        <label for="datetimedue" class="field prepend-picker-icon">
                                                            <input type="text" id="datetimedue" name="datetimedue"
                                                                class="gui-input" placeholder="Enter date and time due">
                                                        </label>
                                                        <p id="p_datetimedue" style="display: none" class="error_msg">
                                                            Date and Time of Due is required!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <button type="button" id="btnSaveNewDetails"
                                                    class="btn btn-block btn-success"
                                                    style="margin-right: 7%; margin-top: 33px; font-size: 16px">
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


                    <!-- START DETAILS OF BORROW LOG -->
                    <div id="div_edit_log" class="panel panel-colorbox-open panel-warning"
                        style="margin: 1%; display: none;">
                        <br>
                        <div class="panel-heading ">
                            <div class="panel-title hidden-xs">
                                <span class="fa fa-external-link"></span>View Log Details
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <div class="form-group">
                                <div class="row" style="margin: 1%;">
                                    <div class="col-md-10">
                                        <div class="col-lg-8" style="margin-top: 15px">
                                            <label for="inp_book_edit" class="col-lg-12 control-label">Book to
                                                Borrow:</label>
                                            <select class="select2-single form-control books-select-edit"
                                                id="inp_book_edit" style="width: 100%;">
                                                <option disabled value="0" selected>Select Book
                                                </option>
                                                <option v-for="item in aBooks" :value="item.book_id">{{
                                                    item.title }}</option>
                                            </select>
                                            <p id="p_book_edit" style="display: none" class="error_msg">Book is
                                                required!
                                            </p>
                                        </div>
                                        <div class="col-lg-4" style="margin-top: 15px">
                                            <label for="inp_borrower_edit"
                                                class="col-lg-12 control-label">Borrower:</label>
                                            <select class="select2-single form-control borrower-select-edit"
                                                id="inp_borrower_edit" style="width: 100%;">
                                                <option disabled value="0" selected>Select Borrower
                                                </option>
                                                <option v-for="item in aBorrowers" :value="item.borrower_id">{{
                                                    item.borrower_name }}</option>
                                            </select>
                                            <p id="p_borrower_edit" style="display: none" class="error_msg">Borrower is
                                                required!
                                            </p>
                                        </div>

                                        <!-- DATES -->
                                        <div class="admin-form mw1000">
                                            <!-- DATE BORROWED -->
                                            <div class="col-lg-4" style="margin-top: 15px;">
                                                <span style="font-weight: 700; margin-left: 10px;">Date Borrowed:</span>
                                                <label for="datetimeborrowed_edit" class="field prepend-picker-icon">
                                                    <input type="text" id="datetimeborrowed_edit"
                                                        name="datetimeborrowed_edit" class="gui-input"
                                                        placeholder="Enter date and time borrowed">
                                                </label>
                                                <p id="p_datetimeborrowed_edit" style="display: none" class="error_msg">
                                                    Date and Time of Borrowed is required!</p>
                                            </div>
                                            <!-- DATE DUE -->
                                            <div class="col-lg-4" style="margin-top: 15px;">
                                                <span style="font-weight: 700; margin-left: 10px;">Date Due:</span>
                                                <label for="datetimedue_edit" class="field prepend-picker-icon">
                                                    <input type="text" id="datetimedue_edit" name="datetimedue_edit"
                                                        class="gui-input" placeholder="Enter date and time due">
                                                </label>
                                                <p id="p_datetimedue_edit" style="display: none" class="error_msg">
                                                    Date and Time of Due is required!</p>
                                            </div>
                                            <!-- DATE RETURN -->
                                            <div class="col-lg-4" style="margin-top: 15px;">
                                                <span style="font-weight: 700; margin-left: 10px;">Date Returned:</span>
                                                <label for="datetimereturned" class="field prepend-picker-icon">
                                                    <input type="text" id="datetimereturned" name="datetimereturned"
                                                        class="gui-input" placeholder="Enter date and time returned">
                                                </label>
                                                <p id="p_datetimereturned" style="display: none" class="error_msg">
                                                    Date and Time of Return is required!</p>
                                            </div>

                                        </div>
                                        <!-- REMARKS -->
                                        <div class="col-lg-12" style="margin-top: 15px;">
                                            <label for="inp_remarks" class="col-lg-12 control-label">Remarks
                                                (Optional):</label>
                                            <input type="text" id="inp_remarks" class="form-control"
                                                placeholder="Remark's Name">
                                        </div>
                                        <!-- REMARKS LIST-->
                                        <div class="col-lg-12" style="margin-top: 15px;">
                                            <table class="table table-striped table-hover" cellspacing="0" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th style="text-align: center;">Remarks</th>
                                                        <th style="text-align: center;">Remarked By</th>
                                                        <th style="text-align: center;">Date and Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in aRemarks">
                                                        <td style="text-align: left">{{ item.bl_remarks }}</td>
                                                        <td style="text-align: center;">{{ item.username }}</td>
                                                        <td style="text-align: center;">{{ nullCheck(item.created_at,
                                                            'date') }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button type="button" id="btnSaveUpdate" class="btn btn-block btn-success"
                                            style="margin-right: 7%; margin-top: 33px; font-size: 16px; display: none;">
                                            <i class="fa fa-floppy-o "></i>
                                            Save Update
                                        </button>
                                        <button type="button" id="btnCancelUpdate" class="btn btn-block btn-default"
                                            style="margin-right: 7%; margin-top: 33px; font-size: 16px;">
                                            <i class="fa fa-times "></i>
                                            Cancel Editing
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: VIEW DETAILS OF BORROW LOG -->

                    <!-- START: PANEL SECTION FOR BORROW LOGS -->
                    <div class="panel panel-colorbox-open panel-primary" style="margin: 1%;">
                        <br>
                        <div class="panel-heading ">
                            <div class="panel-title hidden-xs">
                                <span class="fa fa-list"></span>Borrow Log Records
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <table class="table table-striped table-hover" id="tbl_records" cellspacing="0"
                                width="100%">
                                <thead>
                                    <tr>
                                        <th style="text-align: center;">SysId</th>
                                        <th style="text-align: center;">Book Title</th>
                                        <th style="text-align: center;">Borrower</th>
                                        <th style="text-align: center;">Date Borrowed</th>
                                        <th style="text-align: center;">Date Due</th>
                                        <th style="text-align: center;">Date Returned</th>
                                        <th style="text-align: center;">No. of Days Borrowed</th>
                                        <th style="text-align: center;">Last Modified</th>
                                        <th style="text-align: center;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in aRecordList">
                                        <td style="text-align: center;">{{ item.temp_id }}</td>
                                        <td style="text-align: left;">{{ item.title }}</td>
                                        <td style="text-align: left;">{{ item.borrower_name }}</td>
                                        <td style="text-align: left;">{{ nullCheck(item.date_borrowed, 'date') }}</td>
                                        <td style="text-align: left;">{{ nullCheck(item.date_due, 'date') }}</td>
                                        <td style="text-align: left;">{{ nullCheck(item.date_returned, 'date') }}</td>
                                        <td style="text-align: left;">{{ item.days_borrowed }}</td>
                                        <td style="text-align: center;">{{ nullCheck(item.updated_at, 'date') }}</td>
                                        <td style="text-align: center;" width="20%">
                                            <button type="button" data-action="editDetails" :data-id="item.bl_id"
                                                class="btn btn-md btn-warning editDetails"
                                                style="margin-left: 20px; margin-right: 10px;">
                                                <i class="fa fa-external-link "></i>
                                                View Details
                                            </button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- END: PANEL SECTION FOR BORROW LOGS -->

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
                    [0, 'desc']
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
            aBooks: [],
            aBorrowers: [],
            aRecordList: [],
            aRemarks: [],
            iActiveRecord: 0,
            bUpdateData: false,
        }
    },
    mounted() {
        this.initCollapsible();
        this.initEventListeners();
        this.initDatePickers();
        this.getBooks();
        this.getBorrowers();
        this.getRecordList();
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

        initDatePickers: function () {

            $('#datetimeborrowed').datetimepicker({
                showOn: 'both',
                buttonText: '<i class="fa fa-calendar-o"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            $("#datetimeborrowed").val(moment().format('MM/DD/YYYY HH:mm'));

            $('#datetimedue').datetimepicker({
                showOn: 'both',
                buttonText: '<i class="fa fa-calendar-o"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            $('#datetimeborrowed_edit').datetimepicker({
                showOn: 'both',
                buttonText: '<i class="fa fa-calendar-o"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            $('#datetimedue_edit').datetimepicker({
                showOn: 'both',
                buttonText: '<i class="fa fa-calendar-o"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            $('#datetimereturned').datetimepicker({
                showOn: 'both',
                buttonText: '<i class="fa fa-calendar-o"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
        },
        getBooks: function () {
            $('.books-select').select2();
            $('.books-select-edit').select2();
            this.getRequest('books/get', (mResponse) => {
                this.aBooks = mResponse.data;
            });
        },
        getBorrowers: function () {
            $('.borrower-select').select2();
            $('.borrower-select-edit').select2();
            this.getRequest('borrowers/get', (mResponse) => {
                this.aBorrowers = mResponse.data;
            });
        },
        getRecordList: function () {
            let mSelf = this;
            this.getRequest('borrow-log/get', (mResponse) => {
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
                    mSelf.checkReturnDate();
                }
                if (event.target.id === 'btnCancelUpdate') {
                    $('#div_add_log').css('display', '');
                    $('#div_edit_log').css('display', 'none');
                    mSelf.clearUpdateEntries();
                    mSelf.bUpdateData = false;
                }
                if (event.target.dataset.action === 'editDetails') {
                    $('#div_add_log').css('display', 'none');
                    $('#div_edit_log').css('display', '');
                    mSelf.iActiveRecord = event.target.dataset.id;
                    setTimeout(function () { mSelf.getDetailsToEdit(); }, 100);
                }
            }, false);
        },

        validateEntries: function (sAction) {
            let bResult = true;

            let inpBook = sAction === 'create' ? '#inp_book' : '#inp_book_edit';
            let pErrBook = sAction === 'create' ? '#p_book' : '#p_book_edit';

            let inpBorrower = sAction === 'create' ? '#inp_borrower' : '#inp_borrower_edit';
            let pErrBorrower = sAction === 'create' ? '#p_borrower' : '#p_borrower_edit';

            let inpDateTimeBorrowed = sAction === 'create' ? '#datetimeborrowed' : '#datetimeborrowed_edit';
            let pErrDateTimeBorrowed = sAction === 'create' ? '#p_datetimeborrowed' : '#p_datetimeborrowed_edit';

            let inpDateTimeDue = sAction === 'create' ? '#datetimedue' : '#datetimedue_edit';
            let pErrDateTimeDue = sAction === 'create' ? '#p_datetimedue' : '#p_datetimedue_edit';

            if ($(inpBook).val() === '') {
                $(pErrBook).css('display', '');
                bResult = false;
            }
            if ($(inpBorrower).val() === '') {
                $(pErrBorrower).css('display', '');
                bResult = false;
            }
            if ($(inpDateTimeBorrowed).val() === '') {
                $(pErrDateTimeBorrowed).css('display', '');
                bResult = false;
            }
            if ($(inpDateTimeDue).val() === '') {
                $(pErrDateTimeDue).css('display', '');
                bResult = false;
            }

            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_book').val('');
            $('#inp_borrower').val('');
            $("#datetimeborrowed").val(moment().format('MM/DD/YYYY HH:mm'));
            $('#datetimedue').val('');
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_book_edit').val('');
            $('#inp_borrower_edit').val('');
            $("#datetimeborrowed_edit").val(moment().format('MM/DD/YYYY HH:mm'));
            $('#datetimedue_edit').val('');
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                book_id: $('#inp_book').val(),
                borrower_id: $('#inp_borrower').val(),
                date_borrowed: moment($('#datetimeborrowed').val()).format('YYYY-MM-DD HH:mm:ss'),
                date_due: moment($('#datetimedue').val()).format('YYYY-MM-DD HH:mm:ss'),
            };
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('borrow-log/create', oParams, (mResponse) => {
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
            const filteredRecord = this.aRecordList.filter(record => record.bl_id == this.iActiveRecord);
            $(".books-select-edit").select2().val(filteredRecord[0].book_id).trigger('change');
            $('.borrower-select-edit').select2().val(filteredRecord[0].borrower_id).trigger('change');
            $('#datetimeborrowed_edit').val(moment(filteredRecord[0].date_borrowed).format('MM/DD/YYYY HH:mm'));
            $('#datetimedue_edit').val(moment(filteredRecord[0].date_due).format('MM/DD/YYYY HH:mm'));
            this.aRemarks = filteredRecord[0].remarks;
            if (filteredRecord[0].date_returned !== null) {
                $('#btnSaveUpdate').css('display', 'none');
                $('#datetimereturned').val(moment(filteredRecord[0].date_returned).format('MM/DD/YYYY HH:mm'));
            } else {
                $('#btnSaveUpdate').css('display', '');
            }
        },

        checkReturnDate: function () {
            let mSelf = this;
            if ($('#datetimereturned').val() === '') {
                mSelf.updateEntries();
            } else {
                Swal.fire({
                    title: "Updating the log with date returned means the book is already accounted back in the library.",
                    text: "Are you sure you want to proceed?",
                    icon: "warning",
                    showCancelButton: true
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        mSelf.updateEntries();
                    }
                });
            }
        },

        updateEntries: function () {
            let mSelf = this;
            let oParams = {
                book_id: $('#inp_book_edit').val(),
                borrower_id: $('#inp_borrower_edit').val(),
                date_borrowed: moment($('#datetimeborrowed_edit').val()).format('YYYY-MM-DD HH:mm:ss'),
                date_due: moment($('#datetimedue_edit').val()).format('YYYY-MM-DD HH:mm:ss')
            };
            let sDateReturned = $('#datetimereturned').val();
            let sRemarks =  $('#inp_remarks').val();

            oParams = sDateReturned === '' ? oParams : Object.assign(oParams, {date_returned: moment(sDateReturned).format('YYYY-MM-DD HH:mm:ss')});
            oParams = sRemarks === '' ? oParams : Object.assign(oParams, {bl_remarks: sRemarks});
        
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('borrow-log/update/' + this.iActiveRecord, oParams, (mResponse) => {
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