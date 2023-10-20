"use strict";(self.webpackChunkblog_project=self.webpackChunkblog_project||[]).push([[1495],{91043:(L,u,t)=>{t.r(u),t.d(u,{default:()=>A});var e=t(67294),s=t(40720),g=t(90731),h=t(34726),f=t(96987),M=t(16607),d=t(10574),p=t(31988),m=t(6498),E=t(38670),T=t(59586),b=t(40933),n=t(12473),a=t(30972),o=t(24116),i=t(86896),r=t(88767),c=t(71997),y=t(31350),S=t(87561);const j=S.Ry().shape({email:S.Z_().email(a.I0.email).required(a.I0.required)}),Z=c.default.a`
  color: ${({theme:C})=>C.colors.primary600};
`,W=()=>e.createElement(a.O4,{permissions:y._.settings},e.createElement(z,null)),z=()=>{const C=(0,a.lm)(),{formatMessage:l}=(0,i.Z)(),{lockApp:F,unlockApp:H}=(0,a.o1)(),{get:V,post:k}=(0,a.kY)(),{data:R,isLoading:D}=(0,r.useQuery)(["email","settings"],async()=>{const{data:{config:x}}=await V("/email/settings");return x}),B=(0,r.useMutation)(x=>k("/email/test",x),{onError(){C({type:"warning",message:l({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:v})})},onSuccess(){C({type:"success",message:l({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:v})})}},{retry:!1});(0,a.go)();const[P,K]=e.useState({}),[v,U]=e.useState(""),[$,O]=e.useState(!1);e.useEffect(()=>{j.validate({email:v},{abortEarly:!1}).then(()=>O(!0)).catch(()=>O(!1))},[v]);const N=x=>{U(()=>x.target.value)},w=async x=>{x.preventDefault();try{await j.validate({email:v},{abortEarly:!1})}catch(G){K((0,a.CJ)(G))}F(),B.mutate({to:v}),H()};return e.createElement(s.o,{labelledBy:"title","aria-busy":D||B.isLoading},e.createElement(a.SL,{name:l({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),e.createElement(g.T,{id:"title",title:l({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:l({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),e.createElement(h.D,null,D?e.createElement(a.dO,null):e.createElement("form",{onSubmit:w},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(M.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(d.Z,{variant:"delta",as:"h2"},l({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})),e.createElement(d.Z,null,l({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(Z,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},l({id:"email.link",defaultMessage:"Link"}))}))),e.createElement(p.r,{gap:5},e.createElement(m.P,{col:6,s:12},e.createElement(E.o,{name:"shipper-email",label:l({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:l({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:R.settings.defaultFrom})),e.createElement(m.P,{col:6,s:12},e.createElement(E.o,{name:"response-email",label:l({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:l({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:R.settings.defaultReplyTo})),e.createElement(m.P,{col:6,s:12},e.createElement(T.P,{name:"email-provider",label:l({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:R.provider},e.createElement(b.W,{value:R.provider},R.provider)))))),e.createElement(f.k,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(d.Z,{variant:"delta",as:"h2"},l({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})),e.createElement(p.r,{gap:5,alignItems:"end"},e.createElement(m.P,{col:6,s:12},e.createElement(E.o,{id:"test-address-input",name:"test-address",onChange:N,label:l({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:v,error:P.email?.id&&l({id:`email.${P.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:l({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})),e.createElement(m.P,{col:7,s:12},e.createElement(n.z,{loading:B.isLoading,disabled:!$,type:"submit",startIcon:e.createElement(o.Z,null)},l({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})))))))))},A=W},34726:(L,u,t)=>{t.d(u,{D:()=>g});var e=t(85893),s=t(16607);const g=({children:h})=>(0,e.jsx)(s.x,{paddingLeft:10,paddingRight:10,children:h})},90731:(L,u,t)=>{t.d(u,{T:()=>E});var e=t(85893),s=t(67294),g=t(71997);const h=n=>{const a=(0,s.useRef)(null),[o,i]=(0,s.useState)(!0),r=([c])=>{i(c.isIntersecting)};return(0,s.useEffect)(()=>{const c=a.current,y=new IntersectionObserver(r,n);return c&&y.observe(a.current),()=>{c&&y.disconnect()}},[a,n]),[a,o]};var f=t(79698);const M=(n,a)=>{const o=(0,f.W)(a);(0,s.useLayoutEffect)(()=>{const i=new ResizeObserver(o);return Array.isArray(n)?n.forEach(r=>{r.current&&i.observe(r.current)}):n.current&&i.observe(n.current),()=>{i.disconnect()}},[n,o])};var d=t(16607),p=t(96987),m=t(10574);const E=n=>{const a=(0,s.useRef)(null),[o,i]=(0,s.useState)(null),[r,c]=h({root:null,rootMargin:"0px",threshold:0});return M(r,()=>{r.current&&i(r.current.getBoundingClientRect())}),(0,s.useEffect)(()=>{a.current&&i(a.current.getBoundingClientRect())},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:o?.height},ref:r,children:c&&(0,e.jsx)(b,{ref:a,...n})}),!c&&(0,e.jsx)(b,{...n,sticky:!0,width:o?.width})]})};E.displayName="HeaderLayout";const T=(0,g.default)(d.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,b=s.forwardRef(({navigationAction:n,primaryAction:a,secondaryAction:o,subtitle:i,title:r,sticky:c,width:y,...S},I)=>{const j=typeof i=="string";return c?(0,e.jsx)(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:y,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{children:[n&&(0,e.jsx)(d.x,{paddingRight:3,children:n}),(0,e.jsxs)(d.x,{children:[(0,e.jsx)(m.Z,{variant:"beta",as:"h1",...S,children:r}),j?(0,e.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:i}):i]}),o?(0,e.jsx)(d.x,{paddingLeft:4,children:o}):null]}),(0,e.jsx)(p.k,{children:a?(0,e.jsx)(d.x,{paddingLeft:2,children:a}):void 0})]})}):(0,e.jsxs)(d.x,{ref:I,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(d.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{minWidth:0,children:[(0,e.jsx)(m.Z,{as:"h1",variant:"alpha",...S,children:r}),o?(0,e.jsx)(d.x,{paddingLeft:4,children:o}):null]}),a]}),j?(0,e.jsx)(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:i}):i]})})},40720:(L,u,t)=>{t.d(u,{o:()=>f});var e=t(85893),s=t(71997),g=t(16607);const h=(0,s.default)(g.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,f=({labelledBy:M="main-content-title",...d})=>(0,e.jsx)(h,{"aria-labelledby":M,as:"main",id:"main-content",tabIndex:-1,...d})},24116:(L,u,t)=>{t.d(u,{Z:()=>g});var e=t(85893);const s=h=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:[(0,e.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),g=s}}]);
