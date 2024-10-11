import{a as oe}from"./QYFO3V44.js";import{m as M,n as ee,o as te,p as re}from"./KWRZEZ2N.js";import{a as N}from"./SSXGEXEV.js";import{b as y}from"./SD3C25RA.js";import{b as $}from"./FK4HKR72.js";import"./ZVZDUOP5.js";import{a as z}from"./65MXYLMS.js";import{$ as O,C as V,E as U,M as Y,W as H,ba as k,e as J,l as Q,m as h}from"./7E6GGIST.js";import{K as G,L,na as K,va as X,w as l,ya as Z,za as i}from"./EUSDRET5.js";import"./B47LU4I6.js";import{a as W}from"./BXPPDSGN.js";import"./6XGCBYK4.js";import"./IWA7K7OR.js";import"./TSWQGEA7.js";import"./KHXRDVYA.js";import"./XXRKTLQP.js";import"./3RR3WT5X.js";import{c as D,f as s}from"./3PS7M655.js";var ae=D(q=>{"use strict";var we=L();Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var ke=we(z()),ye=l(),qe=(0,ke.default)((0,ye.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");q.default=qe});var ie=D(F=>{"use strict";var Fe=L();Object.defineProperty(F,"__esModule",{value:!0});F.default=void 0;var Re=Fe(z()),ne=l(),Ie=(0,Re.default)([(0,ne.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},"0"),(0,ne.jsx)("path",{d:"M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"},"1")],"ArticleOutlined");F.default=Ie});var le=D(R=>{"use strict";var Ee=L();Object.defineProperty(R,"__esModule",{value:!0});R.default=void 0;var Be=Ee(z()),De=l(),Le=(0,Be.default)((0,De.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");R.default=Le});var pe=s(ae()),S=s(W());var se=s(ie()),d=s(l()),Te=({promptList:r,currentPrompt:f,onPromptSelect:g})=>(0,d.jsx)(J,{variant:"outlined",sx:{bgcolor:"transparent",height:"100%"},children:(0,d.jsx)(i,{children:r.map(n=>n.uuid==="default"?null:(0,d.jsxs)(X,{sx:{px:2,py:1.5},selected:(f==null?void 0:f.uuid)===n.uuid,onClick:()=>{g(n)},children:[(0,d.jsx)(Y,{sx:{minWidth:0,mr:1},children:(0,d.jsx)(se.default,{})}),(0,d.jsx)(Z,{primary:(0,d.jsx)(K,{variant:"body1",children:n.name})})]},n.uuid))})}),ue=Te;var a=s(W());var ce=s(le()),t=s(l()),Ve=G(r=>(0,t.jsx)(h,{...r}))(({color:r})=>r==="error"?{color:"#fff",backgroundColor:"#f44336"}:r==="warning"?{color:"#000",backgroundColor:"#FBBD23","&:hover":{backgroundColor:"#FBBD23"}}:{color:"#000",backgroundColor:"#37D39A","&:hover":{backgroundColor:"#37D39A"}}),He=({prompt:r,handlePromptSave:f,handlePromptDelete:g})=>{let{t:n}=y(["settings","common"]),m=(0,a.useMemo)(()=>[{text:"{web_results}",value:"{web_results}",tooltip:"feature__web_access__variable__web_result__tooltip",isRequired:!1},{text:"{query}",value:"{query}",tooltip:"feature__web_access__variable__query__tooltip",isRequired:!0},{text:"{current_date}",value:"{current_date}",tooltip:"feature__web_access__variable__current_date__tooltip",isRequired:!1}],[]),u=a.default.useRef(null),[C,P]=(0,a.useState)(""),[_,v]=(0,a.useState)(""),[I,b]=(0,a.useState)(!1),[o,fe]=(0,a.useState)(!1),[x,T]=(0,a.useState)(r),[_e,E]=(0,a.useState)(!1),w=(0,a.useMemo)(()=>r.uuid==="default",[r]),j=e=>{P(""),v(""),T(p=>({...p,...e}))},ve=e=>{if(u.current){let p=u.current.selectionStart,be=u.current.selectionEnd,B=u.current.value,Se=B.substring(0,p)+e+B.substring(be,B.length);u.current.setSelectionRange(p+e.length,p+e.length),u.current.focus(),P(""),v(""),e==="{query}"&&b(!1),T(Ce=>({...Ce,text:Se}))}},Pe=e=>{xe(e)&&f(e)},xe=e=>e.name?e.text?e.text.includes("{query}")?!0:(v("Prompt template must include {query}"),b(!0),!1):(v("Prompt template is required"),!1):(P("Name is required"),!1),he=()=>{g(x),E(!1)},ge=e=>{fe(!e.includes("{query}"))};return(0,a.useEffect)(()=>{P(""),v(""),T(r)},[r]),(0,a.useEffect)(()=>{ge(x.text)},[x]),(0,t.jsxs)(i,{spacing:1,children:[(0,t.jsxs)(i,{direction:"row",spacing:1,children:[(0,t.jsx)(V,{size:"small",error:!!C,sx:{flex:1},children:(0,t.jsx)(O,{error:!!C,size:"small",disabled:w,id:"prompt-name",variant:"outlined",value:x.name,placeholder:"Prompt name",onChange:e=>{let p=e.target.value;j({name:p})},sx:{fontSize:16}})}),!w&&(0,t.jsx)(H,{title:n("common:delete"),children:(0,t.jsx)(h,{color:"error",variant:"outlined",sx:{px:1.5,py:1,minWidth:0},onClick:()=>{E(!0)},children:(0,t.jsx)(ce.default,{})})})]}),(0,t.jsxs)(V,{error:!!_,children:[(0,t.jsx)(O,{error:!!_,disabled:w,id:"prompt-text",variant:"outlined",multiline:!0,minRows:20,maxRows:20,placeholder:"Prompt template",value:x.text,onChange:e=>{let p=e.target.value;j({text:p})},inputProps:{ref:u}}),_&&(0,t.jsx)(U,{sx:{ml:0},children:_})]}),!w&&(0,t.jsxs)(i,{direction:{xs:"column",sm:"row"},spacing:1,flexWrap:"wrap",children:[(0,t.jsx)(i,{direction:"row",spacing:1,justifyContent:{xs:"space-between",sm:"flex-start"},children:m.map(e=>(0,t.jsx)(H,{title:n(e.tooltip),children:(0,t.jsx)("div",{children:(0,t.jsx)(Ve,{color:e.isRequired?I?"error":o?"warning":"primary":"primary",variant:"contained",onClick:()=>{ve(e.value)},children:e.text})})},e.value))}),(0,t.jsx)(Q,{flexGrow:1,sx:{display:{xs:"none",sm:"block"}}}),(0,t.jsx)(i,{direction:"row",spacing:1,children:(0,t.jsx)(h,{variant:"contained",onClick:()=>{Pe(x)},sx:{flex:{xs:1,sm:0}},children:n("common:save")})})]}),(0,t.jsx)(re,{open:_e,onConfirm:he,onClose:()=>{E(!1)},confirmButtonText:n("settings:feature__web_access__delete_prompt_confirm_button_text"),confirmText:n("settings:feature__web_access__delete_prompt_confirm")})]})},me=He;var c=s(l()),Oe=()=>{let{t:r}=y("settings"),{enqueueSnackbar:f}=$(),[g,n]=(0,S.useState)([]),[m,u]=(0,S.useState)(),C=async()=>{let o=await M();n(o),(m==null?void 0:m.uuid)==="default"&&u(o[0])},P=o=>{u(o)},_=()=>{let o={uuid:N(),name:"",text:""};u(o)},v=async o=>{await ee(o),await b(),f(r("feature__web_access__save_prompt_feedback"),{variant:"success",autoHideDuration:1e3})},I=async o=>{o.uuid&&(await te(o),await b(),_(),f(r("feature__web_access__delete_prompt_feedback"),{variant:"success",autoHideDuration:1e3}))},b=async()=>{M().then(o=>{n(o)})};return(0,S.useLayoutEffect)(()=>{C(),m||_()},[]),(0,c.jsx)(oe,{title:r("feature__web_access__prompt_editor__title"),id:"prompt-editor",children:(0,c.jsxs)(i,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,c.jsxs)(i,{width:{xs:"100%",sm:"30%"},children:[(0,c.jsx)(h,{variant:"contained",startIcon:(0,c.jsx)(pe.default,{}),sx:{height:48,fontWeight:600,mb:1},onClick:_,children:r("feature__web_access__new_prompt")}),(0,c.jsx)(ue,{promptList:g,currentPrompt:m,onPromptSelect:P})]}),(0,c.jsx)(i,{width:{xs:"100%",sm:"70%"},children:m&&(0,c.jsx)(me,{prompt:m,handlePromptSave:v,handlePromptDelete:I})})]})})},de=Oe;var A=s(l()),ze=()=>(0,A.jsx)(i,{children:(0,A.jsx)(de,{})}),dt=ze;export{dt as default};
