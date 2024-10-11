(function(){"use strict";const N={BASE_URL:"/",DEV:!1,EXTENSION_PUBLIC_HOST:"https://web.kamihq.com/api",EXTENSION_PUBLIC_WEB_HOST:"https://web.kamihq.com",MODE:"production",PROD:!0,SSR:!1},{EXTENSION_PUBLIC_HOST:L,EXTENSION_PUBLIC_WEB_HOST:s}=N;if(!L)throw new Error("EXTENSION_PUBLIC_HOST is not defined");if(!s)throw new Error("EXTENSION_PUBLIC_WEB_HOST is not defined");let c,h=!1,l=localStorage.getItem("classroom_grade_with_kami_enabled")==="true",p=new ResizeObserver(function(e){let t=document.querySelector("#kami-iframe");for(let i of e){let r=i.contentRect.width,n=i.contentRect.height;r&&n&&(t.style.width=r+"px",t.style.height=n+"px")}});function w(e){h=!0,e.src=m()}function T(e){e.data&&e.data.from==="kamiweb-document-loaded"&&e.origin===s&&(e.data.success?c&&clearTimeout(c):(clearTimeout(c),w(document.getElementById("material-iframe"))))}function g(){let e=document.createElement("iframe"),t=o();return e.setAttribute("allow","accelerometer *; ambient-light-sensor *; autoplay *; camera *;     encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *;     microphone *; midi *; payment *; picture-in-picture *; speaker *; usb *; vr *;     clipboard-read *; clipboard-write *; display-capture *;"),e.setAttribute("id","kami-iframe"),e.removeAttribute("style"),e.style.position="absolute",e.style.borderWidth="0",e.style.width=t.offsetWidth+"px",e.style.height=t.offsetHeight+"px",e.style.top=t.offsetTop+"px",e.src=m(),document.querySelector("c-wiz").appendChild(e),e}function d(){let e=o();return e&&/\/file\/d\/([A-z0-9-_]+)\/grading/.test(e.src)}function u(){return document.getElementById("kami-iframe")}function o(){return document.getElementById("material-iframe")}function y(e){let t=null;try{t=new URL(e)}catch{return null}const i=t.searchParams.get("authuser");if(i)return i;const r=/\/u\/(\d+)/.exec(t.pathname);return r?r[1]:null}function E(){const e=o(),t=y(window.location.href)||y(e.src);let n={ids:[e.src.match(/\/d\/([A-z0-9-_]+)\/grading/)[1]],from:"classroomgradingview"};return t&&(n.authuser=t),n}function m(){const e=new URL(s);return e.pathname="/web/viewer.html",e.searchParams.set("state",JSON.stringify(E())),e.toString()}function f(e){let t=e.target;l=t.checked,t.removeEventListener("change",f),localStorage.setItem("classroom_grade_with_kami_enabled",t.checked),_()}function b(){const e=document.querySelector(".SFsys");if(e){let t=document.querySelector("#grade_with_kami_wrapper");if(t)d()?t.style.display="flex":t.style.display="none";else{const i=`<div style="display: ${d()?"flex":"none"}; padding: 0.5em 0 0;" class="D4ueke" id="grade_with_kami_wrapper">
        <label>${chrome.i18n.getMessage("gradeWithKami")}
          <input type="checkbox" name="grade_with_kami" id="grade_with_kami_checkbox" ${l?"checked":""}>
          </input>
        </label>
      </div>`,r=document.createElement("div");r.innerHTML=i,t=r.children[0],r.removeChild(t),e.parentNode.insertBefore(t,e.nextSibling)}document.querySelector("#grade_with_kami_checkbox").addEventListener("change",f)}}function k(){let e=E(),t=u(),i=o();i&&(t?h?t.src=m():(t.style.display="block",t.contentWindow.postMessage(e,s),c=window.setTimeout(w.bind(null,t),4e3)):t=g(),i.style.visibility="hidden",t.style.visibility="visible",p.observe(i))}function v(){let e=u();e||(e=g()),o().style.visibility="visible",e.style.visibility="hidden"}function S(){let e=document.querySelectorAll(".N9wOvf.EruE3e")||document.querySelectorAll('[aria-label$="” in new window"]');for(const t of e){if(t.parentNode.querySelector("#open-with-kami-container"))return;let i=t.cloneNode(!0);i.id="open-with-kami-container",i.addEventListener("click",function(n){n.stopImmediatePropagation(),n.preventDefault(),window.open(m(),"_blank")}),i.addEventListener("mousedown",function(n){n.stopImmediatePropagation(),n.preventDefault()});let r=i.querySelector("span");r.innerText="",r.classList="kami-create-assignment-new-icon",t.parentNode.insertBefore(i,t.nextSibling)}}function _(){clearTimeout(c),p.disconnect(),b(),S(),d()&&l?k():v()}window.addEventListener("message",T),new MutationObserver(function(e){e.forEach(function(t){if(t.addedNodes){for(let n=0;n<t.removedNodes.length;n++){const a=t.removedNodes[n];a.nodeType===Node.ELEMENT_NODE&&a.querySelector("#grade_with_kami_checkbox")&&(a.querySelector("#grade_with_kami_checkbox").removeEventListener("change",f),b()),(a.id==="open-with-kami-container"||a.nodeType===Node.ELEMENT_NODE&&a.querySelector("#open-with-kami-container"))&&S(),(a.id==="kami-iframe"||a.nodeType===Node.ELEMENT_NODE&&a.querySelector("#kami-iframe"))&&(d()&&l?k():v())}for(var i=0;i<t.addedNodes.length;i++){var r=t.addedNodes[i];if(r.id==="material-iframe"||r.nodeType===Node.ELEMENT_NODE&&r.querySelector("#material-iframe"))_();else if(r.classList&&r.classList.value==="vVGAgd uSNagf"){const n=u();n&&(n.style.visibility="hidden")}}}})}).observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),o()&&_()})();
