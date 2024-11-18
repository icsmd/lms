"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_reports_report_ors_list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_ors_list.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_ors_list.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_admin_view_ors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libraries/admin_view_ors.js */ "./resources/js/libraries/admin_view_ors.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_admin_view_ors_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      sCompressedSummary: '',
      sTitleDate: '',
      sPrintPageUrl: '/front/bdgt/report/ors/list/print'
    };
  },
  mounted: function mounted() {
    this.sDefaultStatus = '';
    this.initOrsReportEventListeners();
    this.initOrsReportPlugins();
  },
  methods: {
    initOrsReportPlugins: function initOrsReportPlugins() {
      $(".type-select").select2();
    },
    initOrsReportEventListeners: function initOrsReportEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnPrintReport') {
          mSelf.prepareReport();
        }
      }, false);
    },
    getDateValues: function getDateValues() {
      var sMonthYear = $('#inpMonthYearCreated').val();
      var iMonth = sMonthYear.split('/')[0];
      var iYear = sMonthYear.split('/')[1];
      var firstDay = iMonth + '-01-' + iYear;
      var endDay = moment(firstDay).endOf('month').format('DD');
      this.sTitleDate = '01-' + endDay + ' ' + moment(firstDay).format('MMMM') + ' ' + iYear;
    },
    prepareReport: function prepareReport() {
      this.getDateValues();
      var oFinalPayload = Object.assign({}, {
        fund_source: this.aFundSource
      }, {
        date_details: {
          title_date: this.sTitleDate
        }
      });
      this.sCompressedSummary = btoa(JSON.stringify(oFinalPayload));
      this.$root.setLocalStorageValue('forEx', this.sCompressedSummary);
      window.open(this.sPrintPageUrl, '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_ors_list.vue?vue&type=template&id=1010a0e2":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_ors_list.vue?vue&type=template&id=1010a0e2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_4 = {
  "class": "form-group",
  id: "divInpTransactMY",
  style: {
    "margin": "1%"
  }
};
var _hoisted_5 = {
  "class": "admin-form mw1000 left-block"
};
var _hoisted_6 = {
  "class": "col-md-3"
};
var _hoisted_7 = {
  "class": "select2-single form-control region-select",
  id: "inp_region"
};
var _hoisted_8 = ["value"];
var _hoisted_9 = {
  "class": "col-md-3"
};
var _hoisted_10 = {
  "class": "select2-single form-control type-select",
  id: "inp_type"
};
var _hoisted_11 = ["value"];
var _hoisted_12 = {
  "class": "col-md-2"
};
var _hoisted_13 = {
  "class": "select2-single form-control status-select",
  id: "inp_status"
};
var _hoisted_14 = ["value"];
var _hoisted_15 = {
  "class": "col-md-12"
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
  id: "tbl_fund_source",
  cellspacing: "0",
  width: "100%"
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
    "text-align": "center"
  }
};
var _hoisted_25 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_26 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_27 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_28 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_29 = {
  style: {
    "text-align": "center"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_BDGT_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_BDGT_Sidebar");
  var _component_C_Layout_ACTG_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_ACTG_Sidebar");
  var _component_C_Layout_CASH_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_CASH_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), _ctx.$root.sUserType === 'bdgt' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_C_Layout_BDGT_Sidebar, {
    key: 0
  })) : _ctx.$root.sUserType === 'actg' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_C_Layout_ACTG_Sidebar, {
    key: 1
  })) : _ctx.$root.sUserType === 'cash' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_C_Layout_CASH_Sidebar, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Other Reports </li><li class=\"crumb-active\"><a>ORS Record List</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, " ORS Record List Report ")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filter Fund Sources "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-2\"><label for=\"inp_region\" style=\"margin-bottom:2%;\"><b>Date Modified: </b></label><label for=\"inpMonthYearCreated\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearCreated\" name=\"inpMonthYearCreated\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_region",
    style: {
      "margin-bottom": "2%"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Office:")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_7, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "0",
    selected: ""
  }, "ALL", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aRegions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc), 9 /* TEXT, PROPS */, _hoisted_8);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_region",
    style: {
      "margin-bottom": "2%"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Type:")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_10, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    selected: ""
  }, "ALL", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aFundTypes, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.code
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_11);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_status",
    style: {
      "margin-bottom": "2%"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Status:")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aFsStatuses, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_14);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-2\"><button id=\"btnFilterTable\" style=\"margin-top:20px;\" type=\"button\" class=\"btn btn-primary btn-gradient dark btn-block\"><i class=\"fa fa-refresh\"></i> Generate Report </button><button id=\"btnPrintReport\" style=\"margin-top:20px;\" type=\"button\" class=\"btn btn-success btn-gradient dark btn-block\"><i class=\"fa fa-file-pdf-o\"></i> Print Report </button></div>", 1))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: ORS VIEW TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "glyphicon glyphicon-tasks"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ORS Record List "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    style: {
      "font-size": "12px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", null, " (Filter done inside the table will not reflect in the actual printable report)")])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_18, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Sys Ref No."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "ORS No."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "DV No."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "ADA/Check No."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Type"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Requesting Office"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Gross"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Net"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date/Time Last Modified")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aFundSource, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.ors_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.dv_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.cpo_no)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_type), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_gross_amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.fs_net_amount, 'number')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_modified, 'date')), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: MOOE SHEETS TABLE ")])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/libraries/admin_view_ors.js":
