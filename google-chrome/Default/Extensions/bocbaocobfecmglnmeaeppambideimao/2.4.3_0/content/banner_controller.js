(()=>{"use strict";const e={blacklist:{urls:{},domains:{"chrome.google.com":!0,extensions:!0}},LayoutSettings:{Resize:!1,RTL:!1,FoldLongContent:!0,SelectTranslatePosition:"TopRight"},languageSetting:{sl:"auto",tl:{ach:"ach",ady:"en",af:"af","af-NA":"af","af-ZA":"af",ak:"aka",am:"am",ar:"ar","ar-AR":"ar","ar-MA":"ar","ar-SA":"ar","ay-BO":"aym",az:"az","az-AZ":"az","be-BY":"be",bg:"bg","bg-BG":"bg",bn:"bn","bn-IN":"bn","bn-BD":"bn","bs-BA":"bs",ca:"ca","ca-ES":"ca",cak:"en",ceb:"ceb","ck-US":"chr",co:"co",cs:"cs","cs-CZ":"cs",cy:"cy","cy-GB":"cy",da:"da","da-DK":"da",de:"de","de-AT":"de","de-DE":"de","de-CH":"de",dsb:"en",el:"el","el-GR":"el",en:"en","en-GB":"en","en-AU":"en","en-CA":"en","en-IE":"en","en-IN":"en","en-PI":"en","en-UD":"en","en-US":"en","en-ZA":"en","en@pirate":"en",eo:"eo","eo-EO":"eo",es:"es","es-AR":"es","es-419":"es","es-CL":"es","es-CO":"es","es-EC":"es","es-ES":"es","es-LA":"es","es-NI":"es","es-MX":"es","es-US":"es","es-VE":"es",et:"et","et-EE":"et",eu:"eu","eu-ES":"eu",fa:"fa","fa-IR":"fa","fb-LT":"en",ff:"en",fi:"fi","fi-FI":"fi","fo-FO":"fao",fr:"fr","fr-CA":"fr","fr-FR":"fr","fr-BE":"fr","fr-CH":"fr","fy-NL":"fy",ga:"ga","ga-IE":"ga",gd:"gd",gl:"gl","gl-ES":"gl","gn-PY":"grn","gu-IN":"gu","gx-GR":"el",ha:"ha",haw:"haw",he:"he","he-IL":"he",hi:"hi","hi-IN":"hi",hmn:"hmn",hr:"hr","hr-HR":"hr",hsb:"en",ht:"ht",hu:"hu","hu-HU":"hu","hy-AM":"hy",id:"id","id-ID":"id",ig:"ig",is:"is","is-IS":"is",it:"it","it-IT":"it",iw:"he",ja:"ja","ja-JP":"ja","jv-ID":"jw","ka-GE":"ka","kk-KZ":"kk",km:"km","km-KH":"km",kab:"kab",kn:"kn","kn-IN":"kn",ko:"ko","ko-KR":"ko","ku-TR":"ku",ky:"ky",la:"la","la-VA":"la",lb:"lb","li-NL":"lim",lo:"lo",lt:"lt","lt-LT":"lt",lv:"lv","lv-LV":"lv",mai:"mai","mg-MG":"mg",mi:"mi",mk:"mk","mk-MK":"mk",ml:"ml","ml-IN":"ml","mn-MN":"mn",mr:"mr","mr-IN":"mr",ms:"ms","ms-MY":"ms",mt:"mt","mt-MT":"mt",my:"my",no:"no",nb:"no","nb-NO":"no",ne:"ne","ne-NP":"ne",nl:"nl","nl-BE":"nl","nl-NL":"nl","nn-NO":"no",ny:"ny",oc:"oci","or-IN":"or",pa:"pa","pa-IN":"pa",pl:"pl","pl-PL":"pl","ps-AF":"ps",pt:"pt","pt-BR":"pt","pt-PT":"pt","qu-PE":"que","rm-CH":"roh",ro:"ro","ro-RO":"ro",ru:"ru","ru-RU":"ru","sa-IN":"san",sd:"sd","se-NO":"sme","si-LK":"si",sk:"sk","sk-SK":"sk",sl:"sl","sl-SI":"sl",sm:"sm",sn:"sn","so-SO":"so",sq:"sq","sq-AL":"sq",sr:"sr","sr-RS":"sr",st:"st",su:"su",sv:"sv","sv-SE":"sv",sw:"sw","sw-KE":"sw",ta:"ta","ta-IN":"ta",te:"te","te-IN":"te",tg:"tg","tg-TJ":"tg",th:"th","th-TH":"th",tl:"fil","tl-PH":"fil",tlh:"tlh",tr:"tr","tr-TR":"tr","tt-RU":"tat",uk:"uk","uk-UA":"uk",ur:"ur","ur-PK":"ur",uz:"uz","uz-UZ":"uz",vi:"vi","vi-VN":"vi","xh-ZA":"xh",yi:"yi","yi-DE":"yi",yo:"yo",zh:"zh-CN","zh-Hans":"zh-CN","zh-Hant":"zh-TW","zh-CN":"zh-CN","zh-HK":"zh-TW","zh-SG":"zh-CN","zh-TW":"zh-TW","zu-ZA":"zu"}[chrome.i18n.getUILanguage()]},OtherSettings:{MutualTranslate:!1,SelectTranslate:!0,TranslateAfterDblClick:!1,TranslateAfterSelect:!1,CancelTextSelection:!1,UseGoogleAnalytics:!0,UsePDFjs:!0},DefaultTranslator:"GoogleTranslate",DefaultPageTranslator:"GooglePageTranslate",HybridTranslatorConfig:{translators:["BaiduTranslate","BingTranslate","GoogleTranslate"],selections:{originalText:"BaiduTranslate",mainMeaning:"BaiduTranslate",tPronunciation:"BaiduTranslate",sPronunciation:"BaiduTranslate",detailedMeanings:"BingTranslate",definitions:"GoogleTranslate",examples:"BaiduTranslate"}},TranslateResultFilter:{mainMeaning:!0,originalText:!0,tPronunciation:!0,sPronunciation:!0,tPronunciationIcon:!0,sPronunciationIcon:!0,detailedMeanings:!0,definitions:!0,examples:!0},ContentDisplayOrder:["mainMeaning","originalText","detailedMeanings","definitions","examples"],HidePageTranslatorBanner:!1};function t(e,t){return new Promise((n=>{if("string"==typeof e)e=[e];else if(void 0===e){e=[];for(let n in t)e.push(n)}chrome.storage.sync.get(e,(a=>{let s=!1;for(let n of e)a[n]||("function"==typeof t&&(t=t(e)),a[n]=t[n],s=!0);s?chrome.storage.sync.set(a,(()=>n(a))):n(a)}))}))}window.EdgeTranslateBannerController=new class{constructor(){this.channel=new class{constructor(){this._services=new Map,this._eventManager=new class{constructor(){this._handlerID=1,this._eventToHandlerIDs=new Map,this._handlerIDToHandler=new Map}on(e,t){const n=this._allocHandlerID();this._handlerIDToHandler.set(n,t),this._eventToHandlerIDs.has(e)?this._eventToHandlerIDs.get(e).add(n):this._eventToHandlerIDs.set(e,new Set([n]));let a=!1;return(()=>{a?console.warn("You shouldn't call the canceler more than once!"):(a=!0,this._off(e,n))}).bind(this)}emit(e,t,n){const a=this._eventToHandlerIDs.get(e);if(a)for(const e of a){const a=this._handlerIDToHandler.get(e);a&&a(t,n)}}_allocHandlerID(){for(;this._handlerIDToHandler.has(this._handlerID);)this._handlerID=(this._handlerID+1)%Number.MAX_SAFE_INTEGER;return this._handlerID}_off(e,t){const n=this._eventToHandlerIDs.get(e);n&&n.delete(t),this._handlerIDToHandler.delete(t)}},chrome.runtime.onMessage.addListener(((e,t,n)=>{let a=JSON.parse(e);if(a&&a.type)switch(a.type){case"event":this._eventManager.emit(a.event,a.detail,t),n&&n();break;case"service":{const e=this._services.get(a.service);if(!e)break;return e(a.params,t).then((e=>n&&n(e))),!0}default:console.error(`Unknown message type: ${e.type}`)}else console.error(`Bad message: ${e}`)}).bind(this))}provide(e,t){this._services.set(e,t)}request(e,t){const n=JSON.stringify({type:"service",service:e,params:t});return new Promise(((e,t)=>{chrome.runtime.sendMessage(n,(n=>{chrome.runtime.lastError?t(chrome.runtime.lastError):e(n)}))}))}requestToTab(e,t,n){const a=this._getTabMessageSender();return a?a(e,JSON.stringify({type:"service",service:t,params:n})):Promise.reject("Can not send message to tabs in current context!")}on(e,t){return this._eventManager.on(e,t)}emit(e,t){let n=JSON.stringify({type:"event",event:e,detail:t});chrome.runtime.sendMessage(n,(()=>{chrome.runtime.lastError&&console.error(chrome.runtime.lastError)}))}emitToTabs(e,t,n){const a=this._getTabMessageSender();if(!a)return void console.error("Can not send message to tabs in current context!");"number"==typeof e&&(e=[e]);const s=JSON.stringify({type:"event",event:t,detail:n});for(let t of e)a(t,s).catch((e=>console.error(e)))}_getTabMessageSender(){return chrome.tabs&&chrome.tabs.sendMessage?(e,t)=>new Promise(((n,a)=>{chrome.tabs.sendMessage(e,t,(e=>{chrome.runtime.lastError?a(chrome.runtime.lastError):n(e)}))})):null}},this.currentTranslator=null,this.canceller=null,this.addListeners()}addListeners(){this.channel.on("start_page_translate",(e=>{switch(e.translator){case"google":{this.currentTranslator="google";let e=this.googleMessageHandler.bind(this);window.addEventListener("message",e),this.canceller=(()=>{window.removeEventListener("message",e)}).bind(this);break}}}).bind(this)),this.channel.on("command",(e=>{"toggle_page_translate_banner"===e.command&&this.toggleBanner()}))}toggleBannerFrame(e){switch(this.currentTranslator){case"google":{let t=document.getElementById(":0.container");if(null!=t)return void(t.style.visibility=e?"visible":"hidden");break}}}movePage(e,t,n){let a=document.body.style.getPropertyValue(e);try{let s=parseInt(a,10);document.body.style.cssText=document.body.style.cssText.replace(new RegExp(`${e}:.*;`,"g"),`${e}: ${n?t:s+t}px !important;`)}catch(n){document.body.style.setProperty(e,`${t}px`,"important")}}googleMessageHandler(n){let a=JSON.parse(n.data);a.type&&"edge_translate_page_translate_event"===a.type&&"page_moved"===a.event&&(t("HidePageTranslatorBanner",e).then((e=>{e.HidePageTranslatorBanner&&setTimeout((()=>{this.toggleBannerFrame(!1),this.movePage("top",0,!0)}),0)})),a.distance<=0&&(this.canceller(),this.canceller=null,this.currentTranslator=null))}toggleBanner(){this.currentTranslator&&t("HidePageTranslatorBanner",e).then((e=>{e.HidePageTranslatorBanner=!e.HidePageTranslatorBanner,chrome.storage.sync.set(e),"google"===this.currentTranslator&&(e.HidePageTranslatorBanner?(this.toggleBannerFrame(!1),this.movePage("top",0,!0)):(this.toggleBannerFrame(!0),this.movePage("top",40,!0)))}))}}})();