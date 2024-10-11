(function(){"use strict";function l(t){return new Promise(e=>{window.setTimeout(e,t)})}const u={BASE_URL:"/",DEV:!1,EXTENSION_PUBLIC_HOST:"https://web.kamihq.com/api",EXTENSION_PUBLIC_WEB_HOST:"https://web.kamihq.com",MODE:"production",PROD:!0,SSR:!1},{EXTENSION_PUBLIC_HOST:m,EXTENSION_PUBLIC_WEB_HOST:i}=u;if(!m)throw new Error("EXTENSION_PUBLIC_HOST is not defined");if(!i)throw new Error("EXTENSION_PUBLIC_WEB_HOST is not defined");f();async function f(){await Promise.race([l(3e3).then(()=>!1),E("settings.hideOffice365OpenWithKamiButton")])?console.debug("Kami: button hidden"):w()}function w(){window.addEventListener("message",t);function t(e){var o;if(!((o=e.data)!=null&&o.kamiOfficeDocumentData))return;console.debug("Kami: received document data from parent",e.data);const n=e.data.data;g(n),window.removeEventListener("message",t)}console.debug("Kami: requesting document data from parent"),window.parent.postMessage({requestKamiOfficeDocumentData:!0},"*")}function g(t){s(t),new MutationObserver(n=>{for(const o of n)o.type==="childList"&&s(t)}).observe(document.body,{childList:!0,subtree:!0})}function s(t){if(document.getElementById("open-with-kami")){console.debug("Kami: button already present");return}const n=document.querySelector("#CustomRightRegion");if(!n){console.debug("Kami: failed to find presence container");return}if(!t){console.warn("Kami: can not insert button without document data");return}const o=h(t);n.prepend(o)}function h(t){const e=document.createElement("a"),n="brightness(0) invert(1)";switch(c()){case"office365-powerpoint":const d=document.getElementById("O365_NavHeader");if(!d){console.debug("Kami: failed to find header");break}window.getComputedStyle(d).backgroundColor!=="rgb(245, 245, 245)"&&(e.style.filter=n);break;case"office365-excel":e.style.filter=n;break;case"office365-word":(t.accountType==="personal"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(e.style.filter=n)}e.id="open-with-kami",e.ariaLabel=chrome.i18n.getMessage("OpenWithKami"),e.dataset.tooltip=e.ariaLabel||"",e.onclick=()=>(p(t),!1),e.style.color="white";const o=document.createElement("img");o.src=`${i}/web/images/openwith.svg`,o.classList.add("open-with-icon"),e.append(o);const r=document.createElement("img");r.src=`${i}/web/images/kami_widekerning.svg`,r.classList.add("logo","logo-large"),e.append(r);const a=document.createElement("img");return a.src=`${i}/web/images/kami_shorthand.svg`,a.classList.add("logo","logo-small"),e.append(a),e}function c(){const{host:t}=window.location;return t.includes("word-edit")?"office365-word":t.includes("powerpoint")?"office365-powerpoint":t.includes("excel")?"office365-excel":"office365-unknown"}function p(t){const e=new URL(i);e.pathname="/web/viewer.html",e.searchParams.set("source",c()),e.searchParams.set("microsoft_user_email",t.userEmail),e.searchParams.set("document_identifier",`${t.driveId}::${t.itemId}`),window.open(e.toString(),"_blank")}async function E(t){return new Promise(e=>{chrome.storage.local.get(t,n=>{e(n[t])})})}})();
