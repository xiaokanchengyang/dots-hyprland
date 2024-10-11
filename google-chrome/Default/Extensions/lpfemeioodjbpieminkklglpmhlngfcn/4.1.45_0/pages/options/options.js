import{a as X,b as Z,d as E}from"../../chunks/D3I7F6LD.js";import{b as h}from"../../chunks/SD3C25RA.js";import{a as ot}from"../../chunks/X5MHBX7J.js";import{a as et}from"../../chunks/43R5B54H.js";import"../../chunks/S6N7I4BD.js";import"../../chunks/I7H542AS.js";import{a as yt,b as j,c as tt}from"../../chunks/MBSRGUFQ.js";import"../../chunks/OHEA6U3N.js";import{a as J}from"../../chunks/FK4HKR72.js";import"../../chunks/ZVZDUOP5.js";import{a as $}from"../../chunks/65MXYLMS.js";import"../../chunks/GT27HM5Z.js";import{a as Q}from"../../chunks/YJUUDRKB.js";import{B as K,ba as vt,f as y,l as d,m as F,r as G,z as N}from"../../chunks/7E6GGIST.js";import{L as q,na as R,sa as U,va as V,w as l,ya as Y,za as c}from"../../chunks/EUSDRET5.js";import"../../chunks/E5ZZU67S.js";import"../../chunks/B47LU4I6.js";import"../../chunks/DH3EQYWO.js";import{a as x}from"../../chunks/BXPPDSGN.js";import"../../chunks/6XGCBYK4.js";import"../../chunks/IWA7K7OR.js";import"../../chunks/TSWQGEA7.js";import{l as H}from"../../chunks/KHXRDVYA.js";import{a as St}from"../../chunks/XXRKTLQP.js";import"../../chunks/3RR3WT5X.js";import{c as A,f as r}from"../../chunks/3PS7M655.js";var rt=A(_=>{"use strict";var Rt=q();Object.defineProperty(_,"__esModule",{value:!0});_.default=void 0;var _t=Rt($()),wt=l(),Pt=(0,_t.default)((0,wt.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"MenuOutlined");_.default=Pt});var ut=A(k=>{"use strict";var kt=q();Object.defineProperty(k,"__esModule",{value:!0});k.default=void 0;var ue=Ot(x()),Lt=kt($()),Bt=l();function lt(t){if(typeof WeakMap!="function")return null;var s=new WeakMap,o=new WeakMap;return(lt=function(p){return p?o:s})(t)}function Ot(t,s){if(!s&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var o=lt(s);if(o&&o.has(t))return o.get(t);var p={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var f=n?Object.getOwnPropertyDescriptor(t,i):null;f&&(f.get||f.set)?Object.defineProperty(p,i,f):p[i]=t[i]}return p.default=t,o&&o.set(t,p),p}var Et=(0,Lt.default)((0,Bt.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");k.default=Et});var xt=r(x());var ht=r(yt());var u=r(x());var T=r(x());var at=r(rt());var P=r(x());var nt=r(x()),it=[{route:"/prompt",label:"left_menu__prompts",divider:!1},{route:"/web-access",label:"left_menu__web_access",divider:!1},{route:"/search-with-ai",label:"left_menu__search_with_ai",divider:!0},{route:"/appearance",label:"left_menu__appearance",divider:!1},{route:"/language",label:"left_menu__language",divider:!1},{route:"/support",label:"left_menu__support",divider:!1}],w=nt.default.createContext({route:"/prompt",setRoute:t=>{}}),M=()=>{let s=window.location.hash.replace("#","");return s||(s="/prompt",D(s)),s},D=t=>{window.location.hash=`#${t}`};var g=r(l()),It=t=>{let{t:s}=h("settings"),{route:o,setRoute:p}=(0,P.useContext)(w),{sx:n}=t;return(0,g.jsx)(U,{component:"nav",sx:{py:2,...n},children:it.map(i=>(0,g.jsxs)(P.default.Fragment,{children:[(0,g.jsx)(V,{sx:{p:"4px 16px"},selected:o===i.route,onClick:()=>{p(i.route)},children:(0,g.jsx)(Y,{primary:s(i.label)})}),i.divider&&(0,g.jsx)(N,{sx:{my:1}})]},i.route))})},I=It;var st=r(St()),a=r(l()),Tt=st.default.runtime.getManifest().version,bt=()=>{let{t}=h(["common"]),[s,o]=(0,T.useState)(!1),p=n=>i=>{i.type==="keydown"&&(i.key==="Tab"||i.key==="Shift")||o(n)};return(0,a.jsxs)(T.default.Fragment,{children:[(0,a.jsxs)(c,{direction:"row",alignItems:"center",spacing:1,children:[(0,a.jsxs)(d,{component:"span",children:[(0,a.jsx)(E,{sx:{display:"inherit",fontSize:{xs:0,md:32}}}),(0,a.jsx)(y,{onClick:n=>{n.stopPropagation(),n.preventDefault(),p(!0)(n)},sx:{display:{xs:"inline-flex",md:"none"}},children:(0,a.jsx)(at.default,{sx:{fontSize:24}})})]}),(0,a.jsx)(R,{fontSize:20,fontWeight:700,color:"text.primary",children:"WebChatGPT"}),(0,a.jsx)(R,{fontSize:12,color:"text.secondary",children:Tt})]}),(0,a.jsx)(K,{anchor:"left",open:s,onClose:p(!1),children:(0,a.jsxs)(d,{role:"presentation",component:"div",onKeyDown:p(!1),onClick:p(!1),sx:{width:b},children:[(0,a.jsx)(c,{minHeight:56,sx:{flexDirection:"row",alignItems:"center",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",boxSizing:"border-box",pl:2},children:(0,a.jsxs)(c,{direction:"row",alignItems:"center",spacing:1,children:[(0,a.jsx)(E,{sx:{fontSize:32}}),(0,a.jsx)(R,{fontSize:20,fontWeight:700,color:"text.primary",children:"WebChatGPT"})]})}),(0,a.jsx)(I,{})]})})]})},pt=bt;var C=r(l()),Ct=({children:t})=>H?null:(0,C.jsx)(C.Fragment,{children:t}),ct=Ct;var mt=r(ut());var e=r(l()),b={xs:250,sm:250,md:250,lg:250,xl:250},z={xs:400,sm:680,md:800,lg:680,xl:800},Mt=u.default.lazy(()=>import("../../chunks/LSMPERHU.js")),Dt=u.default.lazy(()=>import("../../chunks/T6SCCIBL.js")),zt=u.default.lazy(()=>import("../../chunks/ETSBUWQ5.js")),Wt=u.default.lazy(()=>import("../../chunks/G46LWNQR.js")),At=u.default.lazy(()=>import("../../chunks/XSSLZRFY.js")),Ht=u.default.lazy(()=>import("../../chunks/FOVJHHOD.js")),qt=()=>{let{i18n:t}=h(),s=(0,u.useRef)(!1),[o,p]=(0,u.useState)(()=>M());return(0,u.useEffect)(()=>{o&&M()!==o&&D(o)},[o]),(0,u.useEffect)(()=>{var n;if(o&&!s.current){let f=(n=window.location.search.split("?")[1])==null?void 0:n.split("&"),L=new Map;if(f==null||f.forEach(B=>{let[S,O]=B.split("=");L.set(S,O)}),L.get("id")){s.current=!0;let B=3e3,S=setInterval(()=>{let W=document.getElementById(L.get("id"));W&&(clearInterval(S),W.scrollIntoView({behavior:"smooth"}))},100),O=setTimeout(()=>{clearInterval(S)},B);return()=>{clearTimeout(O),clearInterval(S)}}}return()=>{}},[o]),(0,e.jsx)(w.Provider,{value:{route:o,setRoute:p},children:(0,e.jsxs)(c,{height:"100vh",bgcolor:n=>n.palette.mode==="dark"?"#202124":"#fff",children:[(0,e.jsx)(c,{minHeight:56,direction:"row",alignItems:"center",sx:{borderBottom:n=>n.palette.mode==="dark"?"1px solid #121212":"1px solid #E0E0E0",boxSizing:"border-box",bgcolor:n=>n.palette.mode==="dark"?"#202124":"#fff",mb:1},children:(0,e.jsxs)(c,{direction:"row",alignItems:"center",maxWidth:"xl",mx:"auto",width:"100%",px:2,minHeight:70,children:[(0,e.jsx)(c,{direction:"row",flex:"1 1 0",children:(0,e.jsx)(d,{width:b,children:(0,e.jsx)(pt,{})})}),(0,e.jsx)(c,{direction:"row",flex:"1 1 0",flexBasis:z,children:(0,e.jsx)(ct,{children:(0,e.jsx)(F,{onClick:async()=>{await t.changeLanguage(t.language==="zh_CN"?"en":"zh_CN")},children:"change language"})})}),(0,e.jsx)(c,{direction:"row",flex:"1 1 0",justifyContent:"end",children:(0,e.jsx)(tt,{href:"https://github.com/qunash/chatgpt-advanced",target:"_blank",children:(0,e.jsx)(y,{children:(0,e.jsx)(mt.default,{})})})})]})}),(0,e.jsx)(d,{flex:1,display:"flex",alignItems:"flex-start",overflow:"overlay",maxWidth:"xl",mx:"auto",width:"100%",px:2,children:(0,e.jsxs)(et,{children:[(0,e.jsx)(d,{flex:"1 1 0",sx:{justifyContent:"end",height:"100%",position:"sticky",top:0,display:{xs:"none",md:"flex"}},children:(0,e.jsx)(c,{direction:"row",children:(0,e.jsx)(I,{sx:{width:b}})})}),(0,e.jsx)(c,{flex:"1 1 0",flexBasis:z,sx:{maxHeight:"calc(100vh - 56px)",overflowY:"auto"},children:(0,e.jsxs)(c,{width:z,mx:"auto",pt:2,children:[o==="/prompt"&&(0,e.jsx)(Mt,{}),o==="/web-access"&&(0,e.jsx)(Dt,{}),o==="/search-with-ai"&&(0,e.jsx)(zt,{}),o==="/appearance"&&(0,e.jsx)(Wt,{}),o==="/language"&&(0,e.jsx)(At,{}),o==="/support"&&(0,e.jsx)(Ht,{})]})}),(0,e.jsx)(c,{direction:"row",flex:"1 1 0",justifyContent:"start",sx:{pt:2,display:{xs:"none",lg:"flex"}}})]})})]})})},ft=qt;var v=r(l()),Ft=()=>(Z(),ot(),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(X,{})})),dt=Ft;var m=r(l()),gt=document.getElementById("options");if(gt){let t=(0,ht.createRoot)(gt);document.title="Settings | WebChatGPT",t.render((0,m.jsx)(xt.default.StrictMode,{children:(0,m.jsx)(Q,{children:(0,m.jsxs)(j,{children:[(0,m.jsx)(dt,{}),(0,m.jsx)(G,{}),(0,m.jsx)(J,{maxSnack:3,children:(0,m.jsx)(ft,{})})]})})}))}
