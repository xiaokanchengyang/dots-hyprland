import{a as f}from"./OHEA6U3N.js";import{a as h}from"./ZVZDUOP5.js";import{K as l,b as m,ba as L}from"./7E6GGIST.js";import{S as g,w as a}from"./EUSDRET5.js";import{a as d}from"./BXPPDSGN.js";import{c as y,f as n}from"./3PS7M655.js";var W=y(c=>{"use strict";var C=g();c.createRoot=C.createRoot,c.hydrateRoot=C.hydrateRoot;var T});var u=n(d()),i=h(),p=()=>i==="Bard"||i==="Gemini"?document.body.classList.contains("dark-theme")?"dark":"light":i==="Claude"?document.documentElement.getAttribute("data-mode")==="dark"?"dark":"light":document.documentElement.classList.contains("dark")?"dark":"light",v=e=>{if(i==="Bard"){let r=new MutationObserver(o=>{o.forEach(s=>{s.type==="attributes"&&s.target&&e()})});return r.observe(document.body,{attributes:!0}),r}if(i==="Claude")return null;let t=new MutationObserver(r=>{r.forEach(o=>{o.type==="attributes"&&o.target&&e()})});return t.observe(document.documentElement,{attributes:!0}),t},R=(e=!0)=>{let[t,r]=(0,u.useState)(p);return(0,u.useEffect)(()=>{if(!e)return;let o=v(()=>{r(p())});return()=>{o&&o.disconnect()}},[e]),t},b=R;var E=n(a()),S=e=>{let t=b(e.withChatWeb),{customTheme:r}=f({colorSchema:e.withChatWeb?t:void 0});return(0,E.jsx)(m.ThemeProvider,{theme:r,children:e.children})},N=S;var P=n(d()),k=n(a()),_=e=>{let{href:t,underline:r="none",...o}=e,s=(0,P.useRef)(null);return(0,k.jsx)(l,{target:"_blank",ref:s,href:t!=null?t:"#",component:"a",underline:r,...o})},G=_;export{W as a,N as b,G as c};
