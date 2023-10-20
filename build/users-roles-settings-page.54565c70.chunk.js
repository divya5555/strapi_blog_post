(self.webpackChunkblog_project=self.webpackChunkblog_project||[]).push([[8853],{26302:(d,g,t)=>{"use strict";t.r(g),t.d(g,{default:()=>Ot});var e=t(67294),n=t(30972),r=t(16550),s=t(84419),o=t(40720),u=t(90731),l=t(12473),h=t(34726),f=t(96987),i=t(10574),O=t(31988),E=t(6498),m=t(38670),p=t(457),R=t(18226),C=t(41054),x=t(86896),j=t(88767),S=t(45697),L=t.n(S);const K=(0,e.createContext)({}),$=({children:a,value:c})=>e.createElement(K.Provider,{value:c},a),w=()=>(0,e.useContext)(K);$.propTypes={children:L().node.isRequired,value:L().object.isRequired};var W=t(58655),J=t(63122),H=t(1744),ce=t(68889),ne=t(11700),de=t.n(ne);function Q(a){switch(a){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return de()(a.replace("api::","").replace("plugin::",""))}}const se=Q,he=(a,c)=>{const y=Object.keys(c).sort().map(v=>({name:v,isOpen:!1}));return{...a,collapses:y}};var F=t(16607),ue=t(89734),re=t.n(ue),q=t(22546),_=t(22304),ae=t(40989),je=t(27361),oe=t.n(je),ee=t(71997);const Ee=(0,ee.css)`
  background: ${a=>a.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Be=(0,ee.default)(F.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${a=>a.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${a=>a.isActive&&Ee}
  &:hover {
    ${Ee}
  }
`,Se=ee.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:a})=>a.colors.neutral150};
`,xe=({subCategory:a})=>{const{formatMessage:c}=(0,x.Z)(),{onChange:y,onChangeSelectAll:v,onSelectedAction:b,selectedAction:M,modifiedData:T}=w(),A=(0,e.useMemo)(()=>oe()(T,a.name,{}),[T,a]),D=(0,e.useMemo)(()=>Object.values(A).every(P=>P.enabled===!0),[A]),B=(0,e.useMemo)(()=>Object.values(A).some(P=>P.enabled===!0)&&!D,[A,D]),I=(0,e.useCallback)(({target:{name:P}})=>{v({target:{name:P,value:!D}})},[D,v]),Z=(0,e.useCallback)(P=>M===P,[M]);return e.createElement(F.x,null,e.createElement(f.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(F.x,{paddingRight:4},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},a.label)),e.createElement(Se,null),e.createElement(F.x,{paddingLeft:4},e.createElement(q.X,{name:a.name,value:D,onValueChange:P=>I({target:{name:a.name,value:P}}),indeterminate:B},c({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(f.k,{paddingTop:6,paddingBottom:6},e.createElement(O.r,{gap:2,style:{flex:1}},a.actions.map(P=>{const U=`${P.name}.enabled`;return e.createElement(E.P,{col:6,key:P.name},e.createElement(Be,{isActive:Z(P.name),padding:2,hasRadius:!0},e.createElement(q.X,{value:oe()(T,U,!1),name:U,onValueChange:k=>y({target:{name:U,value:k}})},P.label),e.createElement("button",{type:"button",onClick:()=>b(P.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(_.T,{as:"span"},c({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:P.name})),e.createElement(ae.Z,null))))}))))};xe.propTypes={subCategory:L().object.isRequired};const Ie=xe,ye=({name:a,permissions:c})=>{const y=(0,e.useMemo)(()=>re()(Object.values(c.controllers).reduce((v,b,M)=>{const T=`${a}.controllers.${Object.keys(c.controllers)[M]}`,A=re()(Object.keys(b).reduce((D,B)=>[...D,{...b[B],label:B,name:`${T}.${B}`}],[]),"label");return[...v,{actions:A,label:Object.keys(c.controllers)[M],name:T}]},[]),"label"),[a,c]);return e.createElement(F.x,{padding:6},y.map(v=>e.createElement(Ie,{key:v.name,subCategory:v})))};ye.propTypes={name:L().string.isRequired,permissions:L().object.isRequired};const $e=ye;var ve=t(18172);const Ze={collapses:[]},We=(a,c)=>(0,ve.ZP)(a,y=>{switch(c.type){case"TOGGLE_COLLAPSE":{y.collapses=a.collapses.map((v,b)=>b===c.index?{...v,isOpen:!v.isOpen}:{...v,isOpen:!1});break}default:return y}}),Ue=()=>{const{modifiedData:a}=w(),{formatMessage:c}=(0,x.Z)(),[{collapses:y},v]=(0,e.useReducer)(We,Ze,M=>he(M,a)),b=M=>v({type:"TOGGLE_COLLAPSE",index:M});return e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:1},y.map((M,T)=>e.createElement(J.U,{expanded:M.isOpen,onToggle:()=>b(T),key:M.name,variant:T%2===0?"secondary":void 0},e.createElement(H.B,{title:se(M.name),description:c({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:M.name}),variant:T%2?"primary":"secondary"}),e.createElement(ce.v,null,e.createElement($e,{permissions:a[M.name],name:M.name})))))};var Ne=t(41609),Ke=t.n(Ne),ke=t(82569),we=t.n(ke),Fe=t(35161),ze=t.n(Fe),He=t(13217),Ge=t.n(He);const Ve=a=>{switch(a){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Qe=(0,ee.default)(F.x)`
  margin: -1px;
  border-radius: ${({theme:a})=>a.spaces[1]} 0 0 ${({theme:a})=>a.spaces[1]};
`;function me({route:a}){const{formatMessage:c}=(0,x.Z)(),{method:y,handler:v,path:b}=a,M=b?Ge()(b.split("/")):[],[T="",A=""]=v?v.split("."):[],D=Ve(a.method);return e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(i.Z,{variant:"delta",as:"h3"},c({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,T),e.createElement(i.Z,{variant:"delta",textColor:"primary600"},".",A)),e.createElement(f.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Qe,{background:D.background,borderColor:D.border,padding:2},e.createElement(i.Z,{fontWeight:"bold",textColor:D.text},y)),e.createElement(F.x,{paddingLeft:2,paddingRight:2},ze()(M,B=>e.createElement(i.Z,{key:B,textColor:B.includes(":")?"neutral600":"neutral900"},"/",B)))))}me.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},me.propTypes={route:L().shape({handler:L().string,method:L().string,path:L().string})};const Ye=me,Xe=()=>{const{formatMessage:a}=(0,x.Z)(),{selectedAction:c,routes:y}=w(),v=we()(c.split("."),"controllers"),b=oe()(y,v[0]),M=v.slice(1).join("."),T=Ke()(b)?[]:b.filter(A=>A.handler.endsWith(M));return e.createElement(E.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},c?e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},T.map((A,D)=>e.createElement(Ye,{key:D,route:A}))):e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(i.Z,{variant:"delta",as:"h3"},a({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(i.Z,{as:"p",textColor:"neutral600"},a({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Je=(a,c,y)=>({...a,initialData:c,modifiedData:c,routes:y});var qe=t(36968),Ce=t.n(qe),_e=t(69572),et=t.n(_e);const tt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},nt=(a,c)=>(0,ve.ZP)(a,y=>{switch(c.type){case"ON_CHANGE":{const v=c.keys.length,b=c.keys[v-1]==="enabled";if(c.value&&b){const M=et()(c.keys,v-1).join(".");y.selectedAction=M}Ce()(y,["modifiedData",...c.keys],c.value);break}case"ON_CHANGE_SELECT_ALL":{const v=["modifiedData",...c.keys],b=oe()(a,v,{}),M=Object.keys(b).reduce((T,A)=>(T[A]={...b[A],enabled:c.value},T),{});Ce()(y,v,M);break}case"ON_RESET":{y.modifiedData=a.initialData;break}case"ON_SUBMIT_SUCCEEDED":{y.initialData=a.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:v}=c;y.selectedAction=v===a.selectedAction?"":v;break}default:return y}}),Me=(0,e.forwardRef)(({permissions:a,routes:c},y)=>{const{formatMessage:v}=(0,x.Z)(),[b,M]=(0,e.useReducer)(nt,tt,I=>Je(I,a,c));(0,e.useImperativeHandle)(y,()=>({getPermissions(){return{permissions:b.modifiedData}},resetForm(){M({type:"ON_RESET"})},setFormAfterSubmit(){M({type:"ON_SUBMIT_SUCCEEDED"})}}));const B={...b,onChange:({target:{name:I,value:Z}})=>M({type:"ON_CHANGE",keys:I.split("."),value:Z==="empty__string_value"?"":Z}),onChangeSelectAll:({target:{name:I,value:Z}})=>M({type:"ON_CHANGE_SELECT_ALL",keys:I.split("."),value:Z}),onSelectedAction:I=>M({type:"SELECT_ACTION",actionToSelect:I})};return e.createElement($,{value:B},e.createElement(O.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(E.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(i.Z,{variant:"delta",as:"h2"},v({id:(0,W.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(i.Z,{as:"p",textColor:"neutral600"},v({id:(0,W.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(Ue,null))),e.createElement(Xe,null)))});Me.propTypes={permissions:L().object.isRequired,routes:L().object.isRequired};const Re=(0,e.memo)(Me);var ge=t(87561);const Pe=ge.Ry().shape({name:ge.Z_().required(n.I0.required),description:ge.Z_().required(n.I0.required)});var te=t(99688);const Oe=()=>{const a=(0,n.lm)(),{get:c}=(0,n.kY)(),{formatAPIError:y}=(0,n.So)(te.OB),[{data:v,isLoading:b,error:M,refetch:T},{data:A,isLoading:D,error:B,refetch:I}]=(0,j.useQueries)([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:U}}=await c("/users-permissions/permissions");return U}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:U}}=await c("/users-permissions/routes");return U}}]),Z=async()=>{await Promise.all([T(),I()])};(0,e.useEffect)(()=>{M&&a({type:"warning",message:y(M)})},[a,M,y]),(0,e.useEffect)(()=>{B&&a({type:"warning",message:y(B)})},[a,B,y]);const P=b||D;return{permissions:v?(0,te.YX)(v):{},routes:A??{},getData:Z,isLoading:P}},st=()=>{const{formatMessage:a}=(0,x.Z)(),c=(0,n.lm)(),{goBack:y}=(0,r.k6)(),{lockApp:v,unlockApp:b}=(0,n.o1)(),{isLoading:M,permissions:T,routes:A}=Oe(),{trackUsage:D}=(0,n.rS)(),B=e.useRef(),{post:I}=(0,n.kY)(),Z=(0,j.useMutation)(U=>I("/users-permissions/roles",U),{onError(){c({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})},onSuccess(){D("didCreateRole"),c({type:"success",message:{id:(0,W.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),y()}}),P=async U=>{v();const k=B.current.getPermissions();await Z.mutate({...U,...k,users:[]}),b()};return e.createElement(o.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(C.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:P,validationSchema:Pe},({handleSubmit:U,values:k,handleChange:Y,errors:N})=>e.createElement(n.l0,{noValidate:!0,onSubmit:U},e.createElement(u.T,{primaryAction:!M&&e.createElement(l.z,{type:"submit",loading:Z.isLoading,startIcon:e.createElement(R.Z,null)},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(h.D,null,e.createElement(f.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow"},e.createElement(f.k,{direction:"column",alignItems:"stretch"},e.createElement(i.Z,{variant:"delta",as:"h2"},a({id:(0,W.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(O.r,{gap:4},e.createElement(E.P,{col:6},e.createElement(m.o,{name:"name",value:k.name||"",onChange:Y,label:a({id:"global.name",defaultMessage:"Name"}),error:N?.name?a({id:N.name,defaultMessage:"Name is required"}):!1,required:!0})),e.createElement(E.P,{col:6},e.createElement(p.g,{id:"description",value:k.description||"",onChange:Y,label:a({id:"global.description",defaultMessage:"Description"}),error:N?.description?a({id:N.description,defaultMessage:"Description is required"}):!1,required:!0})))),!M&&e.createElement(Re,{ref:B,permissions:T,routes:A}))))))},rt=()=>e.createElement(n.O4,{permissions:s._.createRole},e.createElement(st,null));var at=t(97695);const ot=()=>{const{formatMessage:a}=(0,x.Z)(),c=(0,n.lm)(),{lockApp:y,unlockApp:v}=(0,n.o1)(),{params:{id:b}}=(0,r.$B)("/settings/users-permissions/roles/:id"),{get:M}=(0,n.kY)(),{isLoading:T,routes:A}=Oe(),{data:D,isLoading:B,refetch:I}=(0,j.useQuery)(["users-permissions","role",b],async()=>{const{data:{role:N}}=await M(`/users-permissions/roles/${b}`);return N}),Z=e.useRef(),{put:P}=(0,n.kY)(),{formatAPIError:U}=(0,n.So)(),k=(0,j.useMutation)(N=>P(`/users-permissions/roles/${b}`,N),{onError(N){c({type:"warning",message:U(N)})},async onSuccess(){c({type:"success",message:{id:(0,W.Z)("Settings.roles.created"),defaultMessage:"Role edited"}}),await I()}}),Y=async N=>{y();const G=Z.current.getPermissions();await k.mutate({...N,...G,users:[]}),v()};return B?e.createElement(n.dO,null):e.createElement(o.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(C.J9,{enableReinitialize:!0,initialValues:{name:D.name,description:D.description},onSubmit:Y,validationSchema:Pe},({handleSubmit:N,values:G,handleChange:ie,errors:X})=>e.createElement(n.l0,{noValidate:!0,onSubmit:N},e.createElement(u.T,{primaryAction:!T&&e.createElement(l.z,{disabled:D.code==="strapi-super-admin",type:"submit",loading:k.isLoading,startIcon:e.createElement(R.Z,null)},a({id:"global.save",defaultMessage:"Save"})),title:D.name,subtitle:D.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(at.Z,null),to:"/settings/users-permissions/roles"},a({id:"global.back",defaultMessage:"Back"}))}),e.createElement(h.D,null,e.createElement(f.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow"},e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(i.Z,{variant:"delta",as:"h2"},a({id:(0,W.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(O.r,{gap:4},e.createElement(E.P,{col:6},e.createElement(m.o,{name:"name",value:G.name||"",onChange:ie,label:a({id:"global.name",defaultMessage:"Name"}),error:X?.name?a({id:X.name,defaultMessage:"Name is required"}):!1,required:!0})),e.createElement(E.P,{col:6},e.createElement(p.g,{id:"description",value:G.description||"",onChange:ie,label:a({id:"global.description",defaultMessage:"Description"}),error:X?.description?a({id:X.description,defaultMessage:"Description is required"}):!1,required:!0})))),!T&&e.createElement(Re,{ref:Z,permissions:D.permissions,routes:A}))))))},it=()=>e.createElement(n.O4,{permissions:s._.updateRole},e.createElement(ot,null));var lt=t(334),ct=t(71590),dt=t(55040),ut=t(5923),mt=t(3547),Le=t(29299),z=t(69398),gt=t(83598),pt=t(29824),ft=t(35752),ht=t(96208),Et=t(2382),xt=t(54425);const yt=(0,ee.default)(pt.r)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:a})=>`${a.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,pe=({sortedRoles:a,canDelete:c,permissions:y,setRoleToDelete:v,onDelete:b})=>{const{formatMessage:M}=(0,x.Z)(),{push:T}=(0,r.k6)(),[A,D]=b,B=P=>c&&!["public","authenticated"].includes(P.type),I=P=>{v(P),D(!A)},Z=P=>{T(`/settings/users-permissions/roles/${P}`)};return e.createElement(ft.p,null,a?.map(P=>e.createElement(Le.Tr,{key:P.name,...(0,n.X7)({fn:()=>Z(P.id)})},e.createElement(z.Td,{width:"20%"},e.createElement(i.Z,null,P.name)),e.createElement(z.Td,{width:"50%"},e.createElement(i.Z,null,P.description)),e.createElement(z.Td,{width:"30%"},e.createElement(i.Z,null,M({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:P.nb_users}))),e.createElement(z.Td,null,e.createElement(f.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:y.updateRole},e.createElement(yt,{to:`/settings/users-permissions/roles/${P.id}`,"aria-label":M({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${P.name}`})},e.createElement(Et.Z,null))),B(P)&&e.createElement(n.jW,{permissions:y.deleteRole},e.createElement(ht.h,{onClick:()=>I(P.id),noBorder:!0,icon:e.createElement(xt.Z,null),label:M({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${P.name}`})})))))))},vt=pe;pe.defaultProps={canDelete:!1},pe.propTypes={onDelete:L().array.isRequired,permissions:L().object.isRequired,setRoleToDelete:L().func.isRequired,sortedRoles:L().array.isRequired,canDelete:L().bool};const Ct=async(a,c)=>{try{const{get:y}=(0,n.tg)(),{data:v}=await y("/users-permissions/roles");return c("The roles have loaded successfully"),v}catch(y){throw a({type:"warning",message:{id:"notification.error"}}),new Error(y)}},Mt=async(a,c)=>{try{const{del:y}=(0,n.tg)();await y(`/users-permissions/roles/${a}`)}catch{c({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},Rt=()=>{const{trackUsage:a}=(0,n.rS)(),{formatMessage:c,locale:y}=(0,x.Z)(),v=(0,n.lm)(),{notifyStatus:b}=(0,lt.G)(),[{query:M}]=(0,n.Kx)(),T=M?._q||"",[A,D]=(0,e.useState)(!1),[B,I]=(0,e.useState)(!1),[Z,P]=(0,e.useState)();(0,n.go)();const{isLoading:U,allowedActions:{canRead:k,canDelete:Y}}=(0,n.ss)({create:s._.createRole,read:s._.readRoles,update:s._.updateRole,delete:s._.deleteRole}),{isLoading:N,data:{roles:G},isFetching:ie,refetch:X}=(0,j.useQuery)("get-roles",()=>Ct(v,b),{initialData:{},enabled:k}),{includes:be}=(0,n.L0)(y,{sensitivity:"base"}),Te=(0,n.Xe)(y,{sensitivity:"base"}),De=N||ie,Lt=()=>{D(!A)},bt={roles:{id:(0,te.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,te.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Tt=c({id:"global.roles",defaultMessage:"Roles"}),Dt=(0,j.useMutation)(V=>Mt(V,v),{async onSuccess(){await X()}}),At=async()=>{I(!0),await Dt.mutateAsync(Z),D(!A),I(!1)},le=(G||[]).filter(V=>be(V.name,T)||be(V.description,T)).sort((V,Ae)=>Te.compare(V.name,Ae.name)||Te.compare(V.description,Ae.description)),jt=T&&!le.length?"search":"roles",Bt=4,St=(G?.length||0)+1;return e.createElement(ct.A,null,e.createElement(n.SL,{name:Tt}),e.createElement(o.o,{"aria-busy":De},e.createElement(u.T,{title:c({id:"global.roles",defaultMessage:"Roles"}),subtitle:c({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:s._.createRole},e.createElement(n.Qj,{to:"/settings/users-permissions/roles/new",onClick:()=>a("willCreateRole"),startIcon:e.createElement(gt.Z,null),size:"S"},c({id:(0,te.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(dt.Z,{startActions:e.createElement(n.m,{label:c({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(h.D,null,!k&&e.createElement(n.ZF,null),(De||U)&&e.createElement(n.dO,null),k&&le&&le?.length?e.createElement(ut.i,{colCount:Bt,rowCount:St},e.createElement(mt.h,null,e.createElement(Le.Tr,null,e.createElement(z.Th,null,e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(z.Th,null,e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.description",defaultMessage:"Description"}))),e.createElement(z.Th,null,e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.users",defaultMessage:"Users"}))),e.createElement(z.Th,null,e.createElement(_.T,null,c({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(vt,{sortedRoles:le,canDelete:Y,permissions:s._,setRoleToDelete:P,onDelete:[A,D]})):e.createElement(n.x7,{content:bt[jt]})),e.createElement(n.QH,{isConfirmButtonLoading:B,onConfirm:At,onToggleDialog:Lt,isOpen:A})))},Pt=()=>e.createElement(n.O4,{permissions:s._.accessRoles},e.createElement(Rt,null)),Ot=()=>e.createElement(n.O4,{permissions:s._.accessRoles},e.createElement(r.rs,null,e.createElement(r.AW,{path:"/settings/users-permissions/roles/new",component:rt,exact:!0}),e.createElement(r.AW,{path:"/settings/users-permissions/roles/:id",component:it,exact:!0}),e.createElement(r.AW,{path:"/settings/users-permissions/roles",component:Pt,exact:!0}),e.createElement(r.AW,{path:"",component:n.Hn})))},99688:(d,g,t)=>{"use strict";t.d(g,{YX:()=>s,OB:()=>o.Z});var e=t(41609),n=t.n(e);const s=u=>Object.keys(u).reduce((l,h)=>{const f=u[h].controllers,i=Object.keys(f).reduce((O,E)=>(n()(f[E])||(O[E]=f[E]),O),{});return n()(i)||(l[h]={controllers:i}),l},{});var o=t(58655)},47443:(d,g,t)=>{var e=t(42118);function n(r,s){var o=r==null?0:r.length;return!!o&&e(r,s,0)>-1}d.exports=n},1196:d=>{function g(t,e,n){for(var r=-1,s=t==null?0:t.length;++r<s;)if(n(e,t[r]))return!0;return!1}d.exports=g},20731:(d,g,t)=>{var e=t(88668),n=t(47443),r=t(1196),s=t(29932),o=t(7518),u=t(74757),l=200;function h(f,i,O,E){var m=-1,p=n,R=!0,C=f.length,x=[],j=i.length;if(!C)return x;O&&(i=s(i,o(O))),E?(p=r,R=!1):i.length>=l&&(p=u,R=!1,i=new e(i));e:for(;++m<C;){var S=f[m],L=O==null?S:O(S);if(S=E||S!==0?S:0,R&&L===L){for(var K=j;K--;)if(i[K]===L)continue e;x.push(S)}else p(i,L,E)||x.push(S)}return x}d.exports=h},89881:(d,g,t)=>{var e=t(47816),n=t(99291),r=n(e);d.exports=r},41848:d=>{function g(t,e,n,r){for(var s=t.length,o=n+(r?1:-1);r?o--:++o<s;)if(e(t[o],o,t))return o;return-1}d.exports=g},42118:(d,g,t)=>{var e=t(41848),n=t(62722),r=t(42351);function s(o,u,l){return u===u?r(o,u,l):e(o,n,l)}d.exports=s},62722:d=>{function g(t){return t!==t}d.exports=g},69199:(d,g,t)=>{var e=t(89881),n=t(98612);function r(s,o){var u=-1,l=n(s)?Array(s.length):[];return e(s,function(h,f,i){l[++u]=o(h,f,i)}),l}d.exports=r},82689:(d,g,t)=>{var e=t(29932),n=t(97786),r=t(67206),s=t(69199),o=t(71131),u=t(7518),l=t(85022),h=t(6557),f=t(1469);function i(O,E,m){E.length?E=e(E,function(C){return f(C)?function(x){return n(x,C.length===1?C[0]:C)}:C}):E=[h];var p=-1;E=e(E,u(r));var R=s(O,function(C,x,j){var S=e(E,function(L){return L(C)});return{criteria:S,index:++p,value:C}});return o(R,function(C,x){return l(C,x,m)})}d.exports=i},71131:d=>{function g(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}d.exports=g},27561:(d,g,t)=>{var e=t(67990),n=/^\s+/;function r(s){return s&&s.slice(0,e(s)+1).replace(n,"")}d.exports=r},26393:(d,g,t)=>{var e=t(33448);function n(r,s){if(r!==s){var o=r!==void 0,u=r===null,l=r===r,h=e(r),f=s!==void 0,i=s===null,O=s===s,E=e(s);if(!i&&!E&&!h&&r>s||h&&f&&O&&!i&&!E||u&&f&&O||!o&&O||!l)return 1;if(!u&&!h&&!E&&r<s||E&&o&&l&&!u&&!h||i&&o&&l||!f&&l||!O)return-1}return 0}d.exports=n},85022:(d,g,t)=>{var e=t(26393);function n(r,s,o){for(var u=-1,l=r.criteria,h=s.criteria,f=l.length,i=o.length;++u<f;){var O=e(l[u],h[u]);if(O){if(u>=i)return O;var E=o[u];return O*(E=="desc"?-1:1)}}return r.index-s.index}d.exports=n},99291:(d,g,t)=>{var e=t(98612);function n(r,s){return function(o,u){if(o==null)return o;if(!e(o))return r(o,u);for(var l=o.length,h=s?l:-1,f=Object(o);(s?h--:++h<l)&&u(f[h],h,f)!==!1;);return o}}d.exports=n},42351:d=>{function g(t,e,n){for(var r=n-1,s=t.length;++r<s;)if(t[r]===e)return r;return-1}d.exports=g},67990:d=>{var g=/\s/;function t(e){for(var n=e.length;n--&&g.test(e.charAt(n)););return n}d.exports=t},35161:(d,g,t)=>{var e=t(29932),n=t(67206),r=t(69199),s=t(1469);function o(u,l){var h=s(u)?e:r;return h(u,n(l,3))}d.exports=o},89734:(d,g,t)=>{var e=t(21078),n=t(82689),r=t(5976),s=t(16612),o=r(function(u,l){if(u==null)return[];var h=l.length;return h>1&&s(u,l[0],l[1])?l=[]:h>2&&s(l[0],l[1],l[2])&&(l=[l[0]]),n(u,e(l,1),[])});d.exports=o},13217:(d,g,t)=>{var e=t(14259);function n(r){var s=r==null?0:r.length;return s?e(r,1,s):[]}d.exports=n},69572:(d,g,t)=>{var e=t(14259),n=t(40554);function r(s,o,u){return s&&s.length?(o=u||o===void 0?1:n(o),e(s,0,o<0?0:o)):[]}d.exports=r},18601:(d,g,t)=>{var e=t(14841),n=1/0,r=17976931348623157e292;function s(o){if(!o)return o===0?o:0;if(o=e(o),o===n||o===-n){var u=o<0?-1:1;return u*r}return o===o?o:0}d.exports=s},40554:(d,g,t)=>{var e=t(18601);function n(r){var s=e(r),o=s%1;return s===s?o?s-o:s:0}d.exports=n},14841:(d,g,t)=>{var e=t(27561),n=t(13218),r=t(33448),s=0/0,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,h=parseInt;function f(i){if(typeof i=="number")return i;if(r(i))return s;if(n(i)){var O=typeof i.valueOf=="function"?i.valueOf():i;i=n(O)?O+"":O}if(typeof i!="string")return i===0?i:+i;i=e(i);var E=u.test(i);return E||l.test(i)?h(i.slice(2),E?2:8):o.test(i)?s:+i}d.exports=f},82569:(d,g,t)=>{var e=t(20731),n=t(5976),r=t(29246),s=n(function(o,u){return r(o)?e(o,u):[]});d.exports=s},63122:(d,g,t)=>{"use strict";t.d(g,{U:()=>E,y:()=>i});var e=t(85893),n=t(67294),r=t(71997),s=t(31254),o=t(92058),u=t(10574),l=t(96987),h=t(16607);const f=({theme:m,expanded:p,variant:R,disabled:C,error:x})=>x?`1px solid ${m.colors.danger600} !important`:C?`1px solid ${m.colors.neutral150}`:p?`1px solid ${m.colors.primary600}`:R==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,i=(0,r.default)(u.Z)``,O=(0,r.default)(h.x)`
  border: ${f};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${i} {
      color: ${({theme:m,expanded:p})=>p?void 0:m.colors.primary700};
    }

    ${u.Z} {
      color: ${({theme:m,expanded:p})=>p?void 0:m.colors.primary600};
    }

    & > ${l.k} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,E=({children:m,disabled:p=!1,error:R,expanded:C=!1,hasErrorMessage:x=!0,id:j,onToggle:S,toggle:L,size:K="M",variant:$="primary",shadow:w})=>{const W=(0,o.M)(j),J=n.useMemo(()=>({expanded:C,onToggle:S,toggle:L,id:W,size:K,variant:$,disabled:p}),[p,C,W,S,K,L,$]);return(0,e.jsxs)(s.S.Provider,{value:J,children:[(0,e.jsx)(O,{"data-strapi-expanded":C,disabled:p,"aria-disabled":p,expanded:C,hasRadius:!0,variant:$,error:R,shadow:w,children:m}),R&&x&&(0,e.jsx)(h.x,{paddingTop:1,children:(0,e.jsx)(u.Z,{variant:"pi",textColor:"danger600",children:R})})]})}},68889:(d,g,t)=>{"use strict";t.d(g,{v:()=>s});var e=t(85893),n=t(31254),r=t(16607);const s=({children:o,...u})=>{const{expanded:l,id:h}=(0,n.A)();if(!l)return null;const f=`accordion-content-${h}`,i=`accordion-label-${h}`,O=`accordion-desc-${h}`;return(0,e.jsx)(r.x,{role:"region",id:f,"aria-labelledby":i,"aria-describedby":O,...u,children:o})}},31254:(d,g,t)=>{"use strict";t.d(g,{A:()=>r,S:()=>n});var e=t(67294);const n=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>(0,e.useContext)(n)},1744:(d,g,t)=>{"use strict";t.d(g,{B:()=>m});var e=t(85893),n=t(58471),r=t(71997),s=t(63122),o=t(31254);const u=({expanded:p,disabled:R,variant:C})=>{let x="neutral100";return p?x="primary100":R?x="neutral150":C==="primary"&&(x="neutral0"),x};var l=t(58753),h=t(85200),f=t(96987),i=t(10574);const O=(0,r.default)(l.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:p,expanded:R})=>R?p.colors.primary600:p.colors.neutral500};
    }
  }
`,E=(0,r.default)(f.k)`
  min-height: ${({theme:p,size:R})=>p.sizes.accordions[R]};
  border-radius: ${({theme:p,expanded:R})=>R?`${p.borderRadius} ${p.borderRadius} 0 0`:p.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:p})=>p.colors.primary600};
      }
    }
  }
`,m=({title:p,description:R,as:C="span",togglePosition:x="right",action:j,...S})=>{const{onToggle:L,toggle:K,expanded:$,id:w,size:W,variant:J,disabled:H}=(0,o.A)(),ce=`accordion-content-${w}`,ne=`accordion-label-${w}`,de=`accordion-desc-${w}`,Q=W==="M"?6:4,se=W==="M"?Q:Q-2,fe=u({expanded:$,disabled:H,variant:J}),F={as:C,fontWeight:W==="S"?"bold":void 0,id:ne,textColor:$?"primary600":"neutral700",ellipsis:!0,variant:W==="M"?"delta":void 0},ue=$?"primary600":"neutral600",re=$?"primary200":"neutral200",q=W==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{H||(K&&!L?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),K()):L&&L())},ae=(0,e.jsx)(f.k,{justifyContent:"center",borderRadius:"50%",height:q,width:q,transform:$?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:re,cursor:H?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(h.J,{as:n.Z,width:W==="M"?`${11/16}rem`:`${8/16}rem`,color:$?"primary600":"neutral600"})});return(0,e.jsx)(E,{paddingBottom:se,paddingLeft:Q,paddingRight:Q,paddingTop:se,background:fe,expanded:$,size:W,justifyContent:"space-between",cursor:H?"not-allowed":"",children:(0,e.jsxs)(f.k,{gap:3,flex:1,maxWidth:"100%",children:[x==="left"&&ae,(0,e.jsx)(O,{onClick:_,"aria-disabled":H,"aria-expanded":$,"aria-controls":ce,"aria-labelledby":ne,"data-strapi-accordion-toggle":!0,expanded:$,type:"button",flex:1,minWidth:0,...S,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.y,{...F,children:p}),R&&(0,e.jsx)(i.Z,{as:"p",id:de,textColor:ue,children:R})]})}),x==="right"&&(0,e.jsxs)(f.k,{gap:3,children:[ae,j]}),x==="left"&&j]})})}},55040:(d,g,t)=>{"use strict";t.d(g,{Z:()=>r});var e=t(85893),n=t(96987);const r=({startActions:s,endActions:o})=>!s&&!o?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:s}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:o})]})},34726:(d,g,t)=>{"use strict";t.d(g,{D:()=>r});var e=t(85893),n=t(16607);const r=({children:s})=>(0,e.jsx)(n.x,{paddingLeft:10,paddingRight:10,children:s})},90731:(d,g,t)=>{"use strict";t.d(g,{T:()=>i});var e=t(85893),n=t(67294),r=t(71997);const s=m=>{const p=(0,n.useRef)(null),[R,C]=(0,n.useState)(!0),x=([j])=>{C(j.isIntersecting)};return(0,n.useEffect)(()=>{const j=p.current,S=new IntersectionObserver(x,m);return j&&S.observe(p.current),()=>{j&&S.disconnect()}},[p,m]),[p,R]};var o=t(79698);const u=(m,p)=>{const R=(0,o.W)(p);(0,n.useLayoutEffect)(()=>{const C=new ResizeObserver(R);return Array.isArray(m)?m.forEach(x=>{x.current&&C.observe(x.current)}):m.current&&C.observe(m.current),()=>{C.disconnect()}},[m,R])};var l=t(16607),h=t(96987),f=t(10574);const i=m=>{const p=(0,n.useRef)(null),[R,C]=(0,n.useState)(null),[x,j]=s({root:null,rootMargin:"0px",threshold:0});return u(x,()=>{x.current&&C(x.current.getBoundingClientRect())}),(0,n.useEffect)(()=>{p.current&&C(p.current.getBoundingClientRect())},[p]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:R?.height},ref:x,children:j&&(0,e.jsx)(E,{ref:p,...m})}),!j&&(0,e.jsx)(E,{...m,sticky:!0,width:R?.width})]})};i.displayName="HeaderLayout";const O=(0,r.default)(l.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,E=n.forwardRef(({navigationAction:m,primaryAction:p,secondaryAction:R,subtitle:C,title:x,sticky:j,width:S,...L},K)=>{const $=typeof C=="string";return j?(0,e.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{children:[m&&(0,e.jsx)(l.x,{paddingRight:3,children:m}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(f.Z,{variant:"beta",as:"h1",...L,children:x}),$?(0,e.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:C}):C]}),R?(0,e.jsx)(l.x,{paddingLeft:4,children:R}):null]}),(0,e.jsx)(h.k,{children:p?(0,e.jsx)(l.x,{paddingLeft:2,children:p}):void 0})]})}):(0,e.jsxs)(l.x,{ref:K,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,e.jsx)(l.x,{paddingBottom:2,children:m}):null,(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{minWidth:0,children:[(0,e.jsx)(f.Z,{as:"h1",variant:"alpha",...L,children:x}),R?(0,e.jsx)(l.x,{paddingLeft:4,children:R}):null]}),p]}),$?(0,e.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:C}):C]})})},71590:(d,g,t)=>{"use strict";t.d(g,{A:()=>u});var e=t(85893),n=t(71997),r=t(16607);const s=(0,n.default)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,o=(0,n.default)(r.x)`
  overflow-x: hidden;
`,u=({sideNav:l,children:h})=>(0,e.jsxs)(s,{hasSideNav:Boolean(l),children:[l,(0,e.jsx)(o,{paddingBottom:10,children:h})]})},29824:(d,g,t)=>{"use strict";t.d(g,{r:()=>O});var e=t(85893),n=t(67294),r=t(62577),s=t(73727),o=t(71997),u=t(66362),l=t(10574),h=t(16607);const f=o.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:E})=>E?"none":void 0};
  color: ${({disabled:E,theme:m})=>E?m.colors.neutral600:m.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${l.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:E})=>E.colors.primary500};
  }

  &:active {
    color: ${({theme:E})=>E.colors.primary700};
  }

  ${u.BF};
