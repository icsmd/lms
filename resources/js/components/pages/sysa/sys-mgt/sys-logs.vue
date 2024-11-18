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
                    <li class="crumb-active"><a>User System Logs</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title">User System Logs</span>
            </div>
            <div class="panel-body">
                <!-- START: FILTER LOGS  -->
                <div class="panel panel-colorbox-open panel-primary" id="spy2">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-refresh"></span>Filter Logs by Date
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="admin-form mw1000 left-block" style="margin-top: 10px;">
                            <div class="col-lg-3">
                                <label for="inputStandard" class="col-lg-12 control-label"><b>Start Date
                                        (From)</b></label>
                                <label for="datepicker1" class="field prepend-icon">
                                    <input type="text" id="inpStartDate" name="inpStartDate" class="gui-input"
                                        placeholder="Enter Start Date" readonly>
                                    <label class="field-icon">
                                        <i class="fa fa-calendar-o"></i>
                                    </label>
                                </label>
                            </div>
                            <div class="col-lg-3">
                                <label for="inputStandard" class="col-lg-12 control-label"><b>End Date (To)</b></label>
                                <label for="datepicker1" class="field prepend-icon">
                                    <input type="text" id="inpEndDate" name="inpEndDate" class="gui-input"
                                        placeholder="Enter End Date" readonly>
                                    <label class="field-icon">
                                        <i class="fa fa-calendar-o"></i>
                                    </label>
                                </label>
                            </div>
                        </div>
                        <button id="btnFilterLog" class="button btn-lg btn-primary"
                            style="margin: 10px; margin-top: 16px;">
                            <i class="fa fa-refresh"></i>
                            &nbsp;Filter List
                        </button>
                    </div>
                </div>
                <!-- END:  FILTER LOGS -->

                <!-- START: PAYEES' TABLE -->
                <div class="panel panel-colorbox-open panel-dark" id="spy2">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-list"></span>System User Entry Logs
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <table class="table table-striped table-hover" id="tbl_records" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="text-align: center;">Log No</th>
                                    <th style="text-align: center;">Date and Time of Entry</th>
                                    <th style="text-align: center;">Username</th>
                                    <th style="text-align: center;">User Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in aRecordList">
                                    <td style="text-align: center;">{{ item.log_no }}</td>
                                    <td style="text-align: center;">{{ item.date_created }} </td>
                                    <td style="text-align: center;">{{ item.username }}</td>
                                    <td style="text-align: center;">{{ item.user_type }}</td>
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
import moment from 'moment'
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
                    [0, 'desc']
                ],
                "aoColumnDefs": [{
                    'bSortable': true,
                    'aTargets': [-1]
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
        }
    },
    mounted() {
        this.initPlugins();
        this.initEventListeners();
        this.getRecordList();
    },
    methods: {
        /**
         * Initialize plugins
         */
        initPlugins: function () {
            // Initialize datepicker for start date
            $("#inpStartDate").datepicker({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                showButtonPanel: false,
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            // Initialize datepicker for end date
            $("#inpEndDate").datepicker({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                showButtonPanel: false,
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            /** Preload date now for initial date */
            $('#inpStartDate').val(moment().format('MM/DD/YYYY'));
            $('#inpEndDate').val(moment().format('MM/DD/YYYY'));
        },
        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                if (event.target.id === 'btnFilterLog') {
                    mSelf.getRecordList();
                }
            }, false);
        },
        getRecordList: function () {
            let mSelf = this;
            setTimeout(function () {
                mSelf.getRequest('user-logs/get-list', (mResponse) => {
                    mSelf.aRecordList = mResponse.data;
                    let bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_records');
                    if (bIsDataTableActive === true) {
                        $('#tbl_records').DataTable().destroy();
                    }
                    setTimeout(function () {
                        mSelf.initTblRecords();
                    }, 500);
                }, {
                    start_date: moment($('#inpStartDate').val()).format('YYYY-MM-DD'),
                    end_date: moment($('#inpEndDate').val()).format('YYYY-MM-DD'),
                });
            }, 200);
        },
        initTblRecords: function () {
            $('#tbl_records').DataTable(this.aTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
        },
    }
}
</script>