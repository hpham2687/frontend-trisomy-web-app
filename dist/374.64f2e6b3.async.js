(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{88374:function(gr,Te,t){"use strict";t.d(Te,{I:function(){return ar}});var Zr=t(20228),Ee=t(11382),se=t(96156),i=t(28991),B=t(55507),X=t(92137),Pr=t(9715),k=t(16579),D=t(28481),pr=t(84305),le=t(87769),fe=t(81253),C=t(85893),de=t(31490),Ie=t(85061),W=t(90484),ve=t(88306),U=t(8880),o=t(67294),ce=t(74763),$e=t(92210);function Oe(e){return(0,W.Z)(e)!=="object"?!1:e===null?!0:!(o.isValidElement(e)||e.constructor===RegExp||e instanceof Map||e instanceof Set||e instanceof HTMLElement||e instanceof Blob||e instanceof File||Array.isArray(e))}var xe=function(r,m){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Object.keys(m).reduce(function(j,g){var h=m[g];return(0,ce.Z)(h)||(j[g]=h),j},{});if(Object.keys(s).length<1||typeof window=="undefined"||(0,W.Z)(r)!=="object"||(0,ce.Z)(r)||r instanceof Blob)return r;var a=Array.isArray(r)?[]:{},V=function j(g,h){var y=Array.isArray(g),l=y?[]:{};return g==null||g===void 0?l:(Object.keys(g).forEach(function(v){var P=h?[h,v].flat(1):[v].flat(1),F=g[v],p=(0,ve.Z)(s,P),$=function(){var Z=typeof p=="function"?p==null?void 0:p(F,v,g):v;if(Array.isArray(Z)){l=(0,U.Z)(l,Z,F);return}(0,W.Z)(Z)==="object"&&!Array.isArray(a)?a=(0,i.Z)((0,i.Z)({},a),Z):(0,W.Z)(Z)==="object"&&Array.isArray(a)?l=(0,i.Z)((0,i.Z)({},l),Z):Z&&(l=(0,U.Z)(l,[Z],F))};if(p&&typeof p=="function"&&$(),typeof window!="undefined"){if(Oe(F)){var N=j(F,P);if(Object.keys(N).length<1)return;l=(0,U.Z)(l,[v],N);return}$()}}),f?l:g)};return a=Array.isArray(r)&&Array.isArray(a)?(0,Ie.Z)(V(r)):(0,$e.T)({},V(r),a),a},Ue=xe,Me=t(29405),q=0;function Be(e){var r=(0,o.useState)(function(){return e.proFieldKey?e.proFieldKey.toString():(q+=1,q.toString())}),m=(0,D.Z)(r,1),f=m[0],s=(0,o.useRef)(f),a=function(){var h=(0,X.Z)((0,B.Z)().mark(function y(){var l,v;return(0,B.Z)().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(l=e.request)===null||l===void 0?void 0:l.call(e,e.params,e);case 2:return v=F.sent,F.abrupt("return",v);case 4:case"end":return F.stop()}},y)}));return function(){return h.apply(this,arguments)}}();(0,o.useEffect)(function(){return function(){q+=1}},[]);var V=(0,Me.ZP)([s.current,e.params],a,{revalidateOnFocus:!1,shouldRetryOnError:!1,revalidateOnReconnect:!1}),j=V.data,g=V.error;return[j||g]}var De=Be,Ne=t(22270),Ke=t(23312),Le=t(56725),ze=t(26369),We=t(60249),Ge=t(41036),z=function(){return z=Object.assign||function(e){for(var r,m=1,f=arguments.length;m<f;m++){r=arguments[m];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},z.apply(this,arguments)};function He(e){var r,m=(typeof window!="undefined"?window:{}).URL,f=new m((r=window==null?void 0:window.location)===null||r===void 0?void 0:r.href);return Object.keys(e).forEach(function(s){var a=e[s];a!=null?Array.isArray(a)?(f.searchParams.delete(s),a.forEach(function(V){f.searchParams.append(s,V)})):a instanceof Date?Number.isNaN(a.getTime())||f.searchParams.set(s,a.toISOString()):typeof a=="object"?f.searchParams.set(s,JSON.stringify(a)):f.searchParams.set(s,a):f.searchParams.delete(s)}),f}function Je(e,r){var m;e===void 0&&(e={}),r===void 0&&(r={disabled:!1});var f=(0,o.useState)(),s=f[1],a=typeof window!="undefined"&&((m=window==null?void 0:window.location)===null||m===void 0?void 0:m.search),V=(0,o.useMemo)(function(){return r.disabled?{}:new URLSearchParams(a||{})},[r.disabled,a]),j=(0,o.useMemo)(function(){if(r.disabled)return{};if(typeof window=="undefined"||!window.URL)return{};var y=[];V.forEach(function(v,P){y.push({key:P,value:v})}),y=y.reduce(function(v,P){return(v[P.key]=v[P.key]||[]).push(P),v},{}),y=Object.keys(y).map(function(v){var P=y[v];return P.length===1?[v,P[0].value]:[v,P.map(function(F){var p=F.value;return p})]});var l=z({},e);return y.forEach(function(v){var P=v[0],F=v[1];l[P]=Ye(P,F,{},e)}),l},[r.disabled,e,V]);function g(y){if(!(typeof window=="undefined"||!window.URL)){var l=He(y);window.location.search!==l.search&&window.history.replaceState({},"",l.toString()),V.toString()!==l.searchParams.toString()&&s({})}}(0,o.useEffect)(function(){r.disabled||typeof window=="undefined"||!window.URL||g(z(z({},e),j))},[r.disabled,j]);var h=function(y){g(y)};return(0,o.useEffect)(function(){if(r.disabled)return function(){};if(typeof window=="undefined"||!window.URL)return function(){};var y=function(){s({})};return window.addEventListener("popstate",y),function(){window.removeEventListener("popstate",y)}},[r.disabled]),[j,h]}var Qe={true:!0,false:!1};function Ye(e,r,m,f){if(!m)return r;var s=m[e],a=r===void 0?f[e]:r;return s===Number?Number(a):s===Boolean||r==="true"||r==="false"?Qe[a]:Array.isArray(s)?s.find(function(V){return V==a})||f[e]:a}var me=t(80334),br=t(49111),Xe=t(19650),Vr=t(57663),ye=t(71577),he=t(97435),ke=function(r){var m=(0,de.YB)();if(r.render===!1)return null;var f=r.form,s=r.onSubmit,a=r.render,V=r.onReset,j=r.searchConfig,g=j===void 0?{}:j,h=r.submitButtonProps,y=r.resetButtonProps,l=y===void 0?{}:y,v=function(){f.submit(),s==null||s()},P=function(){f.resetFields(),V==null||V()},F=g.submitText,p=F===void 0?m.getMessage("tableForm.submit","\u63D0\u4EA4"):F,$=g.resetText,N=$===void 0?m.getMessage("tableForm.reset","\u91CD\u7F6E"):$,O=[];l!==!1&&O.push((0,o.createElement)(ye.Z,(0,i.Z)((0,i.Z)({},(0,he.Z)(l,["preventDefault"])),{},{key:"rest",onClick:function(K){var R;(l==null?void 0:l.preventDefault)||P(),l==null||(R=l.onClick)===null||R===void 0||R.call(l,K)}}),N)),h!==!1&&O.push((0,o.createElement)(ye.Z,(0,i.Z)((0,i.Z)({type:"primary"},(0,he.Z)(h||{},["preventDefault"])),{},{key:"submit",onClick:function(K){var R;(h==null?void 0:h.preventDefault)||v(),h==null||(R=h.onClick)===null||R===void 0||R.call(h,K)}}),p));var Z=a?a((0,i.Z)((0,i.Z)({},r),{},{submit:v,reset:P}),O):O;return Z?Array.isArray(Z)?(Z==null?void 0:Z.length)<1?null:(Z==null?void 0:Z.length)===1?Z[0]:(0,C.jsx)(Xe.Z,{wrap:!0,children:Z}):Z:null},qe=ke,_e=t(66758),Fe=t(2514),er=t(9105),rr=["children","contentRender","submitter","fieldProps","formItemProps","groupProps","dateFormatter","formRef","onInit","form","formComponentType","extraUrlParams","syncToUrl","syncToUrlAsImportant","syncToInitialValues","onReset","omitNil","isKeyPressSubmit","autoFocusFirstInput","grid","rowProps","colProps"],nr=["request","params","initialValues","formKey","readonly"],_=function(r,m,f){return r===!0?m:(0,Ne.h)(r,m,f)},ge=function(r){return!r||Array.isArray(r)?r:[r]};function tr(e){var r=e.children,m=e.contentRender,f=e.submitter,s=e.fieldProps,a=e.formItemProps,V=e.groupProps,j=e.dateFormatter,g=j===void 0?"string":j,h=e.formRef,y=e.onInit,l=e.form,v=e.formComponentType,P=e.extraUrlParams,F=P===void 0?{}:P,p=e.syncToUrl,$=e.syncToUrlAsImportant,N=$===void 0?!1:$,O=e.syncToInitialValues,Z=O===void 0?!0:O,x=e.onReset,K=e.omitNil,R=K===void 0?!0:K,ir=e.isKeyPressSubmit,Pe=e.autoFocusFirstInput,ee=Pe===void 0?!0:Pe,G=e.grid,ur=e.rowProps,or=e.colProps,I=(0,fe.Z)(e,rr),sr=(0,o.useContext)(le.ZP.SizeContext),lr=k.Z.useForm(l),fr=(0,D.Z)(lr,1),pe=fr[0],dr=Je({},{disabled:!p}),be=(0,D.Z)(dr,2),re=be[0],H=be[1],w=(0,o.useRef)(pe||{}),vr=(0,Fe.zx)({grid:G,rowProps:ur}),Ve=vr.RowWrapper,ne=(0,o.useRef)({}),te=(0,o.useRef)({}),E=(0,o.useCallback)(function(u,n,d){return Ue((0,Ke.ZP)(u,g,ne.current,n,d),te.current,n)},[g]),J=(0,o.useMemo)(function(){return{getFieldsFormatValue:function(n){var d;return E((d=w.current)===null||d===void 0?void 0:d.getFieldsValue(n),R)},getFieldFormatValue:function(){var n,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=ge(d);if(!c)throw new Error("nameList is require");var S=(n=w.current)===null||n===void 0?void 0:n.getFieldValue(c),A=c?(0,U.Z)({},c,S):S;return(0,ve.Z)(E(A,R,c),c)},getFieldFormatValueObject:function(n){var d,c=ge(n),S=(d=w.current)===null||d===void 0?void 0:d.getFieldValue(c),A=c?(0,U.Z)({},c,S):S;return E(A,R,c)},validateFieldsReturnFormatValue:function(){var u=(0,X.Z)((0,B.Z)().mark(function d(c){var S,A,T;return(0,B.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!(!Array.isArray(c)&&c)){b.next=2;break}throw new Error("nameList must be array");case 2:return b.next=4,(S=w.current)===null||S===void 0?void 0:S.validateFields(c);case 4:return A=b.sent,T=E(A,R),b.abrupt("return",T||{});case 7:case"end":return b.stop()}},d)}));function n(d){return u.apply(this,arguments)}return n}(),formRef:w}},[R,E]),Q=(0,o.useMemo)(function(){var u=(0,i.Z)({},w.current);return Object.keys(w.current||{}).forEach(function(n){Object.defineProperty(u,n,{get:function(){return w.current[n]}})}),Object.keys(J).forEach(function(n){Object.defineProperty(u,n,{get:function(){return J[n]}})}),u},[]),cr=(0,Le.Z)(!1),Re=(0,D.Z)(cr,2),ae=Re[0],ie=Re[1],ue=(0,o.useMemo)(function(){return o.Children.toArray(r).map(function(u,n){return n===0&&o.isValidElement(u)&&ee?o.cloneElement(u,(0,i.Z)((0,i.Z)({},u.props),{},{autoFocus:ee})):u})},[ee,r]),M=(0,o.useMemo)(function(){return typeof f=="boolean"||!f?{}:f},[f]);(0,o.useImperativeHandle)(h,function(){return Q});var Se=(0,o.useMemo)(function(){if(f!==!1)return(0,C.jsx)(qe,(0,i.Z)((0,i.Z)({},M),{},{onReset:function(){var n,d,c=E((n=w.current)===null||n===void 0?void 0:n.getFieldsValue(),R);if(M==null||(d=M.onReset)===null||d===void 0||d.call(M,c),x==null||x(c),p){var S,A=Object.keys(E((S=w.current)===null||S===void 0?void 0:S.getFieldsValue(),!1)).reduce(function(T,Y){return(0,i.Z)((0,i.Z)({},T),{},(0,se.Z)({},Y,c[Y]||void 0))},F);H(_(p,A,"set"))}},form:Q,submitButtonProps:(0,i.Z)({loading:ae},M.submitButtonProps)}),"submitter")},[f,M,Q,ae,E,R,x,p,F,H]),mr=(0,o.useMemo)(function(){var u=G?(0,C.jsx)(Ve,{children:ue}):ue;return m?m(u,Se,w.current):u},[G,Ve,ue,m,Se]),yr=(0,o.useMemo)(function(){if(typeof window!="undefined"&&v&&["DrawerForm"].includes(v))return function(u){return u.parentNode||document.body}},[v]);(0,o.useEffect)(function(){var u,n=E((u=w.current)===null||u===void 0?void 0:u.getFieldsValue(!0),R);y==null||y(n,Q)},[]);var hr=(0,o.useState)(function(){return p?_(p,re,"get"):{}}),je=(0,D.Z)(hr,2),we=je[0],Fr=je[1];(0,o.useEffect)(function(){Z||Fr({})},[Z]);var Ce=(0,ze.Z)(e.initialValues);return(0,o.useEffect)(function(){if(!(p||!e.initialValues||!Ce||I.request)){var u=(0,We.Z)(e.initialValues,Ce);(0,me.ET)(u,"initialValues \u53EA\u5728 form \u521D\u59CB\u5316\u65F6\u751F\u6548\uFF0C\u5982\u679C\u4F60\u9700\u8981\u5F02\u6B65\u52A0\u8F7D\u63A8\u8350\u4F7F\u7528 request\uFF0C\u6216\u8005 initialValues ? <Form/> : null "),(0,me.ET)(u,"The initialValues only take effect when the form is initialized, if you need to load asynchronously recommended request, or the initialValues ? <Form/> : null ")}},[e.initialValues]),(0,o.useEffect)(function(){!p||H((0,i.Z)((0,i.Z)({},re),F))},[F,p]),(0,C.jsx)(_e.Z.Provider,{value:{formRef:w,fieldProps:s,formItemProps:a,groupProps:V,formComponentType:v,getPopupContainer:yr,setFieldValueType:function(n,d){var c=d.valueType,S=c===void 0?"text":c,A=d.dateFormat,T=d.transform;!Array.isArray(n)||(te.current=(0,U.Z)(te.current,n,T),ne.current=(0,U.Z)(ne.current,n,{valueType:S,dateFormat:A}))}},children:(0,C.jsx)(Ge.Z.Provider,{value:J,children:(0,C.jsx)(le.ZP.SizeContext.Provider,{value:I.size||sr,children:(0,C.jsx)(Fe._p.Provider,{value:{grid:G,colProps:or},children:(0,C.jsxs)(k.Z,(0,i.Z)((0,i.Z)({onKeyPress:function(n){if(!!ir&&n.key==="Enter"){var d;(d=w.current)===null||d===void 0||d.submit()}},form:pe},I),{},{initialValues:N?(0,i.Z)((0,i.Z)({},I.initialValues),we):(0,i.Z)((0,i.Z)({},we),I.initialValues),onValuesChange:function(n,d){var c;I==null||(c=I.onValuesChange)===null||c===void 0||c.call(I,E(n,R),E(d,R))},onFinish:function(){var u=(0,X.Z)((0,B.Z)().mark(function d(){var c,S,A,T;return(0,B.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(I.onFinish){b.next=2;break}return b.abrupt("return");case 2:if(!ae){b.next=4;break}return b.abrupt("return");case 4:return ie(!0),b.prev=5,S=E((c=w.current)===null||c===void 0?void 0:c.getFieldsValue(),R),b.next=9,I.onFinish(S);case 9:p&&(T=Object.keys(E((A=w.current)===null||A===void 0?void 0:A.getFieldsValue(),!1)).reduce(function(L,Ae){var oe;return(0,i.Z)((0,i.Z)({},L),{},(0,se.Z)({},Ae,(oe=S[Ae])!==null&&oe!==void 0?oe:void 0))},F),Object.keys(re).forEach(function(L){T[L]!==!1&&T[L]!==0&&!T[L]&&(T[L]=void 0)}),H(_(p,T,"set"))),ie(!1),b.next=16;break;case 13:b.prev=13,b.t0=b.catch(5),ie(!1);case 16:case"end":return b.stop()}},d,null,[[5,13]])}));function n(){return u.apply(this,arguments)}return n}(),children:[I.component!==!1&&(0,C.jsx)("input",{type:"text",style:{display:"none"}}),(0,C.jsx)(k.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(n){return h&&(h.current=(0,i.Z)((0,i.Z)({},n),J)),w.current=n,null}}),mr]}))})})})})}var Ze=0;function ar(e){var r=e.request,m=e.params,f=e.initialValues,s=e.formKey,a=s===void 0?Ze:s,V=e.readonly,j=(0,fe.Z)(e,nr);(0,o.useEffect)(function(){Ze+=0},[]);var g=De({request:r,params:m,proFieldKey:a}),h=(0,D.Z)(g,1),y=h[0];return!y&&e.request?(0,C.jsx)("div",{style:{paddingTop:50,paddingBottom:50,textAlign:"center"},children:(0,C.jsx)(Ee.Z,{})}):(0,C.jsx)(er.A.Provider,{value:{mode:e.readonly?"read":"edit"},children:(0,C.jsx)(de.oK,{children:(0,C.jsx)(tr,(0,i.Z)((0,i.Z)({autoComplete:"off"},j),{},{initialValues:(0,i.Z)((0,i.Z)({},f),y)}))})})}}}]);
