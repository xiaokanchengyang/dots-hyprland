(()=>{var e={5739:(e,t,i)=>{"use strict";i.d(t,{$:()=>n});const n=globalThis.gvar??{}},181:(e,t,i)=>{var n=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,h="object"==typeof self&&self&&self.Object===Object&&self,d=l||h||Function("return this")(),p=Object.prototype.toString,c=Math.max,u=Math.min,w=function(){return d.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=r.test(e);return i||o.test(e)?a(e.slice(2),i?2:8):s.test(e)?NaN:+e}e.exports=function(e,t,i){var n,s,r,o,a,l,h=0,d=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var i=n,r=s;return n=s=void 0,h=t,o=e.apply(r,i)}function b(e){var i=e-l;return void 0===l||i>=t||i<0||p&&e-h>=r}function x(){var e=w();if(b(e))return C(e);a=setTimeout(x,function(e){var i=t-(e-l);return p?u(i,r-(e-h)):i}(e))}function C(e){return a=void 0,g&&n?f(e):(n=s=void 0,o)}function y(){var e=w(),i=b(e);if(n=arguments,s=this,l=e,i){if(void 0===a)return function(e){return h=e,a=setTimeout(x,t),d?f(e):o}(l);if(p)return a=setTimeout(x,t),f(l)}return void 0===a&&(a=setTimeout(x,t)),o}return t=m(t)||0,v(i)&&(d=!!i.leading,r=(p="maxWait"in i)?c(m(i.maxWait)||0,t):r,g="trailing"in i?!!i.trailing:g),y.cancel=function(){void 0!==a&&clearTimeout(a),h=0,n=l=s=a=void 0},y.flush=function(){return void 0===a?o:C(w())},y}}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=i(5739).$;function t(e,t,i){let n=i;return null!=e&&(n=Math.max(e,n)),null!=t&&(n=Math.min(t,n)),n}function n(e,t){return Math.floor(Math.random()*(t-e))+e}function s(){return confirm(e.gsm.options.help.areYouSure)}function r(e){let t=document.createElement("div");return t.innerHTML=e,t.children[0]}var o=i(181),a=i.n(o);function l(e){if(e)return chrome.dom?chrome.dom.openOrClosedShadowRoot(e):e.openOrClosedShadowRoot}new Set(["ar","en","es","fr","id","it","ja","ko","pt_BR","ru","tr","uk","vi","zh_CN","zh_TW"]);var h=i(5739).$;class d{_div=document.createElement("div");_supportsPopover=!!this._div.togglePopover;_shouldShow=!1;constructor(){this._supportsPopover||(this._jump=new p,this._wrapper=this._jump.div,this._div.classList.add("popoverYah")),this._wrapper=this._wrapper||document.createElement("div"),this._shadow=this._wrapper.attachShadow({mode:"closed"}),this._shadow.appendChild(this._div),this._div.popover="manual",this._div.style.zIndex="99999999999",h.os?.eListen.fsCbs.add(this._handleFsChange),this._supportsPopover||(this._style=function(e,t){let i=document.createElement("style");return i.innerHTML=".popoverYah {\n    z-index: 99999999999;\n    display: none;\n}\n\n.popoverYah.popoverOpenYah {\n    display: block !important;\n}",t.appendChild(i),i}(0,this._shadow))}_update=e=>{null!=e&&(this._shouldShow=e),this._shouldShow?(this._jump?this._jump.connect():document.documentElement.appendChild(this._wrapper),this._supportsPopover?!this._div.togglePopover()&&this._div.togglePopover():this._div.classList.add("popoverOpenYah")):(this._wrapper.isConnected&&this._wrapper.remove(),this._div.classList.remove("popoverOpenYah"))};_release=()=>{h.os?.eListen.fsCbs.delete(this._handleFsChange),this._wrapper.remove(),this._jump?.release(),delete this._jump,delete this._div};_handleFsChange=()=>{document.fullscreenElement&&this._update()}}class p{base=document.documentElement;div=document.createElement("div");released=!1;constructor(){h.os?.eListen.fsCbs.add(this.handleFullscreenChange)}release=()=>{this.released||(this.released=!0,this.div.remove(),h.os?.eListen.fsCbs.delete(this.handleFullscreenChange))};handleFullscreenChange=()=>{let e=document.documentElement,t=function(e,t){let i=e;for(;;){let e=i.fullscreenElement;if(!e)return i?.host;if(i=l(e),!i)return e}}(document);t&&"IFRAME"!==t.tagName&&(e=t),this.base!==e&&(this.base=e,this.div.isConnected&&this.connect())};connect=()=>{this.div.parentElement!==this.base&&this.base.appendChild(this.div)};disconnect=()=>{this.div.isConnected&&this.div.remove()}}var c=i(5739).$;class u extends d{released=!1;scrollElement=document.scrollingElement;latestDimension={width:this.scrollElement.scrollWidth,height:this.scrollElement.scrollHeight};mask=g("div",{id:"mask"});resist=g("div",{id:"resist"});canvas=document.createElement("canvas");style=document.createElement("style");pageStyle=document.createElement("style");ctx=this.canvas.getContext("2d");on=!1;isDrawing=null;points=[];hidden=!1;scrolling=!1;drewSomething=!1;mode="DRAW";color="red";eraserSize=44;brushSize=5;eraseCursor=f(this.eraserSize/2);constructor(){super(),window.addEventListener("resize",this.handleResizeDeb,{capture:!0,passive:!0}),this.canvas.addEventListener("contextlost",this.handleContextLost,{capture:!0,passive:!0}),window.addEventListener("wheel",this.handleWheel,{capture:!0,passive:!0}),window.addEventListener("keydown",this.handleKeyDown,!0),window.addEventListener("keyup",this.handleKeyUp,!0),this._div.addEventListener("contextmenu",this.handleContext,!0),this._div.addEventListener("pointerdown",this.handlePointerDown,{capture:!0,passive:!0}),this._div.addEventListener("pointerup",this.handlePointerUp,{capture:!0,passive:!0}),this._div.addEventListener("pointermove",this.handlePointerMoveDeb,{capture:!0,passive:!0}),this._wrapper.addEventListener("pointerleave",this.handlePointerLeave),document.addEventListener("pointerleave",this.clearIsDrawing),this.pageStyle.innerHTML="\n:root.noUseraSelectScroll * {\n        user-select: none !important;\n    }\n\n:root.noUseraSelect * {\n        user-select: none !important;\n    }",document.documentElement.appendChild(this.pageStyle),this.style.innerHTML=':popover-open {\n    position: static;\n    width: auto;\n    height: auto;\n    color: inherit;\n    background-color: transparent;\n    inset: 0;\n    margin: 0;\n    padding: 0;\n    border: none;\n    overflow: hidden;\n    pointer-events: none;\n\n}\n\n\n#resist, #mask {\n    pointer-events: none;\n    left: 0px;\n    top: 0px;\n    z-index: 9999999999;\n}\n\n#mask {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n}\n\n#resist {\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n#wrapper {\n    --label-scale: 1;\n    z-index: 9999999999;\n    position: fixed;\n    top: 100px;\n    left: 100px;\n    background-color: black; \n    color: white; \n    border: 2px solid #aaa;\n    width: 300px;\n    font-size: 14px;\n    font-family: "Segoe UI", "Avenir", system-ui, Courier, monospace;\n    user-select: none;\n    opacity: 0.8;\n    pointer-events: all;\n}\n\n#wrapper:hover {\n        opacity: 1;\n    }\n\n#wrapper.hidden {\n        width: revert;\n        font-size: 16px;\n    }\n\n#wrapper button:focus, #wrapper input:focus, #wrapper label:focus {\n            outline: 1px solid yellow; \n        }\n\n#wrapper button:hover, #wrapper input:hover, #wrapper label:hover {\n            cursor: pointer;\n            background-color: #555;\n        }\n\n#wrapper input[type="color"] {\n        position: absolute;\n        pointer-events: none;\n        opacity: 0;\n        width: 0px;\n        height: 0px;\n    }\n\n#wrapper .selected {\n        outline: 1px solid #9fe;\n    }\n\n#wrapper .selected:focus {\n            outline: 1px solid #9fe;\n        }\n\n#wrapper button, #wrapper label {\n        padding: 1px 6px;\n        background-color: inherit;\n        border: 1px solid #555;\n        color: white;\n    }\n\n#wrapper button *, #wrapper label * {\n            pointer-events: none;\n        }\n\n#wrapper button > *:nth-child(1n+2), #wrapper label > *:nth-child(1n+2) {\n            margin-left: 5px;\n        }\n\n#wrapper button {\n        font-size: inherit;\n    }\n\n#wrapper .iconButton {\n        border: none;\n        padding: 0px 3px;\n        font-size: 1.3em;\n        line-height: 0;\n        border-radius: 3px;\n    }\n\n#wrapper.hidden #header {\n            grid-template-columns: max-content repeat(3, max-content);\n        }\n\n#wrapper.hidden #header #headerLabel, #wrapper.hidden #header #help, #wrapper.hidden #header #clear {\n                display: none;\n            }\n\n#wrapper.hidden #header > svg:first-child {\n                margin-right: 30px;\n            }\n\n#wrapper #header {\n        display: grid;\n        grid-template-columns: max-content 1fr repeat(4, max-content);\n        border-bottom: 1px solid #aaa;\n        padding: 5px;\n        align-items: center;\n        cursor: move;\n    }\n\n#wrapper #header > svg:first-child {\n            margin-right: 5px;\n        }\n\n#wrapper #header > svg, #wrapper #header #headerLabel {\n            pointer-events: none;\n        }\n\n#wrapper #main {\n        padding: 5px;\n    }\n\n#wrapper.hidden #main {\n            display: none; \n        }\n\n#wrapper #mode {\n        --mode-font-scalar: 1;\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        font-size: calc(1em * var(--mode-font-scalar));\n        align-items: center;\n        column-gap: 5px;\n    }\n\n#wrapper #color {\n        display: grid;\n        grid-template-columns: repeat(6, 1fr);\n        align-items: center;\n        column-gap: 5px;\n        row-gap: 5px;\n    }\n\n#wrapper #color > label {\n            text-align: center;\n        }\n\n#wrapper #color > span:first-child, #wrapper #mode > span:first-child, #wrapper #brushSize > span:first-child, #wrapper #eraserSize > span:first-child {\n            width: calc(45px * var(--label-scale));\n        }\n\n#wrapper #main > *:nth-child(1n+2) {\n        margin-top: 5px;\n    }\n\n#wrapper #brushSize, #wrapper #eraserSize {\n        display: grid;\n        grid-template-columns: max-content 1fr;\n        align-items: center;\n    }\n\n#wrapper > .color {\n        color: black;\n        text-shadow: 1px 1px 2px white;\n        width: 30px;\n        \n    }\n\n#wrapper > button, #wrapper > label {\n        border: 1px solid #555;\n    }\n\n#wrapper > button.selected, #wrapper > label.selected {\n            outline: 1px solid yellow; \n        }\n\n#wrapper > #custom {\n        background: linear-gradient(to bottom right, red, yellow);\n        color: black;\n        text-shadow: 1px 1px 2px white;\n    }',this.resist.appendChild(this.canvas),this._div.appendChild(this.style),this._div.appendChild(this.mask),this._div.appendChild(this.resist),this.controls=new m(this),this.sync(),this.handleResize(),this._update(!0)}release=()=>{this.released||(this.released=!0,this.ensureOff(),this.controls.release(),delete this.controls,window.removeEventListener("resize",this.handleResizeDeb,!0),this.canvas.removeEventListener("contextlost",this.handleContextLost,!0),window.removeEventListener("wheel",this.handleWheel,!0),window.removeEventListener("keydown",this.handleKeyUp,!0),window.removeEventListener("keyup",this.handleKeyUp,!0),this._div.removeEventListener("contextmenu",this.handleContext,!0),this._div.removeEventListener("pointerdown",this.handlePointerDown,!0),this._div.removeEventListener("pointerup",this.handlePointerUp,!0),this._div.removeEventListener("pointermove",this.handlePointerMove,!0),this._wrapper.removeEventListener("pointerleave",this.handlePointerLeave),document.removeEventListener("pointerleave",this.clearIsDrawing),delete this.eraseCursor,delete this.sizeCursor,this._release())};handleContextLost=e=>{c.pageDraw?.release(),delete c.pageDraw,c.pageDraw=new u};sync=()=>{this.syncCursor(),"SELECT"===this.mode||this.hidden||this.scrolling?this.ensureOff():this.ensureOn(),this.hidden?(this.resist.style.opacity="0",this.controls.m.wrapper.classList.add("hidden")):(this.resist.style.opacity="1",this.controls.m.wrapper.classList.remove("hidden"))};renewEraserCursor=()=>{this.eraseCursor=f(Math.min(this.eraserSize/2,64))};renewSizeCursor=()=>{if(!this.isDrawing)return;const e=this.isDrawing.erase?this.eraserSize:2*this.brushSize;this.sizeCursor=f(Math.min(e/2,64))};syncCursor=()=>{this.isDrawing?this.isDrawing.scaleMode?this.resist.style.cursor=this.sizeCursor:this.isDrawing.erase?this.resist.style.cursor=this.eraseCursor:this.resist.style.cursor="crosshair":this.resist.style.cursor="ERASE"===this.mode?this.eraseCursor:"crosshair"};handleResize=e=>{this.controls.wrapper.sync(),this.resist.style.display="none";const t={width:this.scrollElement.scrollWidth,height:this.scrollElement.scrollHeight};if(this.resist.style.display="block",e&&this.latestDimension.width===t.width&&this.latestDimension.height===t.height)return;if(this.latestDimension=t,this.resist.style.width=this._div.style.width=`${t.width}px`,this.resist.style.height=this._div.style.height=`${t.height}px`,this.canvas.width>=t.width&&this.canvas.height>=t.height)return;let i;e&&(i=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)),this.canvas.width=t.width,this.canvas.height=t.height,this.canvas.width=this.scrollElement.scrollWidth,this.canvas.height=this.scrollElement.scrollHeight,i&&this.ctx.putImageData(i,0,0)};handleResizeDeb=a()(this.handleResize,500,{trailing:!0});handleKeyUp=e=>{"CapsLock"===e.key&&this.handleCapsLock(e)};handleKeyDown=e=>{"CapsLock"===e.key&&this.handleCapsLock(e)};handleCapsLock=e=>{if(this.hidden)return;const t=e.getModifierState("CapsLock");this.controls.m[t?"selectMode":"drawMode"].click(),e.stopImmediatePropagation(),e.preventDefault()};ensureOn=()=>{this.on||(document.documentElement.classList.add("noUseraSelect"),this.on=!0,this._wrapper.style.pointerEvents="all",this.resist.style.pointerEvents="all",this.mask.style.pointerEvents="all")};ensureOff=()=>{this.on&&(document.documentElement.classList.remove("noUseraSelect"),this.on=!1,this._wrapper.style.pointerEvents=this.scrolling?"none":"all",this.resist.style.pointerEvents="none",this.mask.style.pointerEvents="none",this.points=[],this.clearIsDrawing())};clearIsDrawing=()=>{this.isDrawing&&(this.isDrawing.scaleMode&&(this.renewEraserCursor(),delete this.sizeCursor),this.isDrawing=null,this.syncCursor())};handleWheel=e=>{this.scrolling?this.clearScrollDeb():this.on&&(document.documentElement.classList.add("noUseraSelectScroll"),this.scrolling=!0,this.clearScrollDeb(),this.sync())};clearScroll=()=>{this.scrolling&&(this.scrolling=!1,document.documentElement.classList.remove("noUseraSelectScroll"),this.sync())};clearScrollDeb=a()(this.clearScroll,300,{trailing:!0});handleContext=e=>this.on&&e.preventDefault();handlePointerDown=e=>{if(e.target===this.controls.m.header)return void this.controls.wrapper.handlePointerDown(e);if(!this.on)return;if(e.target===this.mask&&this.handleResize(e),e.target!==this.canvas)return;if(this.points=[],this.isDrawing)return void this.clearIsDrawing();let t="ERASE"===this.mode;2===e.button&&(t=!t),e.shiftKey&&this.latestPoint?this.drawLine(this.latestPoint,{x:e.pageX,y:e.pageY},"pen"===e.pointerType?e.pressure:null,t):(this.isDrawing={scaleMode:e.altKey||1===e.button,erase:t,button:e.button,id:e.pointerId,refX:e.clientX,refY:e.clientY,refE:this.eraserSize,refD:this.brushSize},this.isDrawing.scaleMode&&this.renewSizeCursor(),this.syncCursor(),this.handlePointerMove(e))};handlePointerUp=e=>{this.on&&(this.latestPoint={x:e.pageX,y:e.pageY},this.isDrawing&&this.isDrawing.button===e.button&&this.isDrawing.id===e.pointerId&&(this.points=[],this.clearIsDrawing()))};handlePointerMove=e=>{if(!this.on)return;if(!this.isDrawing)return;if(e.clientX>=window.innerWidth||e.clientX<=0||e.clientY>=window.innerHeight||e.clientY,this.points.length>500&&this.points.splice(0,490),this.latestPoint={x:e.pageX,y:e.pageY},this.points.push(this.latestPoint),this.isDrawing.scaleMode){const i=e.clientX-this.isDrawing.refX,n=this.isDrawing.refY-e.clientY;if(this.isDrawing.erase=Math.abs(i)>Math.abs(n),Math.max(Math.abs(i),Math.abs(n))<20)return;if(this.isDrawing.erase){const e=i/window.innerWidth;this.eraserSize=t(5,200,this.isDrawing.refE+195*e),this.brushSize=this.isDrawing.refD}else{const e=n/window.innerHeight;this.brushSize=t(1,40,this.isDrawing.refD+39*e),this.eraserSize=this.isDrawing.refE}return this.controls.syncSize(),this.renewSizeCursor(),void this.syncCursor()}if(this.points.length<2)return;const i=this.points.at(-2);this.drawLine(i,this.latestPoint,"pen"===e.pointerType?e.pressure:null)};handlePointerMoveDeb=this.handlePointerMove;handlePointerLeave=e=>{this.isDrawing?.scaleMode&&this.clearIsDrawing()};drawLine=(e,t,i,n)=>{this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(t.x,t.y),this.ctx.lineWidth=this.brushSize*(i??1),this.ctx.strokeStyle=this.color,this.isDrawing?.erase||n?(this.eraseColor?this.ctx.strokeStyle=this.eraseColor:this.ctx.globalCompositeOperation="destination-out",this.ctx.lineWidth=this.eraserSize):this.drewSomething=!0,this.ctx.stroke(),this.ctx.globalCompositeOperation="source-over"}}const w="red, green, blue, black, purple".split(", "),v="pink, aquamarine, lightskyblue, white, yellow".split(", ");class m{released=!1;wrapper=new C;m=b(this.wrapper.div);constructor(e){this.pd=e,c.gsm.pageDraw._labelScale&&this.wrapper.div.style.setProperty("--label-scale",c.gsm.pageDraw._labelScale.toString()),e._div.appendChild(this.m.wrapper),e._div.addEventListener("click",this.handleClick,!0),e._div.addEventListener("contextmenu",this.handleContextMenu,!0),e._div.addEventListener("mid",this.handleContextMenu,!0),e._div.addEventListener("input",this.handleInput,!0),this.m.brushSizeRange.value=e.brushSize.toString(),this.m.eraserSizeRange.value=e.eraserSize.toString(),this.m.colorInput.addEventListener("input",this.handleColorInput,!0)}release=()=>{this.released||(this.released=!0,this.pd._div.removeEventListener("click",this.handleClick,!0),this.pd._div.removeEventListener("input",this.handleInput,!0),this.m.colorInput.removeEventListener("input",this.handleColorInput,!0),this.wrapper.release(),this.m.wrapper.remove(),delete this.wrapper,delete this.m)};syncSize=()=>{this.m.brushSizeRange.value=this.pd.brushSize.toString(),this.m.eraserSizeRange.value=this.pd.eraserSize.toString()};handleInput=e=>{e.target,this.pd.brushSize=this.m.brushSizeRange.valueAsNumber,this.pd.eraserSize=this.m.eraserSizeRange.valueAsNumber,e.target===this.m.eraserSizeRange&&this.pd.renewEraserCursor()};handleColorInput=e=>{this.pd.color=this.m.colorInput.value,this.m.dropper.classList.add("selected"),this.m.colors.forEach((e=>e.classList.remove("selected")))};handleClick=e=>{if(e.target,e.target.classList.contains("color")){this.pd.color=e.target.style.backgroundColor,this.m.colors.forEach((e=>e.classList.remove("selected"))),this.m.dropper.classList.remove("selected"),e.target.classList.add("selected"),this.lastClicked?.color!==e.target.style.backgroundColor&&(delete this.lastClicked,this.lastClicked={color:e.target.style.backgroundColor,times:[]});let t=Date.now();if(this.lastClicked.times.push(t),this.lastClicked.times=this.lastClicked.times.slice(-3),3===this.lastClicked.times.length&&this.lastClicked.times.every((e=>t-e<4e3))&&(this.lastClicked.times=[],s())){if(this.pd.eraseColor===this.lastClicked.color)return void delete this.pd.eraseColor;this.pd.eraseColor=this.lastClicked.color,this.pd.ctx.fillStyle=this.lastClicked.color,this.pd.ctx.fillRect(0,0,this.pd.canvas.width,this.pd.canvas.height),this.pd.ctx.fillStyle=""}}else if(e.target===this.m.remove)(!this.pd.drewSomething||document.fullscreenElement||confirm(c.gsm.options.help.areYouSure))&&(c.pageDraw?.release(),delete c.pageDraw);else if(e.target===this.m.clear)(!this.pd.drewSomething||document.fullscreenElement||confirm(c.gsm.options.help.areYouSure))&&(this.pd.ctx.clearRect(0,0,this.pd.canvas.width,this.pd.canvas.height),this.pd.drewSomething=!1);else if(e.target===this.m.dropper)setTimeout((()=>{this.m.colorInput.click()}),100);else if(e.target===this.m.random)this.m.colors.forEach((e=>{e.style.backgroundColor=`rgb(${n(0,256)}, ${n(0,256)}, ${n(0,256)})`,e.classList.remove("selected")}));else if(e.target===this.m.hide)this.pd.hidden=!this.pd.hidden,this.pd.sync();else if(e.target===this.m.help)alert(function(e,t){let i=0;for(let n of t)e=e.replaceAll("$"+ ++i,n);return e}(c.gsm.pageDraw.tips,[c.gsm.pageDraw.draw,c.gsm.pageDraw.select]));else if(e.target.id?.includes("Mode")){const t=e.target.id.slice(0,-4).toLowerCase(),i=["draw","erase","select"];if(i.includes(t)){this.pd.mode=t.toUpperCase(),this.pd.sync();for(let e of i){const i=this.m[`${e}Mode`];e===t?i.classList.add("selected"):i.classList.remove("selected")}}}};handleContextMenu=e=>{e.target,e.target.classList.contains("color")&&s()&&(this.pd.ctx.fillStyle=e.target.style.backgroundColor,this.pd.ctx.fillRect(0,0,this.pd.canvas.width,this.pd.canvas.height),this.pd.ctx.fillStyle="")}}function g(e,t){const i=document.createElement(e);return t?.id&&(i.id=t.id),t?.classes?.length&&i.setAttribute("class",t.classes.join(" ")),i}function f(e){return`${function(e){return`url("data:image/svg+xml,${encodeURIComponent(`<svg width="${2*e}" height="${2*e}" xmlns="http://www.w3.org/2000/svg"><circle cx="${e}" cy="${e}" r="${e-1}" fill="#ffffff44" stroke="#00000044" stroke-width="2" /></svg>`.trim())}") ${e} ${e}`}(e)}, ${function(e){const i=16*t(1,8,Math.round(2*e/16)),n=Math.round(i/2);return`url("${chrome.runtime.getURL(`circles/${i}.svg`)}") ${n} ${n}`}(e)}, crosshair`}const b=e=>{const t=g("div",{id:"header"}),i=g("div",{id:"main"}),n=g("div",{id:"mode"});n.style.setProperty("--mode-font-scalar",(c.gsm.pageDraw._fontScale??1).toString());const s=g("div",{id:"color"}),o=g("div",{id:"brushSize"}),a=g("div",{id:"eraserSize"}),l=g("div",{id:"headerLabel"}),h=c.gsm.command.drawPage;l.innerText=h[0].toLocaleUpperCase(c.gsm._lang).concat(h.slice(1));const d=r('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"></path></svg>'),p=r('<button class="iconButton" id="clear"><svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683368540" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"></path></svg></button>'),u=r('<button class="iconButton" id="help"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"></path></svg></path></svg></button>'),m=r('<button class="iconButton" id="hide"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg></button>'),f=r('<button class="iconButton" id="remove"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg></button>');t.appendChild(d),t.appendChild(l),t.appendChild(u),t.appendChild(p),t.appendChild(m),t.appendChild(f);const b=r(`<button id="drawMode"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"></path></svg><span>${c.gsm.pageDraw.draw}</span></button>`);b.classList.add("selected");const C=r(`<button id="eraseMode"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"></path></svg><span>${c.gsm.pageDraw.erase}</span></button>`),y=r(`<button id="selectMode"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"></path></svg><span>${c.gsm.pageDraw.select}</span></button>`);y.title=c.gsm.pageDraw.selectTooltip,n.appendChild(b),n.appendChild(C),n.appendChild(y);const L=x(w),S=x(v),E=g("input",{id:"colorInput"});E.type="color";const k=r('<label for="colorInput" id="dropper"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path></svg></label>');k.appendChild(E);const z=r('<button id="random">\n        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"></path></svg>\n    </button>');L.forEach((e=>s.appendChild(e))),s.appendChild(k),S.forEach((e=>s.appendChild(e))),s.appendChild(z),L.push(...S);const D=g("span");D.innerText=c.gsm.pageDraw.draw;const _=g("input");_.type="range",_.min=1..toString(),_.max=40..toString(),o.appendChild(D),o.appendChild(_);const M=g("span");M.innerText=c.gsm.pageDraw.erase;const P=g("input");return P.type="range",P.min=5..toString(),P.max=200..toString(),a.appendChild(M),a.appendChild(P),i.appendChild(n),i.appendChild(s),i.appendChild(o),i.appendChild(a),e.appendChild(t),e.appendChild(i),{wrapper:e,header:t,main:i,mode:n,color:s,brushSize:o,eraserSize:a,headerLabel:l,grip:d,help:u,hide:m,clear:p,remove:f,drawMode:b,eraseMode:C,selectMode:y,colors:L,colorInput:E,dropper:k,random:z,brushSizeLabel:D,brushSizeRange:_,eraserSizeLabel:M,eraserSizeRange:P}};function x(e){return e.map((e=>{const t=document.createElement("button");return t.classList.add("color"),t.style.backgroundColor=e,t.innerHTML="​","red"===e&&t.classList.add("selected"),t}))}class C{div=g("div",{id:"wrapper"});x=100;y=100;released=!1;constructor(){this.sync()}release=()=>{this.released||(this.released=!0,this.div.remove(),delete this.ref,delete this.div,window.removeEventListener("pointermove",this.handlePointerMove,!0),window.removeEventListener("pointerup",this.handlePointerUp,!0))};handlePointerDown=e=>{0===e.button&&(this.ref?this.handlePointerUp():(this.ref={x:this.x,y:this.y,cursorX:e.pageX,cursorY:e.clientY},window.addEventListener("pointermove",this.handlePointerMove,{capture:!0,passive:!0}),window.addEventListener("pointerup",this.handlePointerUp,{capture:!0,passive:!0})))};handlePointerUp=()=>{delete this.ref,window.removeEventListener("pointermove",this.handlePointerMove,{capture:!0}),window.removeEventListener("pointerup",this.handlePointerUp,{capture:!0})};handlePointerMove=e=>{if(!this.ref)return void this.handlePointerUp();var t={x:this.x,y:this.y};const i=e.clientX-this.ref.cursorX,n=e.clientY-this.ref.cursorY;t.x=this.ref.x+i,t.y=this.ref.y+n,this.x=t.x,this.y=t.y,this.sync()};sync(){this.x=t(10,window.innerWidth-this.div.clientWidth-20,this.x),this.y=t(10,window.innerHeight-this.div.clientHeight-20,this.y),this.div.style.left=`${this.x}px`,this.div.style.top=`${this.y}px`}}(async()=>{if(!c.pageDraw){c.pageDraw="placeholder";try{if(!c.gsm){const e=await async function(){return chrome.runtime.sendMessage({type:"REQUEST_GSM"})}();c.gsm=e}}finally{delete c.pageDraw}c.pageDraw=new u}})()})()})();