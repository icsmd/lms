"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_view_sdor_view_cr_entries_summary_mooe_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_sdor_view_entries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libraries/sdor_view_entries.js */ "./resources/js/libraries/sdor_view_entries.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_sdor_view_entries_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  mounted: function mounted() {
    this.sFundType = 'mooe';
    this.initDateValues();
    this.getCashBookSummary();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

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
  "class": "col-md-4"
};
var _hoisted_6 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_7 = {
  "class": "panel-heading"
};
var _hoisted_8 = {
  "class": "panel-title hidden-xs"
};
var _hoisted_9 = {
  "class": "panel-body pn"
};
var _hoisted_10 = {
  "class": "table table-striped table-hover",
  id: "tbl_cash_reg_summary",
  cellspacing: "0",
  width: "100%"
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
    "text-align": "center"
  }
};
var _hoisted_14 = ["id", "data-uacs_id"];
var _hoisted_15 = {
  "class": "col-md-8"
};
var _hoisted_16 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_17 = {
  "class": "panel-body pn"
};
var _hoisted_18 = {
  "class": "table table-striped table-hover",
  id: "tbl_cash_reg_breakdown",
  cellspacing: "0",
  width: "100%"
};
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
    "text-align": "left"
  }
};
var _hoisted_22 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_23 = ["id"];
var _hoisted_24 = ["id", "data-cr_no"];
var _hoisted_25 = ["data-uacs_id", "data-cr_no"];
var _hoisted_26 = {
  key: 1,
  type: "button",
  "class": "btn btn-md btn-default",
  disabled: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SDOR_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Cash Management </li><li class=\"crumb-trail\"> View Cash Disbursements </li><li class=\"crumb-active\"><a>Maintenance and Other Operating Expenses</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, "Summary of Entries for MOOE")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PAGE FILTER "), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-12\"><div class=\"panel panel-colorbox-open panel-primary\" id=\"spy2\"><div class=\"panel-heading\"><div class=\"panel-title hidden-xs\"><span class=\"fa fa-refresh\"></span>Filter Data </div></div><div class=\"panel-body pn\"><div style=\"margin:1%;\"><div class=\"col-md-3\" style=\"margin-bottom:1%;\"><div class=\"admin-form mw1000 center-block\"><label for=\"monthpicker1\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearTransact\" name=\"inpMonthYearTransact\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly style=\"height:38px;\"><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label></div></div><div class=\"col-md-3\" style=\"margin-bottom:1%;\"><button id=\"btnFilterData\" type=\"button\" class=\"btn btn-primary btn-gradient dark btn-md\"><i class=\"fa fa-refresh\"></i>  Filter </button></div></div></div></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PAGE FILTER"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: CASH REGISTER SUMMARY TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "glyphicon glyphicon-tasks"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Summary of Transactions for " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.sActiveDate), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "UACS Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Account Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Action")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aCashRegSummary, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[0].uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[0].uacs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      id: item[0].uacs_id,
      type: "button",
      "data-attr": "viewDetails",
      "data-uacs_id": item[0].uacs_id,
      "class": "btn btn-md btn-info pull-right viewDetails",
      style: {
        "margin-right": "9%"
      }
    }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-arrow-circle-o-right"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")])), 8 /* PROPS */, _hoisted_14)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: CASH REGISTER SUMMARY TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: CASH REGISTER BREAKDOWN TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-sitemap"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Transaction Breakdown ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_18, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SysId"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date/Time Encoded"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Payee"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Net Amount"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Action(s)")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aCashRegBreakdown, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.payee_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.net_amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
      id: item.cr_no,
      style: {
        "text-align": "center"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      id: item.transact_date,
      type: "button",
      "class": "btn btn-md btn-info",
      "data-attr": "viewRecordDetails",
      "data-cr_no": item.cr_no
    }, _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-eye"
    }, null, -1 /* HOISTED */)])), 8 /* PROPS */, _hoisted_24), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ")), item.sheet_stat === 'FOR REVISION' || item.sheet_stat === '---' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "data-uacs_id": item.uacs_id,
      type: "button",
      "class": "btn btn-md btn-danger",
      "data-attr": "deleteRecord",
      "data-cr_no": item.cr_no
    }, _toConsumableArray(_cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-trash"
    }, null, -1 /* HOISTED */)])), 8 /* PROPS */, _hoisted_25)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_26, _toConsumableArray(_cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-trash"
    }, null, -1 /* HOISTED */)]))))], 8 /* PROPS */, _hoisted_23)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: CASH REGISTER BREAKDOWN TABLE ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./resources/js/libraries/sdor_view_entries.js":
