"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_view_sdor_view_cr_entries_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libraries/utilities */ "./resources/js/libraries/utilities.js");
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libraries/request.js */ "./resources/js/libraries/request.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_utilities__WEBPACK_IMPORTED_MODULE_0__["default"], _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      iCrNo: 0,
      aCrDetails: [],
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
      sSheetStatus: ''
    };
  },
  watch: {
    sSelectedTax: function sSelectedTax(sVal) {
      this.computeTax(0);
      this.filterTaxCodes(sVal);
    }
  },
  mounted: function mounted() {
    this.getEntryDetails();
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
    getFundSourceList: function getFundSourceList() {
      var _this = this;
      var aFsList = this.$root.parseLocalStorageLib().fund_source;
      this.aFSList = aFsList.filter(function (fundSource) {
        return fundSource.fs_type == _this.sSheetFundType && fundSource.fs_status === 'RELEASED';
      });
    },
    getUacsList: function getUacsList() {
      var _this2 = this;
      var aUacsList = this.$root.parseLocalStorageLib().uacs;
      this.aUacsList = aUacsList.filter(function (uacs) {
        return uacs.uacs_fund_type == _this2.sSheetFundType;
      });
    },
    getPayeeList: function getPayeeList() {
      var _this3 = this;
      this.getRequest('payee/get-list', function (mResponse) {
        _this3.aPayeeList = mResponse.data;
      });
    },
    getTaxCodes: function getTaxCodes() {
      this.aTaxCodes = this.$root.parseLocalStorageLib().tax_code;
    },
    getTaxClass: function getTaxClass() {
      this.aTaxClass = this.$root.parseLocalStorageLib().tax_class;
    },
    getEntryDetails: function getEntryDetails() {
      var _this4 = this;
      var mSelf = this;
      this.iCrNo = this.$route.params.id;
      this.getRequest('sdor/get-entry-details/' + this.iCrNo, function (mResponse) {
        _this4.aCrDetails = mResponse.data[0];
        _this4.sSheetFundType = _this4.aCrDetails.fund_type;
        _this4.sSheetStatus = _this4.aCrDetails.sheet_stat;
        _this4.setSheetTypeLink();
        if (_this4.aCrDetails.sheet_stat === 'FOR REVISION' || _this4.aCrDetails.sheet_stat === '---') {
          $('#edit_transact_div').css('display', '');
        } else {
          $('#info_message_div').css('display', '');
        }
        _this4.getUacsList();
        _this4.getFundSourceList();
        if (_this4.sSheetFundType !== 'ps') {
          $(".tax-class-select").select2();
          $(".payee-select").select2();
          _this4.getPayeeList();
          _this4.getTaxClass();
          _this4.getTaxCodes();
        }
        setTimeout(function () {
          mSelf.setFieldsValue();
          mSelf.initializePlugins();
          mSelf.setFieldAutoCompute('#inp_gross_amount', 0);
          mSelf.setFieldAutoCompute('#inp_tax_amount', 1);
          if (mSelf.sSheetFundType !== 'ps') {
            mSelf.setFieldAutoCompute('#inp_net_amount', 1);
          }
        }, 500);
        _this4.sFundSource = _this4.aCrDetails.fs_ors_no + ' (' + _this4.aCrDetails.fs_desc + ')';
      });
    },
    setFieldsValue: function setFieldsValue() {
      this.initEventListener();
      $('#inpDateTransact').val(this.convertDateFormat(this.aCrDetails.transact_date, 'MM/DD/YYYY'));
      $(".fs-select").select2().val(this.aCrDetails.fs_id).trigger('change');
      $(".uacs-select").select2().val(this.aCrDetails.uacs_id).trigger('change');
      $('#inp_net_amount').val(this.aCrDetails.net_amount);
      if (this.sSheetFundType !== 'ps') {
        $('#inp_or_number').val(this.aCrDetails.or_number);
        $(".tax-class-select").select2().val(this.aCrDetails.tcl_id).trigger('change');
        $(".payee-select").select2().val(this.aCrDetails.payee_id).trigger('change');
        $('#inp_tax_amount').val(this.aCrDetails.tax_amount);
        $('#inp_gross_amount').val(this.aCrDetails.gross_amount);
      }
    },
    setSheetTypeLink: function setSheetTypeLink() {
      if (this.sSheetFundType === 'ps') {
        this.sSheetTypeLink = 'Personnel Services';
      } else if (this.sSheetFundType === 'mooe') {
        this.sSheetTypeLink = 'Maintenance and Other Operating Expenses';
      } else {
        this.sSheetTypeLink = 'Special Requests';
      }
    },
    initEventListener: function initEventListener() {
      var mSelf = this;
      $('#inp_tax_class').on('select2:select', function (e) {
        var iTaxClassId = e.params.data.id;
        mSelf.filterTaxCodes(iTaxClassId);
        mSelf.computeTax(0);
      });
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'href') {
          window.location.href = event.target.href + mSelf.sSheetFundType;
        }
        if (event.target.id === 'btnUpdateEntry') {
          mSelf.updateEntry();
        }
      }, false);
    },
    updateEntry: function updateEntry() {
      var oParam = this.filterParams();
      var mSelf = this;
      this.postRequest('sdor/update-entry/' + this.iCrNo, oParam, function (mResponse) {
        if (mResponse.data == 1) {
          mSelf.showSuccessAlert('Successfully updated the transaction details!');
          mSelf.getRequest('sdor/get-entry-details/' + mSelf.iCrNo, function (mResponse) {
            mSelf.aCrDetails = mResponse.data[0];
          });
        }
      });
    },
    filterParams: function filterParams() {
      var aTransactDate = $('#inpDateTransact').val().split('/');
      var oParam = {
        transact_date: $('#inpDateTransact').val(),
        transact_month: aTransactDate[0],
        transact_year: aTransactDate[2],
        fs_id: $('#inp_fund_source').val(),
        uacs_id: $('#inp_uacs').val(),
        net_amount: $('#inp_net_amount').val()
      };
      if (this.sSheetFundType !== 'ps') {
        oParam = Object.assign({}, oParam, {
          or_number: $('#inp_or_number').val(),
          gross_amount: $('#inp_gross_amount').val(),
          tax_amount: $('#inp_tax_amount').val(),
          payee_id: $('#inp_payee').val(),
          tcl_id: $('#inp_tax_class').val()
        });
      }
      return oParam;
    },
    filterTaxCodes: function filterTaxCodes(sTaxType) {
      var filteredTaxCodes = this.aTaxCodes.filter(function (taxCode) {
        return taxCode.tcl_id == sTaxType;
      });
      this.aFilteredTaxCodes = filteredTaxCodes;
    },
    filterTaxValues: function filterTaxValues(iTaxClassId) {
      return this.aTaxClass.filter(function (taxClass) {
        return taxClass.tcl_id == iTaxClassId;
      });
    },
    computeTax: function computeTax(bTaxOverride) {
      var aTaxTypeDetails = this.filterTaxValues($('#inp_tax_class').val());
      var sTaxGenType = aTaxTypeDetails[0] === undefined ? null : aTaxTypeDetails[0].tcl_type;
      var fInpGrossAmount = parseFloat($('#inp_gross_amount').val());
      var fTaxBase, fTWTax, fComputedNet;
      if (sTaxGenType === null) {
        $('#inp_tax_amount').val('0.00');
        $('#inp_tax_amount').attr('readonly', true);
        $('#inp_net_amount').val(fInpGrossAmount.toFixed(2));
      } else {
        $('#inp_tax_amount').attr('readonly', false);
        fTaxBase = sTaxGenType === 'vat' ? fInpGrossAmount / this.fTaxVATValue : fInpGrossAmount;
        var fTaxP1 = this.aFilteredTaxCodes[0].tcd_percentage;
        var fTaxP2 = this.aFilteredTaxCodes[1].tcd_percentage;
        if (bTaxOverride === 0) {
          fTWTax = fTaxBase * fTaxP1 + fTaxBase * fTaxP2;
          $('#inp_tax_amount').val(fTWTax.toFixed(2));
        } else {
          fTWTax = parseFloat($('#inp_tax_amount').val());
        }
        fComputedNet = fInpGrossAmount - fTWTax;
        $('#inp_net_amount').val(fComputedNet.toFixed(2));
      }
    },
    setFieldAutoCompute: function setFieldAutoCompute(sElementId, bTaxOverride) {
      var mSelf = this;
      $(sElementId).keyup(function (event) {
        event.preventDefault();
        mSelf.computeTax(bTaxOverride);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  id: "topbar",
  "class": "alt"
};
var _hoisted_4 = {
  "class": "topbar-left"
};
var _hoisted_5 = {
  "class": "breadcrumb"
};
var _hoisted_6 = {
  "class": "crumb-link"
};
var _hoisted_7 = {
  href: "/front/sdor/get-cash-reg-summary"
};
var _hoisted_8 = {
  "class": "panel"
};
var _hoisted_9 = {
  "class": "panel-body"
};
var _hoisted_10 = {
  "class": "panel panel-colorbox-open panel-info col-md-7",
  id: "spy2"
};
var _hoisted_11 = {
  "class": "panel-body pn"
};
var _hoisted_12 = {
  style: {
    "margin": "2%"
  }
};
var _hoisted_13 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "60%",
  style: {
    "margin-top": "3%"
  }
};
var _hoisted_14 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_15 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "60%",
  style: {
    "margin-top": "3%"
  }
};
var _hoisted_16 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_17 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_18 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_19 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "60%"
};
var _hoisted_20 = {
  key: 0
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
  key: 1
};
var _hoisted_25 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_26 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_27 = {
  key: 2
};
var _hoisted_28 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_29 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "60%"
};
var _hoisted_30 = {
  key: 0
};
var _hoisted_31 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_32 = {
  key: 1
};
var _hoisted_33 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_34 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_35 = {
  "class": "panel panel-colorbox-open panel-warning col-md-4",
  id: "edit_transact_div",
  style: {
    "display": "none"
  }
};
var _hoisted_36 = {
  "class": "panel-body pn"
};
var _hoisted_37 = {
  key: 0,
  style: {
    "margin": "2%"
  }
};
var _hoisted_38 = {
  "class": "form-group"
};
var _hoisted_39 = {
  "class": "col-lg-12",
  style: {
    "margin-bottom": "2%"
  }
};
var _hoisted_40 = ["value"];
var _hoisted_41 = {
  "class": "form-group"
};
var _hoisted_42 = {
  "class": "col-lg-12",
  style: {
    "margin-bottom": "2%"
  }
};
var _hoisted_43 = ["value"];
var _hoisted_44 = {
  "class": "col-md-12",
  style: {
    "margin-bottom": "5%"
  }
};
var _hoisted_45 = ["onClick"];
var _hoisted_46 = {
  key: 1,
  style: {
    "margin": "2%"
  }
};
var _hoisted_47 = {
  "class": "form-group"
};
var _hoisted_48 = {
  "class": "col-lg-12",
  style: {
    "margin-bottom": "2%"
  }
};
var _hoisted_49 = ["value"];
var _hoisted_50 = {
  "class": "form-group"
};
var _hoisted_51 = {
  "class": "col-lg-12",
  style: {
    "margin-bottom": "2%"
  }
};
var _hoisted_52 = {
  "class": "select2-single form-control uacs-select",
  id: "inp_uacs"
};
var _hoisted_53 = ["value"];
var _hoisted_54 = {
  "class": "form-group"
};
var _hoisted_55 = {
  "class": "col-lg-12",
  style: {
    "margin-bottom": "2%"
  }
};
var _hoisted_56 = {
  "class": "select2-single form-control payee-select",
  id: "inp_payee"
};
var _hoisted_57 = ["value"];
var _hoisted_58 = {
  "class": "form-group"
};
var _hoisted_59 = {
  "class": "col-lg-12",
  style: {
    "margin-bottom": "5%"
  }
};
var _hoisted_60 = {
  "class": "select2-single form-control tax-class-select",
  id: "inp_tax_class"
};
var _hoisted_61 = ["value"];
var _hoisted_62 = {
  "class": "col-md-12",
  style: {
    "margin-bottom": "5%"
  }
};
var _hoisted_63 = ["onClick"];
var _hoisted_64 = {
  "class": "col-md-5",
  id: "info_message_div",
  style: {
    "margin-top": "19px"
  }
};
var _hoisted_65 = {
  key: 0,
  "class": "alert alert-warning"
};
var _hoisted_66 = {
  key: 1,
  "class": "alert alert-info"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SDOR_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_5, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "crumb-trail"
  }, " View Cash Disbursements ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sSheetTypeLink), 1 /* TEXT */)]), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "crumb-active"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, "Transaction Details")], -1 /* HOISTED */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, " View Transaction Details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/front/sdor/view-entry-summary/",
    "data-attr": "href",
    "class": "btn btn-md btn-primary pull-right",
    style: {
      "margin-top": "0.5%"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-arrow-left"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Go back to Viewing Table ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: TRANSACTION'S CURRENT DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-list-alt"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Transaction's Current Details ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Sys ID", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.temp_id), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Date of Transaction", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.transact_date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Date/Time Encoded", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.date_created), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Date/Time Last Modified", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.date_modified), 1 /* TEXT */)])])]), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$data.sSheetFundType !== 'ps' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_20, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "OR Number", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.or_number), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Responsibility Center Code", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.region_abbr), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ORS/DV/ADA Details", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "ORS No.:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sFundSource) + " ", 1 /* TEXT */), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "DV No.:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.fs_dv_no), 1 /* TEXT */), _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "ADA/Check No.:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.fs_cpo_no), 1 /* TEXT */)])]), $data.sSheetFundType !== 'ps' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_24, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Payee's Details", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Name:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.payee_name), 1 /* TEXT */), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "TIN:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.payee_tin), 1 /* TEXT */), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Address:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.payee_address), 1 /* TEXT */), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Nature of Payment Details", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_26, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "UACS Object Code:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.uacs_code) + " ", 1 /* TEXT */), _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Description:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.uacs_desc) + " ", 1 /* TEXT */), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */))])]), $data.sSheetFundType !== 'ps' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_27, [_cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Tax Type:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aCrDetails.tcl_desc), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$data.sSheetFundType !== 'ps' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_30, [_cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Gross Amount", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat($data.aCrDetails.gross_amount)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sSheetFundType !== 'ps' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_32, [_cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Tax Amount", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat($data.aCrDetails.tax_amount)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Net Amount", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat($data.aCrDetails.net_amount)), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: TRANSACTION'S CURRENT DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: EDIT TRANSACTION DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-pencil-square-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit Transaction Details ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [$data.sSheetFundType === 'ps' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FUND SOURCE SELECTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputSelect",
    "class": "col-lg-12 control-label"
  }, "Fund Source: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "select2-single form-control fs-select",
    id: "inp_fund_source",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.iSelectedFs = $event;
    })
  }, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select fund source", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aFSList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.fs_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_dv_no) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_desc) + ") ", 9 /* TEXT, PROPS */, _hoisted_40);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.iSelectedFs]]), _cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_fund_source",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Please select a fund source!", -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATE TRANSACTION SELECTION "), _cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" data-v-0e6c2497><label for=\"inputStandard\" class=\"col-lg-12 control-label\" data-v-0e6c2497>Date of Transaction</label><div class=\"admin-form mw1000 center-block\" data-v-0e6c2497><div class=\"col-lg-12\" style=\"margin-bottom:2%;\" data-v-0e6c2497><label for=\"datepicker1\" class=\"field prepend-icon\" data-v-0e6c2497><input type=\"text\" id=\"inpDateTransact\" name=\"inpDateTransact\" class=\"gui-input\" placeholder=\"Enter date of transaction\" readonly data-v-0e6c2497><label class=\"field-icon\" data-v-0e6c2497><i class=\"fa fa-calendar-o\" data-v-0e6c2497></i></label></label><p id=\"p_transact_date\" style=\"display:none;\" class=\"error_msg\" data-v-0e6c2497>Date of Transaction is required! </p></div></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" UACS SELECTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputSelect",
    "class": "col-lg-12 control-label"
  }, "Particular (UACS): ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "select2-single form-control uacs-select",
    id: "inp_uacs",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.iSelectedUacs = $event;
    })
  }, [_cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select UACS", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aUacsList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.uacs_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 9 /* TEXT, PROPS */, _hoisted_43);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.iSelectedUacs]]), _cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_uacs",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Please select a UACS!", -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NET AMOUNT ENTRY "), _cache[45] || (_cache[45] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" data-v-0e6c2497><label for=\"inp_net_amount\" class=\"col-lg-12 control-label\" data-v-0e6c2497>Net Amount:</label><div class=\"col-lg-12\" style=\"margin-bottom:5%;\" data-v-0e6c2497><input id=\"inp_net_amount\" class=\"form-control\" type=\"number\" min=\"0.00\" value=\"0.00\" step=\".01\" data-v-0e6c2497><p id=\"p_net_amount\" style=\"display:none;\" class=\"error_msg\" data-v-0e6c2497>Net amount is required!</p></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" UPDATE BUTTON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "btnUpdateEntry",
    type: "button",
    "class": "btn btn-lg btn-warning pull-right",
    onClick: _ctx.saveEntries
  }, _cache[43] || (_cache[43] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-floppy-o"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update Entry ")]), 8 /* PROPS */, _hoisted_45)])])) : $data.sSheetFundType === 'mooe' || $data.sSheetFundType === 'sr' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" FUND SOURCE SELECTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputSelect",
    "class": "col-lg-12 control-label"
  }, "Fund Source: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "select2-single form-control fs-select",
    id: "inp_fund_source",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.iSelectedFs = $event;
    })
  }, [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select fund source", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aFSList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.fs_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_dv_no) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_desc) + ") ", 9 /* TEXT, PROPS */, _hoisted_49);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.iSelectedFs]]), _cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_fund_source",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Please select a fund source!", -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" OR NUMBER ENTRY "), _cache[58] || (_cache[58] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" data-v-0e6c2497><label for=\"inp_or_number\" class=\"col-lg-12 control-label\" data-v-0e6c2497>OR Number:</label><div class=\"col-lg-12\" style=\"margin-bottom:5%;\" data-v-0e6c2497><input id=\"inp_or_number\" class=\"form-control\" type=\"number\" min=\"0.00\" value=\"0.00\" step=\".01\" data-v-0e6c2497><p id=\"p_or_number\" style=\"display:none;\" class=\"error_msg\" data-v-0e6c2497>OR number is required!</p></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATE TRANSACTION SELECTION "), _cache[59] || (_cache[59] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" data-v-0e6c2497><label for=\"inputStandard\" class=\"col-lg-12 control-label\" data-v-0e6c2497>Date of Transaction</label><div class=\"admin-form mw1000 center-block\" data-v-0e6c2497><div class=\"col-lg-12\" style=\"margin-bottom:2%;\" data-v-0e6c2497><label for=\"datepicker1\" class=\"field prepend-icon\" data-v-0e6c2497><input type=\"text\" id=\"inpDateTransact\" name=\"inpDateTransact\" class=\"gui-input\" placeholder=\"Enter date of transaction\" readonly data-v-0e6c2497><label class=\"field-icon\" data-v-0e6c2497><i class=\"fa fa-calendar-o\" data-v-0e6c2497></i></label></label><p id=\"p_transact_date\" style=\"display:none;\" class=\"error_msg\" data-v-0e6c2497>Date of Transaction is required! </p></div></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" UACS SELECTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputSelect",
    "class": "col-lg-12 control-label"
  }, "Particular (UACS): ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_52, [_cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select UACS", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aUacsList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.uacs_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 9 /* TEXT, PROPS */, _hoisted_53);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_uacs",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Please select a UACS!", -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputSelect",
    "class": "col-lg-12 control-label"
  }, "Payee: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_56, [_cache[52] || (_cache[52] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select payee", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aPayeeList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.payee_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.payee_name), 9 /* TEXT, PROPS */, _hoisted_57);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_payee",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Please select a payee!", -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" GROSS AMOUNT ENTRY "), _cache[60] || (_cache[60] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" data-v-0e6c2497><label for=\"inp_gross_amount\" class=\"col-lg-12 control-label\" data-v-0e6c2497>Gross Amount:</label><div class=\"col-lg-12\" style=\"margin-bottom:5%;\" data-v-0e6c2497><input id=\"inp_gross_amount\" class=\"form-control\" type=\"number\" min=\"0.00\" value=\"0.00\" step=\".01\" data-v-0e6c2497><p id=\"p_gross_amount\" style=\"display:none;\" class=\"error_msg\" data-v-0e6c2497>Gross amount is required!</p></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TAX CLASS SELECTION "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_tax_class",
    "class": "col-lg-12 control-label"
  }, "Tax Type:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_60, [_cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select tax type", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aTaxClass, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.tcl_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.tcl_desc), 9 /* TEXT, PROPS */, _hoisted_61);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TAX AMOUNT ENTRY "), _cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" data-v-0e6c2497><label for=\"inp_tax_amount\" class=\"col-lg-12 control-label\" data-v-0e6c2497>Tax Amount:</label><div class=\"col-lg-12\" style=\"margin-bottom:5%;\" data-v-0e6c2497><input id=\"inp_tax_amount\" class=\"form-control\" type=\"number\" min=\"0.00\" value=\"0.00\" step=\".01\" data-v-0e6c2497><p id=\"p_tax_amount\" style=\"display:none;\" class=\"error_msg\" data-v-0e6c2497>Tax amount is required!</p></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" NET AMOUNT ENTRY "), _cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"form-group\" data-v-0e6c2497><label for=\"inp_net_amount\" class=\"col-lg-12 control-label\" data-v-0e6c2497>Net Amount:</label><div class=\"col-lg-12\" style=\"margin-bottom:5%;\" data-v-0e6c2497><input id=\"inp_net_amount\" class=\"form-control\" type=\"number\" min=\"0.00\" value=\"0.00\" step=\".01\" data-v-0e6c2497><p id=\"p_net_amount\" style=\"display:none;\" class=\"error_msg\" data-v-0e6c2497>Net amount is required!</p></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" UPDATE BUTTON "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "btnUpdateEntry",
    type: "button",
    "class": "btn btn-lg btn-warning pull-right",
    onClick: _ctx.saveEntries
  }, _cache[57] || (_cache[57] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-floppy-o"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update Entry ")]), 8 /* PROPS */, _hoisted_63)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: EDIT TRANSACTION DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [$data.sSheetStatus === 'OPEN' || $data.sSheetStatus === 'REVISED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, _cache[65] || (_cache[65] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The sheet it belongs is currently under review. You cannot update or delete the details of this entry to refrain from data discrepancy. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sSheetStatus === 'POSTED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, _cache[66] || (_cache[66] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The sheet it belongs is already posted. You cannot update or delete the details of this entry. ")]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntable[data-v-0e6c2497],\r\nth[data-v-0e6c2497],\r\ntr[data-v-0e6c2497],\r\ntd[data-v-0e6c2497],\r\ntbody[data-v-0e6c2497] {\r\n  border: 1px solid #d1d1d1 !important;\n}\n.c-margin-top[data-v-0e6c2497] {\r\n  margin-top: 5% !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_style_index_0_id_0e6c2497_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_style_index_0_id_0e6c2497_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_style_index_0_id_0e6c2497_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_view_cr_entries_details_vue_vue_type_template_id_0e6c2497_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true */ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true");
/* harmony import */ var _sdor_view_cr_entries_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_view_cr_entries_details.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=script&lang=js");
/* harmony import */ var _sdor_view_cr_entries_details_vue_vue_type_style_index_0_id_0e6c2497_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css */ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_sdor_view_cr_entries_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_view_cr_entries_details_vue_vue_type_template_id_0e6c2497_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0e6c2497"],['__file',"resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_entries_details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_template_id_0e6c2497_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_template_id_0e6c2497_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=template&id=0e6c2497&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_entries_details_vue_vue_type_style_index_0_id_0e6c2497_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/view/sdor_view_cr_entries_details.vue?vue&type=style&index=0&id=0e6c2497&scoped=true&lang=css");


/***/ })

}]);