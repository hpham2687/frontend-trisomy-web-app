(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[340],{24771:function(f){f.exports={main:"main___2UGJ5",headerList:"headerList___1FE7v",stepDescription:"stepDescription___MilZN",pageHeader:"pageHeader___1SWxU",moreInfo:"moreInfo___374y8"}},36495:function(f,P,e){"use strict";e.d(P,{O:function(){return i}});var i={PHONE:576,LARGE_PHONE:768,TABLET:992,LARGE_TABLET:1200,DESKTOP:1520},v={PHONE_UP:"@media only screen and (min-width: ".concat(i.PHONE,"px)"),LARGE_PHONE_UP:"@media only screen and (min-width: ".concat(i.LARGE_PHONE,"px)"),TABLET_UP:"@media only screen and (min-width: ".concat(i.TABLET,"px)"),LARGE_TABLET_UP:"@media only screen and (min-width: ".concat(i.LARGE_TABLET,"px)"),DESKTOP_UP:"@media only screen and (min-width: ".concat(i.DESKTOP,"px)")}},86340:function(f,P,e){"use strict";var i=e(20310),v=e(58024),y=e(91894),h=e(8963),K=e(42020),W=e(9715),k=e(16579),$=e(13062),A=e(71230),J=e(89032),L=e(15746),D=e(39428),b=e(3182),N=e(57663),O=e(71577),F=e(98858),c=e(4914),S=e(34792),d=e(48086),p=e(71194),g=e(48889),s=e(93224),E=e(11849),T=e(2824),M=e(32059),z=e(95300),Y=e(7277),C=e(63185),I=e(9676),X=e(57117),R=e(28604),w=e(47957),q=e(2915),pt=e(57119),mt=e(49101),tt=e(25240),ut=e(11075),et=e(952),at=e(90672),Et=e(64317),ht=e(64335),Dt=e(85296),Pt=e(21349),vt=e(30381),st=e.n(vt),B=e(67294),yt=e(13752),gt=e(24771),Z=e.n(gt),xt=e(12788),Ot=e(36495),t=e(85893),nt,Tt=["blood_test","hemoglobin_test","serum_iron_test"],Ht=I.Z.Group,Mt=function(u){return u.map(function(_){return{key:_.id,testId:_.id,testName:_.testName,createdDate:st()(Number(_.testDate)).format("DD-MM-YYYY"),action:_}})},ft=(0,t.jsxs)("div",{"data-inspector-line":"48","data-inspector-column":"2","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",className:Z().moreInfo,children:[(0,t.jsx)(Y.Z,{"data-inspector-line":"49","data-inspector-column":"4","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",title:"Ng\xE0y \u0111\u0103ng k\xFD kh\xE1m",value:"NaN"}),(0,t.jsx)(Y.Z,{"data-inspector-line":"50","data-inspector-column":"4","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",style:{marginLeft:8},title:"Ng\xE0y kh\xE1m g\u1EA7n nh\u1EA5t",value:"NaN"})]}),At=[{key:"tab1",tab:"X\xE9t nghi\u1EC7m"},{key:"tab2",tab:"Thai nhi"}],Lt=function(u,_){return u.find(function(j){return j.testName===_}).action},Ct=function(u){var _,j=(_={},(0,M.Z)(_,R.XH.BLOOD_TEST,"INPUT_BLOOD_TEST_RESULT"),(0,M.Z)(_,R.XH.SERUM_IRON_TEST,"INPUT_SERUM_IRON_TEST_RESULT"),(0,M.Z)(_,R.XH.HEMOGLOBIN_TEST,"INPUT_HEMOGLOBIN_TEST_RESULT"),_);return j[u]};function It(U){var u=U.patientId,_=U.setSelectedPatient,j=(0,B.useState)({operationKey:"tab1",tabActiveKey:"detail"}),it=(0,T.Z)(j,2),rt=it[0],Bt=it[1],Zt=(0,B.useState)(null),ot=(0,T.Z)(Zt,2),m=ot[0],lt=ot[1],_t=(0,w.Z)(),Ut=_t.run,ct=_t.isLoading,dt=(0,w.Z)(),jt=dt.run,Kt=dt.isLoading,G=(0,yt.I0)(),V=(0,B.useRef)(),Wt=function(a){Bt((0,E.Z)((0,E.Z)({},rt),{},{operationKey:a}))},Q=(0,B.useCallback)(function(){Ut((0,q.zn)(u)).then(function(l){console.log(l);var a=l.blood_test,n=l.hemoglobin_test,r=l.serum_iron_test,x=(0,s.Z)(l,Tt),o=[];a&&o.push(a),n&&o.push(n),r&&o.push(l.serum_iron_test),lt((0,E.Z)((0,E.Z)({},x),{},{tests:Mt(o)}))})},[u]);(0,B.useEffect)(function(){u&&Q()},[u]);var bt=[{title:"STT",dataIndex:"index",key:"index",render:function(a,n,r){return r+1}},{title:"T\xEAn x\xE9t nghi\u1EC7m",dataIndex:"testName",key:"testName",render:function(a,n,r){return(0,R.jw)(a)}},{title:"Ng\xE0y th\xEAm x\xE9t nghi\u1EC7m",dataIndex:"createdDate",key:"name"},{title:"H\xE0nh \u0111\u1ED9ng",dataIndex:"action",key:"action",render:function(a){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{"data-inspector-line":"150","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",style:{marginLeft:8,cursor:"pointer",color:"var(--ant-primary-color)"},onClick:function(){var r=Lt(m.tests,a.testName);console.log(r),G({type:"modal/showModal",payload:{modalKey:Ct(a.testName),customProps:{patientDetail:m,editingData:r,getPatientDetail:function(){Q()}}}})},children:"S\u1EEDa"}),(0,t.jsx)("span",{"data-inspector-line":"173","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",onClick:function(){return Nt(a)},style:{marginLeft:8,color:"red",cursor:"pointer"},children:"X\xF3a"})]})}}],Nt=function(a){g.Z.confirm({title:"X\xE1c nh\u1EADn",icon:(0,t.jsx)(pt.Z,{"data-inspector-line":"188","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx"}),content:"B\u1EA1n c\xF3 ch\u1EAFc l\xE0 mu\u1ED1n x\xF3a k\u1EBFt qu\u1EA3 ".concat((0,R.jw)(a.testName)," ng\xE0y ch\u1EE9?"),okText:"C\xF3",cancelText:"Kh\xF4ng",onOk:function(){var r=a.testName;jt((0,q.dG)({patientId:u,testName:r})).then(function(){d.ZP.success("X\xF3a k\u1EBFt qu\u1EA3 ".concat(r," th\xE0nh c\xF4ng!")),lt(function(x){var o,H=x.tests;return((o=H)===null||o===void 0?void 0:o.length)>0&&(H=H.filter(function(Gt){return Gt.testName!==r})),(0,E.Z)((0,E.Z)({},x),{},{tests:H})})})}})},Ft=(0,t.jsx)(ht.Z.Consumer,{"data-inspector-line":"213","data-inspector-column":"4","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",children:function(a){var n=a.isMobile;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.Z,{"data-inspector-line":"216","data-inspector-column":"10","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",className:Z().headerList,size:"small",column:n?1:2,children:[(0,t.jsx)(c.Z.Item,{"data-inspector-line":"218","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"\u0110\u1ECBa ch\u1EC9",children:m.address}),(0,t.jsx)(c.Z.Item,{"data-inspector-line":"219","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",children:m.phone||"NaN"}),(0,t.jsx)(c.Z.Item,{"data-inspector-line":"222","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"Ng\xE0y sinh",children:st()(m.dateOfBirth).format("YYYY-MM-DD")})]})})}}),St={tab1:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Rt,{"data-inspector-line":"236","data-inspector-column":"8","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",children:[(0,t.jsxs)(O.Z,{"data-inspector-line":"237","data-inspector-column":"10","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",className:"ai-diagnosis-button",type:"primary",style:{marginBottom:24},onClick:function(){G({type:"modal/showModal",payload:{modalKey:X.$.ADD_TEST_RESULT,customProps:{patientDetail:m,getPatientDetail:Q}}})},children:[(0,t.jsx)(mt.Z,{"data-inspector-line":"254","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx"}),"Th\xEAm x\xE9t nghi\u1EC7m"]}),(0,t.jsxs)(O.Z,{"data-inspector-line":"257","data-inspector-column":"10","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",className:"ai-diagnosis-button",type:"primary",style:{marginBottom:24,marginLeft:8},onClick:function(){G({type:"modal/showModal",payload:{modalKey:X.$.GENERAL_INFO,customProps:{footer:null,body:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(et.ZP,{"data-inspector-line":"270","data-inspector-column":"24","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",name:"validate_other",initialValues:{doctor_selection:"trisomy21"},onValuesChange:function(n,r){console.log(r)},formRef:V,onFinish:function(){var a=(0,b.Z)((0,D.Z)().mark(function n(r){return(0,D.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",console.log(r));case 1:case"end":return o.stop()}},n)}));return function(n){return a.apply(this,arguments)}}(),submitter:{render:function(){}},children:[(0,t.jsxs)(c.Z,{"data-inspector-line":"282","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",layout:"horizontal",style:{marginBottom:16},children:[(0,t.jsx)(c.Z.Item,{"data-inspector-line":"283","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"trisomy 21",children:"0.32"}),(0,t.jsx)(c.Z.Item,{"data-inspector-line":"284","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"trisomy 18",children:"0.44"}),(0,t.jsx)(c.Z.Item,{"data-inspector-line":"285","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"trisomy 13",children:"0.2"})]}),(0,t.jsxs)("div",{"data-inspector-line":"287","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",style:{marginBottom:16},children:[(0,t.jsx)("p",{"data-inspector-line":"288","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",children:"K\u1EBFt lu\u1EADn c\u1EE7a b\xE1c s\u0129"}),(0,t.jsx)(k.Z.Item,{"data-inspector-line":"289","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",name:"diseaseName",children:(0,t.jsx)(I.Z.Group,{"data-inspector-line":"290","data-inspector-column":"30","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",children:(0,t.jsxs)(A.Z,{"data-inspector-line":"291","data-inspector-column":"32","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",children:[(0,t.jsx)(L.Z,{"data-inspector-line":"292","data-inspector-column":"34","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(I.Z,{"data-inspector-line":"293","data-inspector-column":"36","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",value:"trisomy21",style:{lineHeight:"32px"},children:"Trisomy 21"})}),(0,t.jsx)(L.Z,{"data-inspector-line":"297","data-inspector-column":"34","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(I.Z,{"data-inspector-line":"298","data-inspector-column":"36","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",value:"trisomy18",style:{lineHeight:"32px"},children:"Trisomy 18"})}),(0,t.jsx)(L.Z,{"data-inspector-line":"302","data-inspector-column":"34","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(I.Z,{"data-inspector-line":"303","data-inspector-column":"36","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",value:"trisomy13",style:{lineHeight:"32px"},children:"Trisomy 13"})})]})})})]}),(0,t.jsx)(at.Z,{"data-inspector-line":"311","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"Ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9",name:"doctorComment",placeholder:"Nh\u1EADp ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9"}),(0,t.jsx)(O.Z,{"data-inspector-line":"316","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",type:"primary",onClick:function(){var n;(n=V.current)===null||n===void 0||n.validateFields().then(function(r){console.log(r)})},children:"L\u01B0u k\u1EBFt qu\u1EA3"})]})})}}})},children:[(0,t.jsx)(tt.Z,{"data-inspector-line":"334","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx"}),"AI ch\u1EA9n \u0111o\xE1n Thalassemia"]}),(0,t.jsxs)(O.Z,{"data-inspector-line":"337","data-inspector-column":"10","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",className:"ai-diagnosis-button",type:"primary",style:{marginBottom:24,marginLeft:8},onClick:function(){G({type:"modal/showModal",payload:{modalKey:X.$.GENERAL_INFO,customProps:{body:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(et.ZP,{"data-inspector-line":"349","data-inspector-column":"24","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",readonly:!1,name:"validate_other",initialValues:{doctor_selection:"trisomy21"},formRef:V,onFinish:function(){var a=(0,b.Z)((0,D.Z)().mark(function n(r){return(0,D.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",console.log(r));case 1:case"end":return o.stop()}},n)}));return function(n){return a.apply(this,arguments)}}(),submitter:{render:function(){t.Fragment}},children:[(0,t.jsxs)(c.Z,{"data-inspector-line":"366","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",layout:"vertical",style:{marginBottom:16},children:[(0,t.jsx)(c.Z.Item,{"data-inspector-line":"367","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"trisomy 21",children:"0.32"}),(0,t.jsx)(c.Z.Item,{"data-inspector-line":"368","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"trisomy 18",children:"0.44"}),(0,t.jsx)(c.Z.Item,{"data-inspector-line":"369","data-inspector-column":"28","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"trisomy 13",children:"0.2"})]}),(0,t.jsx)(Et.Z,{"data-inspector-line":"371","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"K\u1EBFt lu\u1EADn c\u1EE7a b\xE1c s\u0129",name:"doctor_selection",options:[{label:"Trisomy 21",value:"trisomy21"},{label:"Trisomy 18",value:"trisomy18"},{label:"Trisomy 13",value:"trisomy13"}],placeholder:"Nh\u1EADp ngh\u1EC1 nghi\u1EC7p"}),(0,t.jsx)(at.Z,{"data-inspector-line":"393","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",label:"Ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9",name:"invoiceType",placeholder:"Nh\u1EADp ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9"})]})})}}})},children:[(0,t.jsx)(tt.Z,{"data-inspector-line":"406","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx"}),"AI ch\u1EA9n \u0111o\xE1n Trisomy"]})]}),(0,t.jsx)(K.Z,{"data-inspector-line":"410","data-inspector-column":"8","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",loading:ct||Kt,dataSource:(m==null?void 0:m.tests)||[],columns:bt,pagination:{position:["bottomRight"]}})]}),tab2:(0,t.jsx)(t.Fragment,{children:"sdf"}),tab3:(0,t.jsx)(t.Fragment,{children:"sdf"})};return ct||!m?(0,t.jsx)(t.Fragment,{children:"Loading..."}):(0,t.jsx)(Dt.ZP,{"data-inspector-line":"433","data-inspector-column":"4","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",title:"B\u1EC7nh nh\xE2n \uFF1A".concat(m==null?void 0:m.fullName),className:Z().pageHeader,content:Ft,extraContent:ft,extra:[(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{"data-inspector-line":"440","data-inspector-column":"10","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",style:{cursor:"pointer"},onClick:function(){_(null)},children:[(0,t.jsx)(ut.Z,{"data-inspector-line":"446","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",style:{fontSize:36}})," Quay l\u1EA1i"]})})],children:(0,t.jsx)("div",{"data-inspector-line":"451","data-inspector-column":"6","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",className:Z().main,children:(0,t.jsx)(Pt.Z,{"data-inspector-line":"452","data-inspector-column":"8","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",children:(0,t.jsx)(y.Z,{"data-inspector-line":"453","data-inspector-column":"10","data-inspector-relative-path":"src/pages/trisomy/patients/list/PatientDetail.tsx",className:Z().tabsCard,bordered:!1,tabList:At,onTabChange:Wt,children:St[rt.operationKey]})})})})}P.Z=It;var Rt=xt.ZP.div(nt||(nt=(0,i.Z)([`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: `,`px) {
    .ai-diagnosis-button {
      margin-left: 0 !important;
    }
  }
`])),Ot.O.PHONE)},2915:function(f,P,e){"use strict";e.d(P,{Zk:function(){return A},sH:function(){return L},zn:function(){return b},dG:function(){return O},hT:function(){return c}});var i=e(39428),v=e(3182),y=e(28604),h=e(42174),K=e(70594),W=e(63305),k=e(30381),$=e.n(k),A=[(0,K.L)().start,(0,K.L)().end],J=10;function L(d){return D.apply(this,arguments)}function D(){return D=(0,v.Z)((0,i.Z)().mark(function d(p){var g,s,E,T,M,z;return(0,i.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return g=p.page,s=p.startDate,E=s===void 0?A[0]:s,T=p.endDate,M=T===void 0?A[1]:T,z=p.fullName,C.abrupt("return",(0,h.Z)("/patients",{headers:{Authorization:"Bearer ".concat(W.Z.get().accessToken)},params:{page:g,fullName:z,limit:J,startDate:$()(E).startOf("day").toISOString(),endDate:$()(M).endOf("day").toISOString()},method:"GET"}));case 2:case"end":return C.stop()}},d)})),D.apply(this,arguments)}function b(d){return N.apply(this,arguments)}function N(){return N=(0,v.Z)((0,i.Z)().mark(function d(p){return(0,i.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,h.Z)("/patients/"+p));case 1:case"end":return s.stop()}},d)})),N.apply(this,arguments)}function O(d){return F.apply(this,arguments)}function F(){return F=(0,v.Z)((0,i.Z)().mark(function d(p){return(0,i.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,h.Z)((0,y.T$)(p.testName,p.patientId),{data:p,method:"DELETE",headers:{Authorization:"Bearer ".concat(W.Z.get().accessToken)}}));case 1:case"end":return s.stop()}},d)})),F.apply(this,arguments)}function c(d){return S.apply(this,arguments)}function S(){return S=(0,v.Z)((0,i.Z)().mark(function d(p){return(0,i.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,h.Z)("/patients/"+p,{method:"DELETE",headers:{Authorization:"Bearer ".concat(W.Z.get().accessToken)}}));case 1:case"end":return s.stop()}},d)})),S.apply(this,arguments)}},70594:function(f,P,e){"use strict";e.d(P,{L:function(){return i}});var i=function(){var y=new Date;y.setDate(-30),y.setUTCHours(0,0,0,0);var h=new Date;return h.setUTCHours(23,59,59,999),{start:y.toISOString(),end:h.toISOString()}}}}]);
