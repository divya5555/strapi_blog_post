"use strict";(self.webpackChunkblog_project=self.webpackChunkblog_project||[]).push([[7561],{4322:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(69186),c=t(90291),i=v=>v&&v.__esModule?v:{default:v};function r(v){if(v&&v.__esModule)return v;const x=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(v){for(const m in v)if(m!=="default"){const h=Object.getOwnPropertyDescriptor(v,m);Object.defineProperty(x,m,h.get?h:{enumerable:!0,get:()=>v[m]})}}return x.default=v,Object.freeze(x)}const n=r(l),g=i(s).default(c.Flex)`
  > svg {
    height: ${({theme:v})=>v.spaces[3]};
    width: ${({theme:v})=>v.spaces[3]};

    > g,
    path {
      fill: ${({theme:v})=>v.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${d.buttonFocusStyle}
`,j=n.forwardRef(({disabled:v,children:x,background:m="neutral0",...h},M)=>e.jsx(g,{ref:M,"aria-disabled":v,as:"button",type:"button",disabled:v,padding:2,hasRadius:!0,background:m,borderColor:"neutral200",cursor:"pointer",...h,children:x}));j.displayName="BaseButton",o.BaseButton=j,o.BaseButtonWrapper=g},47253:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(40057),c=t(26673),i=t(64428),r=t(18627),n=t(60665),a=h=>h&&h.__esModule?h:{default:h};function g(h){if(h&&h.__esModule)return h;const M=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(h){for(const y in h)if(y!=="default"){const T=Object.getOwnPropertyDescriptor(h,y);Object.defineProperty(M,y,T.get?T:{enumerable:!0,get:()=>h[y]})}}return M.default=h,Object.freeze(M)}const j=g(l),x=a(s).default.input`
  height: ${i.getCheckboxSize};
  min-width: ${i.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:h})=>h.borderRadius};
  border: 1px solid ${({theme:h})=>h.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:h})=>h.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:h})=>h.colors.primary600};
    border: 1px solid ${({theme:h})=>h.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${c}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${d}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:h})=>h.colors.neutral200};
    border: 1px solid ${({theme:h})=>h.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:h})=>h.colors.primary600};
    border: 1px solid ${({theme:h})=>h.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:h})=>h.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:h})=>h.colors.neutral200};
      border: 1px solid ${({theme:h})=>h.colors.neutral300};
      &:after {
        background-color: ${({theme:h})=>h.colors.neutral500};
      }
    }
  }
`,m=j.forwardRef(({indeterminate:h=!1,size:M="M",name:y,value:T=!1,onValueChange:f,...S},Z)=>{const p=j.useRef(null),b=r.useComposedRefs(p,Z);j.useEffect(()=>{p.current&&h?p.current.indeterminate=h:p.current.indeterminate=!1},[h]);const D=()=>{f&&f(!T)};return e.jsx(n.Box,{children:e.jsx(x,{size:M,checked:T,onChange:D,type:"checkbox",ref:b,name:y,...S})})});m.displayName="BaseCheckbox",o.BaseCheckbox=m},40057:u=>{const o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";u.exports=o},26673:u=>{const o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=";u.exports=o},77811:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(47253);o.BaseCheckbox=e.BaseCheckbox},64428:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=({size:e})=>e==="M"?"18px":"20px";o.getCheckboxSize=t},60665:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(71997),l=t(91554),s=t(60468),c=(n=>n&&n.__esModule?n:{default:n})(e),i={color:!0,cursor:!0,height:!0,width:!0},r=c.default.div.withConfig({shouldForwardProp:(n,a)=>!i[n]&&a(n)})`
  // Font
  font-size: ${({fontSize:n,theme:a})=>s.extractStyleFromTheme(a.fontSizes,n,n)};

  // Colors
  background: ${({theme:n,background:a})=>s.extractStyleFromTheme(n.colors,a,a)};
  color: ${({theme:n,color:a})=>s.extractStyleFromTheme(n.colors,a,void 0)};

  // Spaces
  ${({theme:n,padding:a})=>l("padding",a,n)}
  ${({theme:n,paddingTop:a})=>l("padding-top",a,n)}
  ${({theme:n,paddingRight:a})=>l("padding-right",a,n)}
  ${({theme:n,paddingBottom:a})=>l("padding-bottom",a,n)}
  ${({theme:n,paddingLeft:a})=>l("padding-left",a,n)}
  ${({theme:n,marginLeft:a})=>l("margin-left",a,n)}
  ${({theme:n,marginRight:a})=>l("margin-right",a,n)}
  ${({theme:n,marginTop:a})=>l("margin-top",a,n)}
  ${({theme:n,marginBottom:a})=>l("margin-bottom",a,n)}

  // Responsive hiding
  ${({theme:n,hiddenS:a})=>a?`${n.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:n,hiddenXS:a})=>a?`${n.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:n,hasRadius:a,borderRadius:g})=>a?n.borderRadius:g};
  border-style: ${({borderStyle:n})=>n};
  border-width: ${({borderWidth:n})=>n};
  border-color: ${({borderColor:n,theme:a})=>s.extractStyleFromTheme(a.colors,n,void 0)};
  border: ${({theme:n,borderColor:a,borderStyle:g,borderWidth:j})=>{if(a&&!g&&typeof j>"u")return`1px solid ${n.colors[a]}`}};

  // Shadows
  box-shadow: ${({theme:n,shadow:a})=>s.extractStyleFromTheme(n.shadows,a,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:n})=>n};
  &:hover {
    ${({_hover:n,theme:a})=>n?n(a):void 0}
  }

  // Display
  display: ${({display:n})=>n};

  // Position
  position: ${({position:n})=>n};
  left: ${({left:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  right: ${({right:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  top: ${({top:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  bottom: ${({bottom:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  z-index: ${({zIndex:n})=>n};
  overflow: ${({overflow:n})=>n};

  // Size
  width: ${({width:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  max-width: ${({maxWidth:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  min-width: ${({minWidth:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  height: ${({height:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  max-height: ${({maxHeight:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};
  min-height: ${({minHeight:n,theme:a})=>s.extractStyleFromTheme(a.spaces,n,n)};

  // Animation
  transition: ${({transition:n})=>n};
  transform: ${({transform:n})=>n};
  animation: ${({animation:n})=>n};

  //Flexbox children props
  flex-shrink: ${({shrink:n})=>n};
  flex-grow: ${({grow:n})=>n};
  flex-basis: ${({basis:n})=>n};
  flex: ${({flex:n})=>n};

  // Text
  text-align: ${({textAlign:n})=>n};
  text-transform: ${({textTransform:n})=>n};
  line-height: ${({theme:n,lineHeight:a})=>s.extractStyleFromTheme(n.lineHeights,a,a)};

  // Cursor
  cursor: ${({cursor:n})=>n};
`;o.Box=r},93289:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(60665);o.Box=e.Box},70959:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(89952),d=t(71997),c=t(30240),i=t(60892),r=t(4322),n=t(60665),a=t(4583),g=t(90291),j=T=>T&&T.__esModule?T:{default:T},v=j(l),x=j(d),m=d.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,h=x.default(s.Loader)`
  animation: ${m} 2s infinite linear;
  will-change: transform;
`,M=x.default(r.BaseButton)`
  height: ${({theme:T,size:f})=>T.sizes.button[f]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${i.getDisabledStyle}

    &:active {
      ${i.getDisabledStyle}
    }
  }

  &:hover {
    ${i.getHoverStyle}
  }

  &:active {
    ${i.getActiveStyle}
  }

  ${i.getVariantStyle}
`,y=v.default.forwardRef(({variant:T=c.DEFAULT,startIcon:f,endIcon:S,disabled:Z=!1,children:p,onClick:b,size:D=c.BUTTON_SIZES[0],loading:R=!1,fullWidth:C=!1,...B},L)=>{const O=Z||R,P=A=>{!O&&b&&b(A)};return e.jsxs(M,{ref:L,"aria-disabled":O,disabled:O,size:D,variant:T,onClick:P,fullWidth:C,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:C,justifyContent:C?"center":void 0,paddingLeft:4,paddingRight:4,width:C?"100%":void 0,...B,children:[(f||R)&&e.jsx(n.Box,{"aria-hidden":!0,children:R?e.jsx(h,{}):f}),e.jsx(a.Typography,{variant:D==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:p}),S&&e.jsx(g.Flex,{"aria-hidden":!0,children:S})]})});y.displayName="Button",o.Button=y,o.ButtonWrapper=M},30240:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="success-light",e="danger-light",l="default",s="tertiary",d="secondary",c="danger",i="success",r="ghost",n=[t,e],a=[l,s,d,c,i,r,...n],g=["S","M","L"];o.BUTTON_SIZES=g,o.DANGER=c,o.DANGER_LIGHT=e,o.DEFAULT=l,o.GHOST=r,o.LIGHT_VARIANTS=n,o.SECONDARY=d,o.SUCCESS=i,o.SUCCESS_LIGHT=t,o.TERTIARY=s,o.VARIANTS=a},35163:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(70959);o.Button=e.Button,o.ButtonWrapper=e.ButtonWrapper},60892:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(30240),l=t(4583),s=n=>n===e.SUCCESS_LIGHT||n===e.DANGER_LIGHT?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.TERTIARY?"neutral":n===e.DEFAULT||n===e.SECONDARY||e.VARIANTS.every(a=>a!==n)?"primary":`${n}`,d=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${l.Typography} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,c=({theme:n,variant:a})=>[...e.LIGHT_VARIANTS,e.SECONDARY].includes(a)?`
      background-color: ${n.colors.neutral0};
    `:a===e.TERTIARY?`
      background-color: ${n.colors.neutral100};
    `:a===e.GHOST?`
      background-color: ${n.colors.neutral100};
    `:a===e.DEFAULT?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${s(a)}500`]};
    background: ${n.colors[`${s(a)}500`]};
  `,i=({theme:n,variant:a})=>[...e.LIGHT_VARIANTS,e.SECONDARY].includes(a)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${s(a)}600`]};
      ${l.Typography} {
        color: ${n.colors[`${s(a)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${s(a)}600`]};
        }
      }
    `:a===e.TERTIARY?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${s(a)}600`]};
    background: ${n.colors[`${s(a)}600`]};
  `,r=({theme:n,variant:a})=>{switch(a){case e.DANGER_LIGHT:case e.SUCCESS_LIGHT:case e.SECONDARY:return`
          border: 1px solid ${n.colors[`${s(a)}200`]};
          background: ${n.colors[`${s(a)}100`]};
          ${l.Typography} {
            color: ${n.colors[`${s(a)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${s(a)}700`]};
            }
          }
        `;case e.TERTIARY:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${l.Typography} {
            color: ${n.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${n.colors.neutral800};
            }
          }
        `;case e.GHOST:return`
        border: 1px solid transparent;
        background: transparent;

        ${l.Typography} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case e.SUCCESS:case e.DANGER:return`
          border: 1px solid ${n.colors[`${s(a)}600`]};
          background: ${n.colors[`${s(a)}600`]};
          ${l.Typography} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}};o.getActiveStyle=i,o.getDisabledStyle=d,o.getHoverStyle=c,o.getVariantColorName=s,o.getVariantStyle=r},27906:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(60665),i=(n=>n&&n.__esModule?n:{default:n})(l).default(s.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:n})=>n?"margin: 0;":""}
`,r=({unsetMargin:n=!0,...a})=>e.jsx(i,{...a,background:"neutral150",as:"hr",unsetMargin:n});o.Divider=r},66096:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(60665),d=t(90291),c=t(4583),n=(g=>g&&g.__esModule?g:{default:g})(l).default(s.Box)`
  svg {
    height: ${88/16}rem;
  }
`,a=({icon:g,content:j,action:v,hasRadius:x=!0,shadow:m="tableShadow"})=>e.jsxs(d.Flex,{alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:x,shadow:m,children:[e.jsx(n,{paddingBottom:6,"aria-hidden":!0,children:g}),e.jsx(s.Box,{paddingBottom:4,children:e.jsx(c.Typography,{variant:"delta",as:"p",textAlign:"center",textColor:"neutral600",children:j})}),v]});o.EmptyStateLayout=a},66342:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(66096);o.EmptyStateLayout=e.EmptyStateLayout},58674:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(44158),d=t(24414),c=t(60665),i=l.forwardRef(({children:r,name:n,error:a,hint:g,id:j,required:v=!1,...x},m)=>{const h=d.useId(j),M=l.useMemo(()=>({name:n,id:h,error:a,hint:g,required:v}),[a,h,g,n,v]);return e.jsx(c.Box,{ref:m,...x,children:e.jsx(s.FieldContext.Provider,{value:M,children:r})})});o.Field=i},44158:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294),l=e.createContext({id:"",required:!1}),s=()=>e.useContext(l);o.FieldContext=l,o.useField=s},73582:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(44158),s=t(4583),d=()=>{const{id:c,error:i}=l.useField();return!i||typeof i!="string"?null:e.jsx(s.Typography,{variant:"pi",as:"p",id:`${c}-error`,textColor:"danger600","data-strapi-field-error":!0,children:i})};o.FieldError=d},92298:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(44158),s=t(4583),d=()=>{const{id:c,hint:i,error:r}=l.useField();return!i||r?null:e.jsx(s.Typography,{variant:"pi",as:"p",id:`${c}-hint`,textColor:"neutral600",children:i})};o.FieldHint=d},30969:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(44158),c=t(69186),i=t(60665),r=t(90291),a=(m=>m&&m.__esModule?m:{default:m})(s),g={S:6.5,M:10.5},j=l.forwardRef(({endAction:m,startAction:h,disabled:M=!1,onChange:y,size:T="M",...f},S)=>{const{id:Z,error:p,hint:b,name:D,required:R}=d.useField();let C;p?C=`${Z}-error`:b&&(C=`${Z}-hint`);const B=Boolean(p),L=O=>{!M&&y&&y(O)};return e.jsxs(x,{justifyContent:"space-between",hasError:B,disabled:M,children:[h?e.jsx(i.Box,{paddingLeft:3,paddingRight:2,children:h}):null,e.jsx(v,{id:Z,name:D,ref:S,"aria-describedby":C,"aria-invalid":B,"aria-disabled":M,disabled:M,"data-disabled":M?"":void 0,hasLeftAction:Boolean(h),hasRightAction:Boolean(m),onChange:L,"aria-required":R,$size:T,...f}),m?e.jsx(i.Box,{paddingLeft:2,paddingRight:3,children:m}):null]})}),v=a.default.input`
  border: none;
  border-radius: ${({theme:m})=>m.borderRadius};
  padding-bottom: ${({$size:m})=>`${g[m]/16}rem`};
  padding-left: ${({theme:m,hasLeftAction:h})=>h?0:m.spaces[4]};
  padding-right: ${({theme:m,hasRightAction:h})=>h?0:m.spaces[4]};
  padding-top: ${({$size:m})=>`${g[m]/16}rem`};
  cursor: ${m=>m["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:m})=>m.colors.neutral800};
  font-weight: 400;
  font-size: ${m=>m.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:m})=>m.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,x=a.default(r.Flex)`
  border: 1px solid ${({theme:m,hasError:h})=>h?m.colors.danger600:m.colors.neutral200};
  border-radius: ${({theme:m})=>m.borderRadius};
  background: ${({theme:m})=>m.colors.neutral0};
  ${c.inputFocusStyle()}

  ${({theme:m,disabled:h})=>h?s.css`
          color: ${m.colors.neutral600};
          background: ${m.colors.neutral150};
        `:void 0}
