(function(){"use strict";const v={BASE_URL:"/",DEV:!1,EXTENSION_PUBLIC_HOST:"https://web.kamihq.com/api",EXTENSION_PUBLIC_WEB_HOST:"https://web.kamihq.com",MODE:"production",PROD:!0,SSR:!1},{EXTENSION_PUBLIC_HOST:m,EXTENSION_PUBLIC_WEB_HOST:p}=v;if(!m)throw new Error("EXTENSION_PUBLIC_HOST is not defined");if(!p)throw new Error("EXTENSION_PUBLIC_WEB_HOST is not defined");w();let o,h;async function w(){var t;let e=await E(["hasSeenCanvasOpenWithKamiButtons","user"]);o=!!e.hasSeenCanvasOpenWithKamiButtons,h=(t=e.user)==null?void 0:t.id,C()&&(_()||(g(),k()))}async function l(e){const t=await b();if(!t)return;const i=new URLSearchParams(new FormData(t));e==="classView"?i.set("view_type","class_view"):e==="updateWork"&&i.set("view_type","template"),await chrome.storage.local.set({canvasOpenFormData:{data:i.toString(),action:t.action}}),chrome.runtime.sendMessage({action:"canvasOpenWithKami"})}function g(){const e=document.querySelector('#right-side[role="complementary"]');if(!e)return;const t=y();if(t){const i=f(t);i&&e.appendChild(i),e.appendChild(t)}}function k(){const e=document.querySelector(".assignment-title");if(!e)return;const t=e.querySelector(".title-content");if(!t)return;const i=s(`
    <div class="kami-new-tab">
      <a href="#" style="width: 50px; display:flex; align-items: center;width:65px">
        <img src="${p}/web/images/openwith.svg" style="height:10px; width:10px;"/>
        <img src="${p}/web/images/kami_widekerning.svg" style="margin-left:5px;width:50px" />
      </a>
    </div>
  `);d(i,"OpenKamiInNewTab",!0),i.addEventListener("click",function(){u("Canvas Open In New Tab Button Click"),l()}),e.children[1]?e.insertBefore(i,e.children[1]):e.appendChild(i),t.style.flex="unset",e.style.display="flex",e.style.alignItems="center"}function f(e){const t=document.createElement("div"),i=s(`
    <div class="kami-side-button-button-wrapper kami-assignment-dropdown-button">
      <div class="kami-button-wrapper">
        <a class="btn btn-sidebar-wide kami-sidebar-button">
          <span class="kami-icon"></span>
          ${chrome.i18n.getMessage("OpenClassView")}
        </a>
      </div>
    </div>
  `);if(!o){const c=s(`
      <div class="kami-side-button-popup-wrapper kami-class-view-popup-wrapper">
        <div class="kami-popup-triangle"></div>
        <div class="kami-side-button-popup">
          <h1 class='kami-popup-header'>${chrome.i18n.getMessage("ClassViewInKami")}</h1>
          <p class='kami-popup-message'>${chrome.i18n.getMessage("ClassViewDescriptionText")}</p>
          <div class="kami-popup-footer">
            <a href="https://help.kamiapp.com/en/articles/8216007-how-to-use-kami-class-view-with-canvas" target="_blank" class="kami-learn-more-button">${chrome.i18n.getMessage("LearnMore")}</a>
            <div class="kami-got-it-button">${chrome.i18n.getMessage("Next")}</div>
          </div>
        </div>
      </div>
    `);i.appendChild(c)}t.appendChild(i),d(i,"TrackAndGradeAllStudentsWork");const n=t.querySelector(".btn"),a=t.querySelector(".kami-side-button-popup-wrapper"),r=t.querySelector(".kami-got-it-button");if(a&&r&&(r.onclick=()=>{a.style.visibility="hidden",a.style.opacity="0";const c=e.querySelector(".kami-side-button-popup-wrapper");c&&(c.style.visibility="visible",c.style.opacity="1")}),!!n)return n.addEventListener("click",function(){u("Canvas Class View Button Click"),l("classView")}),t.removeChild(i),i}function y(){const e=document.createElement("div"),t=s(`
    <div class="kami-side-button-button-wrapper kami-assignment-dropdown-button">
      <div class="kami-button-wrapper" >
        <a class="btn btn-sidebar-wide kami-sidebar-button">
          <i class="kami-icon"></i>
          ${chrome.i18n.getMessage("EditAssignment")}
        </a>
      </div>
    </div>
  `),i=s(`
    <div class="kami-side-button-popup-wrapper kami-update-work-popup-wrapper" style="visibility:hidden; opacity: 0;">
      <div class="kami-popup-triangle"></div>
      <div class="kami-side-button-popup">
        <h1 class='kami-popup-header'>${chrome.i18n.getMessage("EditWithKami")}</h1>
        <p class='kami-popup-message'>${chrome.i18n.getMessage("MakeEditsToAssignmentAndUpdateAllStudentCopies")}</p>
        <div class="kami-popup-footer">
          <a href="https://help.kamiapp.com/en/articles/8346502-how-to-use-kami-s-publish-changes-feature-in-canvas" target="_blank" class="kami-learn-more-button">${chrome.i18n.getMessage("LearnMore")}</a>
          <div class="kami-got-it-button">${chrome.i18n.getMessage("GotIt")}</div>
        </div>
      </div>
    </div>
  `);o||t.appendChild(i),e.appendChild(t);const n=e.querySelector(".btn"),a=e.querySelector(".kami-side-button-popup-wrapper"),r=e.querySelector(".kami-got-it-button");if(d(t,"EditAndUpdateAllStudentsCopies"),a&&r&&(r.onclick=()=>{a.style.visibility="hidden",a.style.opacity="0",o=!0,chrome.storage.local.set({hasSeenCanvasOpenWithKamiButtons:!0})}),!!n)return n.addEventListener("click",function(){u("Canvas Update Work Button Click"),l("updateWork")}),t}function d(e,t,i){const n=s(`
    <div class="kami-side-button-tooltip-wrapper" style="bottom:-35px">
      <div class="kami-tooltip-triangle"></div>
      <div class="kami-side-button-tooltip">
        <p>${chrome.i18n.getMessage(t)}</p>
      </div>
    </div>
  `);e.appendChild(n),e.addEventListener("mouseover",function(){(o||i)&&(n.style.visibility="visible",n.style.opacity="1")}),e.addEventListener("mouseleave",function(){n.style.visibility="hidden",n.style.opacity="0"})}async function b(){let e;try{e=await(await fetch(window.location.href,{credentials:"include",headers:{Accept:"text/html"}})).text()}catch(i){console.error(i);return}const t=new DOMParser().parseFromString(e,"text/html");return S(t)}function S(e){const t=e.querySelector(".tool_content_wrapper form");if(!t||!t.action.includes("kami"))return;t.removeAttribute("target");const n=t.querySelector("div");if(n)return t.removeChild(n),t}function C(){const e=document.querySelector(".tool_content_wrapper form");return!!(e!=null&&e.action.includes("kami"))}function s(e){const t=document.createElement("div");if(t.innerHTML=e,t.children.length!==1)throw new Error("htmlStringToElement must have exactly 1 root element");const i=t.children[0];if(!i)throw new Error("htmlStringToElement must have exactly 1 root element");return t.removeChild(i),i}function _(){var t;const e=document.querySelector(".tool_content_wrapper form");return((t=e==null?void 0:e.querySelector('input[name="roles"]'))==null?void 0:t.value)==="Learner"}async function u(e){const i={uuid:crypto.randomUUID(),name:e,user_id:h,value:{app_name:"Canvas"}};await fetch(m+"/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}async function E(e){return new Promise(t=>{chrome.storage.local.get(e,i=>{t(i)})})}})();
