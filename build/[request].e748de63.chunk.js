"use strict";(self.webpackChunkblog_project=self.webpackChunkblog_project||[]).push([[6750],{47699:(q,f,e)=>{e.r(f),e.d(f,{default:()=>w});var t=e(67294),y=e(16550),i=e(30972),M=e(44478);const m={getAllPosts:async()=>await(0,i.WY)("/post/find",{method:"GET"}),addPost:async n=>await(0,i.WY)("/post/create",{method:"POST",body:{data:n}}),togglePost:async n=>await(0,i.WY)(`/post/toggle/${n}`,{method:"PUT"}),editPost:async(n,r)=>await(0,i.WY)(`/post/update/${n}`,{method:"PUT",body:{data:r}}),deletePost:async n=>await(0,i.WY)(`/post/delete/${n}`,{method:"DELETE"})};var g=e(58136),A=e(66342),P=e(35163),F=e(46003),L=e.n(F);const D=()=>t.createElement("svg",{width:"159",height:"88",viewBox:"0 0 159 88",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z",fill:"#DBDBFA"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z",fill:"white"}),t.createElement("path",{d:"M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z",stroke:"#7E7BF6",strokeWidth:"2.5"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934",fill:"#F0F0FF"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z",fill:"white",stroke:"#7F7CFA",strokeWidth:"2.5"}),t.createElement("path",{d:"M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044",stroke:"#807EFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z",stroke:"#817FFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}));var I=e(74622),S=e(36854),W=e(10574),Z=e(71543),R=e(38670),V=e(37022),T=e(12473);function j({setShowModal:n,addPost:r}){const[c,u]=(0,t.useState)(""),d=async o=>{o.preventDefault(),o.stopPropagation();try{await r({name:c}),n(!1)}catch(h){console.log("error",h)}},a=()=>c.length>40?"Content is too long":null;return t.createElement(I.P,{onClose:()=>n(!1),labelledBy:"title",as:"form",onSubmit:d},t.createElement(S.x,null,t.createElement(W.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},"Add Post")),t.createElement(Z.f,null,t.createElement(R.o,{placeholder:"What do you need to do?",label:"Name",name:"text",hint:"Max 40 characters",error:a(),onChange:o=>u(o.target.value),value:c})),t.createElement(V.m,{startActions:t.createElement(T.z,{onClick:()=>n(!1),variant:"tertiary"},"Cancel"),endActions:t.createElement(T.z,{type:"submit"},"Add Post")}))}var l=e(14772),H=e(93289),x=e(86931),E=e(84704),B=e(20338),Y=e(7809),$=e(77811),k=e(49006),z=e(59391),N=e.n(z),O=e(8246),U=e.n(O);function G({value:n,checkboxID:r,callback:c,disabled:u}){const[d,a]=(0,t.useState)(n);function o(){a(!d),c&&c({id:r,value:!d})}return t.createElement($.BaseCheckbox,{checked:d,onChange:o,disabled:u})}function J({value:n,onChange:r}){return t.createElement(k.TextInput,{type:"text","aria-label":"post-input",name:"post-input",error:n.length>40?"Text should be less than 40 characters":"",onChange:r,value:n})}function K({postData:n,togglePost:r,deletePost:c,editPost:u,setShowModal:d}){return t.createElement(H.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",padding:8,style:{marginTop:"10px"}},t.createElement(l.Table,{colCount:4,rowCount:10,footer:t.createElement(l.TFooter,{onClick:()=>d(!0),icon:t.createElement(L(),null)},"Add a post")},t.createElement(l.Thead,null,t.createElement(l.Tr,null,t.createElement(l.Th,null,t.createElement(E.Typography,{variant:"sigma"},"ID")),t.createElement(l.Th,null,t.createElement(E.Typography,{variant:"sigma"},"Post")),t.createElement(l.Th,null,t.createElement(E.Typography,{variant:"sigma"},"Status")),t.createElement(l.Th,null,t.createElement(Y.VisuallyHidden,null,"Actions")))),t.createElement(l.Tbody,null,n.map(a=>{const[o,h]=(0,t.useState)(a.name),[C,v]=(0,t.useState)(!1);return t.createElement(l.Tr,{key:a.id},t.createElement(l.Td,null,t.createElement(E.Typography,{textColor:"neutral800"},a.id)),t.createElement(l.Td,null,C?t.createElement(J,{value:o,onChange:p=>h(p.target.value)}):t.createElement(E.Typography,{textColor:"neutral800"},a.name)),t.createElement(l.Td,null,t.createElement(G,{value:a.isDone,checkboxID:a.id,callback:r,disabled:C})),t.createElement(l.Td,null,C?t.createElement(x.Flex,{style:{justifyContent:"end"}},t.createElement(P.Button,{onClick:()=>u(a.id,{name:o})},"Save")):t.createElement(x.Flex,{style:{justifyContent:"end"}},t.createElement(B.IconButton,{onClick:()=>v(!0),label:"Edit",noBorder:!0,icon:t.createElement(N(),null)}),t.createElement(H.Box,{paddingLeft:1},t.createElement(B.IconButton,{onClick:()=>c(a),label:"Delete",noBorder:!0,icon:t.createElement(U(),null)})))))}))))}const Q=()=>{const[n,r]=(0,t.useState)([]),[c,u]=(0,t.useState)(!1),[d,a]=(0,t.useState)(!0),o=async()=>{d===!1&&a(!0);try{const s=await m.getAllPosts();r(s),console.log("ok")}catch(s){console.log(s)}finally{a(!1)}};(0,t.useEffect)(()=>{(async()=>{await o()})()},[]);async function h(s){await m.addPost(s),await o()}async function C(s){await m.togglePost(s.id)}async function v(s){await m.deletePost(s.id),await o()}async function p(s,b){await m.editPost(s,b),await o()}return d?t.createElement(i.dO,null):t.createElement(g.Layout,null,t.createElement(g.BaseHeaderLayout,{title:"Post Plugin",subtitle:"All your posts in one place.",as:"h2"}),t.createElement(g.ContentLayout,null,postData.length===0?t.createElement(A.EmptyStateLayout,{icon:t.createElement(D,null),content:"You don't have any posts yet...",action:t.createElement(P.Button,{onClick:()=>u(!0),variant:"secondary",startIcon:t.createElement(L(),null)},"Add your first post")}):t.createElement(t.Fragment,null,t.createElement(PostCount,{count:postData.length}),t.createElement(K,{postData,setShowModal:u,togglePost:C,deletePost:v,editPost:p}))),c&&t.createElement(j,{setShowModal:u,addPost:h}))},X=(0,t.memo)(Q),w=()=>t.createElement("div",null,t.createElement(y.rs,null,t.createElement(y.AW,{path:`/plugins/${M.Z}`,component:X,exact:!0}),t.createElement(y.AW,{component:i.Hn})))}}]);