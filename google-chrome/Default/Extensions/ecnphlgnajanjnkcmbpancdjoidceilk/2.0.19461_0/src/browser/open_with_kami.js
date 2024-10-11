(function(){"use strict";function s(){var i;const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const n=e.offsetWidth-t.offsetWidth;return(i=e.parentNode)==null||i.removeChild(e),n}function c(e,t){const n=document.createElement("div");n.innerHTML=e;const i=n.children[0];n.removeChild(i),document.body.appendChild(i),i.addEventListener("click",function(d){document.body.removeChild(i),chrome.runtime.sendMessage({"open-with-kami":t},function(l){window.location=l}),d.preventDefault()}),navigator.userAgent.indexOf("Edg/")!=-1?(i.style.top="45px",i.style.right=`${s()+20}px`):i.style.right=`${s()+140}px`}function r(e){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),document.head.appendChild(t)}const o=document.getElementsByTagName("embed")[0];if(o&&["application/pdf","application/x-google-chrome-pdf"].includes(o.type)){const e=o.attributes.getNamedItem("src"),t=document.location.toString();if(e&&(e.value===t||e.value=="about:blank")){r(chrome.runtime.getURL("src/integrations/google_classroom/styles.css")),r(chrome.runtime.getURL("src/browser/open_with_kami.css"));const n=`
        <div class="kami-open-root">
          <div class="kami-open-button kami-drive-viewer-toolstrip-open-and-openwith">
            <div class="kami-drive-viewer-toolstrip-open">
              <div class="kami-drive-viewer-open-app-icon"></div>
              <div class="kami-drive-viewer-open-label">${chrome.i18n.getMessage("OpenWithKami")}</div>
            </div>
          </div>
        </div>
      `;c(n,t)}}})();
