window!==window.parent&&window.addEventListener("message",(e=>{if(!e.data.type||"edge_translate_deepl_request"!==e.data.type)return;let t=0;window.location.href=e.data.url;const a=setInterval((()=>{const e=document.getElementsByClassName("lmt__target_textarea"),n=e&&e.length>0&&e[0].innerText?e[0].innerText.trim():"";n.length>0?(window.parent.postMessage({type:"edge_translate_deepl_response",status:200,result:n},chrome.runtime.getURL("")),clearInterval(a)):++t>10&&(window.parent.postMessage({type:"edge_translate_deepl_response",status:504,errorMsg:"Wait result timeout!"},chrome.runtime.getURL("")),clearInterval(a))}),500)}));