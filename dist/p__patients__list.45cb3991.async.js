(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[992],{34540:function(T,u,t){"use strict";var n=t(28991),E=t(81253),f=t(85893),P=t(86190),g=t(67294),x=t(66758),a=t(93117),C=["fieldProps","proFieldProps"],M="dateRange",D=g.forwardRef(function(O,i){var r=O.fieldProps,v=O.proFieldProps,p=(0,E.Z)(O,C),y=(0,g.useContext)(x.Z);return(0,f.jsx)(a.Z,(0,n.Z)({ref:i,fieldProps:(0,n.Z)({getPopupContainer:y.getPopupContainer},r),valueType:M,proFieldProps:v,filedConfig:{valueType:M,lightFilterLabelFormatter:function(e){return(0,P.Z)(e,(r==null?void 0:r.format)||"YYYY-MM-DD")}}},p))});u.Z=D},5966:function(T,u,t){"use strict";var n=t(28991),E=t(81253),f=t(85893),P=t(93117),g=["fieldProps","proFieldProps"],x=["fieldProps","proFieldProps"],a="text",C=function(i){var r=i.fieldProps,v=i.proFieldProps,p=(0,E.Z)(i,g);return(0,f.jsx)(P.Z,(0,n.Z)({valueType:a,fieldProps:r,filedConfig:{valueType:a},proFieldProps:v},p))},M=function(i){var r=i.fieldProps,v=i.proFieldProps,p=(0,E.Z)(i,x);return(0,f.jsx)(P.Z,(0,n.Z)({valueType:"password",fieldProps:r,proFieldProps:v,filedConfig:{valueType:a}},p))},D=C;D.Password=M,D.displayName="ProFormComponent",u.Z=D},40321:function(T){T.exports={main:"main___v2Z5L",headerList:"headerList___Mnegm",stepDescription:"stepDescription___4Ib3o",pageHeader:"pageHeader___B__A4",moreInfo:"moreInfo___3RsSn"}},36495:function(T,u,t){"use strict";t.d(u,{O:function(){return n}});var n={PHONE:576,LARGE_PHONE:768,TABLET:992,LARGE_TABLET:1200,DESKTOP:1520},E={PHONE_UP:"@media only screen and (min-width: ".concat(n.PHONE,"px)"),LARGE_PHONE_UP:"@media only screen and (min-width: ".concat(n.LARGE_PHONE,"px)"),TABLET_UP:"@media only screen and (min-width: ".concat(n.TABLET,"px)"),LARGE_TABLET_UP:"@media only screen and (min-width: ".concat(n.LARGE_TABLET,"px)"),DESKTOP_UP:"@media only screen and (min-width: ".concat(n.DESKTOP,"px)")}},49819:function(T,u,t){"use strict";t.d(u,{CZ:function(){return C},Jr:function(){return M},KA:function(){return D},XQ:function(){return O},JW:function(){return i},vc:function(){return r},yD:function(){return v},Ii:function(){return p},I9:function(){return y}});var n=t(11849),E=t(30381),f=t.n(E),P=t(73727),g=t(13752),x=t(28604),a=t(85893),C=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,n.Z)({title:"STT",dataIndex:"index",key:"index",render:function(d,L,c){return c+1}},e)},M=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,n.Z)({key:"patientId",title:"M\xE3 b\u1EC7nh nh\xE2n",width:150,dataIndex:"patientId",render:function(d){return(0,a.jsx)(P.rU,{"data-inspector-line":"20","data-inspector-column":"6","data-inspector-relative-path":"src/constants/patientDetail.tsx",to:"/patients/".concat(d,"/view"),style:{cursor:"pointer",color:"var(--ant-primary-color)"},children:d})}},e)},D=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,n.Z)({title:"H\u1ECD v\xE0 t\xEAn",dataIndex:"name",key:"name"},e)},O=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,n.Z)({title:"\u0110\u1ECBa ch\u1EC9",dataIndex:"address",key:"address"},e)},i=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,n.Z)({key:"dateOfBirth",title:"Ng\xE0y sinh",dataIndex:"dateOfBirth",render:function(d){return f()(d).format("DD-MM-YYYY")}},e)},r=function(e){var l=e.onClickDelete,d=e.options;return(0,n.Z)({title:"H\xE0nh \u0111\u1ED9ng",dataIndex:"action",key:"action",render:function(c){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{"data-inspector-line":"63","data-inspector-column":"8","data-inspector-relative-path":"src/constants/patientDetail.tsx",className:"action-cell",children:[(0,a.jsx)("span",{"data-inspector-line":"64","data-inspector-column":"10","data-inspector-relative-path":"src/constants/patientDetail.tsx",style:{cursor:"pointer",color:"var(--ant-primary-color)"},onClick:function(){return g.m8.push("/patients/".concat(c.id))},children:"Ph\xE2n t\xEDch"}),(0,a.jsx)(P.rU,{"data-inspector-line":"70","data-inspector-column":"10","data-inspector-relative-path":"src/constants/patientDetail.tsx",to:"/patients/".concat(c.id,"/edit"),style:{marginLeft:8,cursor:"pointer",color:"var(--ant-primary-color)"},children:"S\u1EEDa"}),(0,a.jsx)("span",{"data-inspector-line":"76","data-inspector-column":"10","data-inspector-relative-path":"src/constants/patientDetail.tsx",onClick:function(){return l(c)},style:{marginLeft:8,color:"red",cursor:"pointer"},children:"X\xF3a"})," "]})})}},d)},v=function(e){var l=e.handleViewTest;return{title:"T\xEAn x\xE9t nghi\u1EC7m",dataIndex:"testName",key:"testName",render:function(L,c,m){return(0,a.jsxs)("span",{"data-inspector-line":"95","data-inspector-column":"6","data-inspector-relative-path":"src/constants/patientDetail.tsx",style:{cursor:"pointer",color:"#1890ff"},onClick:function(){return l(c.action)},children:[(0,x.jw)(L)," "]})}}},p={title:"Ng\xE0y x\xE9t nghi\u1EC7m",dataIndex:"testDate",key:"testDate",sorter:function(e,l){return Number(e.testDate)-Number(l.testDate)},render:function(e){return f()(Number(e)).format("DD-MM-YYYY")}},y=function(e){var l=e.handleEditTest,d=e.handleDeleteTest;return{title:"H\xE0nh \u0111\u1ED9ng",dataIndex:"action",key:"action",render:function(c,m){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{"data-inspector-line":"120","data-inspector-column":"8","data-inspector-relative-path":"src/constants/patientDetail.tsx",style:{marginLeft:8,cursor:"pointer",color:"var(--ant-primary-color)"},onClick:function(){return l(m.action)},children:"S\u1EEDa"}),(0,a.jsx)("span",{"data-inspector-line":"126","data-inspector-column":"8","data-inspector-relative-path":"src/constants/patientDetail.tsx",onClick:function(){return d(c)},style:{marginLeft:8,color:"red",cursor:"pointer"},children:"X\xF3a"})]})}}}},78418:function(T,u,t){"use strict";t.r(u);var n=t(58024),E=t(91894),f=t(8963),P=t(42020),g=t(57663),x=t(71577),a=t(34792),C=t(48086),M=t(71194),D=t(48889),O=t(9715),i=t(16579),r=t(2824),v=t(20310),p=t(47957),y=t(57119),o=t(76570),e=t(1977),l=t(34540),d=t(5966),L=t(4771),c=t(21349),m=t(67294),U=t(12788),$=t(13752),K=t(74622),z=t(40321),S=t.n(z),b=t(36495),A=t(49819),s=t(85893),H,w=U.ZP.div(H||(H=(0,v.Z)([`
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
`])),b.O.PHONE,b.O.PHONE),Y=function(W){return W.map(function(h){return{key:h.id,patientId:h.id,name:h.fullName,dateOfBirth:h.dateOfBirth,address:h.address,action:h}})},q=function(){var W=(0,p.Z)(),h=W.run,et=W.isLoading,G=(0,p.Z)(),nt=G.run,mt=G.isLoading,at=(0,m.useState)([]),V=(0,r.Z)(at,2),rt=V[0],X=V[1],st=(0,m.useState)(0),J=(0,r.Z)(st,2),it=J[0],Q=J[1],ot=(0,m.useState)(0),k=(0,r.Z)(ot,2),F=k[0],lt=k[1],dt=i.Z.useForm(),_t=(0,r.Z)(dt,1),I=_t[0],Z=(0,m.useCallback)(function(){var R=I.getFieldValue("dateRange"),_=I.getFieldValue("fullName"),B=R[0],j=R[1];h((0,K.sH)({page:F,startDate:B,endDate:j,fullName:_})).then(function(N){console.log(N),X(Y(N.results)),Q(N.total)})},[F,I]);(0,m.useEffect)(function(){Z()},[F,Z]);var ct=function(_){D.Z.confirm({title:"X\xE1c nh\u1EADn",icon:(0,s.jsx)(y.Z,{"data-inspector-line":"101","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/index.tsx"}),content:"B\u1EA1n c\xF3 ch\u1EAFc l\xE0 mu\u1ED1n x\xF3a b\u1EC7nh nh\xE2n ".concat(_.fullName," ch\u1EE9?"),okText:"C\xF3",cancelText:"Kh\xF4ng",onOk:function(){nt((0,K.hT)(_.id)).then(function(j){C.ZP.success("X\xF3a b\u1EC7nh nh\xE2n th\xE0nh c\xF4ng!"),console.log(j),Z()})}})},ut=[(0,A.CZ)({width:60}),(0,A.Jr)({width:150}),(0,A.KA)(),(0,A.XQ)(),(0,A.JW)(),(0,A.vc)({onClickDelete:ct})],pt=function(){I.validateFields().then(function(_){h((0,K.sH)({page:F,startDate:_.dateRange[0],endDate:_.dateRange[1],fullName:_.fullName})).then(function(B){X(Y(B.results)),Q(B.total)})}).catch(function(_){console.log("Validate Failed:",_)})};return(0,s.jsx)(L.ZP,{"data-inspector-line":"150","data-inspector-column":"4","data-inspector-relative-path":"src/pages/patients/list/index.tsx",children:(0,s.jsx)("div",{"data-inspector-line":"151","data-inspector-column":"6","data-inspector-relative-path":"src/pages/patients/list/index.tsx",className:S().main,children:(0,s.jsx)(c.Z,{"data-inspector-line":"152","data-inspector-column":"8","data-inspector-relative-path":"src/pages/patients/list/index.tsx",children:(0,s.jsxs)(E.Z,{"data-inspector-line":"153","data-inspector-column":"10","data-inspector-relative-path":"src/pages/patients/list/index.tsx",className:S().tabsCard,bordered:!1,children:[(0,s.jsx)(i.Z,{"data-inspector-line":"154","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/index.tsx",name:"filter-form",form:I,initialValues:{dateRange:K.Zk,fullName:""},children:(0,s.jsxs)(w,{"data-inspector-line":"162","data-inspector-column":"14","data-inspector-relative-path":"src/pages/patients/list/index.tsx",children:[(0,s.jsxs)("div",{"data-inspector-line":"163","data-inspector-column":"16","data-inspector-relative-path":"src/pages/patients/list/index.tsx",id:"filter-wrapper",children:[(0,s.jsx)(l.Z,{"data-inspector-line":"164","data-inspector-column":"18","data-inspector-relative-path":"src/pages/patients/list/index.tsx",name:"dateRange",label:"L\u1ECDc theo ng\xE0y",placeholder:["T\u1EEB ng\xE0y","\u0110\u1EBFn ng\xE0y"]}),(0,s.jsx)(d.Z,{"data-inspector-line":"169","data-inspector-column":"18","data-inspector-relative-path":"src/pages/patients/list/index.tsx",name:"fullName",id:"name-input",label:"L\u1ECDc theo t\xEAn",placeholder:"L\u1ECDc theo t\xEAn"}),(0,s.jsx)(x.Z,{"data-inspector-line":"176","data-inspector-column":"18","data-inspector-relative-path":"src/pages/patients/list/index.tsx",type:"primary",id:"search-button",icon:(0,s.jsx)(o.Z,{"data-inspector-line":"179","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/index.tsx"}),onClick:pt,children:"T\xECm ki\u1EBFm"})]}),(0,s.jsx)(x.Z,{"data-inspector-line":"185","data-inspector-column":"16","data-inspector-relative-path":"src/pages/patients/list/index.tsx",type:"primary",icon:(0,s.jsx)(e.Z,{"data-inspector-line":"187","data-inspector-column":"24","data-inspector-relative-path":"src/pages/patients/list/index.tsx"}),onClick:function(){$.m8.push("/patients/add")},children:"Th\xEAm thai ph\u1EE5"})]})}),(0,s.jsx)(P.Z,{"data-inspector-line":"196","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/index.tsx",pagination:{position:["bottomRight"],total:it,pageSize:10,onChange:function(_){lt(_-1)}},loading:et,dataSource:rt,columns:ut})]})})})})};u.default=q}}]);
