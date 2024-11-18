import Swal from "sweetalert2"
import utilities from "./utilities";
export default {
    mixins: [
        utilities
    ],
    data() {
        return {
            iCrNo: 0,
            sFundSource: '',
            aEntryDetails: [],
        }
    },
    mounted() {
        this.initThisLibEventListener();
    },
    methods: {
        showViewDetailsModal: function () {
            let mSelf = this;
            Swal.fire({
                width: 700,
                html: mSelf.buildInfoTable(),
                showCancelButton: false,
                showCloseButton: true,
                showConfirmButton: false,
                focusConfirm: false,
                confirmButtonText: `<i class="fa fa-check"></i> Okay got it`,
                confirmButtonAriaLabel: "Save",
                cancelButtonText: `<i class="fa fa-times"></i> Close`,
                cancelButtonAriaLabel: "Cancel"
            });
        },

        buildInfoTable: function () {
            let oHtmlInfoTable = `
            <div class="panel panel-colorbox-open panel-info col-md-12" id="spy2">
            <br>
            <div class="panel-heading">
              <div class="panel-title hidden-xs">
                <span class="fa fa-list-alt"></span>Transaction's Current Details
              </div>
            </div>
            <div class="panel-body pn">
              <div style="margin: 0%; font-size: 15px">
                <table class="table table-bordered mbn" cellspacing="0" width="60%" style="margin-top: 3%;">
                  <tbody>
                    <tr>
                      <th style="text-align: left; width: 35%">Sys ID</th>
                      <td style="text-align: left;">` + this.aEntryDetails.temp_id  + `</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered mbn" cellspacing="0" width="60%" style="margin-top: 3%;">
                  <tbody>
                    <tr>
                      <th style="text-align: left; width: 35%">Date of Transaction</th>
                      <td style="text-align: left;">` + this.aEntryDetails.transact_date  + `</td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Date/Time Encoded</th>
                      <td style="text-align: left;">` + this.aEntryDetails.date_created  + `</td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Date/Time Last Modified</th>
                      <td style="text-align: left;">` + this.aEntryDetails.date_modified  + `</td>
                    </tr>
                  </tbody>
                </table>
                <br>
                <table class="table table-bordered mbn" cellspacing="0" width="60%">
                  <tbody>
                    <tr v-if="sSheetFundType !== 'ps'">
                      <th style="text-align: left; width: 35%">OR Number</th>
                      <td style="text-align: left;">` + this.aEntryDetails.or_number  + `</td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Responsibility Center Code</th>
                      <td style="text-align: left;">` + this.aEntryDetails.region_abbr  + `</td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Fund Source Details</th>
                      <td style="text-align: left;">
                        <b>ORS No.:</b>` + this.sFundSource +`<br>
                        <b>DV No.:</b> ` + this.aEntryDetails.fs_dv_no + `<br>
                        <b>ADA/Check No.:</b> ` + this.aEntryDetails.fs_cpo_no + `
                      </td>
                    </tr>
                    <tr v-if="sSheetFundType !== 'ps'">
                      <th style="text-align: left; width: 35%">Payee's Details</th>
                      <td style="text-align: left;">
                        <b>Name:</b> ` + this.aEntryDetails.payee_name  + `<br>
                        <b>TIN:</b> ` + this.aEntryDetails.payee_tin  + `<br>
                        <b>Address:</b> ` + this.aEntryDetails.payee_address  + `<br>
                      </td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Nature of Payment Details</th>
                      <td style="text-align: left;">
                        <b>UACS Object Code:</b> ` + this.aEntryDetails.uacs_code + `<br>
                        <b>Description:</b> ` + this.aEntryDetails.uacs_desc  + ` <br>
                      </td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Tax Type:</th>
                      <td style="text-align: left;">` + this.aEntryDetails.tcl_desc  + `</td>
                    </tr>
                  </tbody>
                </table>
                <br>
                <table class="table table-bordered mbn" cellspacing="0" width="60%">
                  <tbody>
                    <tr>
                      <th style="text-align: left; width: 35%">Gross Amount</th>
                      <td style="text-align: right;">` + this.convertNumberFormat(this.aEntryDetails.gross_amount)  + `</td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Tax Amount</th>
                      <td style="text-align: right;">` + this.convertNumberFormat(this.aEntryDetails.tax_amount)  + `</td>
                    </tr>
                    <tr>
                      <th style="text-align: left; width: 35%">Net Amount</th>
                      <td style="text-align: right;">` + this.convertNumberFormat(this.aEntryDetails.net_amount)  + `</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
            `;
            
            if (this.$root.aUserInfo.type === 'sdor') {
                oHtmlInfoTable = oHtmlInfoTable +  `<button type="button" class="btn btn-lg btn-warning" data-action="edit-entry">
                <i class="fa fa-pencil-square-o"></i> Go to Edit details Page
                </button>`;
              
            }

            return oHtmlInfoTable;
        },

        getEntryDetails: function (iId) {
            this.getRequest('sdor/get-entry-details/' + iId, (mResponse) => {
                this.aEntryDetails = mResponse.data[0];
                this.iCrNo = this.aEntryDetails.cr_no
                this.sFundSource = this.aEntryDetails.fs_ors_no + ' (' + this.aEntryDetails.fs_desc + ')';
                this.showViewDetailsModal();
            });
        },

        initThisLibEventListener: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.dataset.action === 'view-entry-details') {
                    mSelf.getEntryDetails(event.target.dataset.id);
                }
                if (event.target.dataset.action === 'edit-entry') {
                    window.location.href = '/front/sdor/view-entry-details/' + mSelf.iCrNo;
                }
            }, false);
        },
    }
}