`;o.FieldInput=j,o.InputWrapper=x},64919:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(44158),c=t(52075),i=t(4583),r=t(90291),a=(h=>h&&h.__esModule?h:{default:h})(s),g=c.once(console.warn),j=l.forwardRef(({children:h,action:M,required:y,...T},f)=>{const{id:S,required:Z}=d.useField(),p=Z||y;return y!==void 0&&g('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),e.jsxs(v,{ref:f,variant:"pi",textColor:"neutral800",htmlFor:S,fontWeight:"bold",as:"label",...T,children:[h,p&&e.jsx(x,{textColor:"danger600",children:"*"}),M&&e.jsx(m,{marginLeft:1,children:M})]})}),v=a.default(i.Typography)`
  display: flex;
  align-items: center;
`,x=a.default(i.Typography)`
  line-height: 0;
`,m=a.default(r.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:h})=>h.colors.neutral500};
  }
`;o.FieldLabel=j},90291:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(71997),l=t(91554),s=t(60665),c=(n=>n&&n.__esModule?n:{default:n})(e),i={direction:!0},r=c.default(s.Box).withConfig({shouldForwardProp:(n,a)=>!i[n]&&a(n)})`
  align-items: ${({alignItems:n="center"})=>n};
  display: ${({display:n="flex",inline:a})=>a?"inline-flex":n};
  flex-direction: ${({direction:n="row"})=>n};
  flex-shrink: ${({shrink:n})=>n};
  flex-wrap: ${({wrap:n})=>n};
  ${({gap:n,theme:a})=>l("gap",n,a)};
  justify-content: ${({justifyContent:n})=>n};
`;o.Flex=r},86931:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(90291);o.Flex=e.Flex},35063:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(91554),d=t(60665),r=(a=>a&&a.__esModule?a:{default:a})(l).default(d.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:a})=>a}, 1fr);
  ${({theme:a,gap:g})=>s("gap",g,a)}
`,n=a=>{const{gap:g="0",gridCols:j=12,...v}=a;return e.jsx(r,{gap:g,gridCols:j,...v})};o.Grid=n},91259:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(71997),l=t(60665),c=(i=>i&&i.__esModule?i:{default:i})(e).default(l.Box)`
  grid-column: span ${({col:i})=>i};
  max-width: 100%;

  ${({theme:i})=>i.mediaQueries.tablet} {
    grid-column: span ${({s:i})=>i};
  }

  ${({theme:i})=>i.mediaQueries.mobile} {
    grid-column: span ${({xs:i})=>i};
  }
`;o.GridItem=c},24272:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(98365),c=t(70252),i=t(4322),r=t(90291),n=f=>f&&f.__esModule?f:{default:f};function a(f){if(f&&f.__esModule)return f;const S=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(f){for(const Z in f)if(Z!=="default"){const p=Object.getOwnPropertyDescriptor(f,Z);Object.defineProperty(S,Z,p.get?p:{enumerable:!0,get:()=>f[Z]})}}return S.default=f,Object.freeze(S)}const g=a(l),j=n(s),v="tertiary",x="secondary",m=["S","M","L"],h=[v,x],M=g.forwardRef(({label:f,background:S,borderWidth:Z,noBorder:p=!1,children:b,icon:D,disabled:R=!1,onClick:C,size:B=m[0],"aria-label":L,variant:O=h[0],...P},A)=>{const $=I=>{!R&&C&&C(I)},w=e.jsxs(y,{"aria-disabled":R,background:R?"neutral150":S,borderWidth:p?0:Z,justifyContent:"center",...P,ref:A,size:B,onClick:$,variant:O,children:[e.jsx(d.VisuallyHidden,{as:"span",children:f??L}),g.cloneElement(D||b,{"aria-hidden":!0,focusable:!1})]});return f?e.jsx(c.Tooltip,{label:f,children:w}):w}),y=j.default(i.BaseButton)`
  background-color: ${({theme:f,variant:S})=>{if(S===x)return f.colors.primary100}};
  border-color: ${({theme:f,variant:S})=>S===x?f.colors.primary200:f.colors.neutral200};
  height: ${({theme:f,size:S})=>f.sizes.button[S]};
  width: ${({theme:f,size:S})=>f.sizes.button[S]};

  svg {
    g,
    path {
      fill: ${({theme:f,variant:S})=>S===x?f.colors.primary500:f.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:f,variant:S})=>S===x?f.colors.primary600:f.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:f})=>f.colors.neutral600};
      }
    }
  }
