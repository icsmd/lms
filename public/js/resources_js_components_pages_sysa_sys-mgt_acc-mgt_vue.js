"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sysa_sys-mgt_acc-mgt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
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
      aUserTypes: [{
        code: 'sdor',
        desc: 'SDO'
      }, {
        code: 'actg',
        desc: 'Accounting'
      }, {
        code: 'bdgt',
        desc: 'Budget'
      }, {
        code: 'cash',
        desc: 'Cash'
      }],
      aRecordList: [],
      aRegionList: [],
      iActiveRecord: 0,
      bUpdateData: false
    };
  },
  mounted: function mounted() {
    this.getRecordList();
    this.getRegionList();
    this.initPlugins();
    this.initEventListeners();
  },
  methods: {
    initPlugins: function initPlugins() {
      $('.usertype-select').select2();
    },
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
        if (event.target.dataset.action === 'activateUser') {
          mSelf.changeUserStatus(event.target.dataset.id, 'active');
        }
        if (event.target.dataset.action === 'deactivateUser') {
          mSelf.changeUserStatus(event.target.dataset.id, 'deactivated');
        }
      }, false);
    },
    getDetailsToEdit: function getDetailsToEdit() {
      var _this = this;
      var filteredOffice = this.aRecordList.filter(function (record) {
        return record.user_id == _this.iActiveRecord;
      });
      $('#inp_emp_id_edit').val(filteredOffice[0].employee_id);
      $('#inp_firstname_edit').val(filteredOffice[0].firstname);
      $('#inp_lastname_edit').val(filteredOffice[0].lastname);
      $('#inp_username_edit').val(filteredOffice[0].username);
      $(".office-select_edit").select2().val(filteredOffice[0].region_id).trigger('change');
      $('.usertype-select_edit').select2().val(filteredOffice[0].user_type).trigger('change');
    },
    getRegionList: function getRegionList() {
      var _this2 = this;
      this.getRequest('region/get-list', function (mResponse) {
        _this2.aRegionList = mResponse.data;
        $('.office-select').select2();
      });
    },
    getRecordList: function getRecordList() {
      var _this3 = this;
      var mSelf = this;
      this.getRequest('user/get-all', function (mResponse) {
        _this3.aRecordList = mResponse.data;
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
      var inpEmpId = sAction === 'create' ? '#inp_emp_id' : '#inp_emp_id_edit';
      var pErrEmpId = sAction === 'create' ? '#p_emp_id' : '#p_emp_id_edit';
      if ($(inpEmpId).val() === '') {
        $(pErrEmpId).css('display', '');
        bResult = false;
      }
      var inpFname = sAction === 'create' ? '#inp_firstname' : '#inp_firstname_edit';
      var pErrFname = sAction === 'create' ? '#p_firstname' : '#p_firstname_edit';
      if ($(inpFname).val() === '') {
        $(pErrFname).css('display', '');
        bResult = false;
      }
      var inpLname = sAction === 'create' ? '#inp_lastname' : '#inp_lastname_edit';
      var pErrLname = sAction === 'create' ? '#p_lastname' : '#p_lastname_edit';
      if ($(inpLname).val() === '') {
        $(pErrLname).css('display', '');
        bResult = false;
      }
      var inpUname = sAction === 'create' ? '#inp_username' : '#inp_username_edit';
      var pErrUname = sAction === 'create' ? '#p_username' : '#p_username_edit';
      if ($(inpUname).val() === '') {
        $(pErrUname).css('display', '');
        bResult = false;
      }
      var inpPassword = '#inp_password';
      var pErrPassword = '#p_password';
      if ($(inpPassword).val() === '') {
        $(pErrPassword).css('display', '');
        bResult = false;
      }
      var inpType = sAction === 'create' ? '#inp_usertype' : '#inp_usertype_edit';
      var pErrType = sAction === 'create' ? '#p_usertype' : '#p_usertype_edit';
      if ($(inpType).val() === null) {
        $(pErrType).css('display', '');
        bResult = false;
      }
      var inpOffice = sAction === 'create' ? '#inp_office' : '#inp_office_edit';
      var pErrOffice = sAction === 'create' ? '#p_office' : '#p_office_edit';
      if ($(inpOffice).val() === null) {
        $(pErrOffice).css('display', '');
        bResult = false;
      }
      return bResult;
    },
    clearCreateEntries: function clearCreateEntries() {
      $('#inp_emp_id').val('');
      $('#inp_firstname').val('');
      $('#inp_lastname').val('');
      $('#inp_username').val('');
      $('#inp_password').val('');
      $(".office-select").select2().val(0).trigger('change');
      $('.usertype-select').select2().val(0).trigger('change');
      $('.error_msg').css('display', 'none');
    },
    clearUpdateEntries: function clearUpdateEntries() {
      $('#inp_emp_id_edit').val('');
      $('#inp_firstname_edit').val('');
      $('#inp_lastname_edit').val('');
      $('#inp_username_edit').val('');
      $('#inp_password_edit').val('');
      $(".office-select_edit").select2().val(0).trigger('change');
      $('.usertype-select_edit').select2().val(0).trigger('change');
      $('.error_msg_edit').css('display', 'none');
    },
    saveEntries: function saveEntries() {
      var _this4 = this;
      var mSelf = this;
      var oParams = {
        employee_id: $('#inp_emp_id').val(),
        firstname: $('#inp_firstname').val(),
        lastname: $('#inp_lastname').val(),
        username: $('#inp_username').val(),
        password: $('#inp_password').val(),
        user_type: $('#inp_usertype').val(),
        region_id: $('#inp_office').val()
      };
      $('.error_msg').css('display', 'none');
      var bValidateResult = this.validateEntries('create');
      if (bValidateResult === true) {
        this.postRequest('user/create', oParams, function (mResponse) {
          _this4.showSuccessAlert('Successfully saved your entry');
          mSelf.clearCreateEntries();
          $('#tbl_records').DataTable().destroy();
          mSelf.getRecordList();
        });
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
      }
    },
    updateEntries: function updateEntries() {
      var _this5 = this;
      var mSelf = this;
      var oParams = {
        employee_id: $('#inp_emp_id_edit').val(),
        firstname: $('#inp_firstname_edit').val(),
        lastname: $('#inp_lastname_edit').val(),
        username: $('#inp_username_edit').val(),
        password: $('#inp_password_edit').val(),
        user_type: $('#inp_usertype_edit').val(),
        region_id: $('#inp_office_edit').val()
      };
      $('.error_msg_edit').css('display', 'none');
      var bValidateResult = this.validateEntries('update');
      if (bValidateResult === true) {
        this.postRequest('user/update/' + this.iActiveRecord, oParams, function (mResponse) {
          _this5.showSuccessAlert(mResponse.message);
          $('.error_msg_edit').css('display', 'none');
          $('#tbl_records').DataTable().destroy();
          mSelf.getRecordList();
        });
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
        this.getDetailsToEdit(this.iActiveRecord);
      }
    },
    changeUserStatus: function changeUserStatus(iId, sStatus) {
      var _this6 = this;
      var mSelf = this;
      var sMessage = sStatus === 'active' ? 'You understand that by activating this user can allow him/her to operate the system based on his/her account type. Are sure you want to proceed?' : 'You understand that by deactivating this user, his/her access in the system will be revoked. Are you sure you want to proceed?';
      var sConfirmMsg = sStatus === 'active' ? 'Activate' : 'Deactivate';
      var sConfirmColor = sStatus === 'active' ? '#00a623' : '#d33';
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Confirmation",
        text: sMessage,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: sConfirmColor,
        cancelButtonColor: "#c7baba",
        confirmButtonText: sConfirmMsg
      }).then(function (result) {
        if (result.isConfirmed) {
          _this6.postRequest('user/update/' + iId, {
            status: sStatus
          }, function (mResponse) {
            _this6.showSuccessAlert(mResponse.message);
            $('#tbl_records').DataTable().destroy();
            mSelf.getRecordList();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "col-lg-2",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_9 = {
  "class": "select2-single form-control usertype-select",
  id: "inp_usertype"
};
var _hoisted_10 = ["value"];
var _hoisted_11 = {
  "class": "col-lg-3",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_12 = {
  "class": "select2-single form-control office-select",
  id: "inp_office"
};
var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "panel panel-colorbox-open panel-warning"
};
var _hoisted_15 = {
  "class": "panel-body pn"
};
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = {
  "class": "row",
  style: {
    "margin": "1%"
  }
};
var _hoisted_18 = {
  "class": "col-lg-2",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_19 = {
  "class": "select2-single form-control usertype-select_edit",
  id: "inp_usertype_edit"
};
var _hoisted_20 = ["value"];
var _hoisted_21 = {
  "class": "col-lg-3",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_22 = {
  "class": "select2-single form-control office-select_edit",
  id: "inp_office_edit"
};
var _hoisted_23 = ["value"];
var _hoisted_24 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_25 = {
  "class": "panel-body pn"
};
var _hoisted_26 = {
  "class": "table table-striped table-hover",
  id: "tbl_records",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_27 = {
  style: {
    "text-align": "center"
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
    "text-align": "center"
  }
};
var _hoisted_32 = {
  style: {
    "text-align": "center"
  }
};
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
    "text-align": "left"
  },
  width: "20%"
};
var _hoisted_36 = ["data-id"];
var _hoisted_37 = ["data-id"];
var _hoisted_38 = ["data-id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SYSA_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SYSA_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SYSA_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-1b2aa918><div class=\"topbar-left\" data-v-1b2aa918><ol class=\"breadcrumb\" data-v-1b2aa918><li class=\"crumb-trail\" data-v-1b2aa918> System Management </li><li class=\"crumb-active\" data-v-1b2aa918><a data-v-1b2aa918>Account Management</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, "Account Management")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: USER ACCOUNT CREATE NEW "), $data.bUpdateData === false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-plus-square-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add New User Account ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_emp_id\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Employee Id:</label><input type=\"text\" id=\"inp_emp_id\" class=\"form-control\" placeholder=\"Enter Employee Id\" data-v-1b2aa918><p id=\"p_emp_id\" style=\"display:none;\" class=\"error_msg\" data-v-1b2aa918>Employee Id is required! </p></div><div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_firstname\" class=\"col-lg-12 control-label\" data-v-1b2aa918>First Name</label><input type=\"text\" id=\"inp_firstname\" class=\"form-control\" placeholder=\"Enter First Name\" data-v-1b2aa918><p id=\"p_firstname\" style=\"display:none;\" class=\"error_msg\" data-v-1b2aa918>First name is required! </p></div><div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_lastname\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Last Name</label><input type=\"text\" id=\"inp_lastname\" class=\"form-control\" placeholder=\"Enter Last Name\" data-v-1b2aa918><p id=\"p_lastname\" style=\"display:none;\" class=\"error_msg\" data-v-1b2aa918>Last name is required! </p></div><div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_username\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Username</label><input type=\"text\" id=\"inp_username\" class=\"form-control\" placeholder=\"Enter Username\" data-v-1b2aa918><p id=\"p_username\" style=\"display:none;\" class=\"error_msg\" data-v-1b2aa918>Username is required! </p></div><div class=\"col-lg-5\" style=\"margin-top:15px;\" data-v-1b2aa918><label for=\"inp_password\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Password</label><input type=\"password\" id=\"inp_password\" class=\"form-control\" placeholder=\"Enter Password\" data-v-1b2aa918><p id=\"p_password\" style=\"display:none;\" class=\"error_msg\" data-v-1b2aa918>Password is required! </p></div>", 5)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_usertype",
    "class": "col-lg-12 control-label"
  }, "User Type", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_9, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select type", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aUserTypes, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.code
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_10);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_usertype",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "UserType is required! ", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_office",
    "class": "col-lg-12 control-label"
  }, "Assigned Office", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_12, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select office", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRegionList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc) + ")", 9 /* TEXT, PROPS */, _hoisted_13);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_office",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Office is required! ", -1 /* HOISTED */))]), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-lg-2",
    style: {
      "margin-top": "15px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    id: "btnSaveNewDetails",
    "class": "btn btn-block btn-success",
    style: {
      "margin-right": "7%",
      "margin-top": "21px",
      "font-size": "16px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-floppy-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save ")])], -1 /* HOISTED */))])])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: USER ACCOUNT CREATE NEW "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: USER ACCOUNT UPDATE EXISTING "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-pencil-square-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Update Existing User Account ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_emp_id_edit\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Employee Id:</label><input type=\"text\" id=\"inp_emp_id_edit\" class=\"form-control\" placeholder=\"Enter Employee Id\" data-v-1b2aa918><p id=\"p_emp_id_edit\" style=\"display:none;\" class=\"error_msg_edit\" data-v-1b2aa918>Employee Id is required! </p></div><div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_firstname_edit\" class=\"col-lg-12 control-label\" data-v-1b2aa918>First Name</label><input type=\"text\" id=\"inp_firstname_edit\" class=\"form-control\" placeholder=\"Enter First Name\" data-v-1b2aa918><p id=\"p_firstname_edit\" style=\"display:none;\" class=\"error_msg_edit\" data-v-1b2aa918>First name is required! </p></div><div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_lastname_edit\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Last Name</label><input type=\"text\" id=\"inp_lastname_edit\" class=\"form-control\" placeholder=\"Enter Last Name\" data-v-1b2aa918><p id=\"p_lastname_edit\" style=\"display:none;\" class=\"error_msg_edit\" data-v-1b2aa918>Last name is required! </p></div><div class=\"col-lg-3\" data-v-1b2aa918><label for=\"inp_username_edit\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Username</label><input type=\"text\" id=\"inp_username_edit\" class=\"form-control\" placeholder=\"Enter Username\" data-v-1b2aa918><p id=\"p_username_edit\" style=\"display:none;\" class=\"error_msg_edit\" data-v-1b2aa918>Username is required! </p></div><div class=\"col-lg-5\" style=\"margin-top:15px;\" data-v-1b2aa918><label for=\"inp_password_edit\" class=\"col-lg-12 control-label\" data-v-1b2aa918>Password</label><input type=\"password\" id=\"inp_password_edit\" class=\"form-control\" placeholder=\"Enter Password\" data-v-1b2aa918><p id=\"p_password_edit\" style=\"display:none;\" class=\"error_msg_edit\" data-v-1b2aa918>Password is required! </p></div>", 5)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_usertype_edit",
    "class": "col-lg-12 control-label"
  }, "User Type", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_19, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select type", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aUserTypes, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.code
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_20);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_usertype_edit",
    style: {
      "display": "none"
    },
    "class": "error_msg_edit"
  }, "UserType is required! ", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_office_edit",
    "class": "col-lg-12 control-label"
  }, "Assigned Office", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_22, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select office", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRegionList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc) + ")", 9 /* TEXT, PROPS */, _hoisted_23);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_office_edit",
    style: {
      "display": "none"
    },
    "class": "error_msg_edit"
  }, "Office is required! ", -1 /* HOISTED */))]), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-2\" data-v-1b2aa918><button type=\"button\" id=\"btnSaveUpdate\" class=\"btn btn-md btn-success\" style=\"margin-right:0px;margin-top:38px;\" data-v-1b2aa918><i class=\"fa fa-pencil-square-o\" data-v-1b2aa918></i> Update </button>   <button type=\"button\" id=\"btnCancelUpdate\" class=\"btn btn-md btn-default\" style=\"margin-right:0px;margin-top:38px;\" data-v-1b2aa918><i class=\"fa fa-times\" data-v-1b2aa918></i> Cancel </button></div>", 1))])])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: USER ACCOUNT UPDATE EXISTING "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PAYEES' TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-list"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("List of User Accounts ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SysId"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Username"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Emp Id"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Office"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Type"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Active"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.username), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.employee_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user_type), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_created, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_modified, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-action": "editDetails",
      "data-id": item.user_id,
      "class": "btn btn-md btn-warning editDetails",
      style: {
        "margin-left": "20px",
        "margin-right": "10px"
      }
    }, _toConsumableArray(_cache[20] || (_cache[20] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-pencil-square-o"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")])), 8 /* PROPS */, _hoisted_36), item.status === 'deactivated' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      type: "button",
      "data-action": "activateUser",
      "data-id": item.user_id,
      "class": "btn btn-md btn-success activateUser"
    }, _toConsumableArray(_cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-check-circle-o"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Activate ")])), 8 /* PROPS */, _hoisted_37)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      type: "button",
      "data-action": "deactivateUser",
      "data-id": item.user_id,
      "class": "btn btn-md btn-danger deactivateUser"
    }, _toConsumableArray(_cache[22] || (_cache[22] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-times"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Deactivate ")])), 8 /* PROPS */, _hoisted_38))])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PAYEES' TABLE ")])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.error_msg[data-v-1b2aa918],\n.error_msg_edit[data-v-1b2aa918] {\n    color: red !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_style_index_0_id_1b2aa918_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_style_index_0_id_1b2aa918_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_style_index_0_id_1b2aa918_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _acc_mgt_vue_vue_type_template_id_1b2aa918_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true */ "./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true");
/* harmony import */ var _acc_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acc-mgt.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=script&lang=js");
/* harmony import */ var _acc_mgt_vue_vue_type_style_index_0_id_1b2aa918_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css */ "./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_acc_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_acc_mgt_vue_vue_type_template_id_1b2aa918_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1b2aa918"],['__file',"resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./acc-mgt.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_template_id_1b2aa918_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_template_id_1b2aa918_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=template&id=1b2aa918&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_acc_mgt_vue_vue_type_style_index_0_id_1b2aa918_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sys-mgt/acc-mgt.vue?vue&type=style&index=0&id=1b2aa918&scoped=true&lang=css");


/***/ })

}]);