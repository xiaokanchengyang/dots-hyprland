import{b as a}from"./CavFI0yr.js";import{M as n,r as c}from"./yXRVlCQS.js";import{O as i}from"./JFC79P2X.js";chrome.runtime.onMessage.addListener(m);async function m(e,s,r){if(e.message.target!=="offscreen")return!1;switch(e.message.type){case i.CreateCSSSelectors:return u(e.message.data.rrWebSnapshot).then(t=>{r({status:"success",cssSelectors:t})}).catch(t=>{const o={status:"error",errorMessage:t.message};r(o)}),!0;default:return console.warn(`Unexpected message name received: '${e.message.name}'.`),!1}}async function u(e){if(!e)throw new Error("No snapshot data provided");f(e,document);const s=document.querySelector("[data-tango-action-box]");if(!s)throw new Error("No target found");return a(s,void 0)}function f(e,s){const r={doc:s,hackCss:!0,cache:{stylesWithHoverClass:new Map},mirror:new n};c(e,r)}
//# sourceMappingURL=9xzNP9bm.js.map
