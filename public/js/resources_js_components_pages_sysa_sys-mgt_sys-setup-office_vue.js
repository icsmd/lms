"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sysa_sys-mgt_sys-setup-office_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libraries/request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _libraries_utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libraries/utilities.js */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_utilities_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      aTableConfig: {
        "aaSorting": [[0, 'asc']],
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
      aRecordList: [],
      iActiveRecord: 0,
      bUpdateData: false
    };
  },
  mounted: function mounted() {
    this.getRecordList();
    this.initEventListeners();
  },
  methods: {
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnSaveNewDetails') {
          mSelf.saveEntries();
        }
        if (event.target.id === 'btnSaveUpdate') {
          mSelf.updateEntries();
        }
        if (event.target.id === 'btnCancelUpdate') {
          mSelf.clearUpdateEntries();
          mSelf.bUpdateData = false;
        }
        if (event.target.dataset.action === 'editDetails') {
          mSelf.clearCreateEntries();
          mSelf.bUpdateData = true;
          mSelf.iActiveRecord = event.target.dataset.id;
          setTimeout(function () {
            mSelf.getDetailsToEdit();
          }, 100);
        }
      }, false);
    },
    getDetailsToEdit: function getDetailsToEdit() {
      var _this = this;
      var filteredOffice = this.aRecordList.filter(function (record) {
        return record.region_id == _this.iActiveRecord;
      });
      $('#inp_office_abbr_edit').val(filteredOffice[0].region_abbr);
      $('#inp_office_desc_edit').val(filteredOffice[0].region_desc);
    },
    getRecordList: function getRecordList() {
      var _this2 = this;
      var mSelf = this;
      this.getRequest('region/get-list', function (mResponse) {
        _this2.aRecordList = mResponse.data;
        setTimeout(function () {
          mSelf.initTblRecords();
        }, 500);
      });
    },
    initTblRecords: function initTblRecords() {
      $('#tbl_records').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    validateEntries: function validateEntries(sAction) {
      var bResult = true;
      var inpOfficeAbbr = sAction === 'create' ? '#inp_office_abbr' : '#inp_office_abbr_edit';
      var pErrOfficeAbbr = sAction === 'create' ? '#p_office_abbr' : '#p_office_abbr_edit';
      if ($(inpOfficeAbbr).val() === '') {
        $(pErrOfficeAbbr).css('display', '');
        bResult = false;
      }
      var inpOfficeDesc = sAction === 'create' ? '#inp_office_desc' : '#inp_office_desc_edit';
      var pErrOfficeDesc = sAction === 'create' ? '#p_office_desc' : '#p_office_desc_edit';
      if ($(inpOfficeDesc).val() === '') {
        $(pErrOfficeDesc).css('display', '');
        bResult = false;
      }
      return bResult;
    },
    clearCreateEntries: function clearCreateEntries() {
      $('#inp_office_abbr').val('');
      $('#inp_office_desc').val('');
      $('.error_msg').css('display', 'none');
    },
    clearUpdateEntries: function clearUpdateEntries() {
      $('#inp_office_abbr_edit').val('');
      $('#inp_office_desc_edit').val('');
      $('.error_msg_edit').css('display', 'none');
    },
    saveEntries: function saveEntries() {
      var _this3 = this;
      var mSelf = this;
      var oParams = {
        region_abbr: $('#inp_office_abbr').val(),
        region_desc: $('#inp_office_desc').val()
      };
      $('.error_msg').css('display', 'none');
      var bValidateResult = this.validateEntries('create');
      if (bValidateResult === true) {
        this.postRequest('region/create', oParams, function (mResponse) {
          _this3.showSuccessAlert('Successfully saved your entry');
          mSelf.clearCreateEntries();
          $('#tbl_records').DataTable().destroy();
          mSelf.getRecordList();
        });
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
      }
    },
    updateEntries: function updateEntries() {
      var _this4 = this;
      var mSelf = this;
      var oParams = {
        region_abbr: $('#inp_office_abbr_edit').val(),
        region_desc: $('#inp_office_desc_edit').val()
      };
      $('.error_msg_edit').css('display', 'none');
      var bValidateResult = this.validateEntries('update');
      if (bValidateResult === true) {
        this.postRequest('region/update/' + this.iActiveRecord, oParams, function (mResponse) {
          _this4.showSuccessAlert(mResponse.message);
          $('.error_msg_edit').css('display', 'none');
          $('#tbl_records').DataTable().destroy();
          mSelf.getRecordList();
        });
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
        this.getDetailsToEdit(this.iActiveRecord);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  id: "content_wrapper"
};
var _hoisted_2 = {
  "class": "panel"
};
var _hoisted_3 = {
  "class": "panel-body"
};
var _hoisted_4 = {
  key: 0,
  "class": "panel panel-colorbox-open panel-system",
  id: "spy2"
};
var _hoisted_5 = {
  "class": "panel-body pn"
};
var _hoisted_6 = {
  "class": "form-group"
};
var _hoisted_7 = {
  "class": "row",
  style: {
    "margin": "1%"
  }
};
var _hoisted_8 = {
  "class": "col-lg-3"
};
var _hoisted_9 = {
  "class": "col-lg-5"
};
var _hoisted_10 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_11 = {
  "class": "panel-body pn"
};
var _hoisted_12 = {
  "class": "table table-striped table-hover",
  id: "tbl_records",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_13 = {
  style: {
    "text-align": "center"
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
    "text-align": "center"
  }
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
var _hoisted_19 = ["data-id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SYSA_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SYSA_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SYSA_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-343e2a56><div class=\"topbar-left\" data-v-343e2a56><ol class=\"breadcrumb\" data-v-343e2a56><li class=\"crumb-trail\" data-v-343e2a56>System Management</li><li class=\"crumb-trail\" data-v-343e2a56>System Setup</li><li class=\"crumb-active\" data-v-343e2a56><a data-v-343e2a56>Office/Region Entity Setup</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, "Office/Region Entity Setup")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: OFFICE CREATE NEW "), $data.bUpdateData === false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-plus-square-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add New Office ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_office_abbr",
    "class": "col-lg-12 control-label"
  }, "Office Abbreviation / Code:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "inp_office_abbr",
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.sOfficeAbbr = $event;
    }),
    placeholder: "Enter Office Abbreviation / Code"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.sOfficeAbbr]]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_office_abbr",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Abbreviation/Code is required!", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_office_desc",
    "class": "col-lg-12 control-label"
  }, "Office Description", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "inp_office_desc",
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.sOfficeDesc = $event;
    }),
    placeholder: "Enter Office Description"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.sOfficeDesc]]), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_office_desc",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Description is required! ", -1 /* HOISTED */))]), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-lg-2"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    id: "btnSaveNewDetails",
    "class": "btn btn-lg btn-success",
    style: {
      "margin-right": "7%",
      "margin-top": "21px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-floppy-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save ")])], -1 /* HOISTED */))])])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: OFFICE CREATE NEW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: OFFICE UPDATE EXISTING "), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"panel panel-colorbox-open panel-warning\" data-v-343e2a56><br data-v-343e2a56><div class=\"panel-heading\" data-v-343e2a56><div class=\"panel-title hidden-xs\" data-v-343e2a56><span class=\"fa fa-pencil-square-o\" data-v-343e2a56></span>Update Existing Office </div></div><div class=\"panel-body pn\" data-v-343e2a56><div class=\"form-group\" data-v-343e2a56><div class=\"row\" style=\"margin:1%;\" data-v-343e2a56><div class=\"col-lg-3\" data-v-343e2a56><label for=\"inp_office_abbr_edit\" class=\"col-lg-12 control-label\" data-v-343e2a56>Office Abbreviation / Code:</label><input type=\"text\" id=\"inp_office_abbr_edit\" class=\"form-control\" placeholder=\"Enter Office Abbreviation / Code\" data-v-343e2a56><p id=\"p_office_abbr_edit\" style=\"display:none;\" class=\"error_msg_edit\" data-v-343e2a56>Abbreviation/Code is required!</p></div><div class=\"col-lg-5\" data-v-343e2a56><label for=\"inp_office_desc_edit\" class=\"col-lg-12 control-label\" data-v-343e2a56>Office Description</label><input type=\"text\" id=\"inp_office_desc_edit\" class=\"form-control\" placeholder=\"Enter Office Description\" data-v-343e2a56><p id=\"p_office_desc_edit\" style=\"display:none;\" class=\"error_msg_edit\" data-v-343e2a56>Description is required! </p></div><div class=\"col-lg-3\" data-v-343e2a56><button type=\"button\" id=\"btnSaveUpdate\" class=\"btn btn-lg btn-success\" style=\"margin-right:0px;margin-top:21px;\" data-v-343e2a56><i class=\"fa fa-pencil-square-o\" data-v-343e2a56></i> Update </button>   <button type=\"button\" id=\"btnCancelUpdate\" class=\"btn btn-lg btn-default\" style=\"margin-right:0px;margin-top:21px;\" data-v-343e2a56><i class=\"fa fa-times\" data-v-343e2a56></i> Cancel </button></div></div></div></div></div>", 1))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: OFFICE UPDATE EXISTING "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PAYEES' TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-list"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("List of Offices ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_12, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SysId"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Office Abbreviation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Office Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date Created"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Last Modified"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Action")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRecordList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_created, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_modified, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-action": "editDetails",
      "data-id": item.region_id,
      "class": "btn btn-md btn-warning editDetails",
      style: {
        "margin-right": "9%"
      }
    }, _toConsumableArray(_cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-pencil-square-o"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")])), 8 /* PROPS */, _hoisted_19)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PAYEES' TABLE ")])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.error_msg[data-v-343e2a56],\r\n.error_msg_edit[data-v-343e2a56] {\r\n    color: red;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_style_index_0_id_343e2a56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_style_index_0_id_343e2a56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_style_index_0_id_343e2a56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sys_setup_office_vue_vue_type_template_id_343e2a56_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true */ "./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true");
/* harmony import */ var _sys_setup_office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sys-setup-office.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=script&lang=js");
/* harmony import */ var _sys_setup_office_vue_vue_type_style_index_0_id_343e2a56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css */ "./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_sys_setup_office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sys_setup_office_vue_vue_type_template_id_343e2a56_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-343e2a56"],['__file',"resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sys-setup-office.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_template_id_343e2a56_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_template_id_343e2a56_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=template&id=343e2a56&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sys_setup_office_vue_vue_type_style_index_0_id_343e2a56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/sys-setup-office.vue?vue&type=style&index=0&id=343e2a56&scoped=true&lang=css");


/***/ })

}]);