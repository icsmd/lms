"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_sdor_view_cr_sheets_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libraries/request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libraries/utilities */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      bPSSheetExist: false,
      bMOOESheetExist: false,
      bSRSheetExist: false,
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
      aPSsheets: [],
      aMOOEsheets: [],
      aSRsheets: [],
      sActiveDate: ''
    };
  },
  mounted: function mounted() {
    this.checkPSSheetIfExist();
    this.checkMOOESheetIfExist();
    this.checkSRSheetIfExist();
    this.getPSSheets();
    this.getMOOESheets();
    this.getSRSheets();
    this.initCreateButtonEventListener();
  },
  methods: {
    initCreateButtonEventListener: function initCreateButtonEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnPSCreateSheet') {
          mSelf.confirmCreateSheet(mSelf.bPSSheetExist, 'ps');
        }
        if (event.target.id === 'btnMOOECreateSheet') {
          mSelf.confirmCreateSheet(mSelf.bMOOESheetExist, 'mooe');
        }
        if (event.target.id === 'btnSRCreateSheet') {
          mSelf.confirmCreateSheet(mSelf.bSRSheetExist, 'sr');
        }
      }, false);
    },
    initTblPSSheets: function initTblPSSheets() {
      $('#tbl_PS_sheets').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initTblMOOESheets: function initTblMOOESheets() {
      $('#tbl_MOOE_sheets').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initTblSRSheets: function initTblSRSheets() {
      $('#tbl_SR_sheets').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initTableEventListener: function initTableEventListener() {
      // Event listener for viewing more details
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'viewDetails') {
          window.location.href = "/front/sdor/view-sheet-details/" + event.target.dataset.sheet_id;
        }
      }, false);
    },
    getPSSheets: function getPSSheets() {
      var _this = this;
      var mSelf = this;
      this.getRequest('sdor/get-sheets', function (mResponse) {
        _this.aPSsheets = mResponse.data;
        setTimeout(function () {
          mSelf.initTblPSSheets();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, {
        sheet_fund_type: 'ps'
      });
    },
    getMOOESheets: function getMOOESheets() {
      var _this2 = this;
      var mSelf = this;
      this.getRequest('sdor/get-sheets', function (mResponse) {
        _this2.aMOOEsheets = mResponse.data;
        setTimeout(function () {
          mSelf.initTblMOOESheets();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, {
        sheet_fund_type: 'mooe'
      });
    },
    getSRSheets: function getSRSheets() {
      var _this3 = this;
      var mSelf = this;
      this.getRequest('sdor/get-sheets', function (mResponse) {
        _this3.aSRsheets = mResponse.data;
        setTimeout(function () {
          mSelf.initTblSRSheets();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, {
        sheet_fund_type: 'sr'
      });
    },
    confirmCreateSheet: function confirmCreateSheet(bExist, sFundType) {
      var sTitle, sMessage;
      if (bExist === true) {
        sTitle = "Warning!";
        sMessage = "<b>You have an existing sheet for this month! </b> If you want to re-create, this will re-consolidate all transaction for this month and will be resubmitted again for review and approval. Do you still want to proceed?";
      } else {
        sTitle = "Confirmation";
        sMessage = "By creating a sheet, you are now finalizing your entries for this month and your record of transactions will be submitted for review and approval of the Office of Comptroller. Are you sure you want to proceed?";
      }
      this.createSheet(sTitle, sMessage, sFundType);
    },
    checkPSSheetIfExist: function checkPSSheetIfExist() {
      var _this4 = this;
      this.getRequest('sdor/check-sheet-exist', function (mResponse) {
        _this4.bPSSheetExist = mResponse.data;
      }, {
        sheet_fund_type: 'ps'
      });
    },
    checkMOOESheetIfExist: function checkMOOESheetIfExist() {
      var _this5 = this;
      this.getRequest('sdor/check-sheet-exist', function (mResponse) {
        _this5.bMOOESheetExist = mResponse.data;
      }, {
        sheet_fund_type: 'mooe'
      });
    },
    checkSRSheetIfExist: function checkSRSheetIfExist() {
      var _this6 = this;
      this.getRequest('sdor/check-sheet-exist', function (mResponse) {
        _this6.bSRSheetExist = mResponse.data;
      }, {
        sheet_fund_type: 'sr'
      });
    },
    createSheet: function createSheet(sTitle, sMessage, sFundType) {
      var _this7 = this;
      var mSelf = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: sTitle,
        html: sMessage,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceed."
      }).then(function (result) {
        if (result.isConfirmed) {
          _this7.postRequest('sdor/create-sheet', {
            sheet_fund_type: sFundType
          }, function (mResponse) {
            if (sFundType === 'ps') {
              $('#tbl_PS_sheets').DataTable().destroy();
              mSelf.checkPSSheetIfExist();
              mSelf.getPSSheets();
            }
            if (sFundType === 'mooe') {
              $('#tbl_MOOE_sheets').DataTable().destroy();
              mSelf.checkMOOESheetIfExist();
              mSelf.getMOOESheets();
            }
            if (sFundType === 'sr') {
              $('#tbl_SR_sheets').DataTable().destroy();
              mSelf.checkSRSheetIfExist();
              mSelf.getSRSheets();
            }
            mSelf.showSuccessAlert('Successfully created a sheet');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Cash Management </li><li class=\"crumb-active\"><a>View Cash Disbursement Sheet Summary</a></li></ol></div></header>", 1);
var _hoisted_4 = {
  "class": "panel"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, null, -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "panel-body"
};
var _hoisted_7 = {
  "class": "col-md-12"
};
var _hoisted_8 = {
  "class": "tab-block mb25"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"nav nav-tabs tabs-border\"><li class=\"active\"><a href=\"#tab_sheet_ps\" data-toggle=\"tab\" aria-expanded=\"true\">Personnel Services</a></li><li class=\"\"><a href=\"#tab_sheet_mooe\" data-toggle=\"tab\" aria-expanded=\"false\">Maintenance and Other Operating Expenses</a></li><li class=\"\"><a href=\"#tab_sheet_sr\" data-toggle=\"tab\" aria-expanded=\"false\">Special Requests</a></li></ul>", 1);
var _hoisted_10 = {
  "class": "tab-content"
};
var _hoisted_11 = {
  id: "tab_sheet_ps",
  "class": "tab-pane active"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "btnPSCreateSheet",
  type: "button",
  "class": "btn btn-system btn-gradient dark btn-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-plus-square-o"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Sheet (PS) ")], -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "panel panel-visible",
  id: "spy2"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-title hidden-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-tasks"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Disbursement Sheets for Personnel Services ")])], -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "panel-body pn"
};
var _hoisted_17 = {
  "class": "table table-striped table-hover",
  id: "tbl_PS_sheets",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Sheet No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date Created"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_19 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_20 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_21 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_22 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_23 = ["data-sheet_id"];
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-arrow-circle-o-right"
}, null, -1 /* HOISTED */);
var _hoisted_25 = {
  id: "tab_sheet_mooe",
  "class": "tab-pane"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "btnMOOECreateSheet",
  type: "button",
  "class": "btn btn-system btn-gradient dark btn-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-plus-square-o"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Sheet (MOOE) ")], -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "panel panel-visible",
  id: "spy2"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-title hidden-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-tasks"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Disbursement Sheets for Maintenance and Other Operating Expenses ")])], -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "panel-body pn"
};
var _hoisted_31 = {
  "class": "table table-striped table-hover",
  id: "tbl_MOOE_sheets",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Sheet No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date Created"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_33 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_34 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_35 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_36 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_37 = ["data-sheet_id"];
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-arrow-circle-o-right"
}, null, -1 /* HOISTED */);
var _hoisted_39 = {
  id: "tab_sheet_sr",
  "class": "tab-pane"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "btnSRCreateSheet",
  type: "button",
  "class": "btn btn-system btn-gradient dark btn-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-plus-square-o"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Sheet (Special) ")], -1 /* HOISTED */);
var _hoisted_41 = {
  "class": "panel panel-visible",
  id: "spy2"
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-title hidden-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-tasks"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Disbursement Sheets for Special Requests ")])], -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "panel-body pn"
};
var _hoisted_45 = {
  "class": "table table-striped table-hover",
  id: "tbl_SR_sheets",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Sheet No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date Created"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_47 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_48 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_49 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_50 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_51 = ["data-sheet_id"];
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-arrow-circle-o-right"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SDOR_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAIN TAB FOR PERSONNEL SERVICES SHEET "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS Create Sheet "), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PS SHEETS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aPSsheets, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sheet_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-attr": "viewDetails",
      "data-sheet_id": item.sheet_id,
      "class": "btn btn-md btn-info viewDetails",
      style: {
        "margin-right": "9%"
      }
    }, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")], 8 /* PROPS */, _hoisted_23)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PS SHEETS TABLE ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAIN TAB FOR MAINTENANCE AND OTHER OPERATING EXPENSES SHEET "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS Create Sheet "), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: MOOE SHEETS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aMOOEsheets, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sheet_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-attr": "viewDetails",
      "data-sheet_id": item.sheet_id,
      "class": "btn btn-md btn-info viewDetails",
      style: {
        "margin-right": "9%"
      }
    }, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")], 8 /* PROPS */, _hoisted_37)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: MOOE SHEETS TABLE ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MAIN TAB FOR SPECIAL REQUEST SHEET "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PS Create Sheet "), _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: SR SHEETS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aSRsheets, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sheet_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-attr": "viewDetails",
      "data-sheet_id": item.sheet_id,
      "class": "btn btn-md btn-info viewDetails",
      style: {
        "margin-right": "9%"
      }
    }, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")], 8 /* PROPS */, _hoisted_51)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: SR SHEETS TABLE ")])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_view_cr_sheets_vue_vue_type_template_id_2cdcc730__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730 */ "./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730");
/* harmony import */ var _sdor_view_cr_sheets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_view_cr_sheets.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_sdor_view_cr_sheets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_view_cr_sheets_vue_vue_type_template_id_2cdcc730__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/sdor/sdor_view_cr_sheets.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheets.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_vue_vue_type_template_id_2cdcc730__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_vue_vue_type_template_id_2cdcc730__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sdor_view_cr_sheets.vue?vue&type=template&id=2cdcc730");


/***/ })

}]);