/*!**************************************************!*\
  !*** ./resources/js/libraries/admin_view_ors.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./resources/js/libraries/request.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_request_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      aTableConfig: {
        "aaSorting": [[0, 'desc']],
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
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
        "oTableTools": {
          "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
        }
      },
      aFundSource: [],
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
      aFsStatuses: [{
        id: '',
        desc: 'ALL'
      }, {
        id: 'OPEN',
        desc: 'Open'
      }, {
        id: 'FOR ORS REV',
        desc: 'Ongoing Revision for ORS'
      }, {
        id: 'FOR DV',
        desc: 'For DV Issuance'
      }, {
        id: 'FOR DV REV',
        desc: 'Ongoing Revision for DV'
      }, {
        id: 'FOR PO',
        desc: 'For Payout Issuance'
      }, {
        id: 'FOR RELEASE',
        desc: 'For Releasing'
      }, {
        id: 'RELEASED',
        desc: 'Released'
      }, {
        id: 'CLEARED',
        desc: 'Cleared'
      }],
      aRegions: [],
      sRedirectUrl: '',
      sDefaultStatus: ''
    };
  },
  mounted: function mounted() {
    this.initPlugins();
    this.getRegions();
    this.initPageValues();
    this.initEventListeners();
  },
  methods: {
    initPlugins: function initPlugins() {
      $(".status-select").select2();
      $(".status-select").select2().val(this.sDefaultStatus).trigger('change');
      $(".region-select").select2();
      $(".region-select").select2().val(0).trigger('change');
      // Initialize datepicker
      $("#inpMonthYearCreated").monthpicker({
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
    initTblFundSource: function initTblFundSource() {
      $('#tbl_fund_source').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initPageValues: function initPageValues() {
      var mSelf = this;
      var sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment__WEBPACK_IMPORTED_MODULE_0___default()().format('MM');
      var sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY');
      var sMonthYearNow = sInitMonth + '/' + sInitYear;
      $('#inpMonthYearCreated').val(sMonthYearNow);
      if (this.$route.query.stat != undefined) {
        $(".status-select").select2().val(this.$route.query.stat).trigger('change');
      }
      setTimeout(function () {
        if (mSelf.$route.query.reg != undefined) {
          $(".region-select").select2().val(parseInt(mSelf.$route.query.reg)).trigger('change');
        }
        mSelf.filterTable();
      }, 200);
    },
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'href') {
          window.location.href = event.target.href + mSelf.sSheetFundType;
        }
        if (event.target.id === 'btnFilterTable') {
          mSelf.filterTable();
        }
      }, false);
    },
    filterTable: function filterTable() {
      var sDate = $('#inpMonthYearCreated').val();
      var iInpOffice = $('#inp_region').val();
      var iInpType = $('#inp_type').val();
      if (sDate === '') {
        this.showErrorAlert('Date (Month and Year) is Required!');
      } else {
        var aDate = sDate.split('/');
        var oParam = {
          fs_status: $('#inp_status').val(),
          date_month_created: aDate[0],
          date_year_created: aDate[1]
        };
        if (iInpOffice != 0) {
          oParam = Object.assign({}, oParam, {
            region_id: iInpOffice
          });
        }
        if (iInpType != '' || iInpType != undefined) {
          oParam = Object.assign({}, oParam, {
            fs_type: iInpType
          });
        }
        this.getFundSource(oParam);
      }
    },
    initTableEventListener: function initTableEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'viewDetails') {
          window.location.href = mSelf.sRedirectUrl + event.target.dataset.fs_id;
        }
      }, false);
    },
    getDateModified: function getDateModified(sDateModified) {
      return sDateModified === null ? '---' : this.convertDateFormat(sDateModified, 'DD-MMM-YY H:mm:ss');
    },
    getRegions: function getRegions() {
      this.aRegions = this.$root.parseLocalStorageLib().regions;
    },
    getFundSource: function getFundSource(oParams) {
      var _this = this;
      var mSelf = this;
      this.getRequest('bdgt/get-fund-source', function (mResponse) {
        _this.aFundSource = mResponse.data;
        var bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_fund_source');
        if (bIsDataTableActive === true) {
          // $('#tbl_fund_source').DataTable().clear();
          $('#tbl_fund_source').DataTable().destroy();
        }
        setTimeout(function () {
          mSelf.initTblFundSource();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, oParams);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/reports/report_ors_list.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pages/reports/report_ors_list.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _report_ors_list_vue_vue_type_template_id_1010a0e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report_ors_list.vue?vue&type=template&id=1010a0e2 */ "./resources/js/components/pages/reports/report_ors_list.vue?vue&type=template&id=1010a0e2");
/* harmony import */ var _report_ors_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report_ors_list.vue?vue&type=script&lang=js */ "./resources/js/components/pages/reports/report_ors_list.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_report_ors_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_report_ors_list_vue_vue_type_template_id_1010a0e2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/reports/report_ors_list.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/reports/report_ors_list.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/reports/report_ors_list.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_ors_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_ors_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./report_ors_list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_ors_list.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/reports/report_ors_list.vue?vue&type=template&id=1010a0e2":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/reports/report_ors_list.vue?vue&type=template&id=1010a0e2 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_ors_list_vue_vue_type_template_id_1010a0e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_report_ors_list_vue_vue_type_template_id_1010a0e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./report_ors_list.vue?vue&type=template&id=1010a0e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/reports/report_ors_list.vue?vue&type=template&id=1010a0e2");


/***/ })

}]);