"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[408],{629:(n,e,t)=>{t.d(e,{Yk:()=>p,eH:()=>m,fj:()=>h,gj:()=>f,jo:()=>d});var r,o,i,a,u,c=t(168),s=t(867),l=t(705);const m=(0,s.ZP)(l.l0)(r||(r=(0,c.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-right: auto;\nmargin-left: auto; \nmax-width: 400px;\n"]))),p=s.ZP.label(o||(o=(0,c.Z)(["\nmargin-top: ",";\ndisplay: flex;\nflex-direction: column;\n"])),(n=>n.theme.spasing(4))),d=(0,s.ZP)(l.gN)(i||(i=(0,c.Z)(["\n  border-radius: 8px;\n  outline: none;\n  border: 1px solid ",";  \n  margin-bottom: ",";\n  padding:",";  \n"])),(n=>n.theme.colors.Indigo),(n=>n.theme.spasing(1)),(n=>n.theme.spasing(1))),f=(0,s.ZP)(l.Bc)(a||(a=(0,c.Z)(["\ncolor: ",";\nfont-size: 16px;\n"])),(n=>n.theme.colors.Crimson)),h=s.ZP.button(u||(u=(0,c.Z)(["\n  width: 150px;\n  padding:  ","  ","; \n  background-color: ",";   \n  border-radius: ","; \n  border: 1px solid ",";    \n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1); \n  &:hover,\n  &:focus {\n    background-color: ","; \n  } \n  margin-top: ",";\n  margin-right: auto;\n  margin-left: auto;   \n"])),(n=>n.theme.spasing(2)),(n=>n.theme.spasing(2)),(n=>n.theme.colors.white),(n=>n.theme.radii.lg),(n=>n.theme.colors.Indigo),(n=>n.theme.colors.blue),(n=>n.theme.spasing(5)))},408:(n,e,t)=>{t.r(e),t.d(e,{default:()=>X});var r=t(7),o=t(705),i=t(629),a=t(434),u=t(218),c="NOT_FOUND";var s=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?s:r,i=t.maxSize,a=void 0===i?1:i,u=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),m=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return c}return{get:r,put:function(e,o){r(e)===c&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function p(){var e=m.get(arguments);if(e===c){if(e=n.apply(null,arguments),u){var t=m.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}m.put(arguments,e)}return e}return p.clearCache=function(){return m.clear()},p}function m(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function p(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,l=s.memoizeOptions,p=void 0===l?t:l,d=Array.isArray(p)?p:[p],f=m(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),g=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(g,{resultFunc:c,memoizedResultFunc:h,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),g};return o}var d=p(l);const f=n=>n.contacts.items,h=n=>n.filter,g=n=>n.contacts.isLoading,x=n=>n.contacts.error,v=d([f,h],((n,e)=>n.filter((n=>n.name.toLowerCase().includes(e.toLowerCase().trim())))));var b=t(634),y=t(184);const j=r.Ry().shape({name:r.Z_().min(2,"Name must contain at least 2 characters").max(40,"Too long name").required("Name is required!"),number:r.Z_().matches(/^\+(?:[0-9] ?){6,14}[0-9]$/,{message:"Invalid Phone Number!",excludeEmptyString:!1}).required("Phone number is required!").max(15,"Invalid phone number!")}),w=()=>{const n=(0,a.v9)(f),e=(0,a.I0)();return(0,y.jsx)(o.J9,{initialValues:{name:"",number:""},onSubmit:(t,r)=>{let{resetForm:o}=r;if(n.some((n=>n.name.toLowerCase()===t.name.toLowerCase())))return u.ZP.error("".concat(t.name," is already in contacts.")),void o();e((0,b.uK)(t)),o()},validationSchema:j,autoComplete:"off",children:(0,y.jsxs)(i.eH,{children:[(0,y.jsx)(i.Yk,{htmlFor:"name",children:"Name"}),(0,y.jsx)(i.jo,{id:"name",type:"text",name:"name",placeholder:"Jim Doun",autoComplete:"on"}),(0,y.jsx)(i.gj,{name:"name",component:"div"}),(0,y.jsx)(i.Yk,{htmlFor:"number",children:"Number"}),(0,y.jsx)(i.jo,{id:"number",type:"tel",name:"number",placeholder:"+XX...",autoComplete:"on"}),(0,y.jsx)(i.gj,{name:"number",component:"div"}),(0,y.jsx)(i.fj,{type:"submit",children:"Add contact"})]})})};var Z,k,C=t(168),P=t(867);const I=P.ZP.li(Z||(Z=(0,C.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n"]))),F=P.ZP.button(k||(k=(0,C.Z)(["\n  width: 60px;   \n  padding: ","  ","; \n  background-color: ",";   \n  border-radius: 14px;\n  border: 1px solid ",";    \n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n  background-color: ",";  \n}   \n"])),(n=>n.theme.spasing(1)),(n=>n.theme.spasing(1)),(n=>n.theme.colors.Tomato),(n=>n.theme.colors.Indigo),(n=>n.theme.colors.blue)),z=n=>{let{contact:{id:e,name:t,number:r}}=n;const o=(0,a.I0)();return(0,y.jsxs)(I,{children:[t,": ",r,(0,y.jsx)(F,{onClick:()=>o((0,b.GK)(e)),children:"Delete"})]})};var E;const N=P.ZP.ul(E||(E=(0,C.Z)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 380px;\n    margin-left: auto;\n    margin-right: auto;   \n    gap: ",";  \n    margin-top: ",";      \n"])),(n=>n.theme.spasing(3)),(n=>n.theme.spasing(2))),q=()=>{const n=(0,a.v9)(v);return(0,y.jsx)(N,{children:n.map((n=>(0,y.jsx)(z,{contact:n},n.id)))})};var A,S,_;const O=P.ZP.div(A||(A=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),L=P.ZP.label(S||(S=(0,C.Z)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    margin-top: ","; \n"])),(n=>n.theme.spasing(4))),R=P.ZP.input(_||(_=(0,C.Z)(["  \n  width: 100%;\n  border-radius: 8px;\n  outline: none;\n  border: 1px solid ",";  \n  margin-bottom: ",";\n  padding:",";  \n"])),(n=>n.theme.colors.Indigo),(n=>n.theme.spasing(1)),(n=>n.theme.spasing(1)));var D=t(808);const T=()=>{const n=(0,a.v9)(h),e=(0,a.I0)();return(0,y.jsxs)(O,{children:[(0,y.jsx)(L,{htmlFor:"filter",children:"Find contacts by name"}),(0,y.jsx)(R,{type:"text",name:"filter",id:"filter",value:n,onChange:n=>e((0,D.z)(n.target.value))})]})};var Y,H=t(825),J=t(791);const K=P.ZP.h3(Y||(Y=(0,C.Z)(["\nmargin-top: ",";\ntext-align: center;\n/* text-transform: uppercase; */\nfont-style: italic;\ncolor: ","; \n\n"])),(n=>n.theme.spasing(6)),(n=>n.theme.colors.Indigo));function X(){const n=(0,a.I0)(),e=(0,a.v9)(g),t=(0,a.v9)(x),r=(0,a.v9)(f);return(0,J.useEffect)((()=>{n((0,b.yF)())}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w,{}),e&&!t&&(0,y.jsx)(H.a,{}),t&&u.ZP.error("Oops! Something went wrong. Please try again later."),r.length>0?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(K,{children:"Contacts list"}),(0,y.jsx)(T,{}),(0,y.jsx)(q,{})]}):null]})}}}]);
//# sourceMappingURL=408.e1e0e0c6.chunk.js.map