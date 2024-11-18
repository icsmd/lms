"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_bdgt_ors_bdgt_ors_view_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libraries/utilities */ "./resources/js/libraries/utilities.js");
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libraries/request.js */ "./resources/js/libraries/request.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_utilities__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_request_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      iFsId: 0,
      aFsDetails: [],
      aFundCluster: [],
      aRegionList: [],
      sFsStat: '',
      sFundSource: '',
      sSheetFundType: '',
      sSheetTypeLink: '',
      aUacsList: [],
      aFSList: [],
      aPayeeList: [],
      aTaxClass: [],
      sSelectedTax: '',
      fTaxVATValue: 1.12,
      aTaxCodes: [],
      aFilteredTaxCodes: [],
      sSheetStatus: '',
      aSelectedUacs: [],
      // aFilteredUacs: [],
      bFormValid: false,
      sDefaultRemarks: 'ORS ready for DV issuance. Nothing to note in particular.',
      sRemarksHint: 'You may specify other important details to point out for this ORS. If none, you may leave the default message as it is.'
    };
  },
  watch: {
    sSelectedTax: function sSelectedTax(sVal) {
      this.computeTax(0);
      this.filterTaxCodes(sVal);
    }
  },
  mounted: function mounted() {
    this.getFsDetails();
    this.initEventListener();
  },
  methods: {
    // Initializing Plugins
    initializePlugins: function initializePlugins() {
      // Init Select2 - Basic Single
      $(".fs-select").select2();
      $(".uacs-select").select2();

      // Initialize datepicker
      $("#inpDateTransact").datepicker({
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        showButtonPanel: false,
        beforeShow: function beforeShow(input, inst) {
          var newclass = 'admin-form';
          var themeClass = $(this).parents('.admin-form').attr('class');
          var smartpikr = inst.dpDiv.parent();
          if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
          }
        }
      });
    },
    getUacsList: function getUacsList() {
      var _this = this;
      this.getRequest('uacs/get-list', function (mResponse) {
        _this.aUacsList = mResponse.data;
      });
    },
    getRegionList: function getRegionList() {
      var _this2 = this;
      this.getRequest('region/get-list', function (mResponse) {
        _this2.aRegionList = mResponse.data;
      });
    },
    getFundCluster: function getFundCluster() {
      var _this3 = this;
      this.getRequest('fund-cluster/get-list', function (mResponse) {
        _this3.aFundCluster = mResponse.data;
      });
    },
    getFsDetails: function getFsDetails() {
      var _this4 = this;
      var mSelf = this;
      this.iFsId = this.$route.params.id;
      this.getRequest('bdgt/get-fund-source', function (mResponse) {
        _this4.aFsDetails = mResponse.data[0];
        _this4.sFsStat = _this4.aFsDetails.fs_status;
        if (_this4.sFsStat === 'OPEN' || _this4.sFsStat === 'FOR ORS REV') {
          $('#edit_transact_div').css('display', '');
          setTimeout(function () {
            $(".uacs-select").select2();
            $(".fc-select").select2();
            $(".type-select").select2();
            $(".region-select").select2();
            mSelf.getFundCluster();
            mSelf.initializePlugins();
            mSelf.getRegionList();
            mSelf.getUacsList();
          }, 500);
          setTimeout(function () {
            mSelf.setFieldsValue();
          }, 1000);
        } else {
          $('#info_message_div').css('display', '');
        }
      }, {
        fs_id: this.iFsId
      });
    },
    setFieldsValue: function setFieldsValue() {
      // this.initEventListener();
      var mSelf = this;
      setTimeout(function () {
        $(".fc-select").select2().val(mSelf.aFsDetails.fc_id).trigger('change');
        $(".type-select").select2().val(mSelf.aFsDetails.fs_type).trigger('change');
        $(".region-select").select2().val(mSelf.aFsDetails.region_id).trigger('change');
      }, 200);
      $('#inpDateIssued').val(this.convertDateFormat(this.aFsDetails.date_created, 'MM/DD/YYYY'));
      $('#inp_ors_number').val(this.aFsDetails.ors_no);
      $('#inp_short_desc').val(this.aFsDetails.fs_desc);
      $('#inp_df_number').val(this.aFsDetails.df_ref_no);
      $('#inp_gross_amount').val(this.aFsDetails.fs_gross_amount);
      $('#inp_remarks').text(this.aFsDetails.remarks === null ? '' : this.aFsDetails.remarks);
      this.initSelectedUacsTable();
    },
    initSelectedUacsTable: function initSelectedUacsTable() {
      var mSelf = this;
      this.aFsDetails.breakdown.forEach(function (element) {
        var uacsId = element.uacs_id;
        var uacsCode = element.uacs_code;
        var uacsDesc = element.uacs_acc_title;
        var amount = element.fsb_amount;
        var table = document.getElementById("tbl_uacs_selection").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = uacsCode + ': ' + uacsDesc;
        cell2.innerHTML = "₱ " + amount;
        cell3.innerHTML = "<button data-action=\"btndeleteUacs\"\n                                 class=\"btn btn-md btn-danger pull-right\">\n                                 <i class=\"fa fa-trash\"></i>\n                               </button";
        // Store selected car data
        mSelf.aSelectedUacs.push({
          id: uacsId,
          desc: uacsDesc,
          amount: amount
        });
      });
    },
    initEventListener: function initEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'href') {
          window.location.href = '/front/bdgt/ors/view';
        }
        if (event.target.id === 'btnUpdateEntry') {
          mSelf.processEntry();
        }
        if (event.target.id === 'btnForDVIssuance') {
          mSelf.changeStatus();
        }
        if (event.target.id === 'btnAddUacs') {
          mSelf.addSelectedUacs();
        }
        if (event.target.dataset.action === 'btndeleteUacs') {
          mSelf.deleteRow(event.target);
        }
      }, false);
    },
    addSelectedUacs: function addSelectedUacs() {
      var uacsSelected = document.getElementById("inp_uacs");
      var uacsAmount = document.getElementById("inp_uacs_amount");
      if (uacsSelected.value == 0 || parseFloat(uacsAmount.value) == 0.00) {
        this.showErrorAlert('Uacs is required and amount must be greater than zero!');
        return;
      }
      var selectedUacs = uacsSelected.options[uacsSelected.selectedIndex];
      var uacsId = selectedUacs.getAttribute("data-id");
      var uacsDesc = selectedUacs.text;
      var amount = uacsAmount.value;
      var table = document.getElementById("tbl_uacs_selection").getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      cell1.innerHTML = uacsDesc;
      cell2.innerHTML = "₱ " + amount;
      cell3.innerHTML = "<button data-action=\"btndeleteUacs\"\n                                 class=\"btn btn-md btn-danger pull-right\">\n                                 <i class=\"fa fa-trash\"></i>\n                               </button";
      // Store selected car data
      this.aSelectedUacs.push({
        id: uacsId,
        desc: uacsDesc,
        amount: amount
      });
    },
    deleteRow: function deleteRow(btn) {
      var row = btn.parentNode.parentNode;
      var index = row.rowIndex - 1; // Adjusting for the header row
      this.aSelectedUacs.splice(index, 1);
      row.parentNode.removeChild(row);
    },
    changeStatus: function changeStatus() {
      var _this5 = this;
      var mSelf = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Confirmation',
        html: 'By changing the status of this ORS, the authority to modify this entry will be transferred to the Accounting Division. Are you sure you want to proceed?',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceed."
      }).then(function (result) {
        if (result.isConfirmed) {
          var oParams = {
            ors_no: mSelf.aFsDetails.ors_no,
            fs_status: 'FOR DV',
            history_remarks: $('#txt_remarks').val(),
            datetime_ors_forwarded: moment().format('YYYY-MM-DD HH:mm:ss')
          };
          mSelf.postRequest('bdgt/update-fund-source/' + _this5.iFsId, oParams, function (mResponse) {
            mSelf.showSuccessAlert('Successfully updated the status');
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          });
        }
      });
    },
    updateEntry: function updateEntry() {
      var _this6 = this;
      var oParams = {
        fc_id: $('#inp_fund').val(),
        ors_no: $('#inp_ors_number').val(),
        ors_issue_date: this.convertDateFormat($('#inpDateIssued').val(), 'YYYY-MM-DD'),
        fs_type: $('#inp_type').val(),
        fs_desc: $('#inp_short_desc').val(),
        fs_gross_amount: $('#inp_gross_amount').val(),
        remarks: $('#inp_remarks').val(),
        df_ref_no: $('#inp_df_number').val(),
        region_id: $('#inp_region').val(),
        selected_uacs: this.aSelectedUacs
      };
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Saving... Please wait.',
        imageUrl: "../../../../images/loading.gif",
        imageHeight: 100,
        imageAlt: "Loading..."
      });
      this.postRequest('bdgt/update-fund-source/' + this.iFsId, oParams, function (mResponse) {
        _this6.showSuccessAlert('Successfully update the ORS');
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      });
    },
    processEntry: function processEntry() {
      this.validateEntry();
      if (this.bFormValid === true) {
        this.updateEntry();
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
      }
    },
    validateEntry: function validateEntry() {
      var bResult = true;
      var ors_no = $('#inp_ors_number').val();
      if (ors_no === '') {
        $('#p_ors_number').css('display', '');
        bResult = false;
      }
      var fund = $('#inp_fund').val();
      if (fund === null) {
        $('#p_fund').css('display', '');
        bResult = false;
      }
      var type = $('#inp_type').val();
      if (type === null) {
        $('#p_type').css('display', '');
        bResult = false;
      }
      var date_issued = $('#inpDateIssued').val();
      if (date_issued === '') {
        $('#p_date_issued').css('display', '');
        bResult = false;
      }
      var short_desc = $('#inp_short_desc').val();
      if (short_desc === '') {
        $('#p_title').css('display', '');
        bResult = false;
      }
      var gross_amount = $('#inp_gross_amount').val();
      if (gross_amount === '') {
        $('#p_gross_amount').css('display', '');
        bResult = false;
      } else {
        var iTotalAmount = 0;
        this.aSelectedUacs.forEach(function (element) {
          iTotalAmount += parseFloat(element.amount);
        });
        if (iTotalAmount != 0 && parseFloat(gross_amount) !== parseFloat(iTotalAmount)) {
          $('#p_gross_amount').css('display', '');
          $('#p_gross_amount').text('Must be equal to ORS amount breakdown!');
          bResult = false;
        }
      }
      if (parseFloat(gross_amount) <= 0) {
        $('#p_gross_amount').css('display', '');
        $('#p_gross_amount').text('Gross amount must not be zero!');
        bResult = false;
      }
      var region = $('#inp_region').val();
      if (region === null) {
        $('#p_region').css('display', '');
        bResult = false;
      }
      this.bFormValid = bResult;
    }

    // filterParams: function () {
    //     let aTransactDate = $('#inpDateTransact').val().split('/');
    //     let oParam = {
    //         transact_date: $('#inpDateTransact').val(),
    //         transact_month: aTransactDate[0],
    //         transact_year: aTransactDate[2],
    //         fs_id: $('#inp_fund_source').val(),
    //         uacs_id: $('#inp_uacs').val(),
    //         net_amount: $('#inp_net_amount').val(),
    //     };
    //     if (this.sSheetFundType !== 'ps') {
    //         oParam = Object.assign({}, oParam, {
    //             or_number: $('#inp_or_number').val(),
    //             gross_amount: $('#inp_gross_amount').val(),
    //             tax_amount: $('#inp_tax_amount').val(),
    //             payee_id: $('#inp_payee').val(),
    //             tcl_id: $('#inp_tax_class').val()
    //         });
    //     }
    //     return oParam;
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "main"
};
var _hoisted_2 = {
  id: "content_wrapper"
};
var _hoisted_3 = {
  "class": "panel"
};
var _hoisted_4 = {
  "class": "panel-body"
};
var _hoisted_5 = {
  "class": "panel panel-colorbox-open panel-info col-md-12",
  id: "spy2"
};
var _hoisted_6 = {
  "class": "panel-body pn"
};
var _hoisted_7 = {
  style: {
    "margin": "2% !important"
  }
};
var _hoisted_8 = {
  "class": "col-md-4",
  style: {
    "margin-bottom": "2% !important"
  }
};
var _hoisted_9 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_10 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_11 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_12 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_13 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_14 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_15 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_16 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_17 = {
  "class": "col-md-4",
  style: {
    "margin-bottom": "2% !important"
  }
};
var _hoisted_18 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_19 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_20 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_21 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_22 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_23 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_24 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_25 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_26 = {
  "class": "col-md-4",
  style: {
    "margin-bottom": "2% !important"
  }
};
var _hoisted_27 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_28 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_29 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_30 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_31 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_32 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_33 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_34 = {
  "class": "panel-body pn"
};
var _hoisted_35 = {
  style: {
    "margin": "2% !important"
  }
};
var _hoisted_36 = {
  "class": "col-md-7",
  style: {
    "margin-bottom": "2% !important"
  }
};
var _hoisted_37 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_38 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_39 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_40 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_41 = {
  "class": "col-md-5",
  style: {
    "margin-bottom": "2% !important"
  }
};
var _hoisted_42 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_43 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_44 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_45 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_46 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_47 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_48 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_49 = {
  "class": "panel-body pn"
};
var _hoisted_50 = {
  style: {
    "margin": "2% !important"
  }
};
var _hoisted_51 = {
  "class": "col-md-12",
  style: {
    "margin-bottom": "2% !important"
  }
};
var _hoisted_52 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_53 = {
  width: "20%",
  style: {
    "text-align": "center"
  }
};
var _hoisted_54 = {
  width: "20%",
  style: {
    "text-align": "center"
  }
};
var _hoisted_55 = {
  width: "60%",
  style: {
    "text-align": "left"
  }
};
var _hoisted_56 = {
  key: 0,
  "class": "panel panel-colorbox-open panel-system col-md-12"
};
var _hoisted_57 = {
  "class": "panel-body pn"
};
var _hoisted_58 = {
  "class": "col-md-9"
};
var _hoisted_59 = {
  "class": "admin-form",
  style: {
    "margin": "1%"
  }
};
var _hoisted_60 = {
  "class": "section"
};
var _hoisted_61 = {
  "class": "field prepend-icon"
};
var _hoisted_62 = {
  "class": "gui-textarea",
  id: "txt_remarks",
  name: "comment",
  placeholder: "Enter your remarks here..."
};
var _hoisted_63 = {
  "class": "input-footer"
};
var _hoisted_64 = {
  "class": "panel panel-colorbox-open panel-warning col-md-12",
  id: "edit_transact_div",
  style: {
    "display": "none"
  }
};
var _hoisted_65 = {
  "class": "panel-body pn"
};
var _hoisted_66 = {
  "class": "col-md-6"
};
var _hoisted_67 = {
  "class": "form-group"
};
var _hoisted_68 = {
  "class": "row",
  style: {
    "margin": "2%"
  }
};
var _hoisted_69 = {
  "class": "col-lg-6 custom-margin-top"
};
var _hoisted_70 = {
  "class": "select2-single form-control col-md-6 fc-select",
  id: "inp_fund"
};
var _hoisted_71 = ["value"];
var _hoisted_72 = {
  "class": "col-lg-6 custom-margin-top"
};
var _hoisted_73 = {
  "class": "select2-single form-control region-select",
  id: "inp_region"
};
var _hoisted_74 = ["value"];
var _hoisted_75 = {
  "class": "col-md-6"
};
var _hoisted_76 = {
  "class": "form-group"
};
var _hoisted_77 = {
  "class": "row",
  style: {
    "margin-top": "1%"
  }
};
var _hoisted_78 = {
  "class": "panel panel-visible panel-default",
  id: "spy2",
  style: {
    "margin": "2%"
  }
};
var _hoisted_79 = {
  "class": "panel-body pn"
};
var _hoisted_80 = {
  "class": "row",
  style: {
    "margin": "2%"
  }
};
var _hoisted_81 = {
  "class": "col-md-8"
};
var _hoisted_82 = {
  "class": "select2-single form-control uacs-select",
  id: "inp_uacs"
};
var _hoisted_83 = ["value", "data-id"];
var _hoisted_84 = {
  "class": "col-md-12",
  id: "info_message_div",
  style: {
    "margin-top": "19px"
  }
};
var _hoisted_85 = {
  key: 0,
  "class": "alert alert-primary"
};
var _hoisted_86 = {
  key: 1,
  "class": "alert alert-warning"
};
var _hoisted_87 = {
  key: 2,
  "class": "alert alert-primary"
};
var _hoisted_88 = {
  key: 3,
  "class": "alert alert-primary"
};
var _hoisted_89 = {
  key: 4,
  "class": "alert alert-success"
};
var _hoisted_90 = {
  key: 5,
  "class": "alert alert-default"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_BDGT_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_BDGT_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_BDGT_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-33dd0ade><div class=\"topbar-left\" data-v-33dd0ade><ol class=\"breadcrumb\" data-v-33dd0ade><li class=\"crumb-trail\" data-v-33dd0ade> Manage ORS </li><li class=\"crumb-link\" data-v-33dd0ade><a href=\"/front/sdor/get-cash-reg-summary\" data-v-33dd0ade>View ORS</a></li><li class=\"crumb-active\" data-v-33dd0ade><a data-v-33dd0ade>ORS Details</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, " View ORS Details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/front/bdgt/ors/view",
    "data-attr": "href",
    "class": "btn btn-md btn-primary pull-right",
    style: {
      "margin-top": "0.5%"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-arrow-left"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Go back to Viewing Table ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: TRANSACTION'S CURRENT DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-list-alt"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ORS Details ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "ORS Processing Details: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, "Sys ID:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.temp_id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, " Date/Time Encoded:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat($data.aFsDetails.date_created, 'DD-MMM-YYYY HH:mm:ss')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, " Date/Time Last Modified:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.date_modified, 'date')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, " Short Description (Title):", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.fs_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, " Type: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.fs_type), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " Requesting Office:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.region_abbr) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.region_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, " Referenced DF Number: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.df_ref_no)), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    style: {
      "visibility": "hidden"
    }
  }, "ORS Processing Details: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " Current Status:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.fs_status), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ORS Number:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.ors_no), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ORS Date Issued:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.ors_issue_date, 'date', 'DD-MMM-YYYY')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ORS Date/Time Last Forwarded: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.datetime_ors_forwarded, 'date')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "DV Number:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.dv_no)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "DV Date Issued:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.dv_issue_date, 'date', 'DD-MMM-YYYY')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "DV Date/Time Last Forwarded: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.datetime_dv_forwarded, 'date')), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
    style: {
      "visibility": "hidden"
    }
  }, "ORS Processing Details: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " ADA/Check Number:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_no)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " ADA/Check Type:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_type)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " ADA/Check Date Issued:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_issue_date, 'date', 'DD-MMM-YYYY')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " ADA/Check Date/Time Last Forwarded:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.datetime_po_forwarded, 'date')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " Release/Credit Date/Time:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_release_date, 'date')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " Release/Credit Reference No.: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_ref_no)), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "ORS Particulars Breakdown:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_37, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header"
  }, "UACS Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header"
  }, "UACS Account Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header"
  }, "Amount")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aFsDetails.breakdown, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.fsb_amount, 'number')), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Total Amount(s):", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, " Gross Amount:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.fs_gross_amount, 'number')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Tax WithHeld:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.fs_tax_withheld, 'number')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Net Amount:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.fs_net_amount, 'number')), 1 /* TEXT */)])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Remarks History: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_52, [_cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    width: "20%",
    style: {
      "text-align": "center"
    }
  }, " Date and Time"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    width: "20%",
    style: {
      "text-align": "center"
    }
  }, " Remarks/Comment By:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    width: "60%",
    style: {
      "text-align": "center"
    }
  }, " Remarks/Comment")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aFsDetails.remarks_history, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_created, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user_details.firstname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user_details.lastname), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.remarks), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: TRANSACTION'S CURRENT DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: REMARKS HISTORY AND ISSUE DV "), this.sFsStat === 'OPEN' || this.sFsStat === 'FOR ORS REV' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_56, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-share-square"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Issue DV ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sDefaultRemarks), 1 /* TEXT */), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "comment",
    "class": "field-icon"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-comments"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_63, [_cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Hint:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sRemarksHint), 1 /* TEXT */)])]), _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_remarks",
    "class": "error_msg",
    style: {
      "display": "none"
    }
  }, "Remarks is required!", -1 /* HOISTED */))])])]), _cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "form-group"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "btnForDVIssuance",
    "class": "btn btn-lg btn-success pull-right",
    style: {
      "margin-top": "20%",
      "margin-bottom": "10px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-share-square"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" For DV Issuance ")])])], -1 /* HOISTED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: REMARKS HISTORY AND ISSUE DV "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: EDIT ORS DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-pencil-square-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit ORS Details ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_cache[45] || (_cache[45] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-lg-12"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_ors_number",
    "class": "col-lg-12 control-label"
  }, "ORS Number: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "inp_ors_number",
    "class": "form-control",
    placeholder: "Enter ORS Number"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_ors_number",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "ORS Number is required!")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_fund",
    "class": "col-lg-12 control-label"
  }, "Fund Cluster: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_70, [_cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select fund", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aFundCluster, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.fc_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fc_desc) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fc_code) + ")", 9 /* TEXT, PROPS */, _hoisted_71);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_ors_number",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Fund cluster is required!", -1 /* HOISTED */))]), _cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-6 custom-margin-top\" data-v-33dd0ade><label for=\"inp_type\" class=\"col-lg-12 control-label\" data-v-33dd0ade>Type:</label><select class=\"select2-single form-control type-select\" id=\"inp_type\" data-v-33dd0ade><option disabled value=\"0\" selected data-v-33dd0ade>Please select type</option><option value=\"ps\" data-v-33dd0ade>Personnel Services (PS)</option><option value=\"mooe\" data-v-33dd0ade>Maintenance and Other Operating Expenses (MOOE) </option><option value=\"sr\" data-v-33dd0ade>Special</option><option value=\"co\" data-v-33dd0ade>Capital Outlay</option></select><p id=\"p_type\" style=\"display:none;\" class=\"error_msg\" data-v-33dd0ade>Type is required!</p></div><div class=\"col-lg-12 custom-margin-top\" data-v-33dd0ade><label for=\"inp_short_desc\" class=\"col-lg-12 control-label\" data-v-33dd0ade>Short Description (Title):</label><input type=\"text\" id=\"inp_short_desc\" class=\"form-control\" placeholder=\"Enter Short Description\" data-v-33dd0ade><p id=\"p_title\" style=\"display:none;\" class=\"error_msg\" data-v-33dd0ade>Title is required! </p></div><div class=\"col-lg-6 custom-margin-top\" data-v-33dd0ade><label for=\"inp_gross_amount\" class=\"col-lg-12 control-label\" data-v-33dd0ade>Gross Amount:</label><input type=\"number\" id=\"inp_gross_amount\" class=\"form-control\" placeholder=\"Enter Gross Amount\" min=\"0.00\" value=\"0.00\" data-v-33dd0ade><p id=\"p_gross_amount\" style=\"display:none;\" class=\"error_msg\" data-v-33dd0ade>Gross Amount is required! </p></div><div class=\"col-lg-6 custom-margin-top\" data-v-33dd0ade><label for=\"inpDateIssued\" class=\"col-lg-12 control-label\" data-v-33dd0ade>Date Issued:</label><div class=\"admin-form\" data-v-33dd0ade><label for=\"datepicker1\" class=\"field prepend-icon\" data-v-33dd0ade><input type=\"text\" id=\"inpDateIssued\" name=\"inpDateIssued\" class=\"gui-input\" placeholder=\"Enter date of transaction\" readonly data-v-33dd0ade><label class=\"field-icon\" data-v-33dd0ade><i class=\"fa fa-calendar-o\" data-v-33dd0ade></i></label></label><p id=\"p_date_issued\" style=\"display:none;\" class=\"error_msg\" data-v-33dd0ade>Date Issued is required! </p></div></div>", 4)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_region",
    "class": "col-lg-12 control-label"
  }, "Requesting Region:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_73, [_cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select region", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRegionList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc) + ")", 9 /* TEXT, PROPS */, _hoisted_74);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_region",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Requesting Region is required! ", -1 /* HOISTED */))]), _cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-6 custom-margin-top\" data-v-33dd0ade><label for=\"inp_df_number\" class=\"col-lg-12 control-label\" data-v-33dd0ade>DF Number (Optional):</label><input type=\"text\" id=\"inp_df_number\" class=\"form-control\" placeholder=\"Enter DF Number\" data-v-33dd0ade></div><div class=\"col-lg-12 custom-margin-top\" data-v-33dd0ade><label for=\"inp_remarks\" class=\"col-lg-12 control-label\" data-v-33dd0ade>Remarks:</label><div class=\"admin-form\" data-v-33dd0ade><section data-v-33dd0ade><label class=\"field prepend-icon\" data-v-33dd0ade><textarea class=\"gui-textarea\" id=\"inp_remarks\" name=\"comment\" placeholder=\"Enter your remarks here...\" data-v-33dd0ade></textarea><label for=\"comment\" class=\"field-icon\" data-v-33dd0ade><i class=\"fa fa-comments\" data-v-33dd0ade></i></label><span class=\"input-footer\" data-v-33dd0ade><strong data-v-33dd0ade>Hint:</strong> You may provide the long description in this section.</span></label></section></div></div><div class=\"col-lg-12\" data-v-33dd0ade><button type=\"button\" id=\"btnUpdateEntry\" class=\"btn btn-lg btn-warning pull-right\" style=\"margin-top:23px;\" data-v-33dd0ade><i class=\"fa fa-floppy-o\" data-v-33dd0ade></i> Update Details </button></div>", 3))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-sitemap"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ORS Breakdown (Per UACS) ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [_cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_uacs",
    "class": "col-lg-12 control-label"
  }, "UACS: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_82, [_cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select UACS ", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aUacsList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.uacs_id,
      "data-id": item.uacs_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 9 /* TEXT, PROPS */, _hoisted_83);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_ors_number",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "ORS Number is required!", -1 /* HOISTED */))]), _cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-4\" data-v-33dd0ade><label for=\"inp_uacs_amount\" class=\"col-lg-12 control-label\" data-v-33dd0ade>Gross Amount:</label><input type=\"number\" id=\"inp_uacs_amount\" class=\"form-control\" placeholder=\"Enter Gross Amount\" min=\"0.00\" value=\"0.00\" data-v-33dd0ade></div><div class=\"col-md-12\" style=\"margin-top:24px;\" data-v-33dd0ade><button id=\"btnAddUacs\" class=\"btn btn-lg btn-system pull-right\" data-v-33dd0ade><i class=\"fa fa-plus\" data-v-33dd0ade></i> Add UACS</button></div>", 2))]), _cache[52] || (_cache[52] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-12",
    style: {
      "margin-bottom": "10px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    id: "tbl_uacs_selection",
    "class": "table table-bordered mbn",
    cellspacing: "0",
    width: "100"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "center"
    }
  }, "UACS Code & Desc"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "center"
    }
  }, "Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "custom-table-header",
    style: {
      "text-align": "center"
    }
  }, "Action")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("- SHOULD BE EMPTY ")])])], -1 /* HOISTED */))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: EDIT ORS DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [$data.sFsStat === 'FOR DV' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_85, _cache[57] || (_cache[57] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The ORS is now undergoing review in the Accounting Division for DV No. issuance. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'FOR DV REV' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_86, _cache[58] || (_cache[58] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The ORS is now undergoing revision in the Accounting Division for DV No. issuance. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'FOR PO' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_87, _cache[59] || (_cache[59] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The ORS is now undergoing review in the Cash Division for ADA/Check No. issuance. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'FOR RELEASE' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_88, _cache[60] || (_cache[60] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The ADA/Check No. has already been issued. Waiting for releasing/crediting. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'RELEASED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_89, _cache[61] || (_cache[61] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The requested budget for this ORS is already released. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'CLEARED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_90, _cache[62] || (_cache[62] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This ORS is already cleared. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntable[data-v-33dd0ade],\nth[data-v-33dd0ade],\ntr[data-v-33dd0ade],\ntd[data-v-33dd0ade],\ntbody[data-v-33dd0ade] {\n    border: 1px solid #d1d1d1 !important;\n}\n.c-margin-top[data-v-33dd0ade] {\n    margin-top: 5% !important;\n}\n.error_msg[data-v-33dd0ade] {\n    color: red !important\n}\n.custom-margin-top[data-v-33dd0ade] {\n    margin-top: 2%\n}\n.custom-table-header[data-v-33dd0ade] {\n    background-color: #efeeee;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_style_index_0_id_33dd0ade_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_style_index_0_id_33dd0ade_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_style_index_0_id_33dd0ade_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bdgt_ors_view_details_vue_vue_type_template_id_33dd0ade_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true */ "./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true");
/* harmony import */ var _bdgt_ors_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bdgt_ors_view_details.vue?vue&type=script&lang=js */ "./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=script&lang=js");
/* harmony import */ var _bdgt_ors_view_details_vue_vue_type_style_index_0_id_33dd0ade_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css */ "./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_bdgt_ors_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_bdgt_ors_view_details_vue_vue_type_template_id_33dd0ade_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-33dd0ade"],['__file',"resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_view_details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_template_id_33dd0ade_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_template_id_33dd0ade_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=template&id=33dd0ade&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_view_details_vue_vue_type_style_index_0_id_33dd0ade_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_view_details.vue?vue&type=style&index=0&id=33dd0ade&scoped=true&lang=css");


/***/ })

}]);