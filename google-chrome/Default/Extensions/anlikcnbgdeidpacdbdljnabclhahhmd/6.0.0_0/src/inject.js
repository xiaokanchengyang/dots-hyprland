/*! For license information please see inject.js.LICENSE.txt */
(()=>{var t={874:t=>{t.exports={TOKEN:"token"}},579:t=>{t.exports={PAGE_RENDERED:"pageRendered"}},419:(t,e,n)=>{const o=n(886),r=n(526),i=n(874),c={checkStatus:function(t){if(t.status>=200&&t.status<300)return t;throw Error(`GitHub returned a bad status: ${t.status}. Please set API token if Rate limiting is the cause(explained in README).`)},parseJSON:function(t){return null===t?null:t.json()},getRepoContent:function(t,e,n){const a=o.getUsernameWithReponameFromGithubURL();if(!a.user||!a.repo)return;const u=a.user+"/"+a.repo;e=e||o.getContentPath()||"";const s=r.get(i.TOKEN)||localStorage.getItem("x-github-token");let l={};const d=o.getBranch()||r.get("defaultBranch")||"master";let f="";n||(f="/contents/"+e+"?ref="+d),s&&(l={Authorization:"token "+s,"User-Agent":"Awesome-Octocat-App"}),window.fetch("https://api.github.com/repos/"+u+f,{headers:l}).then(c.checkStatus).then(c.parseJSON).then((function(e){t(null===e?null:e)})).catch((function(e){e&&console.error("Error in enhanced-github",e),t(null)}))}};t.exports=c},886:t=>{const e={getContentPath:function(){const t=window.location.href.match(/.*[bt][lr][oe][be]\/[^//]+\/(.*)/);return t&&t.length&&t[1]},getBranch:function(){const t=window.location.href.match(/.*(blob|tree|commits)\/([^//]+).*$/);return t&&t.length&&t[2]},getUsernameWithReponameFromGithubURL:function(){const t=window.location.pathname.split("/");return{user:t[1],repo:t[2]}},sortOn:function(t,e){return t.sort((function(t,n){return t[e]<n[e]?-1:t[e]>n[e]?1:0}))},sortFileStructureAsOnSite:function(t){if(!t||"[object Array]"!==Object.prototype.toString.call(t))return;let n=[],o=[],r=[],i=[];return t.forEach((function(t){"dir"===t.type||"file"===t.type&&0===t.size?n.push(t):"file"===t.type||"symlink"===t.type?o.push(t):r.push(t)})),n=e.sortOn(n,"name"),o=e.sortOn(o,"name"),r=e.sortOn(r,"name"),i=i.concat(n).concat(o).concat(r),i},convertSizeToHumanReadableFormat:function(t){if(0===t)return{size:0,measure:"Bytes"};t*=1024;const e=Math.floor(Math.log(t)/Math.log(1024));return{size:parseFloat((t/Math.pow(1024,e)).toFixed(2)),measure:["","B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}},getFileSizeAndUnit:function(t){const n=e.convertSizeToHumanReadableFormat(t.size);return n.size+" "+n.measure},removePrevInstancesOf:function(t){t&&[].forEach.call(document.querySelectorAll(t),(function(t){t.parentNode.removeChild(t)}))}};t.exports=e},583:(t,e,n)=>{var o=n(576);const r=n(419),i=n(886),c=n(738),a=n(526);function u(){s.addCopyAndDownloadButton(),s.addFileSizeAndDownloadLink()}const s={selectText:function(){const t="tbody";if(document.selection){const e=document.body.createTextRange();e.moveToElementText(document.querySelectorAll(t)[0]),e.select()}else if(window.getSelection){const e=document.createRange();e.selectNode(document.querySelectorAll(t)[0]),window.getSelection().addRange(e)}},hasClass:function(t,e){return(t.getAttribute("class")||"").split(" ").indexOf(e)>-1},appendRepoSizeElement:function(){i.removePrevInstancesOf(".eg-repo-size");const t=i.convertSizeToHumanReadableFormat(1024*a.get("repoSize"));let e;if(document.querySelectorAll(".Layout-sidebar .hide-sm.hide-md").length&&(e=document.querySelectorAll(".Layout-sidebar .hide-sm.hide-md")[0]),e){const n=`\n        <h3 class="sr-only">Repo Size</h3>\n        <div class="mt-2">\n          <a href="javascript:void(0);" data-view-component="true" class="Link Link--muted">\n            <svg class="octicon octicon-database mr-2" mr="2" aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="16">\n              <path d="M6 15c-3.31 0-6-.9-6-2v-2c0-.17.09-.34.21-.5.67.86 3 1.5 5.79 1.5s5.12-.64 5.79-1.5c.13.16.21.33.21.5v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V7c0-.11.04-.21.09-.31.03-.06.07-.13.12-.19C.88 7.36 3.21 8 6 8s5.12-.64 5.79-1.5c.05.06.09.13.12.19.05.1.09.21.09.31v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V3c0-1.1 2.69-2 6-2s6 .9 6 2v2c0 1.1-2.69 2-6 2zm0-5c-2.21 0-4 .45-4 1s1.79 1 4 1 4-.45 4-1-1.79-1-4-1z"></path>\n            </svg>\n            <strong>${t.size}</strong>\n            <span>${t.measure}</span>\n          </a>\n        </div>\n      `;e.parentElement.insertAdjacentHTML("beforeend",n)}},addRepoData:function(){setTimeout((()=>{const t=i.getUsernameWithReponameFromGithubURL(),e=`${t.user}/${t.repo}`;if(!a.get("defaultBranch")||!window.location.href||window.location.href==="https://github.com/"+e)return a.get("repoSize")?(u(),void s.appendRepoSizeElement()):void r.getRepoContent((function(t){t&&(a.set("repoSize",t.size),a.set("defaultBranch",t.default_branch),u(),s.appendRepoSizeElement())}),"",!0);u()}),0)},addCopyAndDownloadButton:function(){document.querySelectorAll(".BtnGroup:not(.d-md-none)")[1]&&window.location.href&&window.location.href.indexOf("blob/"+i.getBranch())>-1&&(new o(".js-file-clipboard"),r.getRepoContent((function(t){c.onPathContentFetchedForBtns(t)}),i.getContentPath()))},addFileSizeAndDownloadLink:function(){r.getRepoContent((function(t){c.onPathContentFetched(t)}))}};t.exports=s},738:(t,e,n)=>{const o=n(886),r={onPathContentFetchedForBtns:t=>{const e=o.getFileSizeAndUnit(t);o.removePrevInstancesOf(".js-file-clipboard"),o.removePrevInstancesOf(".js-file-download");const n=`\n      <button aria-label="Copy file contents to clipboard" class="js-file-clipboard btn btn-sm BtnGroup-item file-clipboard-button tooltipped tooltipped-s js-enhanced-github-copy-btn" data-copied-hint="Copied!" type="button" click="selectText()" data-clipboard-target="tbody">\n        Copy File\n      </button>\n      <a href="${t.download_url}" download="${t.name}"\n        aria-label="(Option + Click) to download. (Cmd/Ctr + Click) to view raw contents." class="js-file-download btn btn-sm BtnGroup-item file-download-button tooltipped tooltipped-s">\n        <span style="margin-right: 5px;">${e}</span>\n        <svg class="octicon octicon-cloud-download" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">\n          <path d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path>\n        </svg>\n      </a>`;document.querySelectorAll(".BtnGroup:not(.d-md-none)")[1].insertAdjacentHTML("beforeend",n)},onPathContentFetched:(t=[])=>{if(!(t=o.sortFileStructureAsOnSite(t)))return;let e=!1;for(let n=0;n<t.length;n++)if("file"===t[n].type){e=!0;break}e&&setTimeout((function(){o.removePrevInstancesOf(".eg-download");let e=0,n=0;window.location.pathname&&window.location.pathname.indexOf(`tree/${o.getBranch()}`)>-1&&!window.location.pathname.endsWith(`tree/${o.getBranch()}`)&&!window.location.pathname.endsWith(`tree/${o.getBranch()}/`)&&(n=1);const r=o.getUsernameWithReponameFromGithubURL();if(window.location.pathname!==`/${r.user}/${r.repo}`&&-1===window.location.href.indexOf("tree/"+o.getBranch()))return;const i=document.querySelectorAll("table > tbody > tr.react-directory-row");for(var c=n;c<i.length;c++){const n=i[c].querySelector("td > div.react-directory-commit-age"),r="file"===t[e].type&&0!==t[e].size||"symlink"===t[e].type;if(document.querySelectorAll("tbody tr > td:nth-child(1)")[0].setAttribute("colspan","6"),n.parentElement.previousElementSibling.setAttribute("colspan","3"),n&&r){const r=o.getFileSizeAndUnit(t[e]);n.parentElement.insertAdjacentHTML("beforebegin",`\n            <td class="eg-download">\n              <a class="tooltipped tooltipped-s" href="${t[e].download_url}" title="(Option + Click) to download. (Cmd/Ctr + Click) to view raw contents." aria-label="(Option + Click) to download. (Cmd/Ctr + Click) to view raw contents."\n                download="${t[e].name}">\n                <svg class="octicon octicon-cloud-download" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">\n                  <path d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path>\n                </svg>\n                <span class="react-directory-download Link--secondary">${r}</span>\n              </a>\n            </td>\n          `)}else n.parentElement.insertAdjacentHTML("beforebegin",'<td class="eg-download"><div class="react-directory-download"></div></td>');e++}}),1e3)}};t.exports=r},352:(t,e,n)=>{const o=n(583),r=n(579),i={onMessage:()=>{chrome.runtime.onMessage.addListener((function(t,e,n){t&&t.type===r.PAGE_RENDERED&&o.addRepoData()}))},addListners:()=>{i.onMessage()}};t.exports=i},526:t=>{const e={set:(t,n)=>{e[t]=n},get:t=>e[t]};t.exports=e},576:function(t){var e;e=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return w}});var o=n(279),r=n.n(o),i=n(370),c=n.n(i),a=n(817),u=n.n(a);function s(t){try{return document.execCommand(t)}catch(t){return!1}}var l=function(t){var e=u()(t);return s("cut"),e},d=function(t,e){var n=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(n);var o=u()(n);return s("copy"),n.remove(),o},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=d(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=d(t.value,e):(n=u()(t),s("copy")),n};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function v(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,t);var e,n,o,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(i){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=a.call(this)).resolveOptions(e),n.listenClick(t),n}return e=u,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,r=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==p(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:o}):r?"cut"===n?l(r):f(r,{container:o}):void 0}({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(o?"success":"error",{action:n,text:o,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return v("action",t)}},{key:"defaultTarget",value:function(t){var e=v("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return v("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return l(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&m(e.prototype,n),o&&m(e,o),u}(r()),w=b},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var c=i.apply(this,arguments);return t.addEventListener(n,c,r),{destroy:function(){t.removeEventListener(n,c,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var o=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,c=o.length;i<c;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=e()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}(()=>{const t=n(352),e=n(583),o=n(526),r=n(874);!function(){window.enhancedGithub={config:{}};const n=setInterval((function(){"complete"===document.readyState&&(clearInterval(n),document.addEventListener("click",(function(t){e.hasClass(t.target,"js-file-clipboard")&&e.selectText()}),!1),t.addListners(),chrome.storage.sync.get({"x-github-token":""},(function(t){t&&o.set(r.TOKEN,t["x-github-token"]),e.addRepoData()})))}),10)}()})(),self["enhanced-github"]={}})();
//# sourceMappingURL=inject.js.map