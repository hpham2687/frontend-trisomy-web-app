(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[93],{57719:function(){},7340:function(kt,dt,r){"use strict";r.d(dt,{Z:function(){return Bt}});var qt=r(13062),ut=r(71230),_t=r(89032),U=r(15746),tn=r(38663),nn=r(57719),en=r(13254),an=r(6999),rn=r(14781),on=r(20228),W=r(85061),E=r(22122),x=r(96156),X=r(28481),ht=r(90484),pt=r(94184),F=r.n(pt),n=r(67294),$=r(53124),gt=r(88258),vt=r(92820),xt=r(25378),Ct=r(23492),ft=r(11382),w=r(24308),Et=r(21584),yt=r(96159),k=function(e,a){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(c[t[o]]=e[t[o]]);return c},Tt=function(a){var c=a.prefixCls,t=a.className,o=a.avatar,s=a.title,g=a.description,L=k(a,["prefixCls","className","avatar","title","description"]),j=(0,n.useContext)($.E_),Z=j.getPrefixCls,h=Z("list",c),C=F()("".concat(h,"-item-meta"),t),S=n.createElement("div",{className:"".concat(h,"-item-meta-content")},s&&n.createElement("h4",{className:"".concat(h,"-item-meta-title")},s),g&&n.createElement("div",{className:"".concat(h,"-item-meta-description")},g));return n.createElement("div",(0,E.Z)({},L,{className:C}),o&&n.createElement("div",{className:"".concat(h,"-item-meta-avatar")},o),(s||g)&&S)},Nt=function(a,c){var t=a.prefixCls,o=a.children,s=a.actions,g=a.extra,L=a.className,j=a.colStyle,Z=k(a,["prefixCls","children","actions","extra","className","colStyle"]),h=(0,n.useContext)(R),C=h.grid,S=h.itemLayout,d=(0,n.useContext)($.E_),I=d.getPrefixCls,P=function(){var T;return n.Children.forEach(o,function(O){typeof O=="string"&&(T=!0)}),T&&n.Children.count(o)>1},V=function(){return S==="vertical"?!!g:!P()},v=I("list",t),H=s&&s.length>0&&n.createElement("ul",{className:"".concat(v,"-item-action"),key:"actions"},s.map(function(y,T){return n.createElement("li",{key:"".concat(v,"-item-action-").concat(T)},y,T!==s.length-1&&n.createElement("em",{className:"".concat(v,"-item-action-split")}))})),A=C?"div":"li",K=n.createElement(A,(0,E.Z)({},Z,C?{}:{ref:c},{className:F()("".concat(v,"-item"),(0,x.Z)({},"".concat(v,"-item-no-flex"),!V()),L)}),S==="vertical"&&g?[n.createElement("div",{className:"".concat(v,"-item-main"),key:"content"},o,H),n.createElement("div",{className:"".concat(v,"-item-extra"),key:"extra"},g)]:[o,H,(0,yt.Tm)(g,{key:"extra"})]);return C?n.createElement(Et.Z,{ref:c,flex:1,style:j},K):K},q=(0,n.forwardRef)(Nt);q.Meta=Tt;var St=q,Dt=function(e,a){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(c[t[o]]=e[t[o]]);return c},R=n.createContext({}),sn=R.Consumer;function _(e){var a,c=e.pagination,t=c===void 0?!1:c,o=e.prefixCls,s=e.bordered,g=s===void 0?!1:s,L=e.split,j=L===void 0?!0:L,Z=e.className,h=e.children,C=e.itemLayout,S=e.loadMore,d=e.grid,I=e.dataSource,P=I===void 0?[]:I,V=e.size,v=e.header,H=e.footer,A=e.loading,K=A===void 0?!1:A,y=e.rowKey,T=e.renderItem,O=e.locale,jt=Dt(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),et=t&&(0,ht.Z)(t)==="object"?t:{},Zt=n.useState(et.defaultCurrent||1),at=(0,X.Z)(Zt,2),It=at[0],At=at[1],Kt=n.useState(et.defaultPageSize||10),rt=(0,X.Z)(Kt,2),Ot=rt[0],zt=rt[1],G=n.useContext($.E_),Mt=G.getPrefixCls,Yt=G.renderEmpty,Ft=G.direction,$t={current:1,total:0},it={},ot=function(m){return function(N,f){At(N),zt(f),t&&t[m]&&t[m](N,f)}},Rt=ot("onChange"),Vt=ot("onShowSizeChange"),Gt=function(m,N){if(!T)return null;var f;return typeof y=="function"?f=y(m):y?f=m[y]:f=m.key,f||(f="list-item-".concat(N)),it[N]=f,T(m,N)},Qt=function(){return!!(S||t||H)},bt=function(m,N){return n.createElement("div",{className:"".concat(m,"-empty-text")},O&&O.emptyText||N("List"))},u=Mt("list",o),B=K;typeof B=="boolean"&&(B={spinning:B});var Q=B&&B.spinning,z="";switch(V){case"large":z="lg";break;case"small":z="sm";break;default:break}var Jt=F()(u,(a={},(0,x.Z)(a,"".concat(u,"-vertical"),C==="vertical"),(0,x.Z)(a,"".concat(u,"-").concat(z),z),(0,x.Z)(a,"".concat(u,"-split"),j),(0,x.Z)(a,"".concat(u,"-bordered"),g),(0,x.Z)(a,"".concat(u,"-loading"),Q),(0,x.Z)(a,"".concat(u,"-grid"),!!d),(0,x.Z)(a,"".concat(u,"-something-after-last-item"),Qt()),(0,x.Z)(a,"".concat(u,"-rtl"),Ft==="rtl"),a),Z),p=(0,E.Z)((0,E.Z)((0,E.Z)({},$t),{total:P.length,current:It,pageSize:Ot}),t||{}),st=Math.ceil(p.total/p.pageSize);p.current>st&&(p.current=st);var ct=t?n.createElement("div",{className:"".concat(u,"-pagination")},n.createElement(Ct.Z,(0,E.Z)({},p,{onChange:Rt,onShowSizeChange:Vt}))):null,b=(0,W.Z)(P);t&&P.length>(p.current-1)*p.pageSize&&(b=(0,W.Z)(P).splice((p.current-1)*p.pageSize,p.pageSize));var Ut=Object.keys(d||{}).some(function(l){return["xs","sm","md","lg","xl","xxl"].includes(l)}),lt=(0,xt.Z)(Ut),M=n.useMemo(function(){for(var l=0;l<w.c4.length;l+=1){var m=w.c4[l];if(lt[m])return m}},[lt]),Wt=n.useMemo(function(){if(!!d){var l=M&&d[M]?d[M]:d.column;if(l)return{width:"".concat(100/l,"%"),maxWidth:"".concat(100/l,"%")}}},[d==null?void 0:d.column,M]),J=Q&&n.createElement("div",{style:{minHeight:53}});if(b.length>0){var mt=b.map(function(l,m){return Gt(l,m)}),Xt=n.Children.map(mt,function(l,m){return n.createElement("div",{key:it[m],style:Wt},l)});J=d?n.createElement(vt.Z,{gutter:d.gutter},Xt):n.createElement("ul",{className:"".concat(u,"-items")},mt)}else!h&&!Q&&(J=bt(u,Yt||gt.Z));var Y=p.position||"bottom",wt=n.useMemo(function(){return{grid:d,itemLayout:C}},[JSON.stringify(d),C]);return n.createElement(R.Provider,{value:wt},n.createElement("div",(0,E.Z)({className:Jt},jt),(Y==="top"||Y==="both")&&ct,v&&n.createElement("div",{className:"".concat(u,"-header")},v),n.createElement(ft.Z,(0,E.Z)({},B),J,h),H&&n.createElement("div",{className:"".concat(u,"-footer")},H),S||(Y==="bottom"||Y==="both")&&ct))}_.Item=St;var D=_,cn=r(94233),tt=r(51890),nt=r(89366),i=r(85893),Lt=[{name:"PGS.TS. Tr\u1EA7n Danh C\u01B0\u1EDDng	",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"ThS. Ng\xF4 To\xE0n Anh",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"\u0110DCKI. \u0110\u1EB7ng Ph\u01B0\u01A1ng Th\xFAy",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"Ths. L\xEA Ph\u1EA1m S\u1EF9 C\u01B0\u1EDDng",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"NHS. Ph\u1EA1m Thu H\u01B0\u01A1ng",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"CN. Nguy\u1EC5n Minh Trang",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"CN V\u0169 Th\xF9y D\u01B0\u01A1ng",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"CN. Nguy\u1EC5n Th\u1ECB Kh\xE1nh",department:"B\u1EC7nh vi\u1EC7n Ph\u1EE5 s\u1EA3n Trung \u01B0\u01A1ng"},{name:"PGS.TS. Nguy\u1EC5n Th\u1ECB Trang",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"ThS. BSNT. L\xEA Th\u1ECB Minh Ph\u01B0\u01A1ng",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y d\u01B0\u1EE3c - \u0110HQGHN"},{name:"ThS.BS. Nguy\u1EC5n Th\u1ECB H\u1ED3ng Th\u1ECBnh",department:"B\u1EC7nh vi\u1EC7n S\u1EA3n nhi B\u1EAFc Ninh"},{name:"ThS.BS. \u0110inh Th\u1ECB Ng\u1ECDc Mai",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"BS. Nguy\u1EC5n Ph\u01B0\u01A1ng Ng\u1ECDc",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"BS. T\xF4 Th\u1ECB Thu H\xE0",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"BS. \u0110o\xE0n Vi\u1EC7t H\xE0",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"Nguy\u1EC5n Th\u1ECB Hu\u1EC7",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"\u0110\u1ED7 \u0110\u1EE9c Huy",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"BS. L\xEA Th\u1ECB Quy\xEAn",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"BS. \u0110\xE0o Th\u1ECB Huy\u1EC1n Trang",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"BS. Nguy\u1EC5n Ng\u1ECDc S\u01A1n",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"BS. V\u0169 Thu H\u01B0\u01A1ng",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"Nguy\u1EC5n Qu\u1ED1c Anh",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"Nguy\u1EC5n Th\xFAy H\xE0",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"},{name:"Nguy\u1EC5n Minh Anh",department:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"}],Pt=[{name:"Ph\u1EA1m Th\xE1i H\u01B0ng",department:"Sinh vi\xEAn ch\u01B0\u01A1ng tr\xECnh ti\xEAn ti\u1EBFn C\xF4ng ngh\u1EC7 th\xF4ng tin, Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i"},{name:"B\xF9i Trung Ki\xEAn",department:"Sinh vi\xEAn ch\u01B0\u01A1ng tr\xECnh qu\u1ED1c t\u1EBF C\xF4ng ngh\u1EC7 th\xF4ng tin, Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i"},{name:"Ph\u1EA1m Xu\xE2n Tr\u01B0\u1EDDng",department:"Sinh vi\xEAn l\u1EDBp t\xE0i n\u0103ng C\xF4ng ngh\u1EC7 th\xF4ng tin, Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i "},{name:"Nguy\u1EC5n Duy Long",department:"Sinh vi\xEAn l\u1EDBp t\xE0i n\u0103ng C\xF4ng ngh\u1EC7 th\xF4ng tin, Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i "},{name:"V\u0169 \u0110\u0103ng Qu\xE2n",department:"K\u1EF9 s\u01B0 K\u1EF9 thu\u1EADt m\xE1y t\xEDnh, Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i "},{name:"Nguy\u1EC5n V\u0103n Hi\u1EBFu",department:"K\u1EF9 s\u01B0 K\u1EF9 thu\u1EADt m\xE1y t\xEDnh, Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i"},{name:"\u0110\xE0o Quang Trung",department:"K\u1EF9 s\u01B0 K\u1EF9 thu\u1EADt m\xE1y t\xEDnh, Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i"}],Ht=function(a){var c=a.orientation,t=c==="vertical";return(0,i.jsxs)(ut.Z,{"data-inspector-line":"73","data-inspector-column":"4","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",gutter:[16,16],children:[(0,i.jsxs)(U.Z,{"data-inspector-line":"74","data-inspector-column":"6","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",xs:24,md:t?24:12,children:[" ",(0,i.jsx)("h2",{"data-inspector-line":"76","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"\u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i"}),(0,i.jsx)("p",{"data-inspector-line":"77","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"PGS. TS. Nguy\u1EC5n Th\u1ECB Trang"}),(0,i.jsx)("p",{"data-inspector-line":"78","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:" Gi\u1EA3ng vi\xEAn cao c\u1EA5p Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i "}),(0,i.jsx)("p",{"data-inspector-line":"79","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:" S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: 0338788736"}),(0,i.jsx)("p",{"data-inspector-line":"80","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:" Email: trangnguyen@hmu.edu.vn "}),(0,i.jsxs)("p",{"data-inspector-line":"81","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:[" ","\u0110\u1ECBa ch\u1EC9 li\xEAn h\u1EC7: P210, nh\xE0 A3, Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc Y H\xE0 N\u1ED9i, s\u1ED1 1, T\xF4n Th\u1EA5t T\xF9ng, \u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i"]}),(0,i.jsx)("h2",{"data-inspector-line":"86","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"Th\xE0nh vi\xEAn"}),(0,i.jsx)(D,{"data-inspector-line":"87","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",itemLayout:"horizontal",dataSource:Lt,renderItem:function(s){return(0,i.jsx)(D.Item,{"data-inspector-line":"91","data-inspector-column":"12","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:(0,i.jsx)(D.Item.Meta,{"data-inspector-line":"92","data-inspector-column":"14","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",avatar:(0,i.jsx)(tt.C,{"data-inspector-line":"93","data-inspector-column":"24","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",icon:(0,i.jsx)(nt.Z,{"data-inspector-line":"93","data-inspector-column":"38","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx"})}),title:s.name,description:s.department})})}})]}),(0,i.jsxs)(U.Z,{"data-inspector-line":"101","data-inspector-column":"6","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",xs:24,md:t?24:12,children:[(0,i.jsx)("h2",{"data-inspector-line":"102","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"\u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i "}),(0,i.jsx)("p",{"data-inspector-line":"103","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"TS. Nguy\u1EC5n H\u1ED3ng Quang "}),(0,i.jsx)("p",{"data-inspector-line":"104","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"Gi\u1EA3ng vi\xEAn Khoa K\u1EF9 thu\u1EADt m\xE1y t\xEDnh "}),(0,i.jsx)("p",{"data-inspector-line":"105","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"Tr\u01B0\u1EDDng C\xF4ng ngh\u1EC7 th\xF4ng tin v\xE0 Truy\u1EC1n th\xF4ng"}),(0,i.jsx)("p",{"data-inspector-line":"106","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i "}),(0,i.jsx)("p",{"data-inspector-line":"107","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"Email: quangnh@soict.hust.edu.vn, quang.nguyenhong@hust.edu.vn "}),(0,i.jsxs)("p",{"data-inspector-line":"108","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:["\u0110\u1ECBa ch\u1EC9 li\xEAn h\u1EC7: Ph\xF2ng 801, nh\xE0 B1, tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc B\xE1ch Khoa H\xE0 N\u1ED9i, s\u1ED1 1, \u0110\u1EA1i C\u1ED5 Vi\u1EC7t, H\xE0 N\u1ED9i"," "]}),(0,i.jsx)("h2",{"data-inspector-line":"112","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:"Th\xE0nh vi\xEAn"}),(0,i.jsx)(D,{"data-inspector-line":"113","data-inspector-column":"8","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",itemLayout:"horizontal",dataSource:Pt,renderItem:function(s){return(0,i.jsx)(D.Item,{"data-inspector-line":"117","data-inspector-column":"12","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",children:(0,i.jsx)(D.Item.Meta,{"data-inspector-line":"118","data-inspector-column":"14","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",avatar:(0,i.jsx)(tt.C,{"data-inspector-line":"119","data-inspector-column":"24","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx",icon:(0,i.jsx)(nt.Z,{"data-inspector-line":"119","data-inspector-column":"38","data-inspector-relative-path":"src/components/Common/DeveloperList.tsx"})}),title:s==null?void 0:s.name,description:s==null?void 0:s.department})})}})]})]})},Bt=Ht}}]);
