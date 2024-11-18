"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_reports_sdor_report_cd_record_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libraries/gen_report_generate.js */ "./resources/js/libraries/gen_report_generate.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.sReportType = 'cash-reg-record';
    this.sReportDetailsUrl = 'report/cashreg-record-report';
    this.sPrintPageUrl = '/front/sdor/report/cd/record/print';
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=template&id=ed1b974c":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=template&id=ed1b974c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "content_wrapper"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Financial Reports </li><li class=\"crumb-active\"><a>Cash Disbursement Record</a></li></ol></div></header>", 1);
var _hoisted_3 = {
  "class": "panel"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "panel-title"
}, "Cash Disbursement Record Report")], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "panel-body"
};
var _hoisted_6 = {
  "class": "col-md-12"
};
var _hoisted_7 = {
  "class": "form-group"
};
var _hoisted_8 = {
  "class": "col-md-4"
};
var _hoisted_9 = {
  "class": "select2-single form-control",
  id: "inp_fund_type"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: "0",
  selected: ""
}, "Please select type", -1 /* HOISTED */);
var _hoisted_11 = ["value"];
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  id: "p_fund_type",
  style: {
    "display": "none"
  },
  "class": "error_msg"
}, "Please select a Fund Type! ", -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-3\"><div class=\"admin-form mw1000 center-block\"><label for=\"monthpicker1\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearTransact\" name=\"inpMonthYearTransact\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly style=\"height:38px;\"><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label></div></div><div class=\"col-md-5\"><button id=\"btnGenReport\" type=\"button\" class=\"btn btn-primary btn-gradient dark btn-md\"><i class=\"fa fa-download\"></i> Generate Report </button>   <button id=\"btnPrintReport\" type=\"button\" class=\"btn btn-default btn-gradient dark btn-md\" disabled><i class=\"fa fa-file-pdf-o\"></i> Print Report </button></div>", 2);
var _hoisted_15 = {
  "class": "col-md-12",
  style: {
    "margin-top": "10px"
  }
};
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = {
  id: "divSRSelection",
  "class": "col-md-4",
  style: {
    "visibility": "hidden"
  }
};
var _hoisted_18 = {
  "class": "select2-single form-control",
  id: "inp_sr"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: "0",
  selected: ""
}, "Please select Special Request", -1 /* HOISTED */);
var _hoisted_20 = ["value"];
var _hoisted_21 = {
  id: "divInpOffice",
  "class": "col-md-3",
  style: {
    "visibility": "hidden"
  }
};
var _hoisted_22 = {
  "class": "select2-single form-control",
  id: "inp_office"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: "0",
  selected: ""
}, "Please select office", -1 /* HOISTED */);
var _hoisted_24 = ["value"];
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  id: "p_fund_type",
  style: {
    "display": "none"
  },
  "class": "error_msg"
}, "Please select a Fund Type! ", -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "col-md-12"
};
var _hoisted_27 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "panel-heading"
};
var _hoisted_30 = {
  "class": "panel-title hidden-xs",
  style: {
    "color": "rgb(255, 255, 255)"
  }
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-tasks"
}, null, -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "panel-body pn"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  "class": "table table-bordered mbn tbl-empty",
  cellspacing: "0",
  width: "100%"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "8",
  style: {
    "font-size": "20px",
    "text-align": "center"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No Data Available"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")])])])])], -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "table table-bordered mbn tbl-with-content",
  id: "tbl_cash_reg_summary",
  cellspacing: "0",
  width: "100%",
  style: {
    "display": "none"
  }
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "ADA/DV/Payroll No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Payee"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "UACS Object Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Nature of Payment"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Advance "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Received/"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Refunded")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Disbursements"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Cash Advance Balance")])], -1 /* HOISTED */);
var _hoisted_36 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_40 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_41 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_44 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
var _hoisted_46 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_47 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_48 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_49 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_50 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_52 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
var _hoisted_54 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ")], -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "RECAP:")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ")], -1 /* HOISTED */);
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_60 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_61 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "TOTAL:")], -1 /* HOISTED */);
var _hoisted_69 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ")], -1 /* HOISTED */);
var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, "COH - Bank", -1 /* HOISTED */);
var _hoisted_81 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, "COH - Hand", -1 /* HOISTED */);
var _hoisted_90 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "right"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "center"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, " ", -1 /* HOISTED */);
var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  style: {
    "text-align": "left"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Total")], -1 /* HOISTED */);
var _hoisted_99 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
var _hoisted_101 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pull-left"
}, "Php", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SDOR_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: REPORT FILTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_9, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aFundTypes, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.code
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_11);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_12]), _hoisted_13])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_18, [_hoisted_19, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aFSList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.fs_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.cpo_no) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_desc) + ") ", 9 /* TEXT, PROPS */, _hoisted_20);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_22, [_hoisted_23, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aRegionList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc) + ")", 9 /* TEXT, PROPS */, _hoisted_24);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_25])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: REPORT FILTER"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CASH DISBURSEMENT RECORD REPORT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Period Covered " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.sTitleDate) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"pull-right\">Sheet No: {{ aSheet.sheet_no }}</span> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat(_ctx.aFundSource.date_created, 'DD-MMM')), 1 /* TEXT */), _hoisted_37, _hoisted_38, _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aFundSource.fs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aFundSource.fs_net_amount)), 1 /* TEXT */)]), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aFundSource.fs_net_amount)), 1 /* TEXT */)])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aSheetDetails.sheet_entries, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat(item.date_created, 'DD-MMM')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_dv_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.payee_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 1 /* TEXT */), _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.net_amount)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.difference)), 1 /* TEXT */)])]);
  }), 256 /* UNKEYED_FRAGMENT */)), _hoisted_56, _hoisted_57, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aSheetRecap, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_hoisted_58, _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.total_amount)), 1 /* TEXT */), _hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_66, _hoisted_67, _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_expenses)), 1 /* TEXT */)]), _hoisted_70, _hoisted_71, _hoisted_72, _hoisted_73]), _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_75, _hoisted_76, _hoisted_77, _hoisted_78, _hoisted_79, _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_81, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_cash)), 1 /* TEXT */)]), _hoisted_83]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_84, _hoisted_85, _hoisted_86, _hoisted_87, _hoisted_88, _hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_coh)), 1 /* TEXT */)]), _hoisted_92]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_93, _hoisted_94, _hoisted_95, _hoisted_96, _hoisted_97, _hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [_hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_expenses)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, [_hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_coh)), 1 /* TEXT */)])])])])])])])])])])])], 64 /* STABLE_FRAGMENT */);
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
      sUserType: '',
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
      fTotalGrossAmount: 0,
      fTotalTaxAmount: 0,
      fTotalNetAmount: 0,
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
      sPrintPageUrl: ''
    };
  },
  mounted: function mounted() {
    var mSelf = this;
    this.initializePlugins();
    this.initEventListeners();
    this.getFundSourceList();
    setTimeout(function () {
      mSelf.executeUserTypeRequests();
    }, 1000);
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
    },
    prepareReport: function prepareReport() {
      var oFinalPayload = Object.assign({}, this.aSheetDetails, {
        date_details: {
          title_date: this.sTitleDate,
          curr_date: this.sCurrDate
        }
      });
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
      }
      if (bValid === true) {
        oParams = {
          sheet_fund_type: sFundType,
          transact_month: sMonthYear.split('/')[0],
          transact_year: sMonthYear.split('/')[1]
        };
        oParams = sFundType === 'sr' ? Object.assign({}, oParams, {
          fs_id: iSrValue
        }) : oParams;
        oParams = this.sUserType !== 'sdor' ? Object.assign({}, oParams, {
          region_id: iRegionId
        }) : oParams;
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
      this.sUserType = this.$root.aUserInfo.type;
      if (this.sUserType !== 'sdor') {
        $('#divInpOffice').css('visibility', '');
        this.getRegionList();
      }
    },
    getRegionList: function getRegionList() {
      var _this = this;
      this.getRequest('region/get-list', function (mResponse) {
        _this.aRegionList = mResponse.data;
      });
    },
    getReportDetails: function getReportDetails(oParams) {
      var _this2 = this;
      this.getRequest(this.sReportDetailsUrl, function (mResponse) {
        var aResult = mResponse.data;
        if (aResult.length === 0) {
          _this2.resetDisplayTable();
          _this2.showErrorAlert('No available data to load!');
          $('.tbl-empty').css('display', '');
          $('.tbl-with-content').css('display', 'none');
          $('#btnPrintReport').attr('disabled', true);
          $('#btnPrintReport').attr('class', 'btn btn-default btn-gradient dark btn-lg');
        } else {
          $('.tbl-with-content').css('display', '');
          $('.tbl-empty').css('display', 'none');
          $('#btnPrintReport').attr('disabled', false);
          $('#btnPrintReport').attr('class', 'btn btn-success btn-gradient dark btn-lg');
          _this2.aSheetDetails = aResult;
          _this2.reportLayoutSetter(aResult);
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
        this.aFundSource = aReportDetails.fund_source[0];
        this.aSheetRecap = aReportDetails.sheet_recap;
        this.aSheetSummary = aReportDetails.sheet_summary;
      } else if (this.sReportType === 'cash-reg-register') {
        this.aFundSource = aReportDetails.fund_source[0];
        this.aSheetRecap = aReportDetails.sheet_recap;
        this.aSheetSummary = aReportDetails.sheet_summary;
        this.computeSummation();
      } else if (this.sReportType === 'cash-reg-liquidation') {
        this.aSheetSummary = aReportDetails.sheet_summary;
      }
    },
    getFundSourceList: function getFundSourceList() {
      var _this3 = this;
      this.getRequest('fund-source/get-list', function (mResponse) {
        _this3.aFSList = mResponse.data;
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
      var fTotalParticularAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.total_amount);
        return accumulator + fValue;
      }, 0);
      this.fTotalGrossAmount = fTotalGross.toFixed(2);
      this.fTotalTaxAmount = fTotalTax.toFixed(2);
      this.fTotalNetAmount = fTotalNet.toFixed(2);
      this.fTotalParticularAmount = fTotalParticularAmount.toFixed(2);
    },
    computeSummation: function computeSummation(mValue) {
      var mSelf = this;
      this.aSheetDetails.sheet_entries.forEach(function (mValue) {
        if (mValue.uacs_code === '5-01-010-1000') {
          mSelf.fSumOfSWReg += parseFloat(mValue.net_amount);
        } else if (mValue.uacs_code === '5-01-010-2000') {
          mSelf.fSumOfSWCas += parseFloat(mValue.net_amount);
        } else if (mValue.uacs_code === '5-02-03-010') {
          mSelf.fSumOfOffice += parseFloat(mValue.net_amount);
        } else {
          mSelf.fSumOfOthers += parseFloat(mValue.net_amount);
        }
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

/***/ "./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_report_cd_record_vue_vue_type_template_id_ed1b974c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_report_cd_record.vue?vue&type=template&id=ed1b974c */ "./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=template&id=ed1b974c");
/* harmony import */ var _sdor_report_cd_record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_report_cd_record.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_sdor_report_cd_record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_report_cd_record_vue_vue_type_template_id_ed1b974c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_report_cd_record.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=template&id=ed1b974c":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=template&id=ed1b974c ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_record_vue_vue_type_template_id_ed1b974c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_record_vue_vue_type_template_id_ed1b974c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_report_cd_record.vue?vue&type=template&id=ed1b974c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_record.vue?vue&type=template&id=ed1b974c");


/***/ })

}]);