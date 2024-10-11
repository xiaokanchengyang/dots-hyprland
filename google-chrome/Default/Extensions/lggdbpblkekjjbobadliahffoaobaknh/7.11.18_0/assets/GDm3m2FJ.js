import{j as e}from"./CMhnKYCA.js";import{s as o,p as j,a as v,c as f}from"./DieEiE9e.js";import{f as a}from"./DlLMD6w7.js";import{r as i}from"./bVFUYZgl.js";import{l as E,W as S}from"./Cil-fwZs.js";const x=490,g=i.createContext({variant:"light "}),h=()=>i.useContext(g),I=({children:t})=>{const{variant:n}=h();return e.jsx(j,{css:{textAlign:"center",color:n==="dark"?a.colors.orange100:void 0},children:t})},C=({children:t})=>{const{variant:n}=h();return e.jsx(o,{alignItems:"center",direction:"column",gap:"2",children:e.jsx(v,{css:{textAlign:"center",color:n==="dark"?a.colors.primary100:void 0},children:t})})},T=({children:t})=>e.jsx(o,{css:{width:"100%",mt:a.space[6]},direction:"column",gap:"2",children:t}),r=({children:t,fullscreen:n=!0,variant:s="light"})=>n?e.jsx(g.Provider,{value:{variant:s},children:e.jsx(o,{alignItems:"center",css:{background:a.colors.gray100,width:"100%",height:"100%"},justifyContent:"center",children:e.jsx(o,{alignItems:"center",css:{zIndex:a.zIndices.above,px:a.space[2],maxWidth:x},direction:"column",gap:"6",children:e.jsx(o,{alignItems:"center",direction:"column",gap:"2",children:t})})})}):e.jsx(o,{alignItems:"center",css:{background:a.colors.white,width:"100%",height:"70%"},justifyContent:"center",children:e.jsx(o,{alignItems:"center",css:{zIndex:a.zIndices.above,px:a.space[2],maxWidth:x},direction:"column",gap:"6",children:e.jsx(o,{alignItems:"center",direction:"column",gap:"4",children:t})})});r.displayName="EmptyState";r.Title=I;r.Description=C;r.Actions=T;const O=()=>e.jsxs(r,{children:[e.jsx(r.Title,{children:"Oops, something went wrong"}),e.jsx(r.Description,{children:"We could not find this page."})]}),F=({snapshotType:t})=>e.jsx(o,{style:{height:t?"86%":"91%"},"data-testid":"Loading Screen",children:e.jsxs(r,{children:[e.jsx(r.Title,{children:"Getting Snapshots"}),e.jsx(f,{})]})}),w=`
#tango-label {
  background: transparent;
  border-radius: 5px;
  position: absolute;
  pointer-events: none;
  z-index: 2147483647;
  border: 2px solid #ffbf00;
  box-shadow: 0px 0px 10px 0px #ffbf00;
  outline: 1px solid #ffbf00;
}

[data-tango-action-box], [data-tango-highlighted-element] {
  border: 2px solid #ff2400!important;
  border-radius: 5px!important;
  box-shadow: 0px 0px 10px 0px #ff2400;
  outline: 1px solid #ff2400;
}

[data-tango-manually-labeled-target] {
  border: 2px solid #77dd77!important;
  border-radius: 5px!important;
  box-shadow: 0px 0px 10px 0px #77dd77;
  outline: 1px solid #77dd77;
}

[data-tango-last-clicked-element] {
  border: 2px solid #5cac2d!important;
  border-radius: 5px!important;
  box-shadow: 0px 0px 10px 0px #5cac2d;
  outline: 1px solid #5cac2d;
}
`;function L(t){if(t){if(t.getElementById("tango-snapshot-styles"))return;const s=t.createElement("style");s.innerHTML=w,s.setAttribute("id","tango-snapshot-styles"),t.head.appendChild(s)}}function A(t){if(t){const n=t.getElementById("tango-label");n&&t.body.removeChild(n)}}const u=i.createContext(null),k=()=>i.useContext(u),R=({children:t})=>{const[n,s]=i.useState(null);return e.jsx(u.Provider,{value:{targetDetails:n,setTargetDetails:s},children:t})},z=({iframeDocument:t})=>{const{setTargetDetails:n}=k();return i.useEffect(()=>{const s=B=>{if(t){let d=t.getElementById("tango-label");d||(d=t.createElement("tango-label",{is:"div"}),d.setAttribute("id","tango-label"),t.body.appendChild(d)),t.addEventListener("mouseover",function(b){if(d){let l=b.target;l=E(l,t)??l,l.addEventListener("click",async function(p){p.preventDefault(),p.stopImmediatePropagation(),t.querySelectorAll("[data-tango-manually-labeled-target]").forEach(m=>{m.removeAttribute("data-tango-manually-labeled-target")});const y=await S(l,{doc:t});n(y),l.setAttribute("data-tango-manually-labeled-target","")});const c=l.getBoundingClientRect();Object.assign(d.style,{top:`${c.top+t.documentElement.scrollTop}px`,left:`${c.left+t.documentElement.scrollLeft}px`,width:`${c.width}px`,height:`${c.height}px`})}})}};return t?.removeEventListener("mouseover",s),t&&A(t),()=>{t?.removeEventListener("mouseover",s)}},[t]),e.jsx(e.Fragment,{})},q=({iframeRef:t,iframeDocument:n,snapshotType:s})=>(i.useEffect(()=>{n&&L(n)},[n,s]),e.jsx(o,{style:{height:s?"86%":"91%"},alignContent:"center",children:e.jsx("iframe",{title:"snapshot",ref:t,style:{width:"100%",border:"none"},children:e.jsx(z,{iframeDocument:n})})}));export{F as L,O as N,q as S,R as T};
//# sourceMappingURL=GDm3m2FJ.js.map
