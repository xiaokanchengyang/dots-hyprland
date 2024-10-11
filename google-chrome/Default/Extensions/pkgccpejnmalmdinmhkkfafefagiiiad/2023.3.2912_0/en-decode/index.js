import EncodeUtils from"./endecode-lib.js";new Vue({el:"#pageContainer",data:{selectedType:"uniEncode",sourceContent:"",resultContent:"",urlResult:null},mounted:function(){"chrome-extension:"===location.protocol&&chrome.tabs.query({currentWindow:!0,active:!0},e=>{let t=e.filter(e=>e.active)[0];chrome.runtime.sendMessage({type:"fh-dynamic-any-thing",thing:"request-page-content",tabId:t.id}).then(e=>{e&&e.content&&(this.sourceContent=e.content,this.convert())})}),this.$refs.srcText.focus()},methods:{convert:function(){this.$nextTick(()=>{if(this.urlResult=null,"uniEncode"===this.selectedType)this.resultContent=EncodeUtils.uniEncode(this.sourceContent);else if("uniDecode"===this.selectedType)this.resultContent=EncodeUtils.uniDecode(this.sourceContent.replace(/\\U/g,"\\u"));else if("utf8Encode"===this.selectedType)this.resultContent=encodeURIComponent(this.sourceContent);else if("utf8Decode"===this.selectedType)this.resultContent=decodeURIComponent(this.sourceContent);else if("utf16Encode"===this.selectedType)this.resultContent=EncodeUtils.utf8to16(encodeURIComponent(this.sourceContent));else if("utf16Decode"===this.selectedType)this.resultContent=decodeURIComponent(EncodeUtils.utf16to8(this.sourceContent));else if("base64Encode"===this.selectedType)this.resultContent=EncodeUtils.base64Encode(EncodeUtils.utf8Encode(this.sourceContent));else if("base64Decode"===this.selectedType)this.resultContent=EncodeUtils.utf8Decode(EncodeUtils.base64Decode(this.sourceContent));else if("md5Encode"===this.selectedType)this.resultContent=EncodeUtils.md5(this.sourceContent);else if("hexEncode"===this.selectedType)this.resultContent=EncodeUtils.hexEncode(this.sourceContent);else if("hexDecode"===this.selectedType)this.resultContent=EncodeUtils.hexDecode(this.sourceContent);else if("html2js"===this.selectedType)this.resultContent=EncodeUtils.html2js(this.sourceContent);else if("sha1Encode"===this.selectedType)this.resultContent=EncodeUtils.sha1Encode(this.sourceContent);else if("htmlEntityEncode"===this.selectedType)this.resultContent=he.encode(this.sourceContent,{useNamedReferences:!0,allowUnsafeSymbols:!0});else if("htmlEntityFullEncode"===this.selectedType)this.resultContent=he.encode(this.sourceContent,{encodeEverything:!0,useNamedReferences:!0,allowUnsafeSymbols:!0});else if("htmlEntityDecode"===this.selectedType)this.resultContent=he.decode(this.sourceContent,{isAttributeValue:!1});else if("urlParamsDecode"===this.selectedType){let e=EncodeUtils.urlParamsDecode(this.sourceContent);e.error?this.resultContent=e.error:this.urlResult=e}this.$forceUpdate()})},clear:function(){this.sourceContent="",this.resultContent=""},getResult:function(){this.$refs.rstCode.select()}}});