/*!*****************************************************!*\
  !*** ./resources/js/libraries/sdor_view_entries.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _utilities_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      sFundType: '',
      aSummaryTableConfig: {
        "aaSorting": [[0, 'desc']],
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
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
        "oTableTools": {
          "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
        }
      },
      aBreakdownTableConfig: {
        "aaSorting": [[0, 'desc']],
        "aoColumnDefs": [{
          'bSortable': false,
          'aTargets': [4]
        }],
        "oLanguage": {
          "oPaginate": {
            "sPrevious": "",
            "sNext": ""
          }
        },
        "iDisplayLength": 10,
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
        "oTableTools": {
          "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
        }
      },
      aCashRegSummary: [],
      aCashRegBreakdown: [],
      sActiveDate: '',
      sSelectedMonth: '',
      sSelectedYear: '',
      iActiveUacs: 0
    };
  },
  mounted: function mounted() {
    this.initPlugins();
    this.initPageEventListeners();
  },
  methods: {
    initPlugins: function initPlugins() {
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
    initTblCashRegSummary: function initTblCashRegSummary() {
      $('#tbl_cash_reg_summary').DataTable(this.aSummaryTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initTblCashRegBreakdown: function initTblCashRegBreakdown() {
      var mSelf = this;
      var bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_cash_reg_breakdown');
      if (bIsDataTableActive === true) {
        $('#tbl_cash_reg_breakdown').DataTable().destroy();
      }
      setTimeout(function () {
        $('#tbl_cash_reg_breakdown').DataTable(this.aBreakdownTableConfig);
        $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
      }, 500);
      setTimeout(function () {
        mSelf.initTable2Btns();
      }, 1000);
    },
    initPageEventListeners: function initPageEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();

        // Event listener for viewing more details
        if (event.target.id === 'btnFilterData') {
          mSelf.getCashBookSummary();
        }
      }, false);
    },
    initDateValues: function initDateValues() {
      var sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment().format('MM');
      var sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment().format('YYYY');
      var sMonthYearNow = sInitMonth + '/' + sInitYear;
      $('#inpMonthYearTransact').val(sMonthYearNow);
    },
    preloadDateValues: function preloadDateValues() {
      var sMonthYear = $('#inpMonthYearTransact').val();
      this.sSelectedMonth = sMonthYear.split('/')[0];
      this.sSelectedYear = sMonthYear.split('/')[1];
      var firstDay = this.sSelectedMonth + '-01-' + this.sSelectedYear;
      this.sActiveDate = moment(firstDay).format('MMMM') + ' ' + this.sSelectedYear;
    },
    initEventListeners: function initEventListeners() {
      // Event listener for viewing more details
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();

        // Event listener for viewing more details
        if (event.target.dataset.attr === 'viewDetails') {
          var iUacsId = event.target.dataset.uacs_id;
          mSelf.getCashBookBreakdown(iUacsId);
        }
      }, false);
    },
    initTable2Btns: function initTable2Btns() {
      // Event listener for viewing more details
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        // Event listener for viewing more details
        if (event.target.dataset.attr === 'viewRecordDetails') {
          var sDate = event.target.dataset;
          var iCrNo = event.target.dataset.cr_no;
          window.location.href = "/front/sdor/view-entry-details/" + iCrNo;
        }

        // Event listener for viewing more details
        if (event.target.dataset.attr === 'deleteRecord') {
          var _iCrNo = event.target.dataset.cr_no;
          var iUacsId = event.target.dataset.uacs_id;
          mSelf.iActiveUacs = iUacsId;
          mSelf.deleteRecord(_iCrNo, iUacsId);
        }
      }, false);
    },
    deleteRecord: function deleteRecord(iCrNo, iUacsId) {
      var _this = this;
      var mSelf = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          // Delete entry
          _this.postRequest('sdor/delete-entry', {
            iId: iCrNo
          }, function (mResponse) {
            mSelf.showSuccessAlert('Successfully deleted the entry');
            mSelf.getCashBookSummary(true);
          });
        }
      });
    },
    getCashBookSummary: function getCashBookSummary() {
      var _this2 = this;
      var bGetBreakdown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var mSelf = this;
      this.preloadDateValues();
      this.getRequest('sdor/get-cash-reg-summary', function (mResponse) {
        _this2.aCashRegSummary = mResponse.data;
        var bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_cash_reg_summary');
        if (bIsDataTableActive === true) {
          $('#tbl_cash_reg_summary').DataTable().destroy();
        }
        setTimeout(function () {
          mSelf.initTblCashRegSummary();
        }, 1000);
        setTimeout(function () {
          mSelf.initEventListeners();
        }, 1500);
        if (bGetBreakdown === true) {
          _this2.getCashBookBreakdown(_this2.iActiveUacs);
        }
      }, {
        transact_month: this.sSelectedMonth,
        transact_year: this.sSelectedYear,
        fund_type: this.sFundType
      });
    },
    getCashBookBreakdown: function getCashBookBreakdown(iUacsId) {
      var mSelf = this;
      this.aCashRegBreakdown = this.aCashRegSummary[iUacsId];
      this.initTblCashRegBreakdown();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_view_cr_entries_summary_mooe_vue_vue_type_template_id_2ed81928__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928 */ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928");
/* harmony import */ var _sdor_view_cr_entries_summary_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_sdor_view_cr_entries_summary_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_view_cr_entries_summary_mooe_vue_vue_type_template_id_2ed81928__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_summary_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_summary_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_summary_mooe_vue_vue_type_template_id_2ed81928__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_summary_mooe_vue_vue_type_template_id_2ed81928__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_summary_mooe.vue?vue&type=template&id=2ed81928");


/***/ })

}]);