"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_reports_report_cash_balance_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libraries/gen_report_generate.js */ "./resources/js/libraries/gen_report_generate.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=template&id=3c4c03b6":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=template&id=3c4c03b6 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "content_wrapper"
};
var _hoisted_2 = {
  "class": "panel"
};
var _hoisted_3 = {
  "class": "panel-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  var _component_C_Layout_ACTG_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_ACTG_Sidebar");
  var _component_C_WebDevInProgress = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_WebDevInProgress");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), _ctx.sUserType === 'sdor' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_C_Layout_SDOR_Sidebar, {
    key: 0
  })) : _ctx.sUserType === 'actg' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_C_Layout_ACTG_Sidebar, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Financial Reports </li><li class=\"crumb-active\"><a>Cash Balance</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, " Cash Balance Report")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_WebDevInProgress)])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/libraries/gen_report_generate.js":
/*!*******************************************************!*\
  !*** ./resources/js/libraries/gen_report_generate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _utilities_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      sUserType: this.$root.getUserType(),
      aTableConfig: {
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
        "iDisplayLength": 5,
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
        "oTableTools": {
          "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
        }
      },
      aFundTypes: [{
        id: 1,
        code: 'ps',
        desc: 'Personnel Services (PS)'
      }, {
        id: 2,
        code: 'mooe',
        desc: 'Maintenance and Other Operating Expenses (MOOE)'
      }, {
        id: 3,
        code: 'sr',
        desc: 'Special Requests (SR)'
      }],
      iSelectedFund: 0,
      aFSList: [],
      aRegionList: [],
      aSheet: [],
      aSheetDetails: [],
      aContent: [],
      fTotalGrossAmount: 0,
      fTotalTaxAmount: 0,
      fTotalNetAmount: 0,
      fTotalGrossPartAmount: 0,
      fTotalTaxPartAmount: 0,
      fTotalParticularAmount: 0,
      sFundCode: '',
      sReportNo: '',
      sSheetNo: '',
      sTitleDate: '',
      sCurrDate: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('DD-MMM-YYYY'),
      sCompressedSummary: '',
      aFundSource: [],
      aSheetRecap: [],
      aSheetSummary: [],
      // register
      fSumOfSWReg: 0,
      fSumOfSWCas: 0,
      fSumOfOffice: 0,
      fSumOfOthers: 0,
      // For customization
      sReportType: '',
      sReportDetailsUrl: '',
      sPrintPageUrl: '',
      sPartDesc: ''
    };
  },
  mounted: function mounted() {
    this.initializePlugins();
    this.initEventListeners();
    this.getFundSourceList();
    this.executeUserTypeRequests();
  },
  methods: {
    initializePlugins: function initializePlugins(params) {
      // Init Select2 - Basic Single
      $(".select2-single").select2();
      // Initialize monthpicker
      $("#inpMonthYearTransact").monthpicker({
        changeYear: false,
        stepYears: 1,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        showButtonPanel: true,
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
    initTblSheets: function initTblSheets() {
      $('#tbl_cash_reg_summary').DataTable(this.aTableConfig);
    },
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      $('#inp_fund_type').on('select2:select', function (e) {
        var sTypeCode = $('#inp_fund_type').val();
        if (sTypeCode === 'sr') {
          $('#divSRSelection').css('visibility', '');
        } else {
          $('#divSRSelection').css('visibility', 'hidden');
        }
      });
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnGenReport') {
          mSelf.validateFilter();
        }
        if (event.target.id === 'btnPrintReport') {
          mSelf.prepareReport();
        }
      }, false);
      $('#txt_particular').keyup(function (event) {
        mSelf.sPartDesc = $('#txt_particular').val();
      });
    },
    prepareReport: function prepareReport() {
      var oFinalPayload = Object.assign({}, this.aSheetDetails, {
        date_details: {
          title_date: this.sTitleDate,
          curr_date: this.sCurrDate
        }
      });
      if (this.sReportType === 'cash-reg-liquidation') {
        oFinalPayload = Object.assign({}, oFinalPayload, {
          sPartDesc: this.sPartDesc
        });
      }
      this.sCompressedSummary = btoa(JSON.stringify(oFinalPayload));
      this.$root.setLocalStorageValue('forEx', this.sCompressedSummary);
      window.open(this.sPrintPageUrl, '_blank');
    },
    validateFilter: function validateFilter() {
      var bValid = true;
      var oParams, iSrValue, iRegionId;
      var sFundType = $('#inp_fund_type').val();
      var sMonthYear = $('#inpMonthYearTransact').val();
      if (sMonthYear === '') {
        bValid = false;
        this.showErrorAlert('Month-Year is Required!');
      }
      if (sFundType == null) {
        bValid = false;
        this.showErrorAlert('Type is Required!');
      } else if (sFundType === 'sr') {
        iSrValue = $('#inp_sr').val();
        if (iSrValue == null) {
          bValid = false;
          this.showErrorAlert('Request Reference is Required!');
        }
      }
      if (this.sUserType !== 'sdor') {
        iRegionId = $('#inp_office').val();
        if (iRegionId == null) {
          bValid = false;
          this.showErrorAlert('Office is Required!');
        }
      } else {
        iRegionId = this.$root.aUserInfo.region_id;
      }
      if (bValid === true) {
        oParams = {
          sheet_fund_type: sFundType,
          transact_month: sMonthYear.split('/')[0],
          transact_year: sMonthYear.split('/')[1],
          region_id: iRegionId
        };
        oParams = sFundType === 'sr' ? Object.assign({}, oParams, {
          fs_id: iSrValue
        }) : oParams;
        // oParams = this.sUserType !== 'sdor' ? Object.assign({}, oParams, { region_id: iRegionId }) : oParams;
        this.getDateValues();
        this.getReportDetails(oParams);
      }
    },
    getDateValues: function getDateValues() {
      var sMonthYear = $('#inpMonthYearTransact').val();
      var iMonth = sMonthYear.split('/')[0];
      var iYear = sMonthYear.split('/')[1];
      var firstDay = iMonth + '-01-' + iYear;
      var endDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(firstDay).endOf('month').format('DD');
      this.sTitleDate = '01-' + endDay + ' ' + moment__WEBPACK_IMPORTED_MODULE_0___default()(firstDay).format('MMMM') + ' ' + iYear;
    },
    executeUserTypeRequests: function executeUserTypeRequests() {
      if (this.sUserType !== 'sdor') {
        $('#divInpOffice').css('visibility', '');
        this.getRegionList();
      }
    },
    getRegionList: function getRegionList() {
      this.aRegionList = this.$root.parseLocalStorageLib().regions;
    },
    getReportDetails: function getReportDetails(oParams) {
      var _this = this;
      this.getRequest(this.sReportDetailsUrl, function (mResponse) {
        var aResult = mResponse.data;
        if (aResult.length === 0) {
          _this.resetDisplayTable();
          _this.showErrorAlert('No available data to load!');
          $('.tbl-empty').css('display', '');
          $('.tbl-with-content').css('display', 'none');
          $('#btnPrintReport').attr('disabled', true);
          $('#btnPrintReport').attr('class', 'btn btn-default btn-gradient dark btn-lg');
          if (_this.sReportType === 'cash-reg-liquidation') {
            document.getElementById('txt_particular').readOnly = true;
          }
        } else {
          $('.tbl-with-content').css('display', '');
          $('.tbl-empty').css('display', 'none');
          $('#btnPrintReport').attr('disabled', false);
          $('#btnPrintReport').attr('class', 'btn btn-success btn-gradient dark btn-lg');
          _this.aSheetDetails = aResult;
          _this.reportLayoutSetter(aResult);
        }
      }, oParams);
    },
    resetDisplayTable: function resetDisplayTable() {
      this.aSheetDetails = [];
      this.fTotalGrossAmount = 0;
      this.fTotalTaxAmount = 0;
      this.fTotalNetAmount = 0;
      this.fTotalParticularAmount = 0;
    },
    reportLayoutSetter: function reportLayoutSetter(aReportDetails) {
      this.sTitleDate = aReportDetails.date_details === undefined ? this.sTitleDate : aReportDetails.date_details.title_date;
      this.sCurrDate = aReportDetails.date_details === undefined ? this.sCurrDate : aReportDetails.date_details.curr_date;
      if (this.sReportType === 'cash-reg-report') {
        this.sReportNo = aReportDetails.sheet_details.report_no;
        this.sSheetNo = aReportDetails.sheet_details.sheet_no;
        this.sFundCluster = aReportDetails.sheet_details.fund_desc + ' (' + aReportDetails.sheet_details.fund_code + ')';
        this.computeTotalAmount();
      } else if (this.sReportType === 'cash-reg-record') {
        // this.aFundSource = aReportDetails.fund_source[0];

        this.aContent = aReportDetails.content;
        this.aSheetRecap = aReportDetails.recap;
        this.aSheetSummary = aReportDetails.summary;
      } else if (this.sReportType === 'cash-reg-register') {
        // this.aFundSource = aReportDetails.fund_source[0];
        // this.aSheetRecap = aReportDetails.sheet_recap;
        // this.aSheetSummary = aReportDetails.sheet_summary;

        this.aContent = aReportDetails.content;
        this.aSheetRecap = aReportDetails.recap;
        this.aSheetSummary = aReportDetails.summary;
        this.computeSummation();
      } else if (this.sReportType === 'cash-reg-liquidation') {
        if (document.title === 'SCMS | Print Liquidation Form') {
          this.aSheetSummary = aReportDetails.summary;
          this.sPartDesc = aReportDetails.sPartDesc;
        } else {
          this.aSheetSummary = aReportDetails.summary;
          this.sPartDesc = this.aSheetSummary.part_desc;
          document.getElementById('txt_particular').readOnly = false;
          $('#txt_particular').text(this.sPartDesc);
        }
      }
    },
    getFundSourceList: function getFundSourceList() {
      var _this2 = this;
      this.getRequest('fund-source/get-list', function (mResponse) {
        _this2.aFSList = mResponse.data;
      }, {
        fs_type: 'sr',
        fs_status: 'RELEASED'
      });
    },
    computeTotalAmount: function computeTotalAmount() {
      var fTotalNet = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.net_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalTax = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.tax_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalGross = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.gross_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalGrossPartAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.gross_total);
        return accumulator + fValue;
      }, 0);
      var fTotalTaxPartAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.tax_total);
        return accumulator + fValue;
      }, 0);
      var fTotalParticularAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.net_total);
        return accumulator + fValue;
      }, 0);
      this.fTotalGrossAmount = fTotalGross.toFixed(2);
      this.fTotalTaxAmount = fTotalTax.toFixed(2);
      this.fTotalNetAmount = fTotalNet.toFixed(2);
      this.fTotalGrossPartAmount = fTotalGrossPartAmount.toFixed(2);
      this.fTotalTaxPartAmount = fTotalTaxPartAmount.toFixed(2);
      this.fTotalParticularAmount = fTotalParticularAmount.toFixed(2);
    },
    computeSummation: function computeSummation(mValue) {
      var mSelf = this;
      this.aContent.forEach(function (mMainValue) {
        mMainValue.disbursements.forEach(function (mValue) {
          if (mValue.uacs_code === '5010101000') {
            mSelf.fSumOfSWReg += parseFloat(mValue.net_amount);
          } else if (mValue.uacs_code === '5010102000') {
            mSelf.fSumOfSWCas += parseFloat(mValue.net_amount);
          } else if (mValue.uacs_code === '50203010') {
            mSelf.fSumOfOffice += parseFloat(mValue.net_amount);
          } else {
            mSelf.fSumOfOthers += parseFloat(mValue.net_amount);
          }
        });
      });
    },
    parseCompressedData: function parseCompressedData() {
      var sCompressedData = this.$root.getLocalStorageValue('forEx');
      this.aSheetDetails = JSON.parse(atob(sCompressedData));
      this.reportLayoutSetter(this.aSheetDetails);
    },
    printReport: function printReport() {
      var printContents = document.getElementById('printableDiv').outerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/reports/report_cash_balance.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/reports/report_cash_balance.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _report_cash_balance_vue_vue_type_template_id_3c4c03b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report_cash_balance.vue?vue&type=template&id=3c4c03b6 */ "./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=template&id=3c4c03b6");
/* harmony import */ var _report_cash_balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report_cash_balance.vue?vue&type=script&lang=js */ "./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_report_cash_balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_report_cash_balance_vue_vue_type_template_id_3c4c03b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/reports/report_cash_balance.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_cash_balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_cash_balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./report_cash_balance.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=template&id=3c4c03b6":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=template&id=3c4c03b6 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_cash_balance_vue_vue_type_template_id_3c4c03b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_cash_balance_vue_vue_type_template_id_3c4c03b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./report_cash_balance.vue?vue&type=template&id=3c4c03b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_cash_balance.vue?vue&type=template&id=3c4c03b6");


/***/ })

}]);