(function(){"use strict";const i={BASE_URL:"/",DEV:!1,EXTENSION_PUBLIC_HOST:"https://web.kamihq.com/api",EXTENSION_PUBLIC_WEB_HOST:"https://web.kamihq.com",MODE:"production",PROD:!0,SSR:!1},{EXTENSION_PUBLIC_HOST:s,EXTENSION_PUBLIC_WEB_HOST:a}=i;if(!s)throw new Error("EXTENSION_PUBLIC_HOST is not defined");if(!a)throw new Error("EXTENSION_PUBLIC_WEB_HOST is not defined");c();function c(){new MutationObserver(e=>{for(const t of e)for(const o of t.addedNodes){if(o.nodeType!==Node.ELEMENT_NODE)continue;const r=o;if(r.tagName!=="MAIN")continue;if(r.querySelector("button[data-test='more-resource']")){u("Microsoft Teams Assignments: Apps Button Found",{current_page_url:window.location.href});return}}}).observe(document.body,{childList:!0,subtree:!0})}const d=crypto.randomUUID();let n;async function u(e,t={}){const o={uuid:crypto.randomUUID(),name:e,value:{...t,app_name:"microsoft_teams",session_id:d}};n&&(o.user_id=n),await fetch(s+"/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})}function _(){chrome.storage.sync.get(["notable.user"],e=>{const t=e["notable.user"].id;typeof t=="number"&&(n=t)})}_()})();
