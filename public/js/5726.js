"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5726],{2885:(s,e,a)=>{a.r(e),a.d(e,{default:()=>L});var o=a(821),r={id:"content_wrapper"},t=(0,o._)("header",{id:"topbar",class:"alt"},[(0,o._)("div",{class:"topbar-left"},[(0,o._)("ol",{class:"breadcrumb"},[(0,o._)("li",{class:"crumb-active"},[(0,o._)("a",null,"Change Password")])])])],-1),n={class:"panel"},i=(0,o._)("div",{class:"panel-heading"},[(0,o._)("span",{class:"panel-title"}," Change Password ")],-1),l={class:"panel-body"},d={class:"col-md-5",style:{"margin-left":"25%"}},p={class:"admin-form",id:"login"},c={class:"panel mt30 mb25"},u={class:"panel-body bg-light p25 pb15"},f={class:"section"},_=(0,o._)("label",{for:"inp_currpass",class:"field-label text-muted fs18 mb10"},[(0,o.Uk)("Current Password: "),(0,o._)("span",{style:{color:"red"}},"*")],-1),w={for:"inp_currpass",class:"field prepend-icon"},m=(0,o._)("b",{class:"tooltip tip-left-bottom"},[(0,o._)("em",null,"You must re-type your current password for security purposes. ")],-1),b=(0,o._)("label",{for:"inp_currpass",class:"field-icon"},[(0,o._)("i",{class:"fa fa-lock"})],-1),h={class:"section"},y=(0,o._)("label",{for:"inp_newpass",class:"field-label text-muted fs18 mb10"},[(0,o.Uk)("New Password: "),(0,o._)("span",{style:{color:"red"}},"*")],-1),g={for:"inp_newpass",class:"field prepend-icon"},C=(0,o._)("b",{class:"tooltip tip-left-bottom"},[(0,o._)("em",null,"Your new password must be different from your current password. ")],-1),P=(0,o._)("label",{for:"inp_newpass",class:"field-icon"},[(0,o._)("i",{class:"fa fa-lock"})],-1),v={class:"section"},k=(0,o._)("label",{for:"inp_confirmpass",class:"field-label text-muted fs18 mb10"},[(0,o.Uk)("Confirm Password: "),(0,o._)("span",{style:{color:"red"}},"*")],-1),U={for:"inp_confirmpass",class:"field prepend-icon"},S=(0,o._)("b",{class:"tooltip tip-left-bottom"},[(0,o._)("em",null,"You must re-type your new password for security purposes. (Copy-Paste is disabled) ")],-1),A=(0,o._)("label",{for:"inp_confirmpass",class:"field-icon"},[(0,o._)("i",{class:"fa fa-lock"})],-1),T=(0,o._)("div",{class:"panel-footer clearfix"},[(0,o._)("button",{id:"btnChangePassword",class:"button btn-primary mr10 pull-right"},[(0,o._)("i",{class:"fa fa-unlock"}),(0,o.Uk)(" Change Password ")])],-1);var E=a(475);const N={mixins:[a(860).Z,E.Z],data:function(){return{sCurrPassword:"",sNewPassword:"",sConfPassword:"",sRedirectUrl:window.location.protocol+"//"+window.location.host+"/front/"+this.$root.sUserType+"/home"}},mounted:function(){this.initializeActions(),this.initializeDefaultElementBehavior()},methods:{initializeDefaultElementBehavior:function(){document.getElementById("inp_confirmpass").onpaste=function(s){return s.preventDefault()}},initializeActions:function(){var s=this;document.body.addEventListener("click",(function(e){"btnChangePassword"===e.target.id&&s.changePassword()}))},changePassword:function(){var s=this,e=this;if(!0===this.validateForm()){var a={currpass:btoa(this.sCurrPassword),newpass:btoa(this.sNewPassword),confpass:btoa(this.sConfPassword)};a=btoa(JSON.stringify(a)),this.postRequest("auth/change-password",{payload:a},(function(a){s.showSuccessAlert(a.message+"\n\rRedirecting to home page..."),setTimeout((function(){location.replace(e.sRedirectUrl)}),3e3)}))}},validateForm:function(){var s=!1;return""===this.sCurrPassword||""===this.sNewPassword||""===this.sConfPassword?(this.showErrorAlert("All fields are required! Please double check your entries."),s=!1):this.sNewPassword===this.sConfPassword?s=!0:(this.showErrorAlert("Your new password doesn't match!"),s=!1),s}}};const L=(0,a(3744).Z)(N,[["render",function(s,e,a,E,N,L){var D=(0,o.up)("C_Layout_Header"),R=(0,o.up)("C_Layout_SDOR_Sidebar"),Y=(0,o.up)("C_Layout_ACTG_Sidebar"),$=(0,o.up)("C_Layout_BDGT_Sidebar"),j=(0,o.up)("C_Layout_CASH_Sidebar"),x=(0,o.up)("C_Layout_SYSA_Sidebar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(D),"sdor"===s.$root.sUserType?((0,o.wg)(),(0,o.j4)(R,{key:0})):"actg"===s.$root.sUserType?((0,o.wg)(),(0,o.j4)(Y,{key:1})):"bdgt"===s.$root.sUserType?((0,o.wg)(),(0,o.j4)($,{key:2})):"cash"===s.$root.sUserType?((0,o.wg)(),(0,o.j4)(j,{key:3})):"sysa"===s.$root.sUserType?((0,o.wg)(),(0,o.j4)(x,{key:4})):(0,o.kq)("",!0),(0,o._)("section",r,[t,(0,o._)("div",n,[i,(0,o._)("div",l,[(0,o._)("div",d,[(0,o._)("div",p,[(0,o._)("div",c,[(0,o._)("div",u,[(0,o._)("div",f,[_,(0,o._)("label",w,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(s){return N.sCurrPassword=s}),type:"password",name:"inp_currpass",id:"inp_currpass",class:"gui-input",placeholder:"Enter old password"},null,512),[[o.nr,N.sCurrPassword]]),m,b])]),(0,o._)("div",h,[y,(0,o._)("label",g,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=function(s){return N.sNewPassword=s}),type:"password",name:"inp_newpass",id:"inp_newpass",class:"gui-input",placeholder:"Enter new password"},null,512),[[o.nr,N.sNewPassword]]),C,P])]),(0,o._)("div",v,[k,(0,o._)("label",U,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[2]||(e[2]=function(s){return N.sConfPassword=s}),type:"password",name:"inp_confirmpass",id:"inp_confirmpass",class:"gui-input",placeholder:"Retype new password"},null,512),[[o.nr,N.sConfPassword]]),S,A])])]),T])])])])])])],64)}]])}}]);