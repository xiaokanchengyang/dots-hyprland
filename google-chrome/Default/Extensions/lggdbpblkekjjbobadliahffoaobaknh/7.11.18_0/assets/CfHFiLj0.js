function c(t=document){const e=[];return t.querySelectorAll("*").forEach(o=>{o.shadowRoot&&o.id!=="tango-extension-app"&&(e.push(o.shadowRoot),e.push(...c(o.shadowRoot)))}),e}const l="data-tango-blur",n=`${l}-auto`,i=`${l}-user-initiated-unblur`,f=(t,e={})=>{const r=window.getComputedStyle(t,null).getPropertyValue("font-size"),o=parseFloat(r);let s="10px";o>40&&(s="16px"),o>60&&(s=`${o/3}px`),t.tagName==="IMG"&&(s="12px"),t.style.setProperty("filter",`blur(${s})`,"important"),t.style.transition="filter 0.1s",t.setAttribute(l,"true"),e.isAutoBlur&&t.setAttribute(n,"true"),e.type&&t.setAttribute(`${n}-type--${e.type}`,"true")},u=(t,e={})=>{t.style.filter="",[...t.attributes].forEach(r=>{r.name.startsWith(l)&&t.removeAttribute(r.name)}),e.userInitiated&&t.setAttribute(i,"true")};function a(t){let e=[...document.querySelectorAll(`[${t}=true]`)];return c().forEach(o=>{const s=o?.querySelectorAll(`[${t}=true]`);e=[...e,...s||[]]}),e}function d(t){const e=a(`${n}-type--${t}`);for(const r of e)u(r)}function b(){const t=a(l);for(const e of t)u(e)}function A(){const t=a(n);for(const e of t)u(e)}export{n as A,l as B,i as U,b as a,f as b,d as c,A as d,c as f,u};
//# sourceMappingURL=CfHFiLj0.js.map
