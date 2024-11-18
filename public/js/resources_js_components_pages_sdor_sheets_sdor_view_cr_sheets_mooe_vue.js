"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_sheets_sdor_view_cr_sheets_mooe_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libraries/request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libraries/utilities */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      bPSSheetExist: false,
      bMOOESheetExist: false,
      bSRSheetExist: false,
      aTableConfig: {
        "aaSorting": [[0, 'desc']],
        "aoColumnDefs": [{
          'bSortable': false,
          'aTargets': [5]
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
      aMOOEsheets: [],
      aSheetStatuses: [{
        id: 'OPEN',
        desc: 'Open'
      }, {
        id: 'FOR REVISION',
        desc: 'For Revision'
      }, {
        id: 'REVISED',
        desc: 'Revised'
      }, {
        id: 'POSTED',
        desc: 'Posted'
      }],
      sActiveDate: '',
      sSelectedMonth: '',
      sSelectedYear: '',
      sSelectedStatus: ''
    };
  },
  mounted: function mounted() {
    this.initializePlugins();
    this.initPageValues();
    this.getMOOESheets();
    this.initEventListener();
  },
  methods: {
    initializePlugins: function initializePlugins() {
      $(".status-select").select2();
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

      // For Filter
      $("#inpMonthYearTransactFilter").monthpicker({
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
    initEventListener: function initEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnMOOECreateSheet') {
          mSelf.validateSheetCreation();
        }
        if (event.target.id === 'btnFilterData') {
          mSelf.getMOOESheets();
        }
      }, false);
    },
    validateSheetCreation: function validateSheetCreation() {
      var sMonthYear = $('#inpMonthYearTransact').val();
      if (sMonthYear === '') {
        this.showErrorAlert('Month and Year is Required!');
      } else {
        this.checkMOOESheetIfExist(sMonthYear);
      }
    },
    initTblMOOESheets: function initTblMOOESheets() {
      $('#tbl_MOOE_sheets').DataTable(this.aTableConfig);
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
        if (event.target.dataset.attr === 'deleteSheet') {
          mSelf.deleteRecord(event.target.dataset.sheet_id);
        }
      }, false);
    },
    initPageValues: function initPageValues() {
      var sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment().format('MM');
      var sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment().format('YYYY');
      var sMonthYearNow = sInitMonth + '/' + sInitYear;
      if (this.$route.query.stat != undefined) {
        $(".status-select").select2().val(this.$route.query.stat).trigger('change');
      }
      $('#inpMonthYearTransactFilter').val(sMonthYearNow);
    },
    preloadRequestValues: function preloadRequestValues() {
      var sMonthYear = $('#inpMonthYearTransactFilter').val();
      this.sSelectedMonth = sMonthYear.split('/')[0];
      this.sSelectedYear = sMonthYear.split('/')[1];
      var firstDay = this.sSelectedMonth + '-01-' + this.sSelectedYear;
      this.sActiveDate = moment(firstDay).format('MMMM') + ' ' + this.sSelectedYear;
      this.sSelectedStatus = $('#inp_status').val();
    },
    getMOOESheets: function getMOOESheets() {
      var _this = this;
      var mSelf = this;
      this.preloadRequestValues();
      this.getRequest('sdor/get-sheets', function (mResponse) {
        _this.aMOOEsheets = mResponse.data;
        var bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_MOOE_sheets');
        if (bIsDataTableActive === true) {
          $('#tbl_MOOE_sheets').DataTable().destroy();
        }
        setTimeout(function () {
          mSelf.initTblMOOESheets();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, {
        transact_month: this.sSelectedMonth,
        transact_year: this.sSelectedYear,
        status: this.sSelectedStatus,
        sheet_fund_type: 'mooe'
      });
    },
    confirmCreateSheet: function confirmCreateSheet(bExist, sFundType, sMonthYear) {
      var sTitle, sMessage;
      if (bExist === true) {
        sTitle = "Warning!";
        sMessage = "<b>You have an existing sheet for this month! </b> If you want to re-create, this will re-consolidate all transaction for this month and will be resubmitted again for review and approval. Do you still want to proceed?";
      } else {
        sTitle = "Confirmation";
        sMessage = "By creating a sheet, you are now finalizing your entries for this month and your record of transactions will be submitted for review and approval of the Office of Comptroller. Are you sure you want to proceed?";
      }
      this.createSheet(sTitle, sMessage, sFundType, sMonthYear);
    },
    checkMOOESheetIfExist: function checkMOOESheetIfExist(sMonthYear) {
      var _this2 = this;
      var sFundType = 'mooe';
      var oParams = {
        sheet_fund_type: sFundType,
        month_year: sMonthYear
      };
      this.getRequest('sdor/check-sheet-exist', function (mResponse) {
        _this2.confirmCreateSheet(mResponse.data, sFundType, sMonthYear);
      }, oParams);
    },
    createSheet: function createSheet(sTitle, sMessage, sFundType, sMonthYear) {
      var _this3 = this;
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
          var oParams = {
            sheet_fund_type: sFundType,
            month_year: sMonthYear,
            remarks: $('#txt_remarks').val()
          };
          _this3.postRequest('sdor/create-sheet-mooe', oParams, function (mResponse) {
            mSelf.clearInputFields();
            mSelf.reloadSheetTable();
            mSelf.showSuccessAlert('Successfully created a sheet');
          });
        }
      });
    },
    deleteRecord: function deleteRecord(iSheetId) {
      var _this4 = this;
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
          _this4.postRequest('sdor/delete-sheet/' + iSheetId, {}, function (mResponse) {
            mSelf.reloadSheetTable();
            mSelf.showSuccessAlert('Successfully deleted the sheet!');
          });
        }
      });
    },
    reloadSheetTable: function reloadSheetTable() {
      $('#tbl_MOOE_sheets').DataTable().destroy();
      this.getMOOESheets();
    },
    clearInputFields: function clearInputFields() {
      $('#txt_remarks').val('');
      $('#inpMonthYearTransact').val('');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "col-md-12"
};
var _hoisted_6 = {
  "class": "panel panel-colorbox-open panel-primary",
  id: "spy2"
};
var _hoisted_7 = {
  "class": "panel-body pn"
};
var _hoisted_8 = {
  style: {
    "margin": "1%"
  }
};
var _hoisted_9 = {
  "class": "col-md-2"
};
var _hoisted_10 = {
  "class": "admin-form mw1000 center-block"
};
var _hoisted_11 = {
  "class": "select2-single form-control status-select",
  id: "inp_status"
};
var _hoisted_12 = ["value"];
var _hoisted_13 = {
  "class": "col-md-12"
};
var _hoisted_14 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_15 = {
  "class": "panel-body pn"
};
var _hoisted_16 = {
  "class": "table table-striped table-hover",
  id: "tbl_MOOE_sheets",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_17 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_18 = {
  style: {
    "text-align": "center"
  }
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
    "text-align": "center"
  }
};
var _hoisted_22 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_23 = ["data-sheet_id"];
var _hoisted_24 = ["data-sheet_id"];
var _hoisted_25 = {
  key: 1,
  type: "button",
  "class": "btn btn-md btn-default",
  disabled: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SDOR_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Cash Management </li><li class=\"crumb-trail\"> Manage Sheet </li><li class=\"crumb-active\"><a>Maintenance and Other Operating Expenses</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, "Manage Cash Disbursement Sheets for MOOE")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MOOE Create Sheet "), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-12\"><div class=\"panel panel-colorbox-open panel-system\" id=\"spy2\"><br><div class=\"panel-heading\"><div class=\"panel-title hidden-xs\"><span class=\"fa fa-plus-square-o\"></span>Create MOOE Sheet </div></div><div class=\"panel-body pn\"><div class=\"form-group\" id=\"divInpTransactMY\" style=\"margin:1%;\"><div class=\"admin-form mw1000 left-block\"><div class=\"col-md-7 section\"><label class=\"field prepend-icon\"><textarea class=\"gui-textarea\" id=\"txt_remarks\" name=\"comment\" placeholder=\"Enter your remarks here...\"></textarea><label for=\"comment\" class=\"field-icon\"><i class=\"fa fa-comments\"></i></label><span class=\"input-footer\"><strong>Hint: </strong>Provide a short description about this sheet. (Optional)</span></label></div><div class=\"col-md-3\"><label for=\"monthpicker1\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearTransact\" name=\"inpMonthYearTransact\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label><button id=\"btnMOOECreateSheet\" type=\"button\" class=\"btn btn-system btn-gradient dark btn-block\" style=\"margin-top:22%;\"><i class=\"fa fa-plus-square-o\"></i> Create Sheet (MOOE) </button></div></div></div></div></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PAGE FILTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-refresh"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Filter Data ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-3\" style=\"margin-bottom:1%;\"><div class=\"admin-form mw1000 center-block\"><label for=\"inp_status\" style=\"margin-bottom:2%;\"><b>Date Created:</b></label><label for=\"monthpicker1\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearTransactFilter\" name=\"inpMonthYearTransactFilter\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly style=\"height:38px;\"><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_status",
    style: {
      "margin-bottom": "2%"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Status:")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_11, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    selected: ""
  }, "ALL", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aSheetStatuses, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_12);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-3",
    style: {
      "margin-bottom": "1%"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "admin-form mw1000 center-block"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "btnFilterData",
    type: "button",
    "class": "btn btn-primary btn-gradient dark btn-md",
    style: {
      "margin-top": "19px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-refresh"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Filter ")])])], -1 /* HOISTED */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PAGE FILTER"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: MOOE SHEETS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "glyphicon glyphicon-tasks"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Disbursement Sheets for Maintenance and Other Operating Expenses ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_16, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SysId"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Sheet No"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Accounting Period"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date Created"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Action")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aMOOEsheets, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sheet_no === null ? '---' : item.sheet_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat(item.transact_year + '-' + item.transact_month, 'MMMM YYYY')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-attr": "viewDetails",
      "data-sheet_id": item.sheet_id,
      "class": "btn btn-md btn-info viewDetails",
      style: {
        "margin-right": "2%"
      }
    }, _toConsumableArray(_cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-arrow-circle-o-right"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")])), 8 /* PROPS */, _hoisted_23), item.status === 'OPEN' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      type: "button",
      "data-attr": "deleteSheet",
      "data-sheet_id": item.sheet_id,
      "class": "btn btn-md btn-danger deleteSheet"
    }, _toConsumableArray(_cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-trash"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ")])), 8 /* PROPS */, _hoisted_24)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_25, _toConsumableArray(_cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-trash"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ")]))))])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: MOOE SHEETS TABLE ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_view_cr_sheets_mooe_vue_vue_type_template_id_15364fb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8 */ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8");
/* harmony import */ var _sdor_view_cr_sheets_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_sdor_view_cr_sheets_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_view_cr_sheets_mooe_vue_vue_type_template_id_15364fb8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_mooe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_mooe_vue_vue_type_template_id_15364fb8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheets_mooe_vue_vue_type_template_id_15364fb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheets_mooe.vue?vue&type=template&id=15364fb8");


/***/ })

}]);