`,T=j.default(r.Flex)`
  & span:first-child button {
    border-left: 1px solid ${({theme:f})=>f.colors.neutral200};
    border-radius: ${({theme:f})=>`${f.borderRadius} 0 0 ${f.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:f})=>`0 ${f.borderRadius} ${f.borderRadius} 0`};
  }

  & ${y} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:f})=>f.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:f})=>f.colors.neutral100};

      svg {
        path {
          fill: ${({theme:f})=>f.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:f})=>f.colors.neutral150};
      svg {
        path {
          fill: ${({theme:f})=>f.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:f})=>f.colors.neutral600};
        }
      }
    }
  }
`;o.IconButton=M,o.IconButtonGroup=T},20338:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(24272);o.IconButton=e.IconButton,o.IconButtonGroup=e.IconButtonGroup},8066:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(90291),s=({startActions:d,endActions:c})=>!d&&!c?null:e.jsxs(l.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[e.jsx(l.Flex,{gap:2,wrap:"wrap",children:d}),e.jsx(l.Flex,{gap:2,shrink:0,wrap:"wrap",children:c})]});o.ActionLayout=s},69786:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(60665),s=({children:d})=>e.jsx(l.Box,{paddingLeft:10,paddingRight:10,children:d});o.ContentLayout=s},12283:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(71997),d=(c=>c&&c.__esModule?c:{default:c})(e).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:c})=>c.spaces[4]};
`;o.GridLayout=d},11756:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(90082),c=t(30860),i=t(60665),r=t(90291),n=t(4583),a=h=>h&&h.__esModule?h:{default:h},g=a(l),j=a(s),v=h=>{const M=l.useRef(null),[y,T]=l.useState(null),[f,S]=d.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return c.useResizeObserver(f,()=>{f.current&&T(f.current.getBoundingClientRect())}),l.useEffect(()=>{M.current&&T(M.current.getBoundingClientRect())},[M]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:y?.height},ref:f,children:S&&e.jsx(m,{ref:M,...h})}),!S&&e.jsx(m,{...h,sticky:!0,width:y?.width})]})};v.displayName="HeaderLayout";const x=j.default(i.Box)`
  width: ${({width:h})=>h?`${h/16}rem`:void 0};
  z-index: ${({theme:h})=>h.zIndices[1]};
`,m=g.default.forwardRef(({navigationAction:h,primaryAction:M,secondaryAction:y,subtitle:T,title:f,sticky:S,width:Z,...p},b)=>{const D=typeof T=="string";return S?e.jsx(x,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:e.jsxs(r.Flex,{justifyContent:"space-between",children:[e.jsxs(r.Flex,{children:[h&&e.jsx(i.Box,{paddingRight:3,children:h}),e.jsxs(i.Box,{children:[e.jsx(n.Typography,{variant:"beta",as:"h1",...p,children:f}),D?e.jsx(n.Typography,{variant:"pi",textColor:"neutral600",children:T}):T]}),y?e.jsx(i.Box,{paddingLeft:4,children:y}):null]}),e.jsx(r.Flex,{children:M?e.jsx(i.Box,{paddingLeft:2,children:M}):void 0})]})}):e.jsxs(i.Box,{ref:b,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:h?6:8,background:"neutral100","data-strapi-header":!0,children:[h?e.jsx(i.Box,{paddingBottom:2,children:h}):null,e.jsxs(r.Flex,{justifyContent:"space-between",children:[e.jsxs(r.Flex,{minWidth:0,children:[e.jsx(n.Typography,{as:"h1",variant:"alpha",...p,children:f}),y?e.jsx(i.Box,{paddingLeft:4,children:y}):null]}),M]}),D?e.jsx(n.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:T}):T]})});o.BaseHeaderLayout=m,o.HeaderLayout=v},68:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(60665),c=(a=>a&&a.__esModule?a:{default:a})(l),i=c.default(s.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,r=c.default(s.Box)`
  overflow-x: hidden;
`,n=({sideNav:a,children:g})=>e.jsxs(i,{hasSideNav:Boolean(a),children:[a,e.jsx(r,{paddingBottom:10,children:g})]});o.Layout=n},93070:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(35063),s=t(91259),d=t(60665),c=({startCol:i,endCol:r})=>e.jsxs(l.Grid,{gap:4,children:[e.jsx(s.GridItem,{col:9,s:12,children:e.jsx(d.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:i})}),e.jsx(s.GridItem,{col:3,s:12,children:e.jsx(d.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:r})})]});o.TwoColsLayout=c},58136:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(68),l=t(8066),s=t(69786),d=t(11756),c=t(93070),i=t(12283);o.Layout=e.Layout,o.ActionLayout=l.ActionLayout,o.ContentLayout=s.ContentLayout,o.BaseHeaderLayout=d.BaseHeaderLayout,o.HeaderLayout=d.HeaderLayout,o.TwoColsLayout=c.TwoColsLayout,o.GridLayout=i.GridLayout},7480:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(73935),d=t(60665);function c(n){if(n&&n.__esModule)return n;const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const g in n)if(g!=="default"){const j=Object.getOwnPropertyDescriptor(n,g);Object.defineProperty(a,g,j.get?j:{enumerable:!0,get:()=>n[g]})}}return a.default=n,Object.freeze(a)}const r=c(l).forwardRef(({container:n=globalThis?.document?.body,...a},g)=>n?s.createPortal(e.jsx(d.Box,{ref:g,...a}),n):null);r.displayName="Portal",o.Portal=r},30666:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(51226),d=t(15809),c=t(13270),i=t(60665),r=a=>e.jsx(n,{...a,as:"th"}),n=({coords:a={col:0,row:0},as:g="td",...j})=>{const v=l.useRef(null),{rowIndex:x,colIndex:m,setTableValues:h}=s.useTable(),[M,y]=l.useState(!1),T=Z=>{const p=d.getFocusableNodes(v.current,!0);if(p.length===0||p.length===1&&d.getFocusableNodesWithKeyboardNav(p).length===0)return;if(p.length>1&&!p.find(D=>D.tagName!=="BUTTON")){Z.preventDefault();const D=p.findIndex(R=>R===document.activeElement);if(Z.key===c.KeyboardKeys.RIGHT){const R=p[D+1];R&&(Z.stopPropagation(),R.focus())}else if(Z.key===c.KeyboardKeys.LEFT){const R=p[D-1];R&&(Z.stopPropagation(),R.focus())}return}const b=Z.key===c.KeyboardKeys.ENTER;if(b&&!M)y(!0);else if((Z.key===c.KeyboardKeys.ESCAPE||b)&&M){if(b&&document.activeElement?.tagName==="A")return;y(!1),v.current.focus()}else M&&Z.stopPropagation()},f=x===a.row-1&&m===a.col-1;l.useLayoutEffect(()=>{const Z=d.getFocusableNodes(v.current,!0);Z.length===0||Z.length===1&&d.getFocusableNodesWithKeyboardNav(Z).length!==0||Z.length>1&&Boolean(Z.find(p=>p.tagName!=="BUTTON"))?(v.current.setAttribute("tabIndex",!M&&f?"0":"-1"),Z.forEach((p,b)=>{p.setAttribute("tabIndex",M?"0":"-1"),M&&b===0&&p.focus()})):Z.forEach(p=>{p.setAttribute("tabIndex",f?"0":"-1")})},[M,f]);const S=l.useCallback(()=>{const Z=d.getFocusableNodes(v.current,!0);Z.length>=1&&(d.getFocusableNodesWithKeyboardNav(Z).length!==0||!Z.find(p=>p.tagName!=="BUTTON"))&&y(!0),h({rowIndex:a.row-1,colIndex:a.col-1})},[a,h]);return l.useLayoutEffect(()=>{const Z=v.current;return d.getFocusableNodes(Z,!0).forEach(b=>{b.addEventListener("focus",S)}),()=>{d.getFocusableNodes(Z,!0).forEach(D=>{D.removeEventListener("focus",S)})}},[S]),e.jsx(i.Box,{role:"gridcell",as:g,ref:v,onKeyDown:T,...j})};o.RawTd=n,o.RawTh=r},16532:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(97008),d=t(51226),c=t(13270),i=({colCount:r,rowCount:n,jumpStep:a=3,initialCol:g=0,initialRow:j=0,...v})=>{const x=l.useRef(null),m=l.useRef(!1),[h,M]=l.useState(j),[y,T]=l.useState(g),f=l.useCallback(({colIndex:p,rowIndex:b})=>{T(p),M(b)},[]);l.useEffect(()=>{m.current&&s.focusFocusable(x.current),m.current||(m.current=!0)},[y,h]);const S=p=>{switch(p.key){case c.KeyboardKeys.RIGHT:{p.preventDefault(),T(b=>b<r-1?b+1:b);break}case c.KeyboardKeys.LEFT:{p.preventDefault(),T(b=>b>0?b-1:b);break}case c.KeyboardKeys.UP:{p.preventDefault(),M(b=>b>0?b-1:b);break}case c.KeyboardKeys.DOWN:{p.preventDefault(),M(b=>b<n-1?b+1:b);break}case c.KeyboardKeys.HOME:{p.preventDefault(),p.ctrlKey&&M(0),T(0);break}case c.KeyboardKeys.END:{p.preventDefault(),p.ctrlKey&&M(n-1),T(r-1);break}case c.KeyboardKeys.PAGE_DOWN:{p.preventDefault(),M(b=>b+a<n?b+a:n-1);break}case c.KeyboardKeys.PAGE_UP:{p.preventDefault(),M(b=>b-a>0?b-a:0);break}}},Z=l.useMemo(()=>({rowIndex:h,colIndex:y,setTableValues:f}),[y,h,f]);return e.jsx(d.RawTableContext.Provider,{value:Z,children:e.jsx("table",{role:"grid",ref:x,"aria-rowcount":n,"aria-colcount":r,onKeyDown:S,...v})})};o.RawTable=i},51226:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294),l=e.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),s=()=>e.useContext(l);o.RawTableContext=l,o.useTable=s},54630:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=({children:d,...c})=>{const i=l.Children.toArray(d).map((r,n)=>l.isValidElement(r)?l.cloneElement(r,{"aria-rowindex":n+2}):r);return e.jsx("tbody",{...c,children:i})};o.RawTbody=s},62798:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=({children:d,...c})=>{const i=l.Children.toArray(d).map(r=>l.isValidElement(r)?l.cloneElement(r,{"aria-rowindex":1}):r);return e.jsx("thead",{...c,children:i})};o.RawThead=s},10964:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(60665),d=({children:c,...i})=>{const r=l.Children.toArray(c).map((n,a)=>l.isValidElement(n)?l.cloneElement(n,{"aria-colindex":a+1,coords:{col:a+1,row:i["aria-rowindex"]}}):n);return e.jsx(s.Box,{as:"tr",...i,children:r})};o.RawTr=d},97008:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=e=>{const l=e.querySelector('[tabindex="0"]');l&&l.focus()};o.focusFocusable=t},60211:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(30666),d=t(90291),i=(j=>j&&j.__esModule?j:{default:j})(l),r=i.default(s.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:j})=>j.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,n=i.default.span`
  svg {
    height: ${4/16}rem;
  }
