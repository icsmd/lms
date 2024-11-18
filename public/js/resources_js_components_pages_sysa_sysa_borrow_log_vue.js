"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sysa_sysa_borrow_log_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libraries/request */ "./resources/js/libraries/request.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      aTableConfig: {
        "aaSorting": [[0, 'desc']],
        "aoColumnDefs": [{
          'bSortable': false,
          'aTargets': [7]
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
      aBooks: [],
      aBorrowers: [],
      aRecordList: [],
      aRemarks: [],
      iActiveRecord: 0,
      bUpdateData: false
    };
  },
  mounted: function mounted() {
    this.initCollapsible();
    this.initEventListeners();
    this.initDatePickers();
    this.getBooks();
    this.getBorrowers();
    this.getRecordList();
  },
  methods: {
    initCollapsible: function initCollapsible() {
      var coll = document.getElementsByClassName("collapsible");
      var i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
    },
    initDatePickers: function initDatePickers() {
      $('#datetimeborrowed').datetimepicker({
        showOn: 'both',
        buttonText: '<i class="fa fa-calendar-o"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        beforeShow: function beforeShow(input, inst) {
          var newclass = 'admin-form';
          var themeClass = $(this).parents('.admin-form').attr('class');
          var smartpikr = inst.dpDiv.parent();
          if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
          }
        }
      });
      $("#datetimeborrowed").val(moment().format('MM/DD/YYYY HH:mm'));
      $('#datetimedue').datetimepicker({
        showOn: 'both',
        buttonText: '<i class="fa fa-calendar-o"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        beforeShow: function beforeShow(input, inst) {
          var newclass = 'admin-form';
          var themeClass = $(this).parents('.admin-form').attr('class');
          var smartpikr = inst.dpDiv.parent();
          if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
          }
        }
      });
      $('#datetimeborrowed_edit').datetimepicker({
        showOn: 'both',
        buttonText: '<i class="fa fa-calendar-o"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        beforeShow: function beforeShow(input, inst) {
          var newclass = 'admin-form';
          var themeClass = $(this).parents('.admin-form').attr('class');
          var smartpikr = inst.dpDiv.parent();
          if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
          }
        }
      });
      $('#datetimedue_edit').datetimepicker({
        showOn: 'both',
        buttonText: '<i class="fa fa-calendar-o"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        beforeShow: function beforeShow(input, inst) {
          var newclass = 'admin-form';
          var themeClass = $(this).parents('.admin-form').attr('class');
          var smartpikr = inst.dpDiv.parent();
          if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
          }
        }
      });
      $('#datetimereturned').datetimepicker({
        showOn: 'both',
        buttonText: '<i class="fa fa-calendar-o"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
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
    getBooks: function getBooks() {
      var _this = this;
      $('.books-select').select2();
      $('.books-select-edit').select2();
      this.getRequest('books/get', function (mResponse) {
        _this.aBooks = mResponse.data;
      });
    },
    getBorrowers: function getBorrowers() {
      var _this2 = this;
      $('.borrower-select').select2();
      $('.borrower-select-edit').select2();
      this.getRequest('borrowers/get', function (mResponse) {
        _this2.aBorrowers = mResponse.data;
      });
    },
    getRecordList: function getRecordList() {
      var _this3 = this;
      var mSelf = this;
      this.getRequest('borrow-log/get', function (mResponse) {
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
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnSaveNewDetails') {
          mSelf.saveEntries();
        }
        if (event.target.id === 'btnSaveUpdate') {
          mSelf.checkReturnDate();
        }
        if (event.target.id === 'btnCancelUpdate') {
          $('#div_add_log').css('display', '');
          $('#div_edit_log').css('display', 'none');
          mSelf.clearUpdateEntries();
          mSelf.bUpdateData = false;
        }
        if (event.target.dataset.action === 'editDetails') {
          $('#div_add_log').css('display', 'none');
          $('#div_edit_log').css('display', '');
          mSelf.iActiveRecord = event.target.dataset.id;
          setTimeout(function () {
            mSelf.getDetailsToEdit();
          }, 100);
        }
      }, false);
    },
    validateEntries: function validateEntries(sAction) {
      var bResult = true;
      var inpBook = sAction === 'create' ? '#inp_book' : '#inp_book_edit';
      var pErrBook = sAction === 'create' ? '#p_book' : '#p_book_edit';
      var inpBorrower = sAction === 'create' ? '#inp_borrower' : '#inp_borrower_edit';
      var pErrBorrower = sAction === 'create' ? '#p_borrower' : '#p_borrower_edit';
      var inpDateTimeBorrowed = sAction === 'create' ? '#datetimeborrowed' : '#datetimeborrowed_edit';
      var pErrDateTimeBorrowed = sAction === 'create' ? '#p_datetimeborrowed' : '#p_datetimeborrowed_edit';
      var inpDateTimeDue = sAction === 'create' ? '#datetimedue' : '#datetimedue_edit';
      var pErrDateTimeDue = sAction === 'create' ? '#p_datetimedue' : '#p_datetimedue_edit';
      if ($(inpBook).val() === '') {
        $(pErrBook).css('display', '');
        bResult = false;
      }
      if ($(inpBorrower).val() === '') {
        $(pErrBorrower).css('display', '');
        bResult = false;
      }
      if ($(inpDateTimeBorrowed).val() === '') {
        $(pErrDateTimeBorrowed).css('display', '');
        bResult = false;
      }
      if ($(inpDateTimeDue).val() === '') {
        $(pErrDateTimeDue).css('display', '');
        bResult = false;
      }
      return bResult;
    },
    clearCreateEntries: function clearCreateEntries() {
      $('#inp_book').val('');
      $('#inp_borrower').val('');
      $("#datetimeborrowed").val(moment().format('MM/DD/YYYY HH:mm'));
      $('#datetimedue').val('');
      $('.error_msg').css('display', 'none');
    },
    clearUpdateEntries: function clearUpdateEntries() {
      $('#inp_book_edit').val('');
      $('#inp_borrower_edit').val('');
      $("#datetimeborrowed_edit").val(moment().format('MM/DD/YYYY HH:mm'));
      $('#datetimedue_edit').val('');
      $('.error_msg_edit').css('display', 'none');
    },
    saveEntries: function saveEntries() {
      var _this4 = this;
      var mSelf = this;
      var oParams = {
        book_id: $('#inp_book').val(),
        borrower_id: $('#inp_borrower').val(),
        date_borrowed: moment($('#datetimeborrowed').val()).format('YYYY-MM-DD HH:mm:ss'),
        date_due: moment($('#datetimedue').val()).format('YYYY-MM-DD HH:mm:ss')
      };
      $('.error_msg').css('display', 'none');
      var bValidateResult = this.validateEntries('create');
      if (bValidateResult === true) {
        this.postRequest('borrow-log/create', oParams, function (mResponse) {
          _this4.showSuccessAlert('Successfully saved your entry');
          mSelf.clearCreateEntries();
          $('#tbl_records').DataTable().destroy();
          mSelf.getRecordList();
        });
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
      }
    },
    getDetailsToEdit: function getDetailsToEdit() {
      var _this5 = this;
      var filteredRecord = this.aRecordList.filter(function (record) {
        return record.bl_id == _this5.iActiveRecord;
      });
      $(".books-select-edit").select2().val(filteredRecord[0].book_id).trigger('change');
      $('.borrower-select-edit').select2().val(filteredRecord[0].borrower_id).trigger('change');
      $('#datetimeborrowed_edit').val(moment(filteredRecord[0].date_borrowed).format('MM/DD/YYYY HH:mm'));
      $('#datetimedue_edit').val(moment(filteredRecord[0].date_due).format('MM/DD/YYYY HH:mm'));
      this.aRemarks = filteredRecord[0].remarks;
      if (filteredRecord[0].date_returned !== null) {
        $('#btnSaveUpdate').css('display', 'none');
        $('#datetimereturned').val(moment(filteredRecord[0].date_returned).format('MM/DD/YYYY HH:mm'));
      } else {
        $('#btnSaveUpdate').css('display', '');
      }
    },
    checkReturnDate: function checkReturnDate() {
      var mSelf = this;
      if ($('#datetimereturned').val() === '') {
        mSelf.updateEntries();
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: "Updating the log with date returned means the book is already accounted back in the library.",
          text: "Are you sure you want to proceed?",
          icon: "warning",
          showCancelButton: true
        }).then(function (result) {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            mSelf.updateEntries();
          }
        });
      }
    },
    updateEntries: function updateEntries() {
      var _this6 = this;
      var mSelf = this;
      var oParams = {
        book_id: $('#inp_book_edit').val(),
        borrower_id: $('#inp_borrower_edit').val(),
        date_borrowed: moment($('#datetimeborrowed_edit').val()).format('YYYY-MM-DD HH:mm:ss'),
        date_due: moment($('#datetimedue_edit').val()).format('YYYY-MM-DD HH:mm:ss')
      };
      var sDateReturned = $('#datetimereturned').val();
      var sRemarks = $('#inp_remarks').val();
      oParams = sDateReturned === '' ? oParams : Object.assign(oParams, {
        date_returned: moment(sDateReturned).format('YYYY-MM-DD HH:mm:ss')
      });
      oParams = sRemarks === '' ? oParams : Object.assign(oParams, {
        bl_remarks: sRemarks
      });
      $('.error_msg_edit').css('display', 'none');
      var bValidateResult = this.validateEntries('update');
      if (bValidateResult === true) {
        this.postRequest('borrow-log/update/' + this.iActiveRecord, oParams, function (mResponse) {
          _this6.showSuccessAlert(mResponse.message);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true ***!
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
  id: "div_add_log",
  "class": "panel panel-colorbox-open panel-primary",
  style: {
    "margin": "1%"
  }
};
var _hoisted_6 = {
  "class": "panel-body pn"
};
var _hoisted_7 = {
  "class": "content",
  style: {
    "padding": "1%"
  }
};
var _hoisted_8 = {
  "class": "form-group"
};
var _hoisted_9 = {
  "class": "row",
  style: {
    "margin": "1%"
  }
};
var _hoisted_10 = {
  "class": "col-md-10"
};
var _hoisted_11 = {
  "class": "col-lg-8",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_12 = {
  "class": "select2-single form-control books-select",
  id: "inp_book",
  style: {
    "width": "100%"
  }
};
var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "col-lg-4",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_15 = {
  "class": "select2-single form-control borrower-select",
  id: "inp_borrower",
  style: {
    "width": "100%"
  }
};
var _hoisted_16 = ["value"];
var _hoisted_17 = {
  id: "div_edit_log",
  "class": "panel panel-colorbox-open panel-warning",
  style: {
    "margin": "1%",
    "display": "none"
  }
};
var _hoisted_18 = {
  "class": "panel-body pn"
};
var _hoisted_19 = {
  "class": "form-group"
};
var _hoisted_20 = {
  "class": "row",
  style: {
    "margin": "1%"
  }
};
var _hoisted_21 = {
  "class": "col-md-10"
};
var _hoisted_22 = {
  "class": "col-lg-8",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_23 = {
  "class": "select2-single form-control books-select-edit",
  id: "inp_book_edit",
  style: {
    "width": "100%"
  }
};
var _hoisted_24 = ["value"];
var _hoisted_25 = {
  "class": "col-lg-4",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_26 = {
  "class": "select2-single form-control borrower-select-edit",
  id: "inp_borrower_edit",
  style: {
    "width": "100%"
  }
};
var _hoisted_27 = ["value"];
var _hoisted_28 = {
  "class": "col-lg-12",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_29 = {
  "class": "table table-striped table-hover",
  cellspacing: "0",
  width: "100%"
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
  "class": "panel panel-colorbox-open panel-primary",
  style: {
    "margin": "1%"
  }
};
var _hoisted_34 = {
  "class": "panel-body pn"
};
var _hoisted_35 = {
  "class": "table table-striped table-hover",
  id: "tbl_records",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_36 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_37 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_38 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_39 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_40 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_41 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_42 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_43 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_44 = {
  style: {
    "text-align": "center"
  },
  width: "20%"
};
var _hoisted_45 = ["data-id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SYSA_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SYSA_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SYSA_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-4cb7cf00><div class=\"topbar-left\" data-v-4cb7cf00><ol class=\"breadcrumb\" data-v-4cb7cf00><li class=\"crumb-active\" style=\"margin-top:7px;\" data-v-4cb7cf00><a href=\"dashboard.html\" data-v-4cb7cf00>Borrowing Log</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TEMPORARY PENDING FOR DEVELOPMENT (ON-HOLD) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"panel-heading\">\r\n                    <span class=\"panel-title\">Summary of Entries for Special</span>\r\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: ADD NEW BOOK  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COLLAPSIBLE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Basic AdminPanel - All features disabled except \"minimized\" option "), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "collapsible"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-plus-square"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Add New Borrow Log Record")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_book",
    "class": "col-lg-12 control-label"
  }, "Book to Borrow:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_12, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Select Book ", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aBooks, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.book_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 9 /* TEXT, PROPS */, _hoisted_13);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_book",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Book is required! ", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_borrower",
    "class": "col-lg-12 control-label"
  }, "Borrower:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_15, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Select Borrower ", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aBorrowers, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.borrower_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.borrower_name), 9 /* TEXT, PROPS */, _hoisted_16);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_borrower",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Borrower is required! ", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATES "), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"admin-form mw1000\" data-v-4cb7cf00><!-- DATE BORROWED --><div class=\"col-lg-4\" style=\"margin-top:15px;\" data-v-4cb7cf00><span style=\"font-weight:700;margin-left:10px;\" data-v-4cb7cf00>Date Borrowed:</span><label for=\"datetimeborrowed\" class=\"field prepend-picker-icon\" data-v-4cb7cf00><input type=\"text\" id=\"datetimeborrowed\" name=\"datetimeborrowed\" class=\"gui-input\" placeholder=\"Enter date and time borrowed\" data-v-4cb7cf00></label><p id=\"p_datetimeborrowed\" style=\"display:none;\" class=\"error_msg\" data-v-4cb7cf00> Date and Time of Borrowed is required!</p></div><!-- DATE DUE --><div class=\"col-lg-4\" style=\"margin-top:15px;\" data-v-4cb7cf00><span style=\"font-weight:700;margin-left:10px;\" data-v-4cb7cf00>Date Due:</span><label for=\"datetimedue\" class=\"field prepend-picker-icon\" data-v-4cb7cf00><input type=\"text\" id=\"datetimedue\" name=\"datetimedue\" class=\"gui-input\" placeholder=\"Enter date and time due\" data-v-4cb7cf00></label><p id=\"p_datetimedue\" style=\"display:none;\" class=\"error_msg\" data-v-4cb7cf00> Date and Time of Due is required!</p></div></div>", 1))]), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-2"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    id: "btnSaveNewDetails",
    "class": "btn btn-block btn-success",
    style: {
      "margin-right": "7%",
      "margin-top": "33px",
      "font-size": "16px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-floppy-o"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save ")])], -1 /* HOISTED */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COLLAPSIBLE")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: ADD NEW BOOK "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START DETAILS OF BORROW LOG "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-external-link"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View Log Details ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_book_edit",
    "class": "col-lg-12 control-label"
  }, "Book to Borrow:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_23, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Select Book ", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aBooks, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.book_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 9 /* TEXT, PROPS */, _hoisted_24);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_book_edit",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Book is required! ", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_borrower_edit",
    "class": "col-lg-12 control-label"
  }, "Borrower:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_26, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Select Borrower ", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aBorrowers, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.borrower_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.borrower_name), 9 /* TEXT, PROPS */, _hoisted_27);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_borrower_edit",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Borrower is required! ", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DATES "), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"admin-form mw1000\" data-v-4cb7cf00><!-- DATE BORROWED --><div class=\"col-lg-4\" style=\"margin-top:15px;\" data-v-4cb7cf00><span style=\"font-weight:700;margin-left:10px;\" data-v-4cb7cf00>Date Borrowed:</span><label for=\"datetimeborrowed_edit\" class=\"field prepend-picker-icon\" data-v-4cb7cf00><input type=\"text\" id=\"datetimeborrowed_edit\" name=\"datetimeborrowed_edit\" class=\"gui-input\" placeholder=\"Enter date and time borrowed\" data-v-4cb7cf00></label><p id=\"p_datetimeborrowed_edit\" style=\"display:none;\" class=\"error_msg\" data-v-4cb7cf00> Date and Time of Borrowed is required!</p></div><!-- DATE DUE --><div class=\"col-lg-4\" style=\"margin-top:15px;\" data-v-4cb7cf00><span style=\"font-weight:700;margin-left:10px;\" data-v-4cb7cf00>Date Due:</span><label for=\"datetimedue_edit\" class=\"field prepend-picker-icon\" data-v-4cb7cf00><input type=\"text\" id=\"datetimedue_edit\" name=\"datetimedue_edit\" class=\"gui-input\" placeholder=\"Enter date and time due\" data-v-4cb7cf00></label><p id=\"p_datetimedue_edit\" style=\"display:none;\" class=\"error_msg\" data-v-4cb7cf00> Date and Time of Due is required!</p></div><!-- DATE RETURN --><div class=\"col-lg-4\" style=\"margin-top:15px;\" data-v-4cb7cf00><span style=\"font-weight:700;margin-left:10px;\" data-v-4cb7cf00>Date Returned:</span><label for=\"datetimereturned\" class=\"field prepend-picker-icon\" data-v-4cb7cf00><input type=\"text\" id=\"datetimereturned\" name=\"datetimereturned\" class=\"gui-input\" placeholder=\"Enter date and time returned\" data-v-4cb7cf00></label><p id=\"p_datetimereturned\" style=\"display:none;\" class=\"error_msg\" data-v-4cb7cf00> Date and Time of Return is required!</p></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" REMARKS "), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-lg-12",
    style: {
      "margin-top": "15px"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_remarks",
    "class": "col-lg-12 control-label"
  }, "Remarks (Optional):"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "inp_remarks",
    "class": "form-control",
    placeholder: "Remark's Name"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" REMARKS LIST"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_29, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Remarks"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Remarked By"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date and Time")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRemarks, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.bl_remarks), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.username), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.created_at, 'date')), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-2\" data-v-4cb7cf00><button type=\"button\" id=\"btnSaveUpdate\" class=\"btn btn-block btn-success\" style=\"margin-right:7%;margin-top:33px;font-size:16px;display:none;\" data-v-4cb7cf00><i class=\"fa fa-floppy-o\" data-v-4cb7cf00></i> Save Update </button><button type=\"button\" id=\"btnCancelUpdate\" class=\"btn btn-block btn-default\" style=\"margin-right:7%;margin-top:33px;font-size:16px;\" data-v-4cb7cf00><i class=\"fa fa-times\" data-v-4cb7cf00></i> Cancel Editing </button></div>", 1))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: VIEW DETAILS OF BORROW LOG "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PANEL SECTION FOR BORROW LOGS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-list"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Borrow Log Records ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_35, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SysId"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Book Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Borrower"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date Borrowed"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date Due"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date Returned"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "No. of Days Borrowed"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Last Modified"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Action")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRecordList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.borrower_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_borrowed, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_due, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_returned, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.days_borrowed), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.updated_at, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-action": "editDetails",
      "data-id": item.bl_id,
      "class": "btn btn-md btn-warning editDetails",
      style: {
        "margin-left": "20px",
        "margin-right": "10px"
      }
    }, _toConsumableArray(_cache[22] || (_cache[22] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-external-link"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")])), 8 /* PROPS */, _hoisted_45)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PANEL SECTION FOR BORROW LOGS ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Style the button that is used to open and close the collapsible content */\n.collapsible[data-v-4cb7cf00] {\r\n    background-color: #04aa6d;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    padding: 18px;\r\n    width: 100%;\r\n    border: none;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 15px;\n}\r\n\r\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n.active[data-v-4cb7cf00],\r\n.collapsible[data-v-4cb7cf00]:hover {\r\n    background-color: #43816a;\n}\r\n\r\n/* Style the collapsible content. Note: hidden by default */\n.content[data-v-4cb7cf00] {\r\n    padding: 0 18px;\r\n    display: none;\r\n    overflow: hidden;\r\n    background-color: #ffffff;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_style_index_0_id_4cb7cf00_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_style_index_0_id_4cb7cf00_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_style_index_0_id_4cb7cf00_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_borrow_log.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_borrow_log.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sysa_borrow_log_vue_vue_type_template_id_4cb7cf00_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true */ "./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true");
/* harmony import */ var _sysa_borrow_log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sysa_borrow_log.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=script&lang=js");
/* harmony import */ var _sysa_borrow_log_vue_vue_type_style_index_0_id_4cb7cf00_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css */ "./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_sysa_borrow_log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sysa_borrow_log_vue_vue_type_template_id_4cb7cf00_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-4cb7cf00"],['__file',"resources/js/components/pages/sysa/sysa_borrow_log.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_borrow_log.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_template_id_4cb7cf00_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_template_id_4cb7cf00_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=template&id=4cb7cf00&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_borrow_log_vue_vue_type_style_index_0_id_4cb7cf00_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_borrow_log.vue?vue&type=style&index=0&id=4cb7cf00&scoped=true&lang=css");


/***/ })

}]);