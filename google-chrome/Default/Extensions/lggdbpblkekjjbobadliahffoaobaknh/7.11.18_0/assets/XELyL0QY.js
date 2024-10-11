import{r as v,u as q,E as A,i as _,f as G}from"./Cil-fwZs.js";import{C as K,m as O,c as k,u as Q,g as Z,s as L,i as W,d as tt}from"./CavFI0yr.js";import{c as et}from"./CTuBfHaM.js";import{e as S,r as m}from"./Dph_3Rnf.js";const nt=t=>{if(!t)return{attributes:"{}",baseURI:document.baseURI,tag:"",text:"",iframeURI:v()?document.baseURI:void 0};const n=K(t),e=O(t);return{...$(t),baseURI:t.baseURI,iframeURI:v()?t.baseURI:void 0,parent:n?$(n):void 0,labelledBy:e?$(e):void 0}},$=t=>({attributes:JSON.stringify(q(t)),tag:t.nodeName,text:st(t)}),st=t=>t instanceof HTMLElement?t.innerText.slice(0,100):"";function D(t){var n;let e=t.shadowRoot?[t]:[];return[...((n=t.shadowRoot)==null?void 0:n.children)||[],...t.children].forEach(o=>{e=e.concat(D(o))}),e}const ot=t=>{const n=t.ownerDocument.defaultView||window;let e=t;for(;e;){if(e instanceof n.HTMLElement&&e.shadowRoot)return e.shadowRoot;if(e instanceof n.ShadowRoot)return e;const o=e.getRootNode();e=e.parentNode||(o instanceof n.ShadowRoot?o.host:null)}return null},rt=(t,n=document)=>{var e,o;const r=n.defaultView||window;let s=t.getBoundingClientRect();if(t instanceof r.HTMLInputElement&&s.width<5&&s.height<5){const b=(e=t.labels)==null?void 0:e[0];b&&(s=b.getBoundingClientRect(),t=b)}const a=s.x+s.width/2,u=Math.max(s.top,0),i=Math.max(s.bottom,0),c=ot(t)??n,d=c.elementsFromPoint(a,u),g=c.elementsFromPoint(a,i);if(s.width===0||s.height===0)return!0;const y=(o=t.computedStyleMap().get("display"))==null?void 0:o.toString();return(y==="inline"||y==="table-row")&&(t.contains(d[0])||t.contains(g[0]))?!1:!d.includes(t)&&!g.includes(t)};function U(t,n,e,o){const r=t.element,s=r.tagName===n.tag.toUpperCase();s&&l(t,"attributesTagName"),h(t,e,"attributesType","type"),h(t,e,"attributesRole","role"),h(t,e,"attributesCols","cols"),h(t,e,"attributesRows","rows"),h(t,e,"attributesMinLength","minlength"),h(t,e,"attributesMaxLength","maxlength"),h(t,e,"attributesPlaceholder","placeholder"),h(t,e,"attributesId","id"),h(t,e,"attributesHref","src"),h(t,e,"attributesName","name");const a=r.getAttribute("href");typeof e.href=="string"&&e.href.length>2&&a&&(a===e.href?l(t,"attributesHref"):o&&et(e.href,a)&&l(t,"attributesHrefPartial")),n.tag==="INPUT"&&(e.type==="checkbox"||e.type==="radio")&&h(t,e,"attributesValue","value");const u=Object.keys(e);if(s&&u.filter(I).length===0&&r.getAttributeNames().filter(I).length===0&&l(t,"attributesEmpty"),typeof e.class=="string"&&typeof r.className=="string")if(e.class===r.className)l(t,"attributesClassExact");else{const c=e.class.split(" "),d=r.className.split(" ");c.some(g=>d.includes(g))&&l(t,"attributesClassPartial")}const i=u.filter(F);if(i.length>0){const c=i.filter(d=>e[d]===r.getAttribute(d)).length;c===i.length?l(t,"attributesDatasetExact"):c>0&&l(t,"attributesDatasetPartial")}}const h=(t,n,e,o)=>{n[o]&&t.element.getAttribute(o)===n[o]&&l(t,e)},I=t=>t!=="style"&&t!=="class",F=t=>t.startsWith("data-")&&!t.startsWith("data-tango");function at(t,n,e){const o=t.element;if(C(o,n,e,!1)){l(t,"labelExact");return}C(o,n,e,!0)&&l(t,"labelLoose")}function it(t,n){const e=n["aria-label"];if(typeof e=="string"&&e.length>2)return!0;const o=t.text;if(typeof o=="string"&&o.length>2)return!0;const r=n.alt;if(typeof r=="string"&&r.length>2)return!0;const s=n.title;if(typeof s=="string"&&s.length>2)return!0;const a=n.value;return typeof a=="string"&&a.length>2}function C(t,n,e,o=!1){var r;const s=e["aria-label"];if(typeof s=="string"&&s.length>2){const c=(r=t.attributes.getNamedItem("aria-label"))==null?void 0:r.nodeValue,d=t.getAttribute("label");if(o)return typeof c=="string"?c.includes(s):typeof d=="string"?d.includes(s):!1;if(c===s||d===s)return!0}if(lt(t)){const c=n.text;if(typeof c=="string"&&c.length>2&&ct(t,c,o))return!0}const a=e.alt;if(typeof a=="string"&&a.length>2&&t.getAttribute("alt")===a)return!0;const u=e.title;if(typeof u=="string"&&u.length>2&&t.getAttribute("title")===u)return!0;const i=e.value;return typeof i=="string"&&i.length>2&&t instanceof HTMLInputElement&&(t.type==="button"||t.type==="submit")&&t.getAttribute("value")===i}function lt(t){return t.getAttribute("role")!=="combobox"}function ct(t,n,e=!1){const o=t.ownerDocument.defaultView||window;if(!(t instanceof o.HTMLElement))return!1;const r=n.toLocaleLowerCase(),s=t.innerText.toLocaleLowerCase();return e&&(s.length>=r.length&&s.length<=r.length*3||r.length===A)?s.includes(r):s===r||s.startsWith(r)&&r.length===A}const N={attributesClassExact:2,attributesClassPartial:1,attributesCols:1,attributesDataset:2,attributesDatasetExact:2,attributesDatasetPartial:1,attributesEmpty:1,attributesId:4,attributesHref:3,attributesHrefPartial:2,attributesMinLength:1,attributesMaxLength:1,attributesName:4,attributesPlaceholder:2,attributesRole:2,attributesRows:1,attributesTagName:1,attributesType:1,attributesValue:2,boundsPositionExactX:2,boundsPositionExactY:2,boundsPositionLooseX:1,boundsPositionLooseY:1,boundsPositionRelativeX:1,boundsPositionRelativeY:1,boundsSizeExact:2,boundsSizeLoose:1,cssSelector:2,iconMatch:2,labelExact:10,labelledByMatch:3,labelLoose:5,offsetTopExact:1,parentMatch:2},ut=1,dt=7,ft=.58;function l(t,n){t.score+=N[n],t.wins.push(n)}const bt=(t,n)=>{const{maximumScore:e,pointsIncluded:o}=ht(t,n);return{minimumScore:Math.floor(ft*e),pointsIncluded:o}},ht=(t,n)=>{const e=JSON.parse(t.attributes);let o=0,r=[];const s=(a,u,i)=>{if(u===void 0||u){if(a==="cssSelector"&&i){const c=Math.min(i.split(",").length,n.maxCssSelectorWins);o+=c*N.cssSelector;const d=Array(c).fill("cssSelector");r=[...r,...d];return}o+=N[a],r.push(a)}};return s("attributesTagName"),s("attributesType",!!e.type),s("attributesRole",!!e.role),s("attributesPlaceholder",!!e.placeholder),s("attributesClassExact",!!(e.class&&typeof e.class=="string")),s("attributesDatasetExact",Object.keys(e).filter(F).length>0),s("attributesId",!!e.id&&n.useAttributesIdMatch),s("attributesHref",!!(e.href&&typeof e.href=="string"&&e.href.length>2)),s("attributesName",!!e.name),s("attributesValue",!!(e.value&&t.tag==="INPUT"&&(e.type==="checkbox"||e.type==="radio"))),s("attributesEmpty",Object.keys(e).filter(I).length===0),s("labelExact",it(t,e)),s("boundsPositionExactX",!!t.bounds),s("boundsPositionExactY",!!t.bounds),s("boundsSizeExact",!!t.bounds),s("cssSelector",!!t.xPath,t.xPath??void 0),s("parentMatch",!!t.parent&&n.useParentMatch),s("labelledByMatch",!!t.labelledBy),s("iconMatch",!!t.iconHash),s("offsetTopExact",!!t.offsetTop),{maximumScore:o,pointsIncluded:r}},T=t=>({element:t,score:0,wins:[],isWinner:!1}),Y=t=>{t.sort((n,e)=>e.score-n.score)},M=t=>!!t&&!Number.isNaN(t.x)&&!Number.isNaN(t.y)&&!Number.isNaN(t.height)&&!Number.isNaN(t.width);function mt(t,n){const e=t.element.getBoundingClientRect(),o=n.bounds;if(M(e)&&M(o)){if(o){const r={elementBounds:e,stepBounds:o,stepWindowWidth:n.windowWidth,stepWindowHeight:n.windowHeight};gt(r)?l(t,"boundsPositionExactX"):yt(r)?l(t,"boundsPositionLooseX"):wt(r)&&l(t,"boundsPositionRelativeX"),pt(r)?l(t,"boundsPositionExactY"):xt(r)?l(t,"boundsPositionLooseY"):Et(r)&&l(t,"boundsPositionRelativeY")}e.width===0||e.height===0||(o&&St(e,o)?l(t,"boundsSizeExact"):o&&Mt(e,o)&&l(t,"boundsSizeLoose"))}}const V=.05,H=.1,X=.05;function gt({elementBounds:t,stepBounds:n,stepWindowWidth:e}){return t.x<=0?!1:Math.round(t.x)===n.x?!0:e?Math.round(window.innerWidth-t.width-t.x)===Math.round(e-n.width-n.x):!1}function pt({elementBounds:t,stepBounds:n,stepWindowHeight:e}){return t.y<=0?!1:Math.round(t.y)===n.y?!0:e?Math.round(window.innerHeight-t.height-t.y)===Math.round(e-n.height-n.y):!1}function yt({elementBounds:t,stepBounds:n}){return t.x<=0?!1:w(t.x,n.x)<V}function xt({elementBounds:t,stepBounds:n}){return t.y<=0?!1:w(t.y,n.y)<V}function wt({elementBounds:t,stepBounds:n,stepWindowWidth:e}){if(t.x<=0||!e)return!1;const o=t.x/window.innerWidth,r=n.x/e;return w(o,r)<X}function Et({elementBounds:t,stepBounds:n,stepWindowHeight:e}){if(t.y<=0||!e)return!1;const o=t.y/window.innerHeight,r=n.y/e;return w(o,r)<X}function St(t,n){return M(t)?Math.round(t.width)===n.width&&Math.round(t.height)===n.height:!1}function Mt(t,n){return!M(t)||!M(n)?!1:w(t.width,n.width)<H&&w(t.height,n.height)<H}function w(t,n){return Math.abs((t-n)/n)}function z(t,n){for(const e of n)e===t.element&&l(t,"cssSelector")}function R(t,n=!1,e){return t.xPath?t.xPath.split(", ").flatMap((o,r)=>{r===0&&n&&(o=o.replace(/:nth-child\(\d+\)/g,""));try{return[...e.querySelectorAll(o)]}catch{return null}}).filter(Boolean):[]}const $t=2;function Pt(t,n){!n.iconHash||t.score<=$t||_(t.element)===n.iconHash&&l(t,"iconMatch")}function It(t,n,e,o){if(!n)return;const r=t.element,s=r.getAttribute("aria-labelledby");if(typeof s=="string"){const i=o.getElementById(s);if(i&&P(i,n)){l(t,"labelledByMatch");return}}const a=O(r,o);if(a&&P(a,n)){l(t,"labelledByMatch");return}if(!("labels"in r)||!r.labels)return;const u=[...r.labels];for(const i of u)if(P(i,n)){l(t,"labelledByMatch");return}}const P=(t,n)=>t.innerText===n.text;function Nt(t,n){if(!n.offsetTop)return;const e=G(t.element);e>0&&n.offsetTop===e&&l(t,"offsetTopExact")}function Tt(t,n){n!=null&&n.contains(t.element)&&l(t,"parentMatch")}const Rt=3;function J(t,n){const e=R(t,!1,n),o=Array.from(n.body.querySelectorAll(t.tag)).map(T),r=JSON.parse(t.attributes);for(const a of o)z(a,e),U(a,t,r,!1);Y(o);const s=o[0];return s?.score>=Rt?s.element:null}const j=({scorecard:t,details:n,targetAttributes:e,cssSelectorElements:o,parent:r,doc:s,loose:a,gamesToExclude:u})=>{for(const i of Object.values(m))if(!(u!=null&&u.includes(i)))switch(i){case m.LABEL:at(t,n,e);break;case m.ATTRIBUTES:U(t,n,e,a);break;case m.BOUNDS:mt(t,n);break;case m.CSS_SELECTOR:z(t,o);break;case m.PARENT:Tt(t,r);break;case m.LABELLED_BY:It(t,n.labelledBy,e,s);break;case m.ICON:Pt(t,n);break;case m.OFFSET_TOP:Nt(t,n);break}};async function Ct(t,n=3){const e=t.targetDetails;if(!e)return{status:S.NoTargetDetails};const o=t.document||document,r=k(e);let s="*";r&&(s=Q(r));let a=Array.from(o.body.querySelectorAll(s));const u=D(o.body).flatMap(f=>{var E;return Array.from(((E=f.shadowRoot)==null?void 0:E.querySelectorAll(s))||[])});let i=a.map(T),c=u.map(T);i=i.concat(c);const d=JSON.parse(e.attributes),g=R(e,t.isFlexible,o),y=e.parent?J(e.parent,o):null;for(const f of i)j({scorecard:f,details:e,targetAttributes:d,cssSelectorElements:g,parent:y,doc:o,loose:!1,gamesToExclude:t.gamesToExclude});if(Y(i),i=i.slice(0,n),t.createElementFeatures)for(const f of i)f.elementFeatures=nt(f.element);if(t.labelScore)for(const f of i)f.score>ut&&f.element.setAttribute("data-tango-automatix-score",`${f.score}`);let b=6,x=[];if(!t.isFlexible){const f=Bt({scorecards:i}),E=bt(e,{useAttributesIdMatch:f.hasAttributesIdMatch,useParentMatch:f.hasParentMatch,maxCssSelectorWins:f.maxCssSelectorWins});b=E.minimumScore,x=E.pointsIncluded}const p=i[0];if(!p)return{status:S.NoElements,minimumScore:b,pointsIncludedInMinimumScore:x,scorecards:[]};if(p.score<b)return{status:S.ScoreTooLow,minimumScore:b,pointsIncludedInMinimumScore:x,scorecards:i};p.isWinner=!0;let B=S.Success;return!(t.excludeElementVisibilityCheck||t.isFlexible)&&rt(p.element,o)&&(B=S.ElementHidden),{status:B,scorecards:i,minimumScore:b,pointsIncludedInMinimumScore:x,...p}}const Ht=t=>{var n,e;const o=t.targetDetails,{candidateElement:r,baseElement:s}=t;if(!o)return null;const a={element:r,score:0,wins:[],isWinner:!1},u=Z(r),i=k(o);if(u!==i)return a;const c=t.document||document,d=JSON.parse(o.attributes),g=R(o,!0,c),y=o.parent?J(o.parent,c):null;if(s&&L(r)!==L(s)||s&&W(r)!==W(s))return a;j({scorecard:a,details:o,targetAttributes:d,cssSelectorElements:g,parent:y,doc:c,loose:!0});const b=tt(!1),x=(n=r.parentElement)==null?void 0:n.closest(b),p=(e=s?.parentElement)==null?void 0:e.closest(b);return x===p&&l(a,"parentMatch"),a.isWinner=a.score>=dt,a};function Bt(t){let n=!1,e=!1,o=0;for(const r of t.scorecards)r.wins.find(s=>s==="attributesId")&&(n=!0),r.wins.find(s=>s==="parentMatch")&&(e=!0),o=Math.max(o,r.wins.filter(s=>s==="cssSelector").length);return{hasAttributesIdMatch:n,hasParentMatch:e,maxCssSelectorWins:o}}export{Ht as S,Ct as f};
//# sourceMappingURL=XELyL0QY.js.map