`,a=({children:j,action:v,...x})=>e.jsx(r,{as:s.RawTh,...x,children:e.jsxs(d.Flex,{children:[j,e.jsx(n,{children:v})]})}),g=({children:j,...v})=>e.jsx(r,{...v,children:j});o.Td=g,o.Th=a},20950:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(60665),d=t(27906),c=t(90291),i=t(4583),n=(v=>v&&v.__esModule?v:{default:v})(l),a=n.default(s.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:v})=>v.colors.primary600};
  }
`,g=n.default(s.Box)`
  border-radius: 0 0 ${({theme:v})=>v.borderRadius} ${({theme:v})=>v.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,j=({children:v,icon:x,...m})=>e.jsxs("div",{children:[e.jsx(d.Divider,{}),e.jsx(g,{as:"button",background:"primary100",padding:5,...m,children:e.jsxs(c.Flex,{children:[e.jsx(a,{"aria-hidden":!0,background:"primary200",children:x}),e.jsx(s.Box,{paddingLeft:3,children:e.jsx(i.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:v})})]})})]});o.TFooter=j},47260:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(16532),c=t(60665),r=(x=>x&&x.__esModule?x:{default:x})(s),n=r.default(c.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:x})=>x.colors.neutral150};
`,a=r.default(d.RawTable)`
  width: 100%;
  white-space: nowrap;
`,g=r.default(c.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:x})=>x==="both"||x==="left"?"''":void 0};
    box-shadow: ${({theme:x})=>x.shadows.tableShadow};
    width: ${({theme:x})=>x.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:x})=>x==="both"||x==="right"?"''":void 0};
    box-shadow: ${({theme:x})=>x.shadows.tableShadow};
    width: ${({theme:x})=>x.spaces[2]};
    right: 0;
    top: 0;
  }
`,j=r.default(c.Box)`
  overflow-x: auto;
