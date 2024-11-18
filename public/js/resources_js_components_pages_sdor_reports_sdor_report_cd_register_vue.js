"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_reports_sdor_report_cd_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libraries/gen_report_generate.js */ "./resources/js/libraries/gen_report_generate.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.sReportType = 'cash-reg-register';
    this.sReportDetailsUrl = 'report/cashreg-record-report';
    this.sPrintPageUrl = '/front/sdor/report/cd/register/print';
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6108c56c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "content_wrapper"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-6108c56c><div class=\"topbar-left\" data-v-6108c56c><ol class=\"breadcrumb\" data-v-6108c56c><li class=\"crumb-trail\" data-v-6108c56c> Financial Reports </li><li class=\"crumb-active\" data-v-6108c56c><a data-v-6108c56c>Cash Disbursement Register</a></li></ol></div></header>", 1);
var _hoisted_3 = {
  "class": "panel"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, "Cash Disbursement Register Report")], -1 /* HOISTED */);
});
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
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select type", -1 /* HOISTED */);
});
var _hoisted_11 = ["value"];
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_fund_type",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Please select a Fund Type! ", -1 /* HOISTED */);
});
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-3\" data-v-6108c56c><div class=\"admin-form mw1000 center-block\" data-v-6108c56c><label for=\"monthpicker1\" class=\"field prepend-icon\" data-v-6108c56c><input type=\"text\" id=\"inpMonthYearTransact\" name=\"inpMonthYearTransact\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly style=\"height:38px;\" data-v-6108c56c><label class=\"field-icon\" data-v-6108c56c><i class=\"fa fa-calendar-o\" data-v-6108c56c></i></label></label></div></div><div class=\"col-md-5\" data-v-6108c56c><button id=\"btnGenReport\" type=\"button\" class=\"btn btn-primary btn-gradient dark btn-md\" data-v-6108c56c><i class=\"fa fa-download\" data-v-6108c56c></i> Generate Report </button>   <button id=\"btnPrintReport\" type=\"button\" class=\"btn btn-default btn-gradient dark btn-md\" disabled data-v-6108c56c><i class=\"fa fa-file-pdf-o\" data-v-6108c56c></i> Print Report </button></div>", 2);
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
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select Special Request", -1 /* HOISTED */);
});
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
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select office", -1 /* HOISTED */);
});
var _hoisted_24 = ["value"];
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_fund_type",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Please select a Fund Type! ", -1 /* HOISTED */);
});
var _hoisted_26 = {
  "class": "col-md-12"
};
var _hoisted_27 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_29 = {
  "class": "panel-heading"
};
var _hoisted_30 = {
  "class": "panel-title hidden-xs",
  style: {
    "color": "rgb(255, 255, 255)"
  }
};
var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "glyphicon glyphicon-tasks"
  }, null, -1 /* HOISTED */);
});
var _hoisted_32 = {
  "class": "panel-body pn"
};
var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
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
});
var _hoisted_34 = {
  "class": "table table-bordered mbn tbl-with-content",
  id: "tbl_cash_reg_summary",
  cellspacing: "0",
  width: "100%",
  style: {
    "display": "none"
  }
};
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3",
    style: {
      "text-align": "center"
    }
  }, "Advances for Operating Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "6",
    style: {
      "text-align": "center"
    }
  }, "Breakdown of Payments")])], -1 /* HOISTED */);
});
var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3",
    style: {
      "text-align": "center"
    }
  }, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3",
    style: {
      "text-align": "center"
    }
  }, "Amount"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center",
      "width": "10%"
    }
  }, "Salaries and Wages - Regular"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center",
      "width": "10%"
    }
  }, "Salaries and Wages - Casual/Contractual"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Office Supplies"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "3",
    style: {
      "text-align": "center"
    }
  }, "Others")])], -1 /* HOISTED */);
});
var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
  }, "Particular"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Cash Advance"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Payments"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Balance"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "(50101010)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "(50101020)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "(50103010)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Account Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "UACS Object Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Amount")])], -1 /* HOISTED */);
});
var _hoisted_38 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "center"
    }
  }, " ", -1 /* HOISTED */);
});
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
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_43 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_44 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "right"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_50 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_51 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_52 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_53 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "left"
    }
  }, " ", -1 /* HOISTED */);
});
var _hoisted_54 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_55 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_56 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_57 = {
  key: 0
};
var _hoisted_58 = {
  key: 1
};
var _hoisted_59 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_60 = {
  key: 0
};
var _hoisted_61 = {
  key: 1
};
var _hoisted_62 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_63 = {
  key: 0
};
var _hoisted_64 = {
  key: 1
};
var _hoisted_65 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_66 = {
  key: 0
};
var _hoisted_67 = {
  key: 1
};
var _hoisted_68 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_69 = {
  key: 0
};
var _hoisted_70 = {
  key: 1
};
var _hoisted_71 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_72 = {
  key: 0
};
var _hoisted_73 = {
  key: 1
};
var _hoisted_74 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ")], -1 /* HOISTED */);
});
var _hoisted_75 = {
  style: {
    "text-align": "right",
    "border": "1px solid black"
  }
};
var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_78 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat",
    style: {
      "text-align": "center !important"
    }
  }, "Totals ", -1 /* HOISTED */);
});
var _hoisted_79 = {
  "class": "totalsCustomFormat"
};
var _hoisted_80 = {
  "class": "totalsCustomFormat"
};
var _hoisted_81 = {
  "class": "totalsCustomFormat"
};
var _hoisted_82 = {
  "class": "totalsCustomFormat"
};
var _hoisted_83 = {
  "class": "totalsCustomFormat"
};
var _hoisted_84 = {
  "class": "totalsCustomFormat"
};
var _hoisted_85 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_86 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_87 = {
  "class": "totalsCustomFormat"
};
var _hoisted_88 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ")], -1 /* HOISTED */);
});
var _hoisted_89 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "left"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Recapitulation:")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "center"
    }
  }, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "center"
    }
  }, " ")], -1 /* HOISTED */);
});
var _hoisted_90 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "center",
      "font-weight": "700"
    }
  }, "Account Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "center",
      "font-weight": "700"
    }
  }, "UACS Object Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    style: {
      "text-align": "center",
      "font-weight": "700"
    }
  }, "Amount")], -1 /* HOISTED */);
});
var _hoisted_91 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_92 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_93 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_94 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_95 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_96 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_97 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_98 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_99 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ", -1 /* HOISTED */);
});
var _hoisted_100 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_101 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_102 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_103 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, " ")], -1 /* HOISTED */);
});
var _hoisted_104 = {
  style: {
    "border": "1px solid black"
  }
};
var _hoisted_105 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_106 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_107 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_108 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_109 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_110 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_111 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_112 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_113 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_114 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat",
    style: {
      "font-weight": "700",
      "text-align": "center"
    }
  }, " Total", -1 /* HOISTED */);
});
var _hoisted_115 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "totalsCustomFormat"
  }, " ", -1 /* HOISTED */);
});
var _hoisted_116 = {
  "class": "totalsCustomFormat",
  style: {
    "font-weight": "700",
    "text-align": "right"
  }
};
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
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_25])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: REPORT FILTER"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" CASH DISBURSEMENT RECORD REPORT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Period Covered " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.sTitleDate), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_34, [_hoisted_35, _hoisted_36, _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FUND SOURCE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat(_ctx.aFundSource.date_created, 'DD-MMM-YY')), 1 /* TEXT */), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aFundSource.fs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aFundSource.fs_net_amount)), 1 /* TEXT */), _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aFundSource.fs_net_amount)), 1 /* TEXT */), _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" PARTICULARS "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aSheetDetails.sheet_entries, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat(item.date_created, 'DD-MMM')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aFundSource.cpo_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 1 /* TEXT */), _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.net_amount)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.difference)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_56, [item.uacs_code === '5-01-010-1000' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.net_amount)), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_58, " "))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_59, [item.uacs_code === '5-01-010-2000' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.net_amount)), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_61, " "))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_62, [item.uacs_code === '5-02-03-010' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.net_amount)), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_64, " "))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_65, [item.uacs_code === '5-01-010-1000' || item.uacs_code === '5-01-010-2000' || item.uacs_code === '5-02-03-010' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_66, "   ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_68, [item.uacs_code === '5-01-010-1000' || item.uacs_code === '5-01-010-2000' || item.uacs_code === '5-02-03-010' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_69, "   ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_71, [item.uacs_code === '5-01-010-1000' || item.uacs_code === '5-01-010-2000' || item.uacs_code === '5-02-03-010' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_72, "   ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.net_amount)), 1 /* TEXT */))])]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SPACER "), _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TOTAL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_75, [_hoisted_76, _hoisted_77, _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_cash)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_expenses)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_coh)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.fSumOfSWReg)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.fSumOfSWCas)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.fSumOfOffice)), 1 /* TEXT */), _hoisted_85, _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.fSumOfOthers)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SPACER "), _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" RECAP "), _hoisted_89, _hoisted_90, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aSheetRecap, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [_hoisted_91, _hoisted_92, _hoisted_93, _hoisted_94, _hoisted_95, _hoisted_96, _hoisted_97, _hoisted_98, _hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.total_amount)), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SPACER "), _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Total (RECAP) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_104, [_hoisted_105, _hoisted_106, _hoisted_107, _hoisted_108, _hoisted_109, _hoisted_110, _hoisted_111, _hoisted_112, _hoisted_113, _hoisted_114, _hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_expenses)), 1 /* TEXT */)])])])])])])])])])], 64 /* STABLE_FRAGMENT */);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.totalsCustomFormat[data-v-6108c56c] {\r\n    border-top: 1px solid black;\r\n    border-bottom: 1px solid black;\r\n    font-weight: 700;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_style_index_0_id_6108c56c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_style_index_0_id_6108c56c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_style_index_0_id_6108c56c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_report_cd_register_vue_vue_type_template_id_6108c56c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true */ "./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true");
/* harmony import */ var _sdor_report_cd_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_report_cd_register.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=script&lang=js");
/* harmony import */ var _sdor_report_cd_register_vue_vue_type_style_index_0_id_6108c56c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css */ "./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_sdor_report_cd_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_report_cd_register_vue_vue_type_template_id_6108c56c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6108c56c"],['__file',"resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_report_cd_register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_template_id_6108c56c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_template_id_6108c56c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=template&id=6108c56c&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_report_cd_register_vue_vue_type_style_index_0_id_6108c56c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/reports/sdor_report_cd_register.vue?vue&type=style&index=0&id=6108c56c&scoped=true&lang=css");


/***/ })

}]);