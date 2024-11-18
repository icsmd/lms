"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sysa_sysa_book_mgt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "aaSorting": [[1, 'asc']],
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
      aDonors: [],
      aRecordList: [],
      iActiveRecord: 0,
      bUpdateData: false
    };
  },
  mounted: function mounted() {
    this.initCollapsible();
    this.getDonors();
    this.getRecordList();
    this.initEventListeners();
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
    getDonors: function getDonors() {
      var _this = this;
      $('.donor-select').select2();
      this.getRequest('donors/get', function (mResponse) {
        _this.aDonors = mResponse.data;
      });
    },
    getRecordList: function getRecordList() {
      var _this2 = this;
      var mSelf = this;
      this.getRequest('books/get', function (mResponse) {
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
          mSelf.showEditModal();
          mSelf.iActiveRecord = event.target.dataset.id;
          setTimeout(function () {
            mSelf.getDetailsToEdit();
          }, 100);
        }
      }, false);
    },
    validateEntries: function validateEntries(sAction) {
      var bResult = true;
      var inpTitle = sAction === 'create' ? '#inp_title' : '#inp_title_edit';
      var pErrTitle = sAction === 'create' ? '#p_title' : '#p_title_edit';

      // let inpPublisher = sAction === 'create' ? '#inp_publisher' : '#inp_publisher_edit';
      // let pErrPublisher = sAction === 'create' ? '#p_publisher' : '#p_publisher_edit';

      // let inpEdition = sAction === 'create' ? '#inp_edition' : '#inp_edition_edit';
      // let pErrEdition = sAction === 'create' ? '#p_edition' : '#p_edition_edit';

      var inpDonor = sAction === 'create' ? '#inp_donor' : '#inp_donor_edit';
      var pErrDonor = sAction === 'create' ? '#p_donor' : '#p_donor_edit';
      if ($(inpTitle).val() === '') {
        $(pErrTitle).css('display', '');
        bResult = false;
      }
      // if ($(inpPublisher).val() === '') {
      //     $(pErrPublisher).css('display', '');
      //     bResult = false;
      // }
      // if ($(inpEdition).val() === '') {
      //     $(pErrEdition).css('display', '');
      //     bResult = false;
      // }
      if ($(inpDonor).val() === '') {
        $(pErrDonor).css('display', '');
        bResult = false;
      }
      return bResult;
    },
    clearCreateEntries: function clearCreateEntries() {
      $('#inp_title').val(''), $('#inp_author').val(''), $('#inp_publishing_year').val(''), $('#inp_publisher').val(''), $('#inp_edition').val(''),
      // $('#inp_donor').val(''),
      $('.error_msg').css('display', 'none');
    },
    clearUpdateEntries: function clearUpdateEntries() {
      $('#inp_title_edit').val(''), $('#inp_author_edit').val(''), $('#inp_publishing_year_edit').val(''), $('#inp_publisher_edit').val(''), $('#inp_edition_edit').val(''), $('.error_msg_edit').css('display', 'none');
    },
    saveEntries: function saveEntries() {
      var _this3 = this;
      var mSelf = this;
      var oParams = {
        title: $('#inp_title').val(),
        donor_id: $('#inp_donor').val()
      };
      var sAuthor = $('#inp_author').val();
      var sPubYear = $('#inp_publishing_year').val();
      var sPublisher = $('#inp_publisher').val();
      var sEdition = $('#inp_edition').val();
      oParams = sAuthor !== '' ? Object.assign(oParams, {
        author: sAuthor
      }) : oParams;
      oParams = sPubYear !== '' ? Object.assign(oParams, {
        publication_year: sPubYear
      }) : oParams;
      oParams = sPublisher !== '' ? Object.assign(oParams, {
        publisher: sPublisher
      }) : oParams;
      oParams = sEdition !== '' ? Object.assign(oParams, {
        edition: sEdition
      }) : oParams;
      $('.error_msg').css('display', 'none');
      var bValidateResult = this.validateEntries('create');
      if (bValidateResult === true) {
        this.postRequest('books/create', oParams, function (mResponse) {
          _this3.showSuccessAlert('Successfully saved your entry');
          mSelf.clearCreateEntries();
          $('#tbl_records').DataTable().destroy();
          mSelf.getRecordList();
        });
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
      }
    },
    getDetailsToEdit: function getDetailsToEdit() {
      var _this4 = this;
      var filteredRecord = this.aRecordList.filter(function (record) {
        return record.book_id == _this4.iActiveRecord;
      });
      $('#inp_title_edit').val(filteredRecord[0].title);
      $('#inp_author_edit').val(filteredRecord[0].author);
      $('#inp_publishing_year_edit').val(filteredRecord[0].publication_year);
      $('#inp_publisher_edit').val(filteredRecord[0].publisher);
      $('#inp_edition_edit').val(filteredRecord[0].edition);
    },
    showEditModal: function showEditModal() {
      var mSelf = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "<strong>Update Books's Details</strong>",
        width: 450,
        html: "\n                <hr>\n                                <div class=\"col-lg-12\" style=\"margin-bottom: 10px; text-align: left\">\n                                    <label for=\"inp_title_edit\" class=\"col-lg-12 control-label\" style=\"font-size: 14px\">Title</label>\n                                    <input type=\"text\" id=\"inp_title_edit\" class=\"form-control\"\n                                        placeholder=\"Enter title\" style=\"text-transform:uppercase\">\n                                    <p id=\"p_title_edit\" style=\"display: none\" class=\"error_msg_edit\">Title is required!</p>\n\n                                </div>\n                                 <div class=\"col-lg-12\" style=\"margin-bottom: 10px; text-align: left\">\n                                    <label for=\"inp_author_edit\" class=\"col-lg-12 control-label\" style=\"font-size: 14px\">Author</label>\n                                    <input type=\"text\" id=\"inp_author_edit\" class=\"form-control\"\n                                        placeholder=\"Enter Author\" style=\"text-transform:uppercase\">\n                                    <p id=\"p_author_edit\" style=\"display: none\" class=\"error_msg_edit\">Author is required!</p>\n                                </div>\n                                 <div class=\"col-lg-12\" style=\"margin-bottom: 10px; text-align: left\">\n                                    <label for=\"inp_publishing_year_edit\" class=\"col-lg-12 control-label\" style=\"font-size: 14px\">Publishing Year</label>\n                                    <input type=\"text\" id=\"inp_publishing_year_edit\" class=\"form-control\"\n                                        placeholder=\"Enter Year\" style=\"text-transform:uppercase\">\n                                    <p id=\"p_publishing_year_edit\" style=\"display: none\" class=\"error_msg_edit\">Publishing Year is required!</p>\n                                </div>\n                                 <div class=\"col-lg-12\" style=\"margin-bottom: 10px; text-align: left\">\n                                    <label for=\"inp_publisher_edit\" class=\"col-lg-12 control-label\" style=\"font-size: 14px\">Publisher</label>\n                                    <input type=\"text\" id=\"inp_publisher_edit\" class=\"form-control\"\n                                        placeholder=\"Enter Publisher\" style=\"text-transform:uppercase\">\n                                    <p id=\"p_publisher_edit\" style=\"display: none\" class=\"error_msg_edit\">Publisher is required!</p>\n                                </div>\n                                 <div class=\"col-lg-12\" style=\"margin-bottom: 10px; text-align: left\">\n                                    <label for=\"inp_edition_edit\" class=\"col-lg-12 control-label\" style=\"font-size: 14px\">Edition</label>\n                                    <input type=\"text\" id=\"inp_edition_edit\" class=\"form-control\"\n                                        placeholder=\"Enter Edition\" style=\"text-transform:uppercase\">\n                                    <p id=\"p_edition_edit\" style=\"display: none\" class=\"error_msg_edit\">Edition is required!</p>\n                                </div>",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "<i class=\"fa fa-floppy-o\"></i> Save Details",
        confirmButtonAriaLabel: "Save",
        cancelButtonText: "<i class=\"fa fa-times\"></i> Cancel",
        cancelButtonAriaLabel: "Cancel"
      }).then(function (result) {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          mSelf.updateEntries();
        }
      });
    },
    updateEntries: function updateEntries() {
      var _this5 = this;
      var mSelf = this;
      var oParams = {
        title: $('#inp_title_edit').val()
      };
      var sAuthor = $('#inp_author_edit').val();
      var sPubYear = $('#inp_publishing_year_edit').val();
      var sPublisher = $('#inp_publisher_edit').val();
      var sEdition = $('#inp_edition_edit').val();
      oParams = sAuthor !== '' ? Object.assign(oParams, {
        author: sAuthor
      }) : oParams;
      oParams = sPubYear !== '' ? Object.assign(oParams, {
        publication_year: sPubYear
      }) : oParams;
      oParams = sPublisher !== '' ? Object.assign(oParams, {
        publisher: sPublisher
      }) : oParams;
      oParams = sEdition !== '' ? Object.assign(oParams, {
        edition: sEdition
      }) : oParams;
      $('.error_msg_edit').css('display', 'none');
      var bValidateResult = this.validateEntries('update');
      if (bValidateResult === true) {
        this.postRequest('books/update/' + this.iActiveRecord, oParams, function (mResponse) {
          _this5.showSuccessAlert(mResponse.message);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "panel panel-colorbox-open panel-primary",
  id: "spy2",
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
  "class": "col-lg-3",
  style: {
    "margin-top": "15px"
  }
};
var _hoisted_12 = {
  "class": "select2-single form-control donor-select",
  id: "inp_donor",
  style: {
    "width": "100%"
  }
};
var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "panel panel-colorbox-open panel-primary",
  id: "spy2",
  style: {
    "margin": "1%"
  }
};
var _hoisted_15 = {
  "class": "panel-body pn"
};
var _hoisted_16 = {
  "class": "table table-striped table-hover",
  id: "tbl_records",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_17 = {
  style: {
    "width": "5%",
    "text-align": "center"
  }
};
var _hoisted_18 = {
  style: {
    "width": "35%",
    "text-align": "left"
  }
};
var _hoisted_19 = {
  style: {
    "width": "15%",
    "text-align": "left"
  }
};
var _hoisted_20 = {
  style: {
    "width": "10%",
    "text-align": "center"
  }
};
var _hoisted_21 = {
  style: {
    "width": "5%",
    "text-align": "center"
  }
};
var _hoisted_22 = {
  style: {
    "width": "10%",
    "text-align": "center"
  }
};
var _hoisted_23 = {
  key: 0,
  style: {
    "width": "10%",
    "text-align": "center",
    "background-color": "#91fd93"
  }
};
var _hoisted_24 = {
  key: 1,
  style: {
    "width": "10%",
    "text-align": "center",
    "background-color": "#f99899"
  }
};
var _hoisted_25 = {
  style: {
    "width": "5%",
    "text-align": "center"
  },
  width: "20%"
};
var _hoisted_26 = ["data-id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SYSA_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SYSA_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SYSA_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-13a8fe6c><div class=\"topbar-left\" data-v-13a8fe6c><ol class=\"breadcrumb\" data-v-13a8fe6c><li class=\"crumb-active\" style=\"margin-top:7px;\" data-v-13a8fe6c><a href=\"dashboard.html\" data-v-13a8fe6c>Library Management</a></li></ol></div></header>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TEMPORARY PENDING FOR DEVELOPMENT (ON-HOLD) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"panel-heading\">\r\n                    <span class=\"panel-title\">Summary of Entries for Special</span>\r\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: ADD NEW BOOK  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COLLAPSIBLE"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Basic AdminPanel - All features disabled except \"minimized\" option "), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "collapsible"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-plus-square"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Add New Book Record")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-6\" data-v-13a8fe6c><label for=\"inp_title\" class=\"col-lg-12 control-label\" data-v-13a8fe6c>Title:</label><input type=\"text\" id=\"inp_title\" class=\"form-control\" placeholder=\"Enter Book Title\" style=\"text-transform:uppercase;\" data-v-13a8fe6c><p id=\"p_title\" style=\"display:none;\" class=\"error_msg\" data-v-13a8fe6c>Title is required! </p></div><div class=\"col-lg-4\" data-v-13a8fe6c><label for=\"inp_author\" class=\"col-lg-12 control-label\" data-v-13a8fe6c>Author</label><input type=\"text\" id=\"inp_author\" class=\"form-control\" placeholder=\"Enter Author\" style=\"text-transform:uppercase;\" data-v-13a8fe6c><p id=\"p_author\" style=\"display:none;\" class=\"error_msg\" data-v-13a8fe6c> Author is required! </p></div><div class=\"col-lg-2\" data-v-13a8fe6c><label for=\"inp_publishing_year\" class=\"col-lg-12 control-label\" data-v-13a8fe6c>Publishing Year</label><input type=\"text\" id=\"inp_publishing_year\" class=\"form-control\" placeholder=\"Enter Pub Year\" style=\"text-transform:uppercase;\" data-v-13a8fe6c><p id=\"p_publishing_year\" style=\"display:none;\" class=\"error_msg\" data-v-13a8fe6c> Publishing Year is required! </p></div><div class=\"col-lg-3\" style=\"margin-top:15px;\" data-v-13a8fe6c><label for=\"inp_publisher\" class=\"col-lg-12 control-label\" data-v-13a8fe6c>Publisher</label><input type=\"text\" id=\"inp_publisher\" class=\"form-control\" placeholder=\"Enter Publisher Name/Description\" style=\"text-transform:uppercase;\" data-v-13a8fe6c><p id=\"p_publisher\" style=\"display:none;\" class=\"error_msg\" data-v-13a8fe6c> Publisher is required! </p></div><div class=\"col-lg-3\" style=\"margin-top:15px;\" data-v-13a8fe6c><label for=\"inp_edition\" class=\"col-lg-12 control-label\" data-v-13a8fe6c>Edition</label><input type=\"text\" id=\"inp_edition\" class=\"form-control\" placeholder=\"Enter Book Edition\" style=\"text-transform:uppercase;\" data-v-13a8fe6c><p id=\"p_edition\" style=\"display:none;\" class=\"error_msg\" data-v-13a8fe6c>Edition is required! </p></div>", 5)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_donor",
    "class": "col-lg-12 control-label"
  }, "Donated By:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_12, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Select donor ", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aDonors, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.donor_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.donor_name), 9 /* TEXT, PROPS */, _hoisted_13);
  }), 256 /* UNKEYED_FRAGMENT */))]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_donor",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Donor is required! ", -1 /* HOISTED */))])]), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-2"
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
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save ")])], -1 /* HOISTED */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" COLLAPSIBLE")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: ADD NEW BOOK "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PANEL SECTION FOR ORS COUNT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-list"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Book List ")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_16, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SysId"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Author"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Publisher"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Publishing Year"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Edition"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Action")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRecordList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.author), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.publisher), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.publication_year), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.edition), 1 /* TEXT */), item.status === 'AVAILABLE' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */)])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-action": "editDetails",
      "data-id": item.book_id,
      "class": "btn btn-md btn-warning editDetails",
      style: {
        "margin-left": "20px",
        "margin-right": "10px"
      }
    }, _toConsumableArray(_cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "fa fa-pencil-square-o"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")])), 8 /* PROPS */, _hoisted_26)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PANEL SECTION FOR ORS COUNT ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Style the button that is used to open and close the collapsible content */\n.collapsible[data-v-13a8fe6c] {\r\n    background-color: #04aa6d;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    padding: 18px;\r\n    width: 100%;\r\n    border: none;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 15px;\n}\r\n\r\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n.active[data-v-13a8fe6c],\r\n.collapsible[data-v-13a8fe6c]:hover {\r\n    background-color: #43816a;\n}\r\n\r\n/* Style the collapsible content. Note: hidden by default */\n.content[data-v-13a8fe6c] {\r\n    padding: 0 18px;\r\n    display: none;\r\n    overflow: hidden;\r\n    background-color: #ffffff;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_style_index_0_id_13a8fe6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_style_index_0_id_13a8fe6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_style_index_0_id_13a8fe6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_book_mgt.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_book_mgt.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sysa_book_mgt_vue_vue_type_template_id_13a8fe6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true */ "./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true");
/* harmony import */ var _sysa_book_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sysa_book_mgt.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=script&lang=js");
/* harmony import */ var _sysa_book_mgt_vue_vue_type_style_index_0_id_13a8fe6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css */ "./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_sysa_book_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sysa_book_mgt_vue_vue_type_template_id_13a8fe6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-13a8fe6c"],['__file',"resources/js/components/pages/sysa/sysa_book_mgt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_book_mgt.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_template_id_13a8fe6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_template_id_13a8fe6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=template&id=13a8fe6c&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sysa_book_mgt_vue_vue_type_style_index_0_id_13a8fe6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sysa/sysa_book_mgt.vue?vue&type=style&index=0&id=13a8fe6c&scoped=true&lang=css");


/***/ })

}]);