"use strict";(self.webpackChunkblog_project=self.webpackChunkblog_project||[]).push([[7649],{40784:(N,L,n)=>{n.d(L,{r:()=>I});var m=n(85893),g=n(16607),O=n(99168),A=n.n(O);function x(P,b,M){if(!P||!b||!M)return{display:"none"};const{x:p,y:C}=M;return{transform:`translate(${p}px, ${C}px)`}}const I=({renderItem:P})=>{const{itemType:b,isDragging:M,item:p,initialOffset:C,currentOffset:Z,mouseOffset:U}=(0,O.useDragLayer)(k=>({item:k.getItem(),itemType:k.getItemType(),initialOffset:k.getInitialSourceClientOffset(),currentOffset:k.getSourceClientOffset(),isDragging:k.isDragging(),mouseOffset:k.getClientOffset()}));return M?(0,m.jsx)(g.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,m.jsx)(g.x,{style:x(C,Z,U),children:P({type:b,item:p})})}):null}},27661:(N,L,n)=>{var m=n(67294);const g=(0,m.createContext)();var O=null},21440:(N,L,n)=>{n.d(L,{PL:()=>x,Y9:()=>I.Y,zE:()=>ie,Ky:()=>Q,fi:()=>ne,zH:()=>ce,r5:()=>a});var m=n(67294),g=n(86706),O=n(25398);const x=()=>{const e=(0,g.v9)(O.Z),t=(0,m.useCallback)(s=>e?.components?.[s]??{},[e]);return{...e,getComponentLayout:t}};var I=n(79116),P=n(30972),b=n(52861),M=n(42225),p=n(18172);const C={error:null,isLoading:!0,layout:{},layouts:{}},U=(e,t)=>(0,p.ZP)(e,s=>{switch(t.type){case"GET_DATA":{s.isLoading=!0,s.error=null,s.layout={};break}case"GET_DATA_SUCCEEDED":{const i=t.data.contentType.uid;s.layout=t.data,s.layouts[i]=t.data,s.isLoading=!1;break}case"GET_DATA_ERROR":{s.isLoading=!1,s.error=t.error;break}case"SET_LAYOUT_FROM_STATE":{s.error=null,s.layout=e.layouts[t.uid];break}case"UPDATE_LAYOUT":{const i=e.layout;s.layout={...i,contentType:{uid:i.contentType.uid,...t.newLayout.contentType}},s.layouts[i.contentType.uid]={...i,contentType:{uid:i.contentType.uid,...t.newLayout.contentType}};break}default:return s}});var k=n(50361),F=n.n(k),H=n(27361),v=n.n(H),re=n(36968),j=n.n(re),_=n(21892);const $=(e,t)=>t.find(s=>s.uid===e),oe=(e,t)=>{const s=q(e,t),i=R(s.contentType,t),u=ee(s.contentType,s.components);return j()(s,["contentType","layouts","edit"],i),j()(s,["contentType","layouts","list"],u),Object.keys(s.components).forEach(c=>{const f=R(s.components[c],t);j()(s,["components",c,"layouts","edit"],f)}),s},q=(e,t)=>{const s=(0,_.w8)(F()(e),t,"contentType"),{components:i,contentType:u}=s,c=f=>Object.keys(f.metadatas).reduce((D,T)=>{const W=v()(f,["attributes",T],{});let S=f.metadatas[T];if(W.type==="relation"){const ye=$(W.targetModel,t),K=S.edit.mainField,X={name:K,schema:v()(ye,["attributes",K])};S={list:{...S.list,mainField:X},edit:{...S.edit,mainField:X}}}return D[T]=S,D},{});return j()(s,["contentType","metadatas"],c(u)),Object.keys(i).forEach(f=>{const D=i[f],T=c(D);j()(s,["components",f,"metadatas"],T)}),s},R=(e,t)=>e.layouts.edit.reduce((s,i)=>{const u=i.map(c=>{const f=v()(e,["attributes",c.name],{}),D={...c,fieldSchema:f,metadatas:v()(e,["metadatas",c.name,"edit"],{})};if(f.type==="relation"){const W=$(f.targetModel,t).pluginOptions||{};j()(D,"targetModelPluginOptions",W),j()(D,"queryInfos",{shouldDisplayRelationLink:Y(e,c.name,t)})}return D});return s.push(u),s},[]),ee=(e,t)=>e.layouts.list.reduce((i,u)=>{const c=v()(e,["attributes",u],{}),f=v()(e,["metadatas",u,"list"],{}),D=c.type;if(D==="relation")return i.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:f}),i;if(D==="component"){const T=t[c.component],W=T.settings.mainField,S=T.attributes[W];return i.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:{...f,mainField:{...S,name:W}}}),i}return i.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:f}),i},[]),Y=(e,t,s)=>{const i=v()(e,["attributes",t,"targetModel"],"");return B(s).includes(i)},B=e=>e.filter(t=>t.isDisplayed).map(({uid:t})=>t),V=oe,ie=e=>{const[{error:t,isLoading:s,layout:i,layouts:u},c]=(0,m.useReducer)(U,C),f=(0,m.useMemo)(M.Vo,[]),{schemas:D}=(0,g.v9)(K=>f(K),g.wU),T=(0,m.useRef)(!0),{get:W}=(0,P.kY)(),S=(0,m.useCallback)(async(K,X)=>{if(u[K]){c({type:"SET_LAYOUT_FROM_STATE",uid:K});return}c({type:"GET_DATA"});try{const{data:{data:se}}=await W(`/content-manager/content-types/${K}/configuration`,{cancelToken:X.token});c({type:"GET_DATA_SUCCEEDED",data:V(se,D)})}catch(se){if(b.default.isCancel(se))return;T.current&&console.error(se),T.current&&c({type:"GET_DATA_ERROR",error:se})}},[u,D,W]);(0,m.useEffect)(()=>()=>{T.current=!1},[]),(0,m.useEffect)(()=>{const X=b.default.CancelToken.source();return S(e,X),()=>{X.cancel("Operation canceled by the user.")}},[e,S]);const ye=(0,m.useCallback)(K=>{c({type:"UPDATE_LAYOUT",newLayout:V(K,D)})},[D]);return{error:t,isLoading:s,layout:i,updateLayout:ye}},ge=e=>e["content-manager_app"].collectionTypeLinks;var ue=n(13218),h=n.n(ue),J=n(80129);const ae=(e,t)=>Object.keys(e).reduce((s,i)=>{const u=e[i],c=v()(t,[i],u);return h()(u)?{...s,[i]:ae(u,c)}:(s[i]=c,s)},{}),le=(e,t,s)=>{const i=e.find(({to:S})=>S.includes(t));if(!i)return"/";const{to:u,search:c}=i,f=(0,J.parse)(c),D=(0,J.parse)(s.substring(1)),T=ae(f,D);return`${u}?${(0,J.stringify)(T,{encode:!1})}`},Q=e=>{const[{rawQuery:t}]=(0,P.Kx)(),s=(0,g.v9)(ge);return le(s,e,t)};var Te=n(25950),z=n(16550);const ne=()=>{const{search:e}=(0,z.TH)(),t=e?(0,J.parse)(e.substring(1)):{};return t.plugins?(0,J.stringify)({plugins:t.plugins},{encode:!1}):""},ce=e=>{const t=(0,m.useRef)();return(0,m.useEffect)(()=>{t.current=e},[e]),t.current};var w=n(14996);const de=(e,t,s)=>({type:w.m,permissions:e,__meta__:{plugins:t,containerName:s}}),me=()=>({type:w.Q}),fe=e=>e["content-manager_rbacManager"].permissions,r=e=>e.rbacProvider.collectionTypesRelatedPermissions,a=(e,t,s="listView")=>{const i=(0,g.I0)(),u=(0,g.v9)(r),c=(0,g.v9)(fe),f=u[t];(0,m.useEffect)(()=>f?(i(de(f,e?e.plugins:null,s)),()=>{i(me())}):()=>{},[f,i,e,s]);const D=c?.some(T=>T.subject!==t)??!0;return{isValid:c&&!D,permissions:c}};var o=n(27661);const d=()=>useContext(WysiwygContext),y=null},79116:(N,L,n)=>{n.d(L,{Y:()=>x});var m=n(67294),g=n(99168),O=n.n(g),A=n(25950);const x=(I,{type:P="STRAPI_DND",index:b,item:M={},onStart:p,onEnd:C,onGrabItem:Z,onDropItem:U,onCancel:k,onMoveItem:F,dropSensitivity:H="regular"})=>{const v=(0,m.useRef)(null),[{handlerId:re},j]=(0,g.useDrop)({accept:P,collect(R){return{handlerId:R.getHandlerId()}},hover(R,ee){if(!v.current)return;const Y=R.index,B=b;if(Y!==B){if(H==="regular"){const V=v.current.getBoundingClientRect(),te=(V.bottom-V.top)/2,G=ee.getClientOffset().y-V.top;if(Y<B&&G<te||Y>B&&G>te)return}F(B,Y),R.index=B}}}),[{isDragging:_},$,oe]=(0,g.useDrag)({type:P,item(){p&&p();const{width:R}=v.current?.getBoundingClientRect()??{};return{index:b,width:R,...M}},end(){C&&C()},canDrag:I,isDragging:M.id?R=>M.id===R.getItem().id:void 0,collect:R=>({isDragging:R.isDragging()})}),q=(0,A.A)(I,b,{onGrabItem:Z,onDropItem:U,onCancel:k,onMoveItem:F});return[{handlerId:re,isDragging:_,handleKeyDown:q},v,j,$,oe]}},25950:(N,L,n)=>{n.d(L,{A:()=>g});var m=n(67294);const g=(O,A,{onCancel:x,onDropItem:I,onGrabItem:P,onMoveItem:b})=>{const[M,p]=(0,m.useState)(!1),C=F=>{M&&(F==="UP"?b(A-1,A):F==="DOWN"&&b(A+1,A))},Z=()=>{M?(I&&I(A),p(!1)):(P&&P(A),p(!0))},U=()=>{M&&(p(!1),x&&x(A))};return F=>{if(O&&!(F.key==="Tab"&&!M))switch(F.preventDefault(),F.key){case" ":case"Enter":Z();break;case"Escape":U();break;case"ArrowDown":case"ArrowRight":C("DOWN");break;case"ArrowUp":case"ArrowLeft":C("UP");break;default:}}}},42225:(N,L,n)=>{n.d(L,{Jg:()=>b,KQ:()=>I,Vo:()=>P,Yg:()=>O});var m=n(20573),g=n(23301);const O=()=>p=>p["content-manager_app"]||g.E,A=()=>createSelector(O(),p=>p),x=()=>createSelector(O(),p=>p.models),I=()=>(0,m.P1)(O(),p=>({collectionTypeLinks:p.collectionTypeLinks,singleTypeLinks:p.singleTypeLinks})),P=()=>(0,m.P1)(O(),({components:p,models:C})=>({schemas:[...p,...C]})),b=(0,m.P1)(O(),p=>p.fieldSizes);var M=null},25398:(N,L,n)=>{n.d(L,{Z:()=>g});const g=O=>O["content-manager_editViewLayoutManager"].currentLayout},56837:(N,L,n)=>{n.d(L,{Z:()=>m});const m={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},78186:(N,L,n)=>{n.d(L,{G:()=>m});const m=({firstname:g,lastname:O,username:A,email:x},I)=>A||(g?I({id:"global.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:g,lastname:O}).trim():x)},45283:(N,L,n)=>{n.d(L,{Z:()=>g});const g=O=>`content-manager.${O}`},21892:(N,L,n)=>{n.d(L,{_Q:()=>B.Z,W3:()=>A,ko:()=>I,FE:()=>b,Di:()=>Z,Ex:()=>me,du:()=>H,TA:()=>j,Gf:()=>fe.G,Ts:()=>q,Uo:()=>ee,OB:()=>Y.Z,w8:()=>ue,kc:()=>ae});var m=n(50361),g=n.n(m);const A=(r,l,a)=>{if(Array.isArray(r)&&l>=0&&a>=0&&l<=r.length-1&&a<=r.length-1){const o=g()(r),d=o.splice(l,1);return o.splice(a,0,d[0]),o}return r},I=r=>{const{type:l}=r;return l==="relation"?!(r?.relationType??"").toLowerCase().includes("morph"):!["json","dynamiczone","richtext","password","blocks"].includes(l)&&!!l},P=(r,l)=>{typeof r=="function"?r(l):r!=null&&(r.current=l)},b=(...r)=>l=>r.forEach(a=>P(a,l));var M=n(27361),p=n.n(M);const C=(r,l)=>Object.keys(r).reduce((a,o)=>{const d=p()(r,[o],{}),{default:y,component:e,type:t,required:s,min:i,repeatable:u}=d;if(y!==void 0&&(a[o]=y),t==="component"){const c=l?.[e]?.attributes??{},f=C(c,l);if(s===!0&&(a[o]=u===!0?[]:f),i&&u===!0&&s){a[o]=[];for(let D=0;D<i;D+=1)a[o].push(f)}}return t==="dynamiczone"&&s===!0&&(a[o]=[]),a},{}),Z=C;var U=n(57557),k=n.n(U);const H=({layouts:r,metadatas:l,...a})=>{const o=r.list.map(e=>e.name?e.name:e),d=Object.keys(l).reduce((e,t)=>{const s=p()(l,[t],{});let i=s.edit;return i.mainField&&(i={...i,mainField:s.edit.mainField.name}),{...e,[t]:{edit:i,list:k()(s.list,["mainField"])}}},{}),y=r.edit.map(e=>e.map(({name:t,size:s})=>({name:t,size:s})));return{...a,layouts:{edit:y,list:o},metadatas:d}},v=(r,l)=>r.map(a=>({...a,subject:l})),j=r=>{const l={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(l).reduce((a,o)=>(a[o]=v(l[o],r),a),{})};var _=n(7654),$=n.n(_);const q=r=>r.split(".").filter(l=>$()(parseInt(l,10))),ee=r=>{if(r.length===0)return-1;const l=Math.max.apply(Math,r.map(a=>a.__temp_key__??0));return Number.isNaN(l)?-1:l};var Y=n(45283),B=n(56837),V=n(82492),te=n.n(V),ie=n(36968),G=n.n(ie);const ue=(r,l,a)=>{const o=t=>l.find(s=>s.uid===t),d=Object.assign({},r),y=r[a].uid,e=o(y);return G()(d,[a],te()({},e,r[a])),Object.keys(r.components).forEach(t=>{const s=o(t);G()(d,["components",t],{...r.components[t],...s})}),d};var h=n(30972);const ae=(r,l,a)=>{const o=(d,y)=>Object.keys(d).reduce((e,t)=>{const s=(0,h.UN)(y,t),i=p()(d,t),u=(0,h.k2)(y,[t,"component"]),c=(0,h.k2)(y,[t,"repeatable"]);return s==="dynamiczone"?(e[t]=i.map(f=>o(f,a[f.__component])),e):s==="component"?(c?e[t]=i&&i.map(f=>o(f,a[u])):e[t]=i&&o(i,a[u]),e):(s!=="password"&&(e[t]=i),e)},{});return o(r,l)};var pe=n(51584),le=n.n(pe),he=n(41609),Q=n.n(he),Te=n(14841),z=n.n(Te),E=n(87561),ne=n(72262);E.kM(E.nK,"defined",function(){return this.test("defined",h.I0.required,r=>r!==void 0)}),E.kM(E.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",h.I0.min,l=>Q()(l)?!0:l.length>=r)}),E.kM(E.Z_,"isInferior",function(r,l){return this.test("isInferior",r,function(a){return!a||Number.isNaN(z()(a))?!0:z()(l)>=z()(a)})}),E.kM(E.Z_,"isSuperior",function(r,l){return this.test("isSuperior",r,function(a){return!a||Number.isNaN(z()(a))?!0:z()(a)>=z()(l)})});const ce=r=>p()(r,["attributes"],{}),w=(r,{components:l},a={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const o=ce(r);return E.Ry().shape(Object.keys(o).reduce((d,y)=>{const e=o[y];if(e.type!=="relation"&&e.type!=="component"&&e.type!=="dynamiczone"){const t=de(e.type,e,a);d[y]=t}if(e.type==="relation"&&(d[y]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(e.relationType)?E.Ry().nullable():E.IX().nullable()),e.type==="component"){const t=w(l[e.component],{components:l},{...a,isFromComponent:!0});if(e.repeatable===!0){const{min:i,max:u,required:c}=e;let f=E.Vo(D=>{let T=E.IX().of(t);return i?c?T=T.min(i,h.I0.min):c!==!0&&Q()(D)?T=T.nullable():T=T.min(i,h.I0.min):c&&!a.isDraft&&(T=T.min(1,h.I0.required)),u&&(T=T.max(u,h.I0.max)),T});return d[y]=f,d}const s=E.Vo(i=>i!==void 0?e.required===!0&&!a.isDraft?t.defined():t.nullable():e.required===!0?E.Ry().defined():E.Ry().nullable());return d[y]=s,d}if(e.type==="dynamiczone"){let t=E.IX().of(E.Vo(({__component:u})=>w(l[u],{components:l},{...a,isFromComponent:!0})));const{max:s,min:i}=e;i?e.required?t=t.test("min",h.I0.min,u=>a.isCreatingEntry?u&&u.length>=i:u===void 0?!0:u!==null&&u.length>=i).test("required",h.I0.required,u=>a.isCreatingEntry?u!==null||u!==void 0:u===void 0?!0:u!==null):t=t.notEmptyMin(i):e.required&&!a.isDraft&&(t=t.test("required",h.I0.required,u=>a.isCreatingEntry?u!==null||u!==void 0:u===void 0?!0:u!==null)),s&&(t=t.max(s,h.I0.max)),d[y]=t}return d},{}))},de=(r,l,a)=>{let o=E.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(o=E.Z_()),r==="blocks"&&(o=E.nK().test("isJSON",h.I0.json,d=>a.isJSONTestDisabled||a.isDraft?!0:!(d&&!Array.isArray(d)))),r==="json"&&(o=E.nK(h.I0.json).test("isJSON",h.I0.json,d=>{if(a.isJSONTestDisabled||!d||!d.length)return!0;try{return JSON.parse(d),!0}catch{return!1}}).nullable().test("required",h.I0.required,d=>!(l.required&&(!d||!d.length)))),r==="email"&&(o=o.email(h.I0.email)),["number","integer","float","decimal"].includes(r)&&(o=E.Rx().transform(d=>$()(d)?void 0:d).typeError()),r==="biginteger"&&(o=E.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(o=E.hT()),Object.keys(l).forEach(d=>{const y=l[d];if(y||!le()(y)&&Number.isInteger(Math.floor(y))||y===0)switch(d){case"required":{a.isDraft||(r==="password"&&a.isCreatingEntry&&(o=o.required(h.I0.required)),r!=="password"&&(a.isCreatingEntry?o=o.required(h.I0.required):o=o.test("required",h.I0.required,e=>e===void 0&&!a.isFromComponent?!0:(0,ne.Z)(r)?e===0?!0:!!e:r==="boolean"?e!=null:r==="date"||r==="datetime"?typeof e=="string"?!Q()(e):!Q()(e?.toString()):!Q()(e))));break}case"max":{r==="biginteger"?o=o.isInferior(h.I0.max,y):o=o.max(y,h.I0.max);break}case"maxLength":o=o.max(y,h.I0.maxLength);break;case"min":{r==="biginteger"?o=o.isSuperior(h.I0.min,y):o=o.min(y,h.I0.min);break}case"minLength":{a.isDraft||(o=o.min(y,h.I0.minLength));break}case"regex":o=o.matches(new RegExp(y),{message:h.I0.regex,excludeEmptyString:!l.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().uppercase());break;case"positive":(0,ne.Z)(r)&&(o=o.positive());break;case"negative":(0,ne.Z)(r)&&(o=o.negative());break;default:o=o.nullable()}}),o},me=w;var fe=n(78186)},72262:(N,L,n)=>{n.d(L,{Z:()=>m});function m(g){return["integer","biginteger","decimal","float","number"].includes(g)}}}]);