`,v=({footer:x,...m})=>{const h=l.useRef(null),[M,y]=l.useState(),T=f=>{const S=f.target.scrollWidth-f.target.clientWidth;if(f.target.scrollLeft===0){y("right");return}if(f.target.scrollLeft===S){y("left");return}f.target.scrollLeft>0&&y("both")};return l.useEffect(()=>{h.current.scrollWidth>h.current.clientWidth&&y("right")},[]),e.jsxs(n,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(g,{overflowing:M,position:"relative",children:e.jsx(j,{ref:h,onScroll:T,paddingLeft:6,paddingRight:6,children:e.jsx(a,{...m})})}),x]})};o.Table=v},30076:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(54630),i=(n=>n&&n.__esModule?n:{default:n})(l).default(s.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,r=({children:n,...a})=>e.jsx(i,{...a,children:n});o.Tbody=r},7815:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(62798),i=(n=>n&&n.__esModule?n:{default:n})(l).default(s.RawThead)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};
`,r=({children:n,...a})=>e.jsx(i,{...a,children:n});o.Thead=r},16444:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(71997),s=t(10964),i=(n=>n&&n.__esModule?n:{default:n})(l).default(s.RawTr)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:n})=>n.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:n})=>n.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,r=n=>e.jsx(i,{...n});o.Tr=r},14772:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(47260),l=t(30076),s=t(7815),d=t(16444),c=t(60211),i=t(20950);o.Table=e.Table,o.Tbody=l.Tbody,o.Thead=s.Thead,o.Tr=d.Tr,o.Td=c.Td,o.Th=c.Th,o.TFooter=i.TFooter},94051:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(24414),d=t(58674),c=t(90291),i=t(64919),r=t(30969),n=t(92298),a=t(73582),g=l.forwardRef(({name:j,hint:v,error:x,label:m,labelAction:h,id:M,required:y,...T},f)=>{const S=s.useId(M),Z=l.useRef(null),p=l.useRef(null);if(!m&&!T["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return l.useImperativeHandle(f,()=>({input:p,inputWrapperRef:Z}),[]),e.jsx("div",{ref:Z,children:e.jsx(d.Field,{name:j,hint:v,error:x,id:S,required:y,children:e.jsxs(c.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[m&&e.jsx(i.FieldLabel,{action:h,children:m}),e.jsx(r.FieldInput,{ref:p,...T}),e.jsx(n.FieldHint,{}),e.jsx(a.FieldError,{})]})})})});g.displayName="TextInput",o.TextInput=g},49006:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(94051);o.TextInput=e.TextInput},70252:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(85893),l=t(67294),s=t(71997),d=t(73184),c=t(93251),i=t(24414),r=t(7480),n=t(60665),a=t(98365),g=t(4583),j=y=>y&&y.__esModule?y:{default:y};function v(y){if(y&&y.__esModule)return y;const T=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(y){for(const f in y)if(f!=="default"){const S=Object.getOwnPropertyDescriptor(y,f);Object.defineProperty(T,f,S.get?S:{enumerable:!0,get:()=>y[f]})}}return T.default=y,Object.freeze(T)}const x=v(l),h=j(s).default(n.Box)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:y})=>y?"revert":"none"};
`,M=({children:y,label:T,description:f,delay:S=500,position:Z="top",id:p,...b})=>{const D=i.useId(p),R=i.useId(),{visible:C,...B}=d.useTooltipHandlers(S),{tooltipWrapperRef:L,toggleSourceRef:O}=c.useTooltipLayout(C,Z),P=x.cloneElement(y,{tabIndex:0,"aria-labelledby":T?D:void 0,"aria-describedby":f?D:void 0,...B});return e.jsxs(e.Fragment,{children:[e.jsx(r.Portal,{children:e.jsxs(h,{id:D,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:L,visible:C,position:"absolute",...b,children:[C&&e.jsx(a.VisuallyHidden,{id:R,children:f}),e.jsx(g.Typography,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:T||f})]})}),e.jsx("span",{ref:O,children:P})]})};o.Tooltip=M},73184:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294),l=s=>{const[d,c]=e.useState(!1),i=e.useRef(null),r=()=>{typeof i.current=="number"&&(clearTimeout(i.current),i.current=null)};return e.useEffect(()=>()=>{r()},[]),{visible:d,onFocus:()=>{c(!0)},onBlur:()=>{c(!1)},onMouseEnter:()=>{i.current=setTimeout(()=>{c(!0)},s)},onMouseLeave:()=>{r(),c(!1)}}};o.useTooltipHandlers=l},93251:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294),l=t(43293),s=(d,c)=>{const i=e.useRef(null),r=e.useRef(null);return e.useLayoutEffect(()=>{if(d){const n=i.current,a=r.current;if(n&&a){const g=l.positionTooltip(n,a,c);n.style.left=`${g.left}px`,n.style.top=`${g.top}px`}}},[c,d]),{tooltipWrapperRef:i,toggleSourceRef:r}};o.useTooltipLayout=s},43293:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=8,e=(i,r)=>{const n=(i.width-r.width)/2,a=r.left-n,g=r.top+r.height+t+window.pageYOffset;return{left:a,top:g}},l=(i,r)=>{const n=(i.height-r.height)/2,a=r.left+r.width+t,g=r.top-n+window.pageYOffset;return{left:a,top:g}},s=(i,r)=>{const n=(i.height-r.height)/2,a=r.left-i.width-t,g=r.top-n+window.pageYOffset;return{left:a,top:g}},d=(i,r)=>{const n=(i.width-r.width)/2;let a=r.left-n,g=r.top-i.height-t+window.pageYOffset;const j=window.innerWidth-r.right;return r.left+i.width-j>window.innerWidth?(a=r.left-i.width-t,g=r.top+window.scrollY-r.height/2):a<0?(a=r.width+r.left+t,g=r.top+window.scrollY-i.height/2+t):g<0&&a>0&&(g=r.top+r.height+t),{left:a,top:g}},c=(i,r,n)=>{const a=i.getBoundingClientRect(),g=r.getBoundingClientRect();return n==="bottom"?e(a,g):n==="right"?l(a,g):n==="left"?s(a,g):d(a,g)};o.positionTooltip=c},4583:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(71997),l=t(50933),s=t(60468),c=(n=>n&&n.__esModule?n:{default:n})(e),i={fontSize:!0,fontWeight:!0},r=c.default.span.withConfig({shouldForwardProp:(n,a)=>!i[n]&&a(n)})`
  ${l.variantStyle}
  ${l.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:n,fontWeight:a})=>s.extractStyleFromTheme(n.fontWeights,a,void 0)};
  font-size: ${({theme:n,fontSize:a})=>s.extractStyleFromTheme(n.fontSizes,a,void 0)};
  line-height: ${({theme:n,lineHeight:a})=>s.extractStyleFromTheme(n.lineHeights,a,a)};
  color: ${({theme:n,textColor:a})=>n.colors[a||"neutral800"]};
  text-align: ${({textAlign:n})=>n};
  text-decoration: ${({textDecoration:n})=>n};
  text-transform: ${({textTransform:n})=>n};
`;o.Typography=r},24866:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="alpha",e="beta",l="delta",s="epsilon",d="omega",c="pi",i="sigma",r=[t,e,l,s,d,c,i];o.ALPHA=t,o.BETA=e,o.DELTA=l,o.EPSILON=s,o.OMEGA=d,o.PI=c,o.SIGMA=i,o.TEXT_VARIANTS=r},84704:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(4583);o.Typography=e.Typography},50933:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(24866),l=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,s=({variant:d=e.OMEGA,theme:c})=>{switch(d){case e.ALPHA:return`
        font-weight: ${c.fontWeights.bold};
        font-size: ${c.fontSizes[5]};
        line-height: ${c.lineHeights[2]};
      `;case e.BETA:return`
        font-weight: ${c.fontWeights.bold};
        font-size: ${c.fontSizes[4]};
        line-height: ${c.lineHeights[1]};
      `;case e.DELTA:return`
        font-weight: ${c.fontWeights.semiBold};
        font-size: ${c.fontSizes[3]};
        line-height: ${c.lineHeights[2]};
      `;case e.EPSILON:return`
        font-size: ${c.fontSizes[3]};
        line-height: ${c.lineHeights[6]};
      `;case e.OMEGA:return`
        font-size: ${c.fontSizes[2]};
        line-height: ${c.lineHeights[4]};
      `;case e.PI:return`
        font-size: ${c.fontSizes[1]};
        line-height: ${c.lineHeights[3]};
      `;case e.SIGMA:return`
        font-weight: ${c.fontWeights.bold};
        font-size: ${c.fontSizes[0]};
        line-height: ${c.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${c.fontSizes[2]};
      `}};o.ellipsisStyle=l,o.variantStyle=s},98365:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(71997),d=(c=>c&&c.__esModule?c:{default:c})(e).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;o.VisuallyHidden=d},7809:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(98365);o.VisuallyHidden=e.VisuallyHidden},52075:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="[@strapi/design-system]:",e=l=>{const s=l;let d=!1;if(typeof s!="function")throw new TypeError(`${t} once requires a function parameter`);return(...c)=>{d||(s(...c),d=!0)}};o.PREFIX=t,o.once=e},15809:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=(l,s)=>[...l.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(i=>i.hasAttribute("disabled")?!1:s?!0:i.getAttribute("tabindex")!=="-1"),e=l=>l.filter(s=>s.tagName==="INPUT"?s.type!=="checkbox"&&s.type!=="radio":!1);o.getFocusableNodes=t,o.getFocusableNodesWithKeyboardNav=e},91554:u=>{const o=(t,e,l)=>{if(!e)return;let s=Array.isArray(e)?e:[];if(!Array.isArray(e)&&typeof e=="object"&&(s=[e?.desktop,e?.tablet,e?.mobile]),s.length>0)return s.reduce((i,r,n)=>{if(r)switch(n){case 0:return`${i}${t}: ${l.spaces[r]};`;case 1:return`${i}${l.mediaQueries.tablet}{${t}: ${l.spaces[r]};}`;case 2:return`${i}${l.mediaQueries.mobile}{${t}: ${l.spaces[r]};}`;default:return i}return i},"");const d=l.spaces[e]||e;return`${t}: ${d};`};u.exports=o},13270:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};o.KeyboardKeys=t},79511:(u,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});function t(l,s){return typeof l=="string"?!1:s in l}function e(l){return l&&typeof l=="object"&&!Array.isArray(l)}o.isKeyOf=t,o.isObject=e},60468:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(79511);function l(s,d,c){return d&&e.isKeyOf(s,d)?s[d]:c}o.extractStyleFromTheme=l},18627:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294);function l(r){if(r&&r.__esModule)return r;const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const a in r)if(a!=="default"){const g=Object.getOwnPropertyDescriptor(r,a);Object.defineProperty(n,a,g.get?g:{enumerable:!0,get:()=>r[a]})}}return n.default=r,Object.freeze(n)}const s=l(e);function d(r,n){typeof r=="function"?r(n):r!=null&&(r.current=n)}function c(...r){return n=>r.forEach(a=>d(a,n))}function i(...r){return s.useCallback(c(...r),r)}o.composeRefs=c,o.useComposedRefs=i},90082:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294),l=s=>{const d=e.useRef(null),[c,i]=e.useState(!0),r=([n])=>{i(n.isIntersecting)};return e.useEffect(()=>{const n=d.current,a=new IntersectionObserver(r,s);return n&&a.observe(d.current),()=>{n&&a.disconnect()}},[d,s]),[d,c]};o.useElementOnScreen=l},24414:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294),d=(r=>r&&r.__esModule?r:{default:r})(e).default["useId".toString()]||(()=>{});let c=0;const i=r=>{const[n,a]=e.useState(d());return e.useLayoutEffect(()=>{r||a(g=>g??String(c++))},[r]),r?.toString()??(n||"")};o.useId=i},30860:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(67294),l=t(61299),s=(d,c)=>{const i=l.useCallbackRef(c);e.useLayoutEffect(()=>{const r=new ResizeObserver(i);return Array.isArray(d)?d.forEach(n=>{n.current&&r.observe(n.current)}):d.current&&r.observe(d.current),()=>{r.disconnect()}},[d,i])};o.useResizeObserver=s},69186:(u,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(71997),l=c=>({theme:i,size:r})=>i.sizes[c][r],s=(c="&")=>({theme:i,hasError:r=!1})=>e.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${c}:focus-within {
      border: 1px solid ${r?i.colors.danger600:i.colors.primary600};
      box-shadow: ${r?i.colors.danger600:i.colors.primary600} 0px 0px 0px 2px;
    }
  `,d=({theme:c})=>e.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${c.colors.primary600};
    }
  }
`;o.buttonFocusStyle=d,o.getThemeSize=l,o.inputFocusStyle=s},59391:(u,o,t)=>{const e=t(85893),l=d=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:e.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",clipRule:"evenodd"})}),s=l;u.exports=s},46003:(u,o,t)=>{const e=t(85893),l=d=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:e.jsx("path",{fill:"#212134",d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z"})}),s=l;u.exports=s},8246:(u,o,t)=>{const e=t(85893),l=d=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:e.jsx("path",{fill:"#32324D",d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z"})}),s=l;u.exports=s},98:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),s=l},50223:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 34 25",...d,children:[(0,e.jsx)("rect",{width:33,height:23,x:.5,y:1,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"})]}),s=l},86229:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"})}),s=l},89776:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...d,children:[(0,e.jsx)("path",{fill:"#D9822F",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373Zm-2.287 0-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912Z",clipRule:"evenodd"})]}),s=l},40989:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),s=l},45742:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...d,children:[(0,e.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,e.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),s=l},9215:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-8.806-4 .806.806L12.806 12 16 15.194l-.806.806L12 12.806 8.806 16 8 15.194 11.194 12 8 8.806 8.806 8 12 11.194 15.194 8Z",clipRule:"evenodd"})}),s=l},77190:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#7289DA",d:"M20.04 0H3.96A2.464 2.464 0 0 0 1.5 2.468v16.2a2.464 2.464 0 0 0 2.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0 0 20.04 0Zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 0 1-3.108-.012 10.086 10.086 0 0 1-1.764-.515 7.053 7.053 0 0 1-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 0 1-.048-.036 4.202 4.202 0 0 1-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0 1 16.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821Zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33Zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33Z"})}),s=l},13956:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,e.jsx)("path",{fill:"#231F20",d:"M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0Z"}),(0,e.jsx)("path",{fill:"#FFF9AE",d:"M12.22 4.564a7.43 7.43 0 0 0-3.644.956 7.346 7.346 0 0 0-2.692 2.614 7.26 7.26 0 0 0-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 0 0 6.355-.14 7.36 7.36 0 0 0 2.513-2.057 7.28 7.28 0 0 0 1.372-2.93 7.243 7.243 0 0 0-.035-3.228A7.281 7.281 0 0 0 17.96 7.28a7.365 7.365 0 0 0-2.557-2.002 7.432 7.432 0 0 0-3.178-.715h-.007Z"}),(0,e.jsx)("path",{fill:"#00AEEF",d:"M18.071 7.426a7.262 7.262 0 0 1 1.51 4.499 7.264 7.264 0 0 1-1.595 4.47 7.38 7.38 0 0 1-4.028 2.558 7.437 7.437 0 0 1-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 0 0 5.181.858 7.381 7.381 0 0 0 4.443-2.778 7.258 7.258 0 0 0-.833-9.693Z"}),(0,e.jsx)("path",{fill:"#00A94F",d:"M16.713 6.078a7.253 7.253 0 0 1 .86 8.928 7.361 7.361 0 0 1-3.736 2.962 7.437 7.437 0 0 1-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 0 0 5.24.313 7.362 7.362 0 0 0 4.123-3.22 7.249 7.249 0 0 0 .914-5.123 7.296 7.296 0 0 0-2.757-4.427Z"}),(0,e.jsx)("path",{fill:"#F15D22",d:"M6.176 15.515a7.246 7.246 0 0 1-.26-4.876 7.312 7.312 0 0 1 2.9-3.95 7.427 7.427 0 0 1 9.26.735 7.387 7.387 0 0 0-4.603-2.771 7.431 7.431 0 0 0-5.277 1.068A7.311 7.311 0 0 0 5.06 10.06a7.249 7.249 0 0 0 .676 5.294L4.4 19.607l1.776-4.092Z"}),(0,e.jsx)("path",{fill:"#E31B23",d:"M5.735 15.353a7.25 7.25 0 0 1-.764-4.818 7.294 7.294 0 0 1 2.465-4.222 7.415 7.415 0 0 1 4.596-1.744 7.42 7.42 0 0 1 4.681 1.509 7.404 7.404 0 0 0-4.865-2.26 7.421 7.421 0 0 0-5.12 1.61 7.293 7.293 0 0 0-2.66 4.626A7.256 7.256 0 0 0 5.28 15.24l-.877 4.37 1.332-4.257Z"})]}),s=l},62873:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,e.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),s=l},23619:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,e.jsx)("path",{fill:"#212134",d:"M11.987 23.036v-.964H1.876V1.876h10.111V0H0v24h11.987v-.964Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M8 11.2c0-.11.09-.2.2-.2h11.973l-5.445-5.445a.2.2 0 0 1 0-.283l1.13-1.13a.2.2 0 0 1 .283 0l7.718 7.717a.2.2 0 0 1 0 .282L16.14 19.86a.2.2 0 0 1-.282 0l-1.13-1.13a.2.2 0 0 1 0-.284L20.172 13H8.2a.2.2 0 0 1-.2-.2v-1.6Z"})]}),s=l},4900:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...d,children:[(0,e.jsx)("path",{fill:"#9736E8",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",d:"M18.037 11.774a28.578 28.578 0 0 0-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9.074 9.074 0 0 0-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.196.196 0 0 0 .017-.167.183.183 0 0 0-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.039.039 0 0 1 .024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.201.201 0 0 0-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.039.039 0 0 1 .024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.21.21 0 0 0-.057-.157.177.177 0 0 0-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.042.042 0 0 1-.044.018.046.046 0 0 1-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.173.173 0 0 0-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098.01.004.02.004.03.007.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.285.285 0 0 1 .105-.021c.097 0 .177.064.2.16a.264.264 0 0 1-.046.228l-2.344 1.731Z"})]}),s=l},10778:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),s=l},94573:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...d,children:[(0,e.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),s=l},25544:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#181826",d:"M22 8v2h-4.323l-.464 2.636A4.006 4.006 0 0 1 22.25 16.5a4 4 0 0 1-7.846 1.103l1.923-.551a2 2 0 1 0 .363-1.804l-1.81-.904L16 8h6ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Z"})}),s=l},83658:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#181826",d:"M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16Zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22Zm-2 3.133L17.19 16H20v-4.867Z"})}),s=l},96617:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#181826",d:"M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16Zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21Z"})}),s=l},41804:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#181826",d:"m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8h2.309ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Zm14.5 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"})}),s=l},66760:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#181826",d:"m22 8-.002 2-2.505 2.883a3.752 3.752 0 0 1-.993 7.367 3.751 3.751 0 0 1-3.682-3.033l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8h7ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Z"})}),s=l},41442:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#181826",d:"M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Zm14.5 4a3.75 3.75 0 0 1 2.978 6.03l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546a1.75 1.75 0 1 0-3.065-1.292l-.005.144h-2A3.75 3.75 0 0 1 18.5 8Z"})}),s=l},36311:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...d,children:[(0,e.jsx)("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),s=l},68733:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"})}),s=l},79823:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),s=l},57342:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#32324D",d:"M3.74 2.7v3.85h1.04v.85H1.56v-.85H2.6V3.8H1.56v-.77l2.18-.33Zm-.72 10.92.01.04h1.75v.76H1.55v-.67l1.52-1.57c.19-.22.34-.41.43-.58a.99.99 0 0 0 .14-.45.64.64 0 0 0-.14-.43.51.51 0 0 0-.4-.16.43.43 0 0 0-.39.2.96.96 0 0 0-.14.53H1.52v-.02c-.02-.43.12-.79.41-1.09.3-.3.68-.44 1.16-.44.52 0 .91.12 1.2.37.29.25.43.6.43 1.04 0 .29-.08.55-.23.78-.15.22-.43.56-.84 1l-.63.7Zm1.63 5.85a1.25 1.25 0 0 0-.59-.42c.22-.1.4-.24.53-.41a1.16 1.16 0 0 0-.26-1.57c-.3-.23-.7-.35-1.21-.35-.43 0-.8.12-1.1.35-.31.23-.46.55-.45.92l.01.03h1.05c0-.19.05-.25.16-.33a.6.6 0 0 1 .37-.13c.18 0 .31.05.4.15.1.1.15.22.15.37a.6.6 0 0 1-.16.44.6.6 0 0 1-.45.17h-.5v.75h.5c.22 0 .39.07.5.17.12.1.18.28.18.5 0 .16-.05.3-.17.4a.64.64 0 0 1-.45.17.64.64 0 0 1-.42-.18.47.47 0 0 1-.18-.4H1.51l-.01.05c-.01.43.15.78.47 1 .33.23.71.35 1.15.35.5 0 .92-.12 1.25-.36.33-.24.49-.58.49-1 0-.26-.07-.48-.21-.67ZM8.4 3.97h14.1v2.38H8.4V3.98Zm14.1 6.9H8.4v2.37h14.1v-2.37Zm-14.1 6.9h14.1v2.37H8.4v-2.37Z"})}),s=l},21421:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),s=l},17688:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#181826",d:"M3 4h18v2H3V4Zm0 15h14v2H3v-2Zm0-5h18v2H3v-2Zm0-5h14v2H3V9Z"})}),s=l},86018:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...d,children:[(0,e.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,e.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),s=l},28102:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),s=l},76730:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...d,children:[(0,e.jsx)("path",{fill:"#66B7F1",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M12 10.921a.5.5 0 0 1 .773-.419l8.582 5.579a.5.5 0 0 1 0 .838l-8.582 5.579a.5.5 0 0 1-.773-.42V10.922Z",clipRule:"evenodd"})]}),s=l},45196:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,e.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,e.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),s=l},91948:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...d,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),s=l},50841:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 15 14",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"})}),s=l},67008:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#FF4500",fillRule:"evenodd",d:"M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92ZM17.94 10.34a1.73 1.73 0 0 1 1.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 0 1 0-.524 1.662 1.662 0 0 1-.461-.314 1.756 1.756 0 0 1-.076-2.46 1.697 1.697 0 0 1 2.425-.076 8.339 8.339 0 0 1 4.584-1.467l.868-4.136v-.006a.364.364 0 0 1 .435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 0 1 1.295 1.058 1.188 1.188 0 0 1-1.044 1.313 1.18 1.18 0 0 1-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 0 1 4.526 1.467 1.71 1.71 0 0 1 1.125-.483Zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 0 0 1.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194Zm2.747 5.39a4.47 4.47 0 0 0 2.904-.919v.047a.339.339 0 0 0 .006-.47.327.327 0 0 0-.465-.007 3.83 3.83 0 0 1-2.457.726 3.802 3.802 0 0 1-2.446-.75.314.314 0 0 0-.403 0 .327.327 0 0 0-.044.454 4.47 4.47 0 0 0 2.905.918Zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 0 0 1.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194Z",clipRule:"evenodd"})}),s=l},64816:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...d,children:[(0,e.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,e.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),s=l},2428:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",clipRule:"evenodd"})}),s=l},15301:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...d,children:[(0,e.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,e.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),s=l},61193:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 80 80",...d,children:[(0,e.jsx)("path",{fill:"#4945FF",d:"M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5Z",clipRule:"evenodd"}),(0,e.jsx)("path",{fill:"#fff",d:"M41.5 38h.5v.5h-.5z"}),(0,e.jsx)("path",{fill:"#9593FF",d:"M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 0 1-.5-.5V38ZM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13ZM28.3 38H15.2a.3.3 0 0 1-.2-.5l13.3-13.2V38Z"})]}),s=l},59071:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...d,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),s=l},69896:(u,o,t)=>{t.d(o,{Z:()=>s});var e=t(85893);const l=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",clipRule:"evenodd"})}),s=l},89952:(u,o,t)=>{t.r(o),t.d(o,{Alien:()=>e.Z,Apps:()=>l.Z,Archive:()=>s.Z,ArrowDown:()=>d.Z,ArrowLeft:()=>c.Z,ArrowRight:()=>i.Z,ArrowUp:()=>r.Z,Attachment:()=>n.Z,Bell:()=>a.Z,Blocks:()=>g.Z,Bold:()=>j.Z,Book:()=>v.Z,Boolean:()=>x.Z,Briefcase:()=>m.Z,Brush:()=>h.Z,BulletList:()=>M.Z,Calendar:()=>y.Z,Car:()=>T.Z,CarretDown:()=>f.Z,CarretUp:()=>S.Z,Cast:()=>Z.Z,ChartBubble:()=>p.Z,ChartCircle:()=>b.Z,ChartPie:()=>D.Z,Check:()=>R.Z,CheckCircle:()=>C.Z,ChevronDown:()=>B.Z,ChevronLeft:()=>L.Z,ChevronRight:()=>O.Z,ChevronUp:()=>P.Z,Clock:()=>A.Z,Cloud:()=>$.Z,CloudUpload:()=>F,Code:()=>H.Z,CodeSquare:()=>N.Z,Cog:()=>z.Z,Collapse:()=>V.Z,CollectionType:()=>U.Z,Command:()=>W.Z,Component:()=>K.Z,Connector:()=>G.Z,Crop:()=>Y.Z,Cross:()=>Q.Z,CrossCircle:()=>J.Z,Crown:()=>X.Z,Cube:()=>k.Z,Cup:()=>q.Z,Cursor:()=>_.Z,Dashboard:()=>t0.Z,Database:()=>e0.Z,Date:()=>o0.Z,Discord:()=>n0.Z,Discourse:()=>l0.Z,Discuss:()=>s0.Z,Doctor:()=>a0.Z,Dot:()=>d0.Z,Download:()=>r0.Z,Drag:()=>i0.Z,Duplicate:()=>c0.Z,DynamicZone:()=>u0.Z,Earth:()=>h0.Z,EarthStriked:()=>f0.Z,Email:()=>g0.Z,EmotionHappy:()=>v0.Z,EmotionUnhappy:()=>m0.Z,EmptyDocuments:()=>x0.Z,EmptyPermissions:()=>y0.Z,EmptyPictures:()=>p0.Z,Enumeration:()=>j0.Z,Envelop:()=>M0.Z,Equalizer:()=>Z0,ExclamationMarkCircle:()=>w0.Z,Exit:()=>S0.Z,Expand:()=>b0.Z,ExternalLink:()=>E0.Z,Eye:()=>D0.Z,EyeStriked:()=>R0.Z,Facebook:()=>O0,Feather:()=>B0.Z,FeatherSquare:()=>L0.Z,File:()=>P0.Z,FileError:()=>A0.Z,FilePdf:()=>$0.Z,Filter:()=>I0.Z,Folder:()=>F0.Z,Gate:()=>H0.Z,Gift:()=>N0.Z,Github:()=>z0.Z,GlassesSquare:()=>V0.Z,Globe:()=>U0.Z,GraphQl:()=>K0,Grid:()=>G0.Z,HandHeart:()=>Y0.Z,Hashtag:()=>Q0.Z,HeadingFive:()=>J0.Z,HeadingFour:()=>X0.Z,HeadingOne:()=>k0.Z,HeadingSix:()=>q0.Z,HeadingThree:()=>_0.Z,HeadingTwo:()=>t1.Z,Headphone:()=>e1.Z,Heart:()=>o1.Z,House:()=>n1.Z,IndentDecrease:()=>s1,IndentIncrease:()=>d1,Information:()=>r1.Z,InformationSquare:()=>i1.Z,Italic:()=>c1.Z,Json:()=>u1.Z,Key:()=>h1.Z,Landscape:()=>f1.Z,LandscapeSmall:()=>v1,Layer:()=>m1.Z,Layout:()=>x1.Z,Lightbulb:()=>y1.Z,Link:()=>p1.Z,LinkSmall:()=>M1,List:()=>T1.Z,Loader:()=>Z1.Z,Lock:()=>w1.Z,Magic:()=>S1.Z,Mail:()=>E1,ManyToMany:()=>D1.Z,ManyToOne:()=>R1.Z,ManyWays:()=>C1.Z,Media:()=>O1.Z,Medium:()=>B1.Z,MenuBurger:()=>P1,Message:()=>A1.Z,Microphone:()=>$1.Z,Minus:()=>I1.Z,MinusOutlined:()=>H1,Monitor:()=>N1.Z,Moon:()=>z1.Z,More:()=>V1.Z,Move:()=>W1,Music:()=>K1.Z,Number:()=>G1.Z,NumberList:()=>Y1.Z,OneToMany:()=>Q1.Z,OneToOne:()=>J1.Z,OneWay:()=>X1.Z,OnholdCarretDown:()=>q1,OnholdCarretUp:()=>tt,Paint:()=>et.Z,PaintBrush:()=>ot.Z,PaperPlane:()=>nt.Z,Paragraph:()=>lt.Z,Password:()=>st.Z,Pencil:()=>at.Z,Phone:()=>dt.Z,Picture:()=>rt.Z,PicturePlus:()=>it.Z,Pin:()=>ct.Z,PinMap:()=>ut.Z,Plane:()=>ht.Z,Play:()=>ft.Z,PlaySquare:()=>gt.Z,Plus:()=>vt.Z,PlusCircle:()=>mt.Z,PriceTag:()=>xt.Z,Puzzle:()=>yt.Z,Question:()=>pt.Z,Quote:()=>jt.Z,QuoteClosed:()=>Tt,Reddit:()=>Zt.Z,Refresh:()=>wt.Z,Relation:()=>St.Z,Repeat:()=>bt.Z,Restaurant:()=>Et.Z,RichText:()=>Dt.Z,Rocket:()=>Rt.Z,Rotate:()=>Ct.Z,Scissors:()=>Ot.Z,Search:()=>Bt.Z,SearchIcon:()=>Pt,Seed:()=>At.Z,Server:()=>$t.Z,Shield:()=>It.Z,Shirt:()=>Ft.Z,ShoppingCart:()=>Ht.Z,SingleType:()=>Nt.Z,Slideshow:()=>zt.Z,Spinner:()=>Ut,Stack:()=>Wt.Z,Star:()=>Kt.Z,Store:()=>Gt.Z,Strapi:()=>Yt.Z,StrikeThrough:()=>Qt.Z,Sun:()=>Jt.Z,Television:()=>Xt.Z,Text:()=>kt.Z,ThumbDown:()=>qt.Z,ThumbUp:()=>_t.Z,Train:()=>te.Z,Trash:()=>ee.Z,Twitter:()=>oe.Z,Typhoon:()=>ne.Z,Uid:()=>le.Z,Underline:()=>se.Z,Upload:()=>ae.Z,User:()=>de.Z,VolumeMute:()=>re.Z,VolumeUp:()=>ie.Z,Walk:()=>ce.Z,Wheelchair:()=>ue.Z,Write:()=>he.Z});var e=t(78594),l=t(61654),s=t(80278),d=t(527),c=t(97695),i=t(98),r=t(49654),n=t(99159),a=t(91797),g=t(50223),j=t(13588),v=t(86229),x=t(60518),m=t(2196),h=t(42813),M=t(58929),y=t(54359),T=t(86437),f=t(58471),S=t(88392),Z=t(8315),p=t(45077),b=t(87605),D=t(439),R=t(18226),C=t(54211),B=t(14981),L=t(23463),O=t(33255),P=t(73924),A=t(59110),$=t(47090),w=t(85893);const I=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#212134",d:"M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019ZM13 13h3l-4-5-4 5h3v4h2v-4Z"})}),F=I;var H=t(95165),N=t(89776),z=t(40989),V=t(8158),U=t(45742),W=t(88291),K=t(35814),G=t(46754),Y=t(1578),Q=t(35771),J=t(9215),X=t(15971),k=t(64729),q=t(61511),_=t(47648),t0=t(19044),e0=t(89193),o0=t(35498),n0=t(77190),l0=t(13956),s0=t(14544),a0=t(37373),d0=t(59233),r0=t(95998),i0=t(62873),c0=t(43838),u0=t(24306),h0=t(34675),f0=t(44850),g0=t(78215),v0=t(4865),m0=t(63350),x0=t(94355),y0=t(59288),p0=t(18857),j0=t(33936),M0=t(24116);const T0=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),Z0=T0;var w0=t(94417),S0=t(23619),b0=t(26527),E0=t(62577),D0=t(81851),R0=t(92795);const C0=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#1977F3",fillRule:"evenodd",d:"M12.143 24Zm1.732-.146V15.47h2.796l.532-3.47h-3.328V9.749c0-.949.464-1.875 1.956-1.875h1.514V4.921s-1.374-.235-2.687-.235c-2.74 0-4.533 1.66-4.533 4.67V12H7.078v3.47h3.047v8.384C4.388 22.954 0 17.99 0 12 0 5.373 5.373 0 12 0s12 5.373 12 12c0 5.99-4.388 10.954-10.125 11.854Z",clipRule:"evenodd"})}),O0=C0;var B0=t(24381),L0=t(4900),P0=t(6876),A0=t(18675),$0=t(54607),I0=t(52933),F0=t(18053),H0=t(16660),N0=t(51524),z0=t(10778),V0=t(94573),U0=t(43432);const W0=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#8E8EA9",fillRule:"evenodd",d:"M11.76 6.801a1.435 1.435 0 0 0 .797 0l4.31 7.45a1.418 1.418 0 0 0-.401.696H7.85a1.427 1.427 0 0 0-.401-.693L11.76 6.8Zm-.63-.378.042.04-4.312 7.453a1.374 1.374 0 0 0-.056-.015v-3.802A1.42 1.42 0 0 0 7.83 8.324l3.3-1.901Zm2.396-.583a1.428 1.428 0 1 0-2.737-.002L7.494 7.736a1.431 1.431 0 0 0-2.273.268 1.425 1.425 0 0 0 .904 2.098V13.9a1.426 1.426 0 1 0 1.37 2.368l3.293 1.897a1.425 1.425 0 0 0 1.37 1.828 1.427 1.427 0 0 0 1.355-1.873l3.274-1.887a1.431 1.431 0 0 0 2.304-.236 1.419 1.419 0 0 0-.9-2.097v-3.797a1.426 1.426 0 1 0-1.371-2.365L13.526 5.84Zm-.381.622.038-.038 3.302 1.903a1.42 1.42 0 0 0 1.027 1.772V13.9l-.055.015-4.312-7.453Zm3.348 9.256-3.28 1.89a1.425 1.425 0 0 0-1.055-.465c-.404 0-.77.167-1.029.436l-3.296-1.9a1.41 1.41 0 0 0 .015-.055h8.619l.026.094Z",clipRule:"evenodd"})}),K0=W0;var G0=t(25373),Y0=t(49504),Q0=t(96809),J0=t(25544),X0=t(83658),k0=t(96617),q0=t(41804),_0=t(66760),t1=t(41442),e1=t(86569),o1=t(83098),n1=t(70348);const l1=E=>(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:[(0,w.jsx)("g",{clipPath:"url(#IndentDecrease_svg__a)",children:(0,w.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8ZM1 12l4.9-4.2v8.4L1 12Z"})}),(0,w.jsx)("defs",{children:(0,w.jsx)("clipPath",{id:"IndentDecrease_svg__a",children:(0,w.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),s1=l1,a1=E=>(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:[(0,w.jsx)("g",{clipPath:"url(#IndentIncrease_svg__a)",children:(0,w.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8Zm-5 4.2L1 16.2V7.8L5.9 12Z"})}),(0,w.jsx)("defs",{children:(0,w.jsx)("clipPath",{id:"IndentIncrease_svg__a",children:(0,w.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),d1=a1;var r1=t(52423),i1=t(36311),c1=t(97259),u1=t(76133),h1=t(46374),f1=t(45241);const g1=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M7.1 5a.573.573 0 0 0 0 1.145h9.744a.573.573 0 0 0 0-1.145H7.1Zm10.3 2.354a1.6 1.6 0 0 1 1.6 1.6v8.7a1.6 1.6 0 0 1-1.6 1.6H6.6a1.6 1.6 0 0 1-1.6-1.6V8.963c0-.884.716-1.609 1.6-1.609h10.8Zm-9.834 9.47h9.123l-1.996-2.04-1.14 1.165-2.566-2.622-3.421 3.496Zm7.127-4.078c-.798 0-1.425-.641-1.425-1.457 0-.816.627-1.457 1.425-1.457.799 0 1.426.641 1.426 1.457 0 .816-.627 1.457-1.426 1.457Z",clipRule:"evenodd"})}),v1=g1;var m1=t(24784),x1=t(5702),y1=t(5889),p1=t(36544);const j1=E=>(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:[(0,w.jsx)("path",{fill:"#212134",d:"M17.756 5.748a3.416 3.416 0 0 0-4.747.467L12.01 7.41a.852.852 0 0 0 1.308 1.092l1-1.195a1.7 1.7 0 0 1 2.43-.18 1.735 1.735 0 0 1 .141 2.394l-2.077 2.486-.019.022a1.697 1.697 0 0 1-2.522.043.852.852 0 0 0-1.248 1.162 3.405 3.405 0 0 0 5.1-.137l2.071-2.48a3.502 3.502 0 0 0 .79-2.572 3.345 3.345 0 0 0-1.228-2.298Z"}),(0,w.jsx)("path",{fill:"#212134",d:"m11.622 14.956-.893 1.069a1.735 1.735 0 0 1-2.381.286 1.7 1.7 0 0 1-.255-2.423l2.113-2.529.016-.017a1.692 1.692 0 0 1 2.552-.012.852.852 0 0 0 .999.205.841.841 0 0 0 .284-.22l.01-.012a.84.84 0 0 0-.014-1.1 3.4 3.4 0 0 0-5.16.07l-2.108 2.522a3.417 3.417 0 0 0 .385 4.754 3.346 3.346 0 0 0 2.48.8 3.501 3.501 0 0 0 2.39-1.234l.89-1.066a.852.852 0 1 0-1.308-1.093Z"})]}),M1=j1;var T1=t(96869),Z1=t(2),w1=t(46759),S1=t(76391);const b1=E=>(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 20",...E,children:[(0,w.jsx)("path",{fill:"#32324D",d:"M0 .8A.8.8 0 0 1 .8 0h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V.8Z"}),(0,w.jsx)("path",{fill:"#32324D",d:"M1.922 5.991C.197 4.675 0 4.252 0 3.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 16H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 19.529.537 20 1.2 20h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,w.jsx)("path",{fill:"#32324D",d:"M0 7.555v10.972h24V7.554c-2.633 1.95-8.367 6.113-9.96 7.165-1.595 1.053-3.352.439-4.032 0L0 7.555Z"})]}),E1=b1;var D1=t(9556),R1=t(64072),C1=t(58516),O1=t(27395),B1=t(69222);const L1=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#212134",d:"M8 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8 11.7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8.5 14.401a.5.5 0 0 0-.5.5v.6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.6a.5.5 0 0 0-.5-.5h-7Z"})}),P1=L1;var A1=t(68733),$1=t(75708),I1=t(4499);const F1=E=>(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:[(0,w.jsx)("circle",{cx:12,cy:12,r:11.5,stroke:"#C0C0CF"}),(0,w.jsx)("rect",{width:10,height:2,x:7,y:11,fill:"#4945FF",rx:1})]}),H1=F1;var N1=t(40519),z1=t(70701),V1=t(79823);const U1=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#212134",d:"M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11H11Z"})}),W1=U1;var K1=t(20155),G1=t(13828),Y1=t(57342),Q1=t(15116),J1=t(72814),X1=t(82029);const k1=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M19 8.889a.86.86 0 0 1-.26.625l-6.125 6.222A.834.834 0 0 1 12 16a.834.834 0 0 1-.615-.264L5.26 9.514A.861.861 0 0 1 5 8.889c0-.24.087-.45.26-.625A.834.834 0 0 1 5.875 8h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",clipRule:"evenodd"})}),q1=k1,_1=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M5 15.111c0-.24.087-.449.26-.625l6.125-6.222A.834.834 0 0 1 12 8c.237 0 .442.088.615.264l6.125 6.222a.86.86 0 0 1 .26.625.86.86 0 0 1-.26.625.834.834 0 0 1-.615.264H5.875a.835.835 0 0 1-.615-.264.86.86 0 0 1-.26-.625Z",clipRule:"evenodd"})}),tt=_1;var et=t(89082),ot=t(54192),nt=t(21421),lt=t(17688),st=t(86018),at=t(2382),dt=t(9232),rt=t(74910),it=t(73734),ct=t(43289),ut=t(24661),ht=t(21761),ft=t(28102),gt=t(76730),vt=t(83598),mt=t(45196),xt=t(56514),yt=t(91948),pt=t(50841),jt=t(97653);const Mt=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#212134",d:"M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311-1.803-.167-3.225-1.648-3.225-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179Zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311C4.592 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179h-.001Z"})}),Tt=Mt;var Zt=t(67008),wt=t(75975),St=t(43054),bt=t(85678),Et=t(79657),Dt=t(64816),Rt=t(81536),Ct=t(65715),Ot=t(83695),Bt=t(90272);const Lt=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...E,children:(0,w.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"m23.813 20.163-5.3-5.367a9.792 9.792 0 0 0 1.312-4.867C19.825 4.455 15.375 0 9.913 0 4.45 0 0 4.455 0 9.929c0 5.473 4.45 9.928 9.912 9.928a9.757 9.757 0 0 0 5.007-1.4l5.275 5.35a.634.634 0 0 0 .913 0l2.706-2.737a.641.641 0 0 0 0-.907ZM9.91 3.867c3.338 0 6.05 2.718 6.05 6.061s-2.712 6.061-6.05 6.061c-3.337 0-6.05-2.718-6.05-6.06 0-3.344 2.713-6.062 6.05-6.062Z",clipRule:"evenodd"})}),Pt=Lt;var At=t(89816),$t=t(57810),It=t(36277),Ft=t(8700),Ht=t(2428),Nt=t(15301),zt=t(66776);const Vt=E=>(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 40 40",...E,children:(0,w.jsx)("path",{fill:"#4945FF",d:"M30.113 7.768a16.772 16.772 0 0 0-6.635-3.317c-2.505-.634-5.23-.598-7.854.096-.313.065-.6.166-.879.265l-.123.042c-.102.035-.203.07-.308.108a7.57 7.57 0 0 0-.655.247c-.164.078-.325.148-.488.221-.44.198-.893.403-1.29.657-1.314.71-2.42 1.674-3.247 2.448-1.922 1.931-3.355 4.359-4.035 6.832l-.093.37c-.131.516-.27 1.049-.322 1.572-.012.107-.033.214-.047.318-.032.218-.065.431-.078.664l-.051 1.097c-.005.11-.011.225-.006.358l.073 1.44.148.993c.041.283.085.581.164.85.553 2.391 1.627 4.609 3.103 6.41a15.664 15.664 0 0 0 4.951 3.997l.969.468c.092.04.168.07.242.096l.116.04c.152.053.295.106.444.16.276.106.546.206.843.295l1.26.32c.265.052.531.091.79.128.135.021.27.038.429.065 1.532.166 2.95.147 4.087-.058.092-.016.182-.026.272-.04.183-.025.368-.048.531-.092l1.284-.319 1.307-.456a.502.502 0 0 0-.318-.951l-1.277.396-1.246.257c-.135.026-.277.04-.422.056-.1.004-.196.02-.305.03-1.048.148-2.342.115-3.728-.089-.137-.024-.272-.05-.405-.074-.24-.046-.477-.09-.695-.142l-1.16-.338c-.248-.087-.497-.19-.75-.292a8.766 8.766 0 0 0-.433-.177l-.116-.05c-.055-.022-.117-.045-.145-.06l-.895-.474a14.106 14.106 0 0 1-4.296-3.739c-1.24-1.637-2.115-3.632-2.527-5.76-.42-2.045-.27-4.382.422-6.577.633-2.004 1.756-3.82 3.34-5.404.103-.104.207-.208.295-.29.778-.67 1.714-1.42 2.822-1.962.312-.184.66-.327 1.027-.475.175-.071.346-.142.488-.203.158-.058.327-.112.49-.162.107-.03.213-.065.306-.091l.123-.042c.227-.07.436-.137.668-.174l.836-.17c.163-.03.332-.046.498-.065.111-.011.215-.016.336-.032.384-.06.77-.062 1.185-.063.147 0 .3.001.465-.008.14-.006.292.013.455.03.11.01.216.022.297.027.109.01.21.022.322.03.166.01.318.025.458.051.187.041.377.075.57.106.346.063.673.126.989.238a13.246 13.246 0 0 1 5.263 2.872 12.87 12.87 0 0 1 3.122 4.294c.628 1.403 1.014 2.895 1.104 4.328.017.201.02.398.021.592-.002.126.003.25.006.356a1.64 1.64 0 0 0 .003.187c.005.086.005.171 0 .242l-.038.448c-.014.119-.02.23-.03.34a4.2 4.2 0 0 1-.043.466l-.145.787c-.042.298-.121.554-.194.793-.035.13-.078.254-.096.348-.026.074-.042.143-.061.209-.021.078-.037.151-.078.244l-.545 1.354a2.02 2.02 0 0 0 1.212 2.57 2.002 2.002 0 0 0 2.1-.459c.208-.208.366-.456.464-.735l.465-1.298c.045-.121.092-.287.134-.457l.059-.235c.028-.118.06-.242.096-.377.103-.388.22-.833.268-1.281l.132-.955c.028-.233.036-.47.045-.711.005-.114.009-.233.018-.36l.029-.567c0-.128-.01-.27-.018-.406l-.008-.21a18.315 18.315 0 0 1-.017-.387 7.82 7.82 0 0 0-.067-.832c-.194-1.838-.752-3.734-1.623-5.499a16.385 16.385 0 0 0-4.154-5.293Z"})}),Ut=Vt;var Wt=t(52374),Kt=t(82500),Gt=t(94469),Yt=t(61193),Qt=t(1145),Jt=t(88499),Xt=t(12396),kt=t(22355),qt=t(93769),_t=t(55998),te=t(72402),ee=t(54425),oe=t(32765),ne=t(20658),le=t(91430),se=t(7124),ae=t(59071),de=t(42615),re=t(57131),ie=t(18104),ce=t(86026),ue=t(98002),he=t(69896)}}]);
