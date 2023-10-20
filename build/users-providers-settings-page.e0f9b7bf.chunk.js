"use strict";(self.webpackChunkblog_project=self.webpackChunkblog_project||[]).push([[2282],{1431:(A,E,t)=>{t.r(E),t.d(E,{ProvidersPage:()=>de,default:()=>Re});var e=t(67294),o=t(71590),y=t(40720),x=t(90731),R=t(34726),L=t(5923),i=t(3547),h=t(29299),m=t(69398),P=t(10574),Z=t(22304),j=t(35752),l=t(96208),a=t(30972),f=t(2382),u=t(11700),v=t.n(u),p=t(86896),C=t(88767),$=t(74622),k=t(36854),X=t(71543),fe=t(96987),ve=t(31988),he=t(6498),pe=t(37022),ae=t(12473),be=t(82392),Ee=t(75071),ye=t(41054),xe=t(45697),n=t.n(xe),Pe=t(17705),Me=t(38670);const G=({description:c,disabled:z,intlLabel:S,error:B,name:O,onChange:F,placeholder:d,providerToEditName:U,type:I,value:M})=>{const{formatMessage:b}=(0,p.Z)(),D=O==="noName"?`${window.strapi.backendURL}/api/connect/${U}/callback`:M,W=b({id:S.id,defaultMessage:S.defaultMessage},{provider:U,...S.values}),T=c?b({id:c.id,defaultMessage:c.defaultMessage},{provider:U,...c.values}):"";if(I==="bool")return e.createElement(Pe.s,{"aria-label":O,checked:M,disabled:z,hint:T,label:W,name:O,offLabel:b({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:b({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:N=>{F({target:{name:O,value:N.target.checked}})}});const q=d?b({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",_=B?b({id:B,defaultMessage:B}):"";return e.createElement(Me.o,{"aria-label":O,disabled:z,error:_,label:W,name:O,onChange:F,placeholder:q,type:I,value:D})};G.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},G.propTypes={description:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),providerToEditName:n().string.isRequired,type:n().string.isRequired,value:n().oneOfType([n().bool,n().string])};const Le=G,Q=({headerBreadcrumbs:c,initialData:z,isSubmiting:S,layout:B,isOpen:O,onSubmit:F,onToggle:d,providerToEditName:U})=>{const{formatMessage:I}=(0,p.Z)();return O?e.createElement($.P,{onClose:d,labelledBy:"title"},e.createElement(k.x,null,e.createElement(be.O,{label:c.join(", ")},c.map((M,b,D)=>e.createElement(Ee.$,{isCurrent:b===D.length-1,key:M},M)))),e.createElement(ye.J9,{onSubmit:M=>F(M),initialValues:z,validationSchema:B.schema,validateOnChange:!1},({errors:M,handleChange:b,values:D})=>e.createElement(a.l0,null,e.createElement(X.f,null,e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ve.r,{gap:5},B.form.map(W=>W.map(T=>e.createElement(he.P,{key:T.name,col:T.size,xs:12},e.createElement(Le,{...T,error:M[T.name],onChange:b,value:D[T.name],providerToEditName:U}))))))),e.createElement(pe.m,{startActions:e.createElement(ae.z,{variant:"tertiary",onClick:d,type:"button"},I({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(ae.z,{type:"submit",loading:S},I({id:"global.save",defaultMessage:"Save"}))})))):null};Q.defaultProps={initialData:null,providerToEditName:null},Q.propTypes={headerBreadcrumbs:n().arrayOf(n().string).isRequired,initialData:n().object,layout:n().shape({form:n().arrayOf(n().array),schema:n().object}).isRequired,isOpen:n().bool.isRequired,isSubmiting:n().bool.isRequired,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,providerToEditName:n().string};const Oe=Q;var ne=t(84419),g=t(99688),s=t(87561);const se={id:(0,g.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},re={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},w={id:(0,g.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,g.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},le={id:(0,g.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},ie={id:(0,g.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},H={id:(0,g.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},oe={id:(0,g.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:w,size:6}]],schema:s.Ry().shape({enabled:s.Xg().required(a.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:w,size:6,validations:{required:!0}}],[{intlLabel:le,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:oe,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ie,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:s.Ry().shape({enabled:s.Xg().required(a.I0.required),key:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),secret:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),callback:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:w,size:6,validations:{required:!0}}],[{intlLabel:le,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:oe,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,g.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:H,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,g.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,g.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ie,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:s.Ry().shape({enabled:s.Xg().required(a.I0.required),key:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),secret:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),subdomain:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),callback:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()})})}},de=()=>{const{formatMessage:c,locale:z}=(0,p.Z)(),S=(0,C.useQueryClient)(),{trackUsage:B}=(0,a.rS)(),[O,F]=e.useState(!1),[d,U]=e.useState(null),I=(0,a.lm)(),{lockApp:M,unlockApp:b}=(0,a.o1)(),{get:D,put:W}=(0,a.kY)(),{formatAPIError:T}=(0,a.So)(),q=(0,a.Xe)(z,{sensitivity:"base"});(0,a.go)();const{isLoading:_,allowedActions:{canUpdate:N}}=(0,a.ss)({update:ne._.updateProviders}),{isLoading:Be,data:ee}=(0,C.useQuery)(["users-permissions","get-providers"],async()=>{const{data:r}=await D("/users-permissions/providers");return r},{initialData:{}}),ue=(0,C.useMutation)(r=>W("/users-permissions/providers",r),{async onSuccess(){await S.invalidateQueries(["users-permissions","providers"]),I({type:"success",message:{id:(0,g.OB)("notification.success.submit")}}),B("didEditAuthenticationProvider"),te(),b()},onError(r){I({type:"warning",message:T(r)}),b()},refetchActive:!1}),V=Object.entries(ee).reduce((r,[K,Ie])=>{const{icon:ge,enabled:Ze,subdomain:Se}=Ie;return r.push({name:K,icon:ge==="envelope"?["fas","envelope"]:["fab",ge],enabled:Ze,subdomain:Se}),r},[]).sort((r,K)=>q.compare(r.name,K.name)),Te=Be||_,ce=e.useMemo(()=>d?!!V.find(K=>K.name===d)?.subdomain:!1,[V,d]),je=e.useMemo(()=>d==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[d,ce]),te=()=>{F(r=>!r)},me=r=>{N&&(U(r.name),te())},Ce=async r=>{M(),B("willEditAuthenticationProvider"),ue.mutate({providers:{...ee,[d]:r}})};return e.createElement(o.A,null,e.createElement(a.SL,{name:c({id:(0,g.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),e.createElement(y.o,null,e.createElement(x.T,{title:c({id:(0,g.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Te?e.createElement(a.dO,null):e.createElement(R.D,null,e.createElement(L.i,{colCount:3,rowCount:V.length+1},e.createElement(i.h,null,e.createElement(h.Tr,null,e.createElement(m.Th,null,e.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(m.Th,null,e.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},c({id:(0,g.OB)("Providers.status"),defaultMessage:"Status"}))),e.createElement(m.Th,null,e.createElement(P.Z,{variant:"sigma"},e.createElement(Z.T,null,c({id:"global.settings",defaultMessage:"Settings"})))))),e.createElement(j.p,null,V.map(r=>e.createElement(h.Tr,{key:r.name,...(0,a.X7)({fn:()=>me(r),condition:N})},e.createElement(m.Td,{width:"45%"},e.createElement(P.Z,{fontWeight:"semiBold",textColor:"neutral800"},r.name)),e.createElement(m.Td,{width:"65%"},e.createElement(P.Z,{textColor:r.enabled?"success600":"danger600","data-testid":`enable-${r.name}`},r.enabled?c({id:"global.enabled",defaultMessage:"Enabled"}):c({id:"global.disabled",defaultMessage:"Disabled"}))),e.createElement(m.Td,{...a.UW},N&&e.createElement(l.h,{onClick:()=>me(r),noBorder:!0,icon:e.createElement(f.Z,null),label:"Edit"})))))))),e.createElement(Oe,{initialData:ee[d],isOpen:O,isSubmiting:ue.isLoading,layout:je,headerBreadcrumbs:[c({id:(0,g.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),v()(d)],onToggle:te,onSubmit:Ce,providerToEditName:d}))},Re=()=>e.createElement(a.O4,{permissions:ne._.readProviders},e.createElement(de,null))},99688:(A,E,t)=>{t.d(E,{YX:()=>x,OB:()=>R.Z});var e=t(41609),o=t.n(e);const x=L=>Object.keys(L).reduce((i,h)=>{const m=L[h].controllers,P=Object.keys(m).reduce((Z,j)=>(o()(m[j])||(Z[j]=m[j]),Z),{});return o()(P)||(i[h]={controllers:P}),i},{});var R=t(58655)},34726:(A,E,t)=>{t.d(E,{D:()=>y});var e=t(85893),o=t(16607);const y=({children:x})=>(0,e.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:x})},90731:(A,E,t)=>{t.d(E,{T:()=>P});var e=t(85893),o=t(67294),y=t(71997);const x=l=>{const a=(0,o.useRef)(null),[f,u]=(0,o.useState)(!0),v=([p])=>{u(p.isIntersecting)};return(0,o.useEffect)(()=>{const p=a.current,C=new IntersectionObserver(v,l);return p&&C.observe(a.current),()=>{p&&C.disconnect()}},[a,l]),[a,f]};var R=t(79698);const L=(l,a)=>{const f=(0,R.W)(a);(0,o.useLayoutEffect)(()=>{const u=new ResizeObserver(f);return Array.isArray(l)?l.forEach(v=>{v.current&&u.observe(v.current)}):l.current&&u.observe(l.current),()=>{u.disconnect()}},[l,f])};var i=t(16607),h=t(96987),m=t(10574);const P=l=>{const a=(0,o.useRef)(null),[f,u]=(0,o.useState)(null),[v,p]=x({root:null,rootMargin:"0px",threshold:0});return L(v,()=>{v.current&&u(v.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{a.current&&u(a.current.getBoundingClientRect())},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:f?.height},ref:v,children:p&&(0,e.jsx)(j,{ref:a,...l})}),!p&&(0,e.jsx)(j,{...l,sticky:!0,width:f?.width})]})};P.displayName="HeaderLayout";const Z=(0,y.default)(i.x)`
  width: ${({width:l})=>l?`${l/16}rem`:void 0};
  z-index: ${({theme:l})=>l.zIndices[1]};
`,j=o.forwardRef(({navigationAction:l,primaryAction:a,secondaryAction:f,subtitle:u,title:v,sticky:p,width:C,...$},k)=>{const X=typeof u=="string";return p?(0,e.jsx)(Z,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:C,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{children:[l&&(0,e.jsx)(i.x,{paddingRight:3,children:l}),(0,e.jsxs)(i.x,{children:[(0,e.jsx)(m.Z,{variant:"beta",as:"h1",...$,children:v}),X?(0,e.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:u}):u]}),f?(0,e.jsx)(i.x,{paddingLeft:4,children:f}):null]}),(0,e.jsx)(h.k,{children:a?(0,e.jsx)(i.x,{paddingLeft:2,children:a}):void 0})]})}):(0,e.jsxs)(i.x,{ref:k,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0,children:[l?(0,e.jsx)(i.x,{paddingBottom:2,children:l}):null,(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{minWidth:0,children:[(0,e.jsx)(m.Z,{as:"h1",variant:"alpha",...$,children:v}),f?(0,e.jsx)(i.x,{paddingLeft:4,children:f}):null]}),a]}),X?(0,e.jsx)(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:u}):u]})})},71590:(A,E,t)=>{t.d(E,{A:()=>L});var e=t(85893),o=t(71997),y=t(16607);const x=(0,o.default)(y.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:i})=>i?"auto 1fr":"1fr"};
`,R=(0,o.default)(y.x)`
  overflow-x: hidden;
`,L=({sideNav:i,children:h})=>(0,e.jsxs)(x,{hasSideNav:Boolean(i),children:[i,(0,e.jsx)(R,{paddingBottom:10,children:h})]})},40720:(A,E,t)=>{t.d(E,{o:()=>R});var e=t(85893),o=t(71997),y=t(16607);const x=(0,o.default)(y.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,R=({labelledBy:L="main-content-title",...i})=>(0,e.jsx)(x,{"aria-labelledby":L,as:"main",id:"main-content",tabIndex:-1,...i})}}]);
