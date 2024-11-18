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
                    <li class="crumb-active"><a>Notifications</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title"> Notifications </span>
            </div>
            <div class="panel-body">
                <!-- START: NOTIFICATIONS TABLE -->
                <div class="col-md-12">
                    <div class="panel panel-colorbox-open panel-system" id="spy2">
                        <div class="panel-heading">
                            <div class="panel-title hidden-xs">
                                <span class="fa fa-cogs"></span>Actions Available
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <button id="btnMarkAsRead" type="button" class="btn btn-lg btn-success" style="margin: 1%">
                                <i class="fa fa-check"></i>&nbsp;
                                Mark all as read
                            </button>
                        </div>
                    </div>


                    <div class="panel panel-colorbox-open panel-dark" id="spy2">
                        <div class="panel-heading">
                            <div class="panel-title hidden-xs">
                                <span class="glyphicon glyphicon-tasks"></span>Notifications (Unread)
                            </div>
                        </div>
                        <div class="panel-body pn">
                            <table class="table table-striped table-hover" id="tbl_notifications" cellspacing="0"
                                width="100%">
                                <thead>
                                    <tr>
                                        <th style="text-align: center;">Sys No.</th>
                                        <th style="text-align: center;">Description</th>
                                        <th style="text-align: center;">Initiator</th>
                                        <th style="text-align: center;">Date & Time</th>
                                        <th style="text-align: center;">Status</th>
                                        <th style="text-align: center;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in aNotifications">
                                        <td style="text-align: center;">{{ item.temp_no }} </td>
                                        <td style="text-align: left;">{{ item.notif_desc }} </td>
                                        <td style="text-align: center;">{{ item.username }} </td>
                                        <td style="text-align: center;">{{ convertDateFormat(item.date_created, 'MMM-DD-YYYY HH:MM:ss a') }} </td>
                                        <td style="text-align: center;">{{ item.notif_status === 1 ? 'Viewed' : 'Not Yet Viewed' }} </td>
                                        <td style="text-align: center;"><a data-action="redirect" :data-href="item.notif_url + item.notif_no">Click to redirect</a></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- END: NOTIFICATIONS TABLE -->
            </div>
        </div>
    </section>
</template>
<script>
import Utilities from '../../../libraries/utilities.js';
import HttpRequest from '../../../libraries/request.js';
import Swal from 'sweetalert2';
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            aNotifications: [],
            aNotifTableConfig: {
                "aaSorting": [
                    [0, 'desc']
                ],
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [1]
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
        }
    },
    mounted() {
        // this.getNotifications();
        this.initEventListeners();
    },
    methods: {
        getNotifications: function () {
            let mSelf = this;
            this.getRequest('notif/get-list', (mResponse) => {
                this.aNotifications = mResponse.data.rows;
                let bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_notifications');
                if (bIsDataTableActive === true) {
                    $('#tbl_notifications').DataTable().destroy();
                }
                setTimeout(function () {
                    mSelf.initTblNotifications();
                }, 500);
            }, {notif_status: 0});
        },

        initTblNotifications: function () {
            $('#tbl_notifications').DataTable(this.aNotifTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
        },

        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                if (event.target.id === 'btnMarkAsRead') {
                   mSelf.markAllAsRead();
                }
                if (event.target.dataset.action === 'redirect') {
                   window.location.href = event.target.dataset.href  ;
                }
            }, false);
        },

        markAllAsRead: function () {
            let sNotifIds = '';
            this.aNotifications.forEach(element => {
                sNotifIds += element.notif_no + ',';
            });
            let mSelf = this;
            Swal.fire({
                title: "Confirmation",
                text: 'Are you sure you want to mark all notifications as read? You may miss some important items if you did not check them individually.',
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#c7baba",
                confirmButtonText: 'Yes, proceed.'
            }).then((result) => {
                if (result.isConfirmed) {
                    let oParams = {
                        notif_no: sNotifIds,
                        notif_status: 1
                    };
                    mSelf.postRequest('notif/mass/update', oParams, () => {
                        mSelf.showSuccessAlert('Successfully marked all notifications as read');
                        mSelf.getNotifications();
                    });
                }
            });
        },
    }
}
</script>