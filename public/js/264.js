"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[264],{8264:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(821),s={id:"main"},i={id:"content_wrapper"},l=(0,n.uE)('<header id="topbar" class="alt"><div class="topbar-left"><ol class="breadcrumb"><li class="crumb-trail"> Cash Management </li><li class="crumb-trail"> Manage Sheet </li><li class="crumb-active"><a>Personnel Services</a></li></ol></div></header>',1),r={class:"panel"},o=(0,n._)("div",{class:"panel-heading"},[(0,n._)("span",{class:"panel-title"},"Manage Cash Disbursement Sheets for PS")],-1),c={class:"panel-body"},d=(0,n.uE)('<div class="col-md-12"><div class="panel panel-colorbox-open panel-system" id="spy2"><br><div class="panel-heading"><div class="panel-title hidden-xs"><span class="fa fa-plus-square-o"></span>Create PS Sheet </div></div><div class="panel-body pn"><div class="form-group" id="divInpTransactMY" style="margin:1%;"><div class="admin-form mw1000 left-block"><div class="col-md-7 section"><label class="field prepend-icon"><textarea class="gui-textarea" id="txt_remarks" name="comment" placeholder="Enter your remarks here..."></textarea><label for="comment" class="field-icon"><i class="fa fa-comments"></i></label><span class="input-footer"><strong>Hint: </strong>Provide a short description about this sheet. (Optional)</span></label></div><div class="col-md-3"><label for="monthpicker1" class="field prepend-icon"><input type="text" id="inpMonthYearTransact" name="inpMonthYearTransact" class="gui-input" placeholder="Enter month and year" readonly><label class="field-icon"><i class="fa fa-calendar-o"></i></label></label><button id="btnPSCreateSheet" type="button" class="btn btn-system btn-gradient dark btn-block" style="margin-top:22%;"><i class="fa fa-plus-square-o"></i> Create Sheet (PS) </button></div></div></div></div></div></div>',1),h={class:"col-md-12"},u={class:"panel panel-colorbox-open panel-dark",id:"spy2"},p=(0,n._)("br",null,null,-1),f=(0,n._)("div",{class:"panel-heading"},[(0,n._)("div",{class:"panel-title hidden-xs"},[(0,n._)("span",{class:"glyphicon glyphicon-tasks"}),(0,n.Uk)("Cash Disbursement Sheets for Personnel Services ")])],-1),b={class:"panel-body pn"},v={class:"table table-striped table-hover",id:"tbl_PS_sheets",cellspacing:"0",width:"100%"},m=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"center"}},"SysId"),(0,n._)("th",{style:{"text-align":"center"}},"Sheet No"),(0,n._)("th",{style:{"text-align":"center"}},"Accounting Period"),(0,n._)("th",{style:{"text-align":"center"}},"Status"),(0,n._)("th",{style:{"text-align":"center"}},"Date Created"),(0,n._)("th",{style:{"text-align":"center"}},"Action")])],-1),_={style:{"text-align":"center"}},g={style:{"text-align":"center"}},S={style:{"text-align":"center"}},y={style:{"text-align":"center"}},w={style:{"text-align":"center"}},x={style:{"text-align":"center"}},T=["data-sheet_id"],C=(0,n._)("i",{class:"fa fa-arrow-circle-o-right"},null,-1),P=["data-sheet_id"],D=(0,n._)("i",{class:"fa fa-trash"},null,-1),k={key:1,type:"button",class:"btn btn-md btn-default",disabled:""},E=(0,n._)("i",{class:"fa fa-trash"},null,-1);var Y=a(6455),M=a.n(Y),B=a(860),L=a(475);const A={mixins:[B.Z,L.Z],data:function(){return{bPSSheetExist:!1,bMOOESheetExist:!1,bSRSheetExist:!1,aTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:[5]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aPSsheets:[],aPSDisbursements:[],sActiveDate:"",aSelectedEntries:[]}},mounted:function(){this.initializePlugins(),this.getPSSheets(),this.initCreateButtonEventListener()},methods:{initializePlugins:function(){$("#inpMonthYearTransact").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(e,t){var a=$(this).parents(".admin-form").attr("class");t.dpDiv.parent().hasClass(a)||t.dpDiv.wrap('<div class="'+a+'"></div>')}})},initCreateButtonEventListener:function(){var e=this;document.body.addEventListener("click",(function(t){t.preventDefault(),"btnPSCreateSheet"===t.target.id&&e.validateSheetCreation()}),!1)},validateSheetCreation:function(){""===$("#inpMonthYearTransact").val()?this.showErrorAlert("Month and Year is Required!"):this.createSheet()},initTblPSSheets:function(){$("#tbl_PS_sheets").DataTable(this.aTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initTableEventListener:function(){var e=this;document.body.addEventListener("click",(function(t){t.preventDefault(),"viewDetails"===t.target.dataset.attr&&(window.location.href="/front/sdor/view-sheet-details/"+t.target.dataset.sheet_id),"deleteSheet"===t.target.dataset.attr&&e.deleteRecord(t.target.dataset.sheet_id)}),!1)},getPSSheets:function(){var e=this,t=this;this.getRequest("sdor/get-sheets",(function(a){e.aPSsheets=a.data,setTimeout((function(){t.initTblPSSheets()}),500),setTimeout((function(){t.initTableEventListener()}),500)}),{sheet_fund_type:"ps"})},createSheet:function(){var e=this,t=$("#inpMonthYearTransact").val().split("/"),a=this;M().fire({title:"Confirmation",html:"By creating a sheet, you are now finalizing your entries for this month and your record of transactions will be submitted for review and approval of the Office of Comptroller. Are you sure you want to proceed?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Proceed."}).then((function(n){if(n.isConfirmed){var s={sheet_fund_type:"ps",transact_month:t[0],transact_year:t[1],remarks:$("#txt_remarks").val()};e.postRequest("sdor/create-sheet-ps",s,(function(e){a.clearInputFields(),a.reloadSheetTable(),a.showSuccessAlert("Successfully created a sheet")}))}}))},deleteRecord:function(e){var t=this,a=this;M().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.isConfirmed&&t.postRequest("sdor/delete-sheet/"+e,{},(function(e){a.reloadSheetTable(),a.showSuccessAlert("Successfully deleted the sheet!")}))}))},reloadSheetTable:function(){$("#tbl_PS_sheets").DataTable().destroy(),this.getPSSheets()},clearInputFields:function(){$("#txt_remarks").val(""),$("#inpMonthYearTransact").val("")}}};const z=(0,a(3744).Z)(A,[["render",function(e,t,a,Y,M,B){var L=(0,n.up)("C_Layout_Header"),$=(0,n.up)("C_Layout_SDOR_Sidebar");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(L),(0,n.Wm)($),(0,n._)("section",i,[l,(0,n._)("div",r,[o,(0,n._)("div",c,[d,(0,n._)("div",h,[(0,n._)("div",u,[p,f,(0,n._)("div",b,[(0,n._)("table",v,[m,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(M.aPSsheets,(function(t){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",_,(0,n.zw)(t.temp_id),1),(0,n._)("td",g,(0,n.zw)(null===t.sheet_no?"---":t.sheet_no),1),(0,n._)("td",S,(0,n.zw)(e.convertDateFormat(t.transact_year+"-"+t.transact_month,"MMMM YYYY")),1),(0,n._)("td",y,(0,n.zw)(t.status),1),(0,n._)("td",w,(0,n.zw)(t.date_created),1),(0,n._)("td",x,[(0,n._)("button",{type:"button","data-attr":"viewDetails","data-sheet_id":t.sheet_id,class:"btn btn-md btn-info viewDetails",style:{"margin-right":"2%"}},[C,(0,n.Uk)(" View Details ")],8,T),"OPEN"===t.status?((0,n.wg)(),(0,n.iD)("button",{key:0,type:"button","data-attr":"deleteSheet","data-sheet_id":t.sheet_id,class:"btn btn-md btn-danger deleteSheet"},[D,(0,n.Uk)(" Delete ")],8,P)):((0,n.wg)(),(0,n.iD)("button",k,[E,(0,n.Uk)(" Delete ")]))])])})),256))])])])])])])])])])}]])}}]);