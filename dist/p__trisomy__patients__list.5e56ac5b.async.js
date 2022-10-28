(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[791],{22360:function(Et,E,t){"use strict";t.r(E);var ut=t(58024),B=t(91894),ht=t(8963),U=t(42020),xt=t(57663),u=t(71577),Dt=t(34792),K=t(48086),Pt=t(71194),W=t(48889),vt=t(9715),h=t(16579),o=t(2824),j=t(20310),x=t(47957),Z=t(86340),F=t(57119),S=t(76570),N=t(1977),H=t(34540),V=t(5966),Y=t(85296),X=t(21349),G=t(30381),$=t.n(G),r=t(67294),b=t(12788),z=t(73727),Q=t(13752),_=t(2915),J=t(24771),D=t.n(J),P=t(36495),a=t(85893),v,k=b.ZP.div(v||(v=(0,j.Z)([`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;

  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    #search-button,
    label[for='filter-form_fullName'] {
      margin-left: 16px;
    }
    .ant-form-item {
      margin-bottom: 0;
    }
    @media (max-width: `,`px) {
      .ant-form-item {
        margin-bottom: 24px !important;
      }
      #search-button,
      label[for='filter-form_fullName'] {
        margin-left: 0;
      }
    }
  }
  @media (max-width: `,`px) {
    flex-direction: column-reverse;
    gap: 24px;
    align-items: end !important;
    .action-cell {
      display: flex;
    }
  }
`])),P.O.PHONE,P.O.PHONE),O=function(c){return c.map(function(n){return{key:n.id,patientId:n.id,name:n.fullName,dateOfBirth:n.dateOfBirth,address:n.address,action:n}})},w=function(){var c=(0,x.Z)(),n=c.run,tt=c.isLoading,g=(0,x.Z)(),at=g.run,Ot=g.isLoading,et=(0,r.useState)([]),f=(0,o.Z)(et,2),nt=f[0],M=f[1],st=(0,r.useState)(0),y=(0,o.Z)(st,2),it=y[0],C=y[1],rt=(0,r.useState)(0),T=(0,o.Z)(rt,2),m=T[0],ot=T[1],lt=(0,r.useState)(null),L=(0,o.Z)(lt,2),R=L[0],I=L[1],dt=h.Z.useForm(),_t=(0,o.Z)(dt,1),l=_t[0],p=(0,r.useCallback)(function(){var s=l.getFieldValue("dateRange"),e=l.getFieldValue("fullName"),i=s[0],d=s[1];n((0,_.sH)({page:m,startDate:i,endDate:d,fullName:e})).then(function(A){M(O(A.results)),C(A.total)})},[m,l]);(0,r.useEffect)(function(){p()},[m,p]);var ct=function(e){W.Z.confirm({title:"X\xE1c nh\u1EADn",icon:(0,a.jsx)(F.Z,{"data-inspector-line":"93","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx"}),content:"B\u1EA1n c\xF3 ch\u1EAFc l\xE0 mu\u1ED1n x\xF3a b\u1EC7nh nh\xE2n ".concat(e.fullName," ch\u1EE9?"),okText:"C\xF3",cancelText:"Kh\xF4ng",onOk:function(){at((0,_.hT)(e.id)).then(function(d){K.ZP.success("X\xF3a b\u1EC7nh nh\xE2n th\xE0nh c\xF4ng!"),console.log(d),p()})}})},mt=[{title:"STT",dataIndex:"key",key:"key",width:60,render:function(e,i,d){return d+1}},{key:"patientId",title:"M\xE3 b\u1EC7nh nh\xE2n",width:150,dataIndex:"patientId"},{title:"H\u1ECD v\xE0 t\xEAn",dataIndex:"name",key:"name"},{title:"\u0110\u1ECBa ch\u1EC9",dataIndex:"address",key:"address"},{key:"dateOfBirth",title:"Ng\xE0y sinh",dataIndex:"dateOfBirth",render:function(e){return $()(e).format("DD-MM-YYYY")}},{title:"H\xE0nh \u0111\u1ED9ng",dataIndex:"action",key:"action",render:function(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{"data-inspector-line":"146","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",className:"action-cell",children:[(0,a.jsx)("span",{"data-inspector-line":"147","data-inspector-column":"14","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",style:{cursor:"pointer",color:"var(--ant-primary-color)"},onClick:function(){I(e.id)},children:"Ph\xE2n t\xEDch"}),(0,a.jsx)(z.rU,{"data-inspector-line":"155","data-inspector-column":"14","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",to:"/trisomy/patients/".concat(e.id,"/edit"),style:{marginLeft:8,cursor:"pointer",color:"var(--ant-primary-color)"},children:"S\u1EEDa"}),(0,a.jsx)("span",{"data-inspector-line":"161","data-inspector-column":"14","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",onClick:function(){return ct(e)},style:{marginLeft:8,color:"red",cursor:"pointer"},children:"X\xF3a"})," "]})})}}];if(R)return(0,a.jsx)(Z.Z,{"data-inspector-line":"175","data-inspector-column":"11","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",patientId:R,setSelectedPatient:I});var pt=function(){l.validateFields().then(function(e){n((0,_.sH)({page:m,startDate:e.dateRange[0],endDate:e.dateRange[1],fullName:e.fullName})).then(function(i){M(O(i.results)),C(i.total)})}).catch(function(e){console.log("Validate Failed:",e)})};return(0,a.jsx)(Y.ZP,{"data-inspector-line":"200","data-inspector-column":"4","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",children:(0,a.jsx)("div",{"data-inspector-line":"201","data-inspector-column":"6","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",className:D().main,children:(0,a.jsx)(X.Z,{"data-inspector-line":"202","data-inspector-column":"8","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",children:(0,a.jsxs)(B.Z,{"data-inspector-line":"203","data-inspector-column":"10","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",className:D().tabsCard,bordered:!1,children:[(0,a.jsx)(h.Z,{"data-inspector-line":"204","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",name:"filter-form",form:l,initialValues:{dateRange:_.Zk,fullName:""},children:(0,a.jsxs)(k,{"data-inspector-line":"212","data-inspector-column":"14","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",children:[(0,a.jsxs)("div",{"data-inspector-line":"213","data-inspector-column":"16","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",id:"filter-wrapper",children:[(0,a.jsx)(H.Z,{"data-inspector-line":"214","data-inspector-column":"18","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",name:"dateRange",label:"L\u1ECDc theo ng\xE0y",placeholder:["T\u1EEB ng\xE0y","\u0110\u1EBFn ng\xE0y"]}),(0,a.jsx)(V.Z,{"data-inspector-line":"219","data-inspector-column":"18","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",name:"fullName",id:"name-input",label:"L\u1ECDc theo t\xEAn",placeholder:"L\u1ECDc theo t\xEAn"}),(0,a.jsx)(u.Z,{"data-inspector-line":"226","data-inspector-column":"18","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",type:"primary",id:"search-button",icon:(0,a.jsx)(S.Z,{"data-inspector-line":"229","data-inspector-column":"26","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx"}),onClick:pt,children:"T\xECm ki\u1EBFm"})]}),(0,a.jsx)(u.Z,{"data-inspector-line":"235","data-inspector-column":"16","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",type:"primary",icon:(0,a.jsx)(N.Z,{"data-inspector-line":"237","data-inspector-column":"24","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx"}),onClick:function(){Q.m8.push("/patients/add")},children:"Th\xEAm thai ph\u1EE5"})]})}),(0,a.jsx)(U.Z,{"data-inspector-line":"246","data-inspector-column":"12","data-inspector-relative-path":"src/pages/trisomy/patients/list/index.tsx",pagination:{position:["bottomRight"],total:it,pageSize:10,onChange:function(e){ot(e-1)}},loading:tt,dataSource:nt,columns:mt})]})})})})};E.default=w}}]);