`,i=(0,o.default)(h.x)`
  display: flex;
`,O=n.forwardRef(({children:E,href:m,to:p,disabled:R=!1,startIcon:C,endIcon:x,...j},S)=>{const L=m?"_blank":void 0,K=m?"noreferrer noopener":void 0;return(0,e.jsxs)(f,{as:p&&!R?s.OL:"a",target:L,rel:K,to:R?void 0:p,href:R?"#":m,disabled:R,ref:S,...j,children:[C&&(0,e.jsx)(i,{as:"span","aria-hidden":!0,paddingRight:2,children:C}),(0,e.jsx)(l.Z,{children:E}),x&&!m&&(0,e.jsx)(i,{as:"span","aria-hidden":!0,paddingLeft:2,children:x}),m&&(0,e.jsx)(i,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(r.Z,{})})]})})},40720:(d,g,t)=>{"use strict";t.d(g,{o:()=>o});var e=t(85893),n=t(71997),r=t(16607);const s=(0,n.default)(r.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,o=({labelledBy:u="main-content-title",...l})=>(0,e.jsx)(s,{"aria-labelledby":u,as:"main",id:"main-content",tabIndex:-1,...l})},97695:(d,g,t)=>{"use strict";t.d(g,{Z:()=>r});var e=t(85893);const n=s=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=n},40989:(d,g,t)=>{"use strict";t.d(g,{Z:()=>r});var e=t(85893);const n=s=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),r=n}}]);
