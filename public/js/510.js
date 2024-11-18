"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[510],{652:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(3645),n=a.n(s)()((function(e){return e[1]}));n.push([e.id,".error_msg[data-v-5813be1c],.error_msg_edit[data-v-5813be1c]{color:red}",""]);const i=n},9510:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var s=a(821),n=function(e){return(0,s.dD)("data-v-5813be1c"),e=e(),(0,s.Cn)(),e},i={id:"content_wrapper"},l=(0,s.uE)('<header id="topbar" class="alt" data-v-5813be1c><div class="topbar-left" data-v-5813be1c><ol class="breadcrumb" data-v-5813be1c><li class="crumb-trail" data-v-5813be1c> Libraries </li><li class="crumb-active" data-v-5813be1c><a data-v-5813be1c>Payee Management</a></li></ol></div></header>',1),r={class:"panel"},d=n((function(){return(0,s._)("div",{class:"panel-heading"},[(0,s._)("span",{class:"panel-title"}," Payee Management ")],-1)})),o={class:"panel-body"},p={class:"panel panel-colorbox-open panel-system",id:"spy2"},c=n((function(){return(0,s._)("br",null,null,-1)})),_=n((function(){return(0,s._)("div",{class:"panel-heading"},[(0,s._)("div",{class:"panel-title hidden-xs"},[(0,s._)("span",{class:"fa fa-plus-square-o"}),(0,s.Uk)("Add Payee ")])],-1)})),y={class:"panel-body pn"},u={class:"form-group"},f={class:"row",style:{margin:"1%"}},m={class:"col-lg-3"},v=n((function(){return(0,s._)("label",{for:"inp_payee_name",class:"col-lg-3 control-label"},"Name",-1)})),g=n((function(){return(0,s._)("p",{id:"p_payee_name",style:{display:"none"},class:"error_msg"},"Payee's Name is required!",-1)})),b={class:"col-lg-3"},h=n((function(){return(0,s._)("label",{for:"inp_payee_tin",class:"col-lg-12 control-label"},"TIN Number",-1)})),P=n((function(){return(0,s._)("p",{id:"p_payee_tin",style:{display:"none"},class:"error_msg"},"Payee's TIN is required! ",-1)})),x={class:"col-lg-4"},w=n((function(){return(0,s._)("label",{for:"inp_payee_address",class:"col-lg-3 control-label"},"Address",-1)})),E=n((function(){return(0,s._)("p",{id:"p_payee_address",style:{display:"none"},class:"error_msg"},"Payee's Address is required!",-1)})),T=n((function(){return(0,s._)("div",{class:"col-lg-2"},[(0,s._)("button",{type:"button",id:"btnSaveNewDetails",class:"btn btn-md btn-success",style:{"margin-right":"7%","margin-top":"23px"}},[(0,s._)("i",{class:"fa fa-floppy-o"}),(0,s.Uk)(" Save Details ")])],-1)})),A={class:"panel panel-colorbox-open panel-dark",id:"spy2"},D=n((function(){return(0,s._)("br",null,null,-1)})),C=n((function(){return(0,s._)("div",{class:"panel-heading"},[(0,s._)("div",{class:"panel-title hidden-xs"},[(0,s._)("span",{class:"fa fa-list"}),(0,s.Uk)("Payees' Records ")])],-1)})),L={class:"panel-body pn"},N={class:"table table-striped table-hover",id:"tbl_payees",cellspacing:"0",width:"100%"},S=n((function(){return(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{"text-align":"center"}},"SysId"),(0,s._)("th",{style:{"text-align":"center"}},"Payee"),(0,s._)("th",{style:{"text-align":"center"}},"TIN"),(0,s._)("th",{style:{"text-align":"center"}},"Address"),(0,s._)("th",{style:{"text-align":"center"}},"Date Created"),(0,s._)("th",{style:{"text-align":"center"}},"Last Modified"),(0,s._)("th",{style:{"text-align":"center"}},"Action")])],-1)})),U={style:{"text-align":"center"}},k={style:{"text-align":"left"}},q={style:{"text-align":"left"}},z={style:{"text-align":"left"}},I={style:{"text-align":"center"}},M={style:{"text-align":"center"}},B={style:{"text-align":"center"}},Z=["data-payee_id"],R=n((function(){return(0,s._)("i",{class:"fa fa-pencil-square-o"},null,-1)}));var H=a(6455),V=a.n(H),W=a(860),Y=a(475);const K={mixins:[W.Z,Y.Z],data:function(){return{aTableConfig:{aaSorting:[[1,"asc"]],aoColumnDefs:[{bSortable:!1,aTargets:[6]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aPayeeList:[],sPayeeName:"",sPayeeTin:"",sPayeeAddress:"",iActivePayee:0}},mounted:function(){this.getPayeeList(),this.initEventListeners()},methods:{showEditModal:function(){var e=this;V().fire({title:"<strong>Update Payee's Details</strong>",width:450,html:'\n                <hr>\n                <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">\n                                    <label for="inp_payee_name_edit" class="col-lg-12 control-label" style="font-size: 14px">Name</label>\n                                    <input type="text" id="inp_payee_name_edit" class="form-control" v-model="sEditPayee"\n                                        placeholder="Enter Payee\'s Name" style="text-transform:uppercase">\n                                    <p id="p_payee_address_edit" style="display: none" class="error_msg">Payee\'s Address is\n                                        required!</p>\n\n                                </div>\n                <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">\n                                    <label for="inp_payee_tin_edit" class="col-lg-12 control-label" style="font-size: 14px">TIN</label>\n                                    <input type="text" id="inp_payee_tin_edit" class="form-control" v-model="sEditPayee"\n                                        placeholder="Enter Payee\'s TIN" style="text-transform:uppercase">\n                                    <p id="p_payee_address_edit" style="display: none" class="error_msg">Payee\'s Address is\n                                        required!</p>\n\n                                </div>\n                <div class="col-lg-12" style="margin-bottom: 10px; text-align: left">\n                                    <label for="inp_payee_address_edit" class="col-lg-12 control-label" style="font-size: 14px">Address</label>\n                                    <input type="text" id="inp_payee_address_edit" class="form-control" v-model="sEditPayee"\n                                        placeholder="Enter Payee\'s Address" style="text-transform:uppercase">\n                                    <p id="p_payee_address_edit" style="display: none" class="error_msg">Payee\'s Address is\n                                        required!</p>\n\n                                </div>',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="fa fa-floppy-o"></i> Save Details',confirmButtonAriaLabel:"Save",cancelButtonText:'<i class="fa fa-times"></i> Cancel',cancelButtonAriaLabel:"Cancel"}).then((function(t){t.isConfirmed&&e.updateEntries()}))},initEventListeners:function(){var e=this;document.body.addEventListener("click",(function(t){t.preventDefault(),"btnSaveNewDetails"===t.target.id&&e.saveEntries(),"editDetails"===t.target.dataset.action&&(e.showEditModal(),e.iActivePayee=t.target.dataset.payee_id,e.getPayeeDetailsToEdit())}),!1)},getPayeeDetailsToEdit:function(){var e=this,t=this.aPayeeList.filter((function(t){return t.payee_id==e.iActivePayee}));$("#inp_payee_name_edit").val(t[0].payee_name),$("#inp_payee_tin_edit").val(t[0].payee_tin),$("#inp_payee_address_edit").val(t[0].payee_address)},getPayeeList:function(){var e=this,t=this;this.getRequest("payee/get-list",(function(a){e.aPayeeList=a.data,setTimeout((function(){t.initTblPayees()}),500)}))},initTblPayees:function(){$("#tbl_payees").DataTable(this.aTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},validateEntries:function(e){var t=!0,a="create"===e?"#p_payee_name":"#p_payee_name_edit";""===$("create"===e?"#inp_payee_name":"#inp_payee_name_edit").val()&&($(a).css("display",""),t=!1);var s="create"===e?"#p_payee_tin":"#p_payee_tin_edit";""===$("create"===e?"#inp_payee_tin":"#inp_payee_tin_edit").val()&&($(s).css("display",""),t=!1);var n="create"===e?"#p_payee_address":"#p_payee_address_edit";return""===$("create"===e?"#inp_payee_address":"#inp_payee_address_edit").val()&&($(n).css("display",""),t=!1),t},clearEntries:function(){this.sPayeeName="",this.sPayeeTin="",this.sPayeeAddress=""},saveEntries:function(){var e=this,t=this,a={payee_name:$("#inp_payee_name").val().toUpperCase(),payee_tin:$("#inp_payee_tin").val().toUpperCase(),payee_address:$("#inp_payee_address").val().toUpperCase()};$(".error_msg").css("display","none"),!0===this.validateEntries("create")?this.postRequest("payee/create",a,(function(a){e.showSuccessAlert("Successfully saved your entry"),t.clearEntries(),$("#tbl_payees").DataTable().destroy(),t.getPayeeList()})):this.showErrorAlert("Please double check and correct all your entries!")},updateEntries:function(){var e=this,t=this,a={payee_name:$("#inp_payee_name_edit").val().toUpperCase(),payee_tin:$("#inp_payee_tin_edit").val().toUpperCase(),payee_address:$("#inp_payee_address_edit").val().toUpperCase()};$(".error_msg_edit").css("display","none"),!0===this.validateEntries("update")?this.postRequest("payee/update/"+this.iActivePayee,a,(function(a){e.showSuccessAlert(a.message),$("#tbl_payees").DataTable().destroy(),t.getPayeeList()})):(this.showEditModal(),this.getPayeeDetailsToEdit(this.iActivePayee))}}};var O=a(3379),j=a.n(O),F=a(652),G={insert:"head",singleton:!1};j()(F.Z,G);F.Z.locals;const J=(0,a(3744).Z)(K,[["render",function(e,t,a,n,$,H){var V=(0,s.up)("C_Layout_Header"),W=(0,s.up)("C_Layout_SDOR_Sidebar");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(V),(0,s.Wm)(W),(0,s._)("section",i,[l,(0,s._)("div",r,[d,(0,s._)("div",o,[(0,s._)("div",p,[c,_,(0,s._)("div",y,[(0,s._)("div",u,[(0,s._)("div",f,[(0,s._)("div",m,[v,(0,s.wy)((0,s._)("input",{type:"text",id:"inp_payee_name",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return $.sPayeeName=e}),placeholder:"Enter Payee's Name",style:{"text-transform":"uppercase"}},null,512),[[s.nr,$.sPayeeName]]),g]),(0,s._)("div",b,[h,(0,s.wy)((0,s._)("input",{type:"text",id:"inp_payee_tin",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return $.sPayeeTin=e}),placeholder:"Enter Payee's TIN",style:{"text-transform":"uppercase"}},null,512),[[s.nr,$.sPayeeTin]]),P]),(0,s._)("div",x,[w,(0,s.wy)((0,s._)("input",{type:"text",id:"inp_payee_address",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return $.sPayeeAddress=e}),placeholder:"Enter Payee's Address",style:{"text-transform":"uppercase"}},null,512),[[s.nr,$.sPayeeAddress]]),E]),T])])])]),(0,s._)("div",A,[D,C,(0,s._)("div",L,[(0,s._)("table",N,[S,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)($.aPayeeList,(function(e){return(0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",U,(0,s.zw)(e.temp_id),1),(0,s._)("td",k,(0,s.zw)(e.payee_name),1),(0,s._)("td",q,(0,s.zw)(e.payee_tin),1),(0,s._)("td",z,(0,s.zw)(e.payee_address),1),(0,s._)("td",I,(0,s.zw)(e.date_created),1),(0,s._)("td",M,(0,s.zw)(e.date_modified),1),(0,s._)("td",B,[(0,s._)("button",{type:"button","data-action":"editDetails","data-payee_id":e.payee_id,class:"btn btn-md btn-warning editDetails",style:{"margin-right":"9%"}},[R,(0,s.Uk)(" Edit ")],8,Z)])])})),256))])])])])])])])],64)}],["__scopeId","data-v-5813be1c"]])}}]);