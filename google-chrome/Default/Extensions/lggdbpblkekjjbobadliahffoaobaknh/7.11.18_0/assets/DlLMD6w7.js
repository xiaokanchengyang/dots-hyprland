import{R as O}from"./bVFUYZgl.js";var x="colors",B="sizes",a="space",le={gap:a,gridGap:a,columnGap:a,gridColumnGap:a,rowGap:a,gridRowGap:a,inset:a,insetBlock:a,insetBlockEnd:a,insetBlockStart:a,insetInline:a,insetInlineEnd:a,insetInlineStart:a,margin:a,marginTop:a,marginRight:a,marginBottom:a,marginLeft:a,marginBlock:a,marginBlockEnd:a,marginBlockStart:a,marginInline:a,marginInlineEnd:a,marginInlineStart:a,padding:a,paddingTop:a,paddingRight:a,paddingBottom:a,paddingLeft:a,paddingBlock:a,paddingBlockEnd:a,paddingBlockStart:a,paddingInline:a,paddingInlineEnd:a,paddingInlineStart:a,top:a,right:a,bottom:a,left:a,scrollMargin:a,scrollMarginTop:a,scrollMarginRight:a,scrollMarginBottom:a,scrollMarginLeft:a,scrollMarginX:a,scrollMarginY:a,scrollMarginBlock:a,scrollMarginBlockEnd:a,scrollMarginBlockStart:a,scrollMarginInline:a,scrollMarginInlineEnd:a,scrollMarginInlineStart:a,scrollPadding:a,scrollPaddingTop:a,scrollPaddingRight:a,scrollPaddingBottom:a,scrollPaddingLeft:a,scrollPaddingX:a,scrollPaddingY:a,scrollPaddingBlock:a,scrollPaddingBlockEnd:a,scrollPaddingBlockStart:a,scrollPaddingInline:a,scrollPaddingInlineEnd:a,scrollPaddingInlineStart:a,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:B,minBlockSize:B,maxBlockSize:B,inlineSize:B,minInlineSize:B,maxInlineSize:B,width:B,minWidth:B,maxWidth:B,height:B,minHeight:B,maxHeight:B,flexBasis:B,gridTemplateColumns:B,gridTemplateRows:B,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},ae=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,L=()=>{const e=Object.create(null);return(t,r,...n)=>{const l=(o=>JSON.stringify(o,ae))(t);return l in e?e[l]:e[l]=r(t,...n)}},W=Symbol.for("sxs.internal"),U=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),q=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:se}=Object.prototype,Z=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),ce=/\s+(?![^()]*\))/,P=e=>t=>e(...typeof t=="string"?String(t).split(ce):[t]),K={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:P((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:P((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:P((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:P((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:P((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:P((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},X=/([\d.]+)([^]*)/,de=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(l=>l.includes("&")?l.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(l)?`:is(${n})`:n):n+" "+l)),r),[]):t,pe=(e,t)=>e in ge&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,l,o)=>n+(l==="stretch"?`-moz-available${o};${Z(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${Z(e)}:${n}fit-content`)+o):String(t),ge={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},j=e=>e?e+"-":"",ne=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,l,o,s,i)=>s=="$"==!!o?n:(l||s=="--"?"calc(":"")+"var(--"+(s==="$"?j(t)+(i.includes("$")?"":j(r))+i.replace(/\$/g,"-"):i)+")"+(l||s=="--"?"*"+(l||"")+(o||"1")+")":"")),ue=/\s*,\s*(?![^()]*\))/,me=Object.prototype.toString,M=(e,t,r,n,l)=>{let o,s,i;const c=(p,f,h)=>{let d,u;const b=S=>{for(d in S){const g=d.charCodeAt(0)===64,k=g&&Array.isArray(S[d])?S[d]:[S[d]];for(u of k){const w=/[A-Z]/.test($=d)?$:$.replace(/-[^]/g,C=>C[1].toUpperCase()),v=typeof u=="object"&&u&&u.toString===me&&(!n.utils[w]||!f.length);if(w in n.utils&&!v){const C=n.utils[w];if(C!==s){s=C,b(C(u)),s=null;continue}}else if(w in K){const C=K[w];if(C!==i){i=C,b(C(u)),i=null;continue}}if(g&&(y=d.slice(1)in n.media?"@media "+n.media[d.slice(1)]:d,d=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(C,z,E,A,R,F)=>{const I=X.test(z),D=.0625*(I?-1:1),[G,H]=I?[A,z]:[z,A];return"("+(E[0]==="="?"":E[0]===">"===I?"max-":"min-")+G+":"+(E[0]!=="="&&E.length===1?H.replace(X,(ie,V,J)=>Number(V)+D*(E===">"?1:-1)+J):H)+(R?") and ("+(R[0]===">"?"min-":"max-")+G+":"+(R.length===1?F.replace(X,(ie,V,J)=>Number(V)+D*(R===">"?-1:1)+J):F):"")+")"})),v){const C=g?h.concat(d):[...h],z=g?[...f]:de(f,d.split(ue));o!==void 0&&l(Q(...o)),o=void 0,c(u,z,C)}else o===void 0&&(o=[[],f,h]),d=g||d.charCodeAt(0)!==36?d:`--${j(n.prefix)}${d.slice(1).replace(/\$/g,"-")}`,u=v?u:typeof u=="number"?u&&!(w in fe)&&d.charCodeAt(0)!==45?String(u)+"px":String(u):ne(pe(w,u??""),n.prefix,n.themeMap[w]),o[0].push(`${g?`${d} `:`${Z(d)}:`}${u}`)}}var y,$};b(p),o!==void 0&&l(Q(...o)),o=void 0};c(e,t,r)},Q=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,fe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ee=e=>String.fromCharCode(e+(e>25?39:97)),T=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=ee(r%52)+n;return ee(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),_=["themed","global","styled","onevar","resonevar","allvar","inline"],he=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},be=e=>{let t;const r=()=>{const{cssRules:l}=t.sheet;return[].map.call(l,(o,s)=>{const{cssText:i}=o;let c="";if(i.startsWith("--sxs"))return"";if(l[s-1]&&(c=l[s-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const p in t.rules)if(t.rules[p].group===o)return`--sxs{--sxs:${[...t.rules[p].cache].join(" ")}}${i}`;return o.cssRules.length?`${c}${i}`:""}return i}).join("")},n=()=>{if(t){const{rules:i,sheet:c}=t;if(!c.deleteRule){for(;Object(Object(c.cssRules)[0]).type===3;)c.cssRules.splice(0,1);c.cssRules=[]}for(const p in i)delete i[p]}const l=Object(e).styleSheets||[];for(const i of l)if(he(i)){for(let c=0,p=i.cssRules;p[c];++c){const f=Object(p[c]);if(f.type!==1)continue;const h=Object(p[c+1]);if(h.type!==4)continue;++c;const{cssText:d}=f;if(!d.startsWith("--sxs"))continue;const u=d.slice(14,-3).trim().split(/\s+/),b=_[u[0]];b&&(t||(t={sheet:i,reset:n,rules:{},toString:r}),t.rules[b]={group:h,index:c,cache:new Set(u)})}if(t)break}if(!t){const i=(c,p)=>({type:p,cssRules:[],insertRule(f,h){this.cssRules.splice(h,0,i(f,{import:3,undefined:1}[(f.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return c==="@media{}"?`@media{${[].map.call(this.cssRules,f=>f.cssText).join("")}}`:c}});t={sheet:(()=>{if(!e)return i("","text/css");const c=document.createElement("style"),p=window.__webpack_nonce__!==void 0?window.__webpack_nonce__:window.nonce!==void 0?window.nonce:null;return p&&c.setAttribute("nonce",p),(e.head||e).appendChild(c).sheet})(),rules:{},reset:n,toString:r}}const{sheet:o,rules:s}=t;for(let i=_.length-1;i>=0;--i){const c=_[i];if(!s[c]){const p=_[i+1],f=s[p]?s[p].index:o.cssRules.length;o.insertRule("@media{}",f),o.insertRule(`--sxs{--sxs:${i}}`,f),s[c]={group:o.cssRules[f+1],index:f,cache:new Set([i])}}xe(s[c])}};return n(),t},xe=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},N=Symbol(),ye=L(),te=(e,t)=>ye(e,()=>{const r=(l,o={})=>{let s={type:null,composers:new Set};for(const i of l)if(i!=null)if(i[W]){s.type==null&&(s.type=i[W].type);for(const c of i[W].composers)s.composers.add(c)}else i.constructor!==Object||i.$$typeof?s.type==null&&(s.type=i):s.composers.add(Se(i,e,o));return s.type==null&&(s.type="span"),s.composers.size||s.composers.add(["PJLV",{},[],[],{},[]]),$e(e,s,t,o)},n=(...l)=>r(l);return n.withConfig=l=>(...o)=>r(o,l),n}),Se=({variants:e,compoundVariants:t,defaultVariants:r,...n},l,{componentId:o,displayName:s})=>{const i=o||T(n),c=s?"c-"+s:"c",p=`${j(l.prefix)}${c}-${i}`,f=[],h=[],d=Object.create(null),u=[];for(const y in r)d[y]=String(r[y]);if(typeof e=="object"&&e)for(const y in e){b=d,S=y,se.call(b,S)||(d[y]="undefined");const $=e[y];for(const g in $){const k={[y]:String(g)};String(g)==="undefined"&&u.push(y);const w=$[g],v=[k,w,!q(w)];f.push(v)}}var b,S;if(typeof t=="object"&&t)for(const y of t){let{css:$,...g}=y;$=typeof $=="object"&&$||{};for(const w in g)g[w]=String(g[w]);const k=[g,$,!q($)];h.push(k)}return[p,n,f,h,d,u]},$e=(e,t,r,{shouldForwardStitchesProp:n})=>{const[l,o,s,i]=ke(t.composers),c=typeof t.type=="function"||t.type.$$typeof?(d=>{function u(){for(let b=0;b<u[N].length;b++){const[S,y]=u[N][b];d.rules[S].apply(y)}return u[N]=[],null}return u[N]=[],u.rules={},_.forEach(b=>u.rules[b]={apply:S=>u[N].push([b,S])}),u})(r):null,p=(c||r).rules,f=`.${l}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,h=d=>{d=typeof d=="object"&&d||we;const{...u}=d,b={};for(const g in s)if(g in d){n?.(g)||delete u[g];let k=d[g];typeof k=="object"&&k?b[g]={"@initial":s[g],...k}:(k=String(k),b[g]=k!=="undefined"||i.has(g)?k:s[g])}else b[g]=s[g];const S=new Set([...o]);for(const[g,k,w,v]of t.composers){r.rules.styled.cache.has(g)||(r.rules.styled.cache.add(g),M(k,[`.${g}`],[],e,E=>{p.styled.apply(E)}));const C=re(w,b,e.media),z=re(v,b,e.media,!0);for(const E of C)if(E!==void 0)for(const[A,R,F]of E){const I=`${g}-${T(R)}-${A}`;S.add(I);const D=(F?r.rules.resonevar:r.rules.onevar).cache,G=F?p.resonevar:p.onevar;D.has(I)||(D.add(I),M(R,[`.${I}`],[],e,H=>{G.apply(H)}))}for(const E of z)if(E!==void 0)for(const[A,R]of E){const F=`${g}-${T(R)}-${A}`;S.add(F),r.rules.allvar.cache.has(F)||(r.rules.allvar.cache.add(F),M(R,[`.${F}`],[],e,I=>{p.allvar.apply(I)}))}}const y=u.css;if(typeof y=="object"&&y){n?.("css")||delete u.css;const g=`${l}-i${T(y)}-css`;S.add(g),r.rules.inline.cache.has(g)||(r.rules.inline.cache.add(g),M(y,[`.${g}`],[],e,k=>{p.inline.apply(k)}))}for(const g of String(d.className||"").trim().split(/\s+/))g&&S.add(g);const $=u.className=[...S].join(" ");return{type:t.type,className:$,selector:f,props:u,toString:()=>$,deferredInjector:c}};return U(h,{className:l,selector:f,[W]:t,toString:()=>(r.rules.styled.cache.has(l)||h(),l)})},ke=e=>{let t="";const r=[],n={},l=[];for(const[o,,,,s,i]of e){t===""&&(t=o),r.push(o),l.push(...i);for(const c in s){const p=s[c];(n[c]===void 0||p!=="undefined"||i.includes(p))&&(n[c]=p)}}return[t,r,n,new Set(l)]},re=(e,t,r,n)=>{const l=[];e:for(let[o,s,i]of e){if(i)continue;let c,p=0,f=!1;for(c in o){const h=o[c];let d=t[c];if(d!==h){if(typeof d!="object"||!d)continue e;{let u,b,S=0;for(const y in d){if(h===String(d[y])){if(y!=="@initial"){const $=y.slice(1);(b=b||[]).push($ in r?r[$]:y.replace(/^@media ?/,"")),f=!0}p+=S,u=!0}++S}if(b&&b.length&&(s={["@media "+b.join(", ")]:s}),!u)continue e}}}(l[p]=l[p]||[]).push([n?"cv":`${c}-${o[c]}`,s,f])}return l},we={},Be=L(),Ce=(e,t)=>Be(e,()=>(...r)=>{const n=()=>{for(let l of r){l=typeof l=="object"&&l||{};let o=T(l);if(!t.rules.global.cache.has(o)){if(t.rules.global.cache.add(o),"@import"in l){let s=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let i of[].concat(l["@import"]))i=i.includes('"')||i.includes("'")?i:`"${i}"`,t.sheet.insertRule(`@import ${i};`,s++);delete l["@import"]}M(l,[],[],e,s=>{t.rules.global.apply(s)})}}return""};return U(n,{toString:n})}),Ee=L(),Re=(e,t)=>Ee(e,()=>r=>{const n=`${j(e.prefix)}k-${T(r)}`,l=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const o=[];M(r,[],[],e,i=>o.push(i));const s=`@keyframes ${n}{${o.join("")}}`;t.rules.global.apply(s)}return n};return U(l,{get name(){return l()},toString:l})}),Fe=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+j(this.prefix)+j(this.scale)+this.token}toString(){return this.computedValue}},Ie=L(),je=(e,t)=>Ie(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const l=`.${r=(r=typeof r=="string"?r:"")||`${j(e.prefix)}t-${T(n)}`}`,o={},s=[];for(const c in n){o[c]={};for(const p in n[c]){const f=`--${j(e.prefix)}${c}-${p}`,h=ne(String(n[c][p]),e.prefix,c);o[c][p]=new Fe(p,h,c,e.prefix),s.push(`${f}:${h}`)}}const i=()=>{if(s.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const c=`${n===e.theme?":root,":""}.${r}{${s.join(";")}}`;t.rules.themed.apply(c)}return r};return{...o,get className(){return i()},selector:l,toString:i}}),ve=L(),ze=L(),We=e=>{const t=(r=>{let n=!1;const l=ve(r,o=>{n=!0;const s="prefix"in(o=typeof o=="object"&&o||{})?String(o.prefix):"",i=typeof o.media=="object"&&o.media||{},c=typeof o.root=="object"?o.root||null:globalThis.document||null,p=typeof o.theme=="object"&&o.theme||{},f={prefix:s,media:i,theme:p,themeMap:typeof o.themeMap=="object"&&o.themeMap||{...le},utils:typeof o.utils=="object"&&o.utils||{}},h=be(c),d={css:te(f,h),globalCss:Ce(f,h),keyframes:Re(f,h),createTheme:je(f,h),reset(){h.reset(),d.theme.toString()},theme:{},sheet:h,config:f,prefix:s,getCssText:h.toString,toString:h.toString};return String(d.theme=d.createTheme(p)),d});return n||l.reset(),l})(e);return t.styled=(({config:r,sheet:n})=>ze(r,()=>{const l=te(r,n),o=(i,c=l,{displayName:p,shouldForwardStitchesProp:f}={})=>{const h=c(...i),d=h[W].type,u=f?.("as"),b=O.forwardRef((S,y)=>{const $=S?.as&&!u?S?.as:d,{props:g,deferredInjector:k}=h(S);return u||delete g.as,g.ref=y,k?O.createElement(O.Fragment,null,O.createElement($,g),O.createElement(k,null)):O.createElement($,g)});return b.className=h.className,b.displayName=p||`Styled.${d.displayName||d.name||d}`,b.selector=h.selector,b.toString=()=>h.selector,b[W]=h[W],b},s=(...i)=>o(i);return s.withConfig=i=>(...c)=>{const p=l.withConfig(i);return o(c,p,i)},s}))(t),t};const Te={100:"#F4ECF9",300:"#E8D8FF",500:"#7F4EC3",600:"#663E9C",700:"#402762"},Ae={100:"#FFEEE7",300:"#FEC2AC",500:"#FF7442",600:"#CC5D35"},Oe={100:"#FFEEEE",300:"#FFBFBF",500:"#DB3030",600:"#B10409",700:"#7D0E0E"},Pe={50:"#FCFBFC",100:"#F3F2F4",200:"#E8E6EA",300:"#C2C0C6",400:"#9B98A0",500:"#76727C",600:"#524D59",700:"#251F2D","100-a":"rgba(65, 59, 73, 0.06)","300-a":"rgba(74, 67, 84, 0.34)","500-a":"rgba(37, 31, 45, 0.63)","600-a":"rgba(39, 33, 47, 0.8)","700-a":"rgba(26, 20, 35, 0.95)"},Me={100:"#EAF9F0",300:"#B4E4CA",500:"#2DA75E",600:"#158C44",700:"#1C6A3B"},Le={100:"#FFF5E3",300:"#FFE4B2",500:"#FFB733",600:"#CD9725",700:"#8D6926"},De={100:"#EBF2FF",300:"#B1CBFF",500:"#3270EB",600:"#1B55C8",700:"#254A95"},m={blue:De,gray:Pe,green:Me,orange:Ae,purple:Te,red:Oe,yellow:Le},Ne="tango-iframe-app",_e="tango-extension-app",Ge="tango-sidekick",Y="tango-app",He=()=>{if(typeof window>"u")return null;if(window.chrome&&chrome.runtime&&chrome.runtime.id){if(document.getElementById(Ge))return document.getElementById(Y);const e=document.getElementById(Ne);if(e)return e.contentWindow.document.getElementById(Y);const t=document.getElementById(_e);return t!=null&&t.shadowRoot?t.shadowRoot:null}return document.getElementById(Y)},oe={purple100:m.purple[100],purple300:m.purple[300],purple500:m.purple[500],purple600:m.purple[600],purple700:m.purple[700]},Ve={orange100:m.orange[100],orange300:m.orange[300],orange500:m.orange[500],orange600:m.orange[600]},Je={red100:m.red[100],red300:m.red[300],red500:m.red[500],red600:m.red[600],red700:m.red[700]},Xe={gray50:m.gray[50],gray100:m.gray[100],gray200:m.gray[200],gray300:m.gray[300],gray400:m.gray[400],gray500:m.gray[500],gray600:m.gray[600],gray700:m.gray[700],"gray100-a":m.gray["100-a"],"gray300-a":m.gray["300-a"],"gray500-a":m.gray["500-a"],"gray600-a":m.gray["600-a"],"gray700-a":m.gray["700-a"]},Ye={green100:m.green[100],green300:m.green[300],green500:m.green[500],green600:m.green[600],green700:m.green[700]},Ze={yellow100:m.yellow[100],yellow300:m.yellow[300],yellow500:m.yellow[500],yellow600:m.yellow[600],yellow700:m.yellow[700]},Ue={blue100:m.blue[100],blue300:m.blue[300],blue500:m.blue[500],blue600:m.blue[600],blue700:m.blue[700]},qe={gradientHero:"radial-gradient( farthest-corner at 50% 0px, rgba(245,241,254,0.71) 0%, rgba(71,48,104,0.7) 100% )",gradientPro:`var(--gradient-500, radial-gradient(122.32% 122.32% at 50% 5.36%, rgba(242, 234, 246, 0.42) 0%, rgba(102, 62, 156, 0.42) 100%), ${oe.purple500})`,gradientEnt:"var(--gradient-500, radial-gradient(122.32% 122.32% at 50% 5.36%, rgba(242, 234, 246, 0.42) 0%, rgba(102, 62, 156, 0.42) 100%), rgba(255, 230, 98, 1))"},{styled:Qe,css:et,globalCss:tt,keyframes:rt,getCssText:nt,theme:ot,createTheme:it,config:lt}=We({root:He(),prefix:"topaz",theme:{colors:{...Xe,...Ye,...Ve,...oe,...Je,...Ze,...Ue,...qe,primary100:"$purple100",primary300:"$purple300",primary500:"$purple500",primary600:"$purple600",primary700:"$purple700",white:"#FFFFFF",white10:"rgba(255, 255, 255, .10)",black05:"rgba(0, 0, 0, .05)",favorite:"rgba(255, 230, 98, 1)"},space:{0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"24px",6:"32px",7:"40px",8:"48px",9:"64px",10:"80px"},sizes:{0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"24px",6:"32px",7:"40px",8:"48px",9:"64px",10:"80px"},radii:{xs:"6px",sm:"10px",md:"16px",lg:"24px",xl:"32px",full:"9999px"},fonts:{sans:"Apercu, sans-serif",serif:"Tiempos Headline, serif"},fontSizes:{1:"12px",2:"13px",3:"15px",4:"17px",5:"21px",6:"32px",7:"38px",8:"54px"},leading:{1:"110%",2:"130%",3:"135%",4:"140%",5:"165%",6:"170%"},shadows:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",base:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",hero:"0px 8px 12px -4px #7750AE4D"},zIndices:{background:0,above:"1",below:"-1",cover:20,foreground:50,overlay:90,alert:100}},media:{xs:"(min-width: 480px)",sm:"(min-width: 640px)",md:"(min-width: 768px)",lg:"(min-width: 1024px)",xl:"(min-width: 1280px)"},utils:{bg:e=>({background:e}),m:e=>({margin:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e}),p:e=>({padding:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),size:e=>({width:e,height:e})}});export{We as Y,Qe as b,tt as c,ot as f,rt as h,et as u,nt as w};
//# sourceMappingURL=DlLMD6w7.js.map
