var f=(e=>(e.CreditCard="credit-card",e.Currency="currency",e.Email="email",e.FormField="form-field",e.Image="image",e.IpAddress="ip-address",e.LongText="long-text",e.Name="name",e.PhoneNumber="phone",e.RoutingNumber="routing-number",e.Ssn="ssn",e.Svg="svg",e.TableRows="table-rows",e.Tin="tin",e.UniqueIdentifier="unique-identifier",e.Url="url",e.Video="video",e.Vin="vin",e))(f||{}),F=function(){return F=Object.assign||function(n){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},F.apply(this,arguments)};function Sn(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]]);return t}function Tn(e,n,t){if(t||arguments.length===2)for(var i=0,r=n.length,s;i<r;i++)(s||!(i in n))&&(s||(s=Array.prototype.slice.call(n,0,i)),s[i]=n[i]);return e.concat(s||Array.prototype.slice.call(n))}function G(e,n){if(!!!e)throw new Error(n)}function Ee(e){return typeof e=="object"&&e!==null}function Ie(e,n){if(!!!e)throw new Error(n??"Unexpected invariant triggered.")}const Ne=/\r\n|[\n\r]/g;function W(e,n){let t=0,i=1;for(const r of e.body.matchAll(Ne)){if(typeof r.index=="number"||Ie(!1),r.index>=n)break;t=r.index+r[0].length,i+=1}return{line:i,column:n+1-t}}function ke(e){return J(e.source,W(e.source,e.start))}function J(e,n){const t=e.locationOffset.column-1,i="".padStart(t)+e.body,r=n.line-1,s=e.locationOffset.line-1,a=n.line+s,l=n.line===1?t:0,d=n.column+l,I=`${e.name}:${a}:${d}
`,p=i.split(/\r\n|[\n\r]/g),A=p[r];if(A.length>120){const k=Math.floor(d/80),T=d%80,N=[];for(let D=0;D<A.length;D+=80)N.push(A.slice(D,D+80));return I+H([[`${a} |`,N[0]],...N.slice(1,k+1).map(D=>["|",D]),["|","^".padStart(T)],["|",N[k+1]]])}return I+H([[`${a-1} |`,p[r-1]],[`${a} |`,A],["|","^".padStart(d)],[`${a+1} |`,p[r+1]]])}function H(e){const n=e.filter(([i,r])=>r!==void 0),t=Math.max(...n.map(([i])=>i.length));return n.map(([i,r])=>i.padStart(t)+(r?" "+r:"")).join(`
`)}function Ae(e){const n=e[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:n}class j extends Error{constructor(n,...t){var i,r,s;const{nodes:a,source:l,positions:d,path:I,originalError:p,extensions:A}=Ae(t);super(n),this.name="GraphQLError",this.path=I??void 0,this.originalError=p??void 0,this.nodes=Y(Array.isArray(a)?a:a?[a]:void 0);const k=Y((i=this.nodes)===null||i===void 0?void 0:i.map(N=>N.loc).filter(N=>N!=null));this.source=l??(k==null||(r=k[0])===null||r===void 0?void 0:r.source),this.positions=d??k?.map(N=>N.start),this.locations=d&&l?d.map(N=>W(l,N)):k?.map(N=>W(N.source,N.start));const T=Ee(p?.extensions)?p?.extensions:void 0;this.extensions=(s=A??T)!==null&&s!==void 0?s:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),p!=null&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,j):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+ke(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+J(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function Y(e){return e===void 0||e.length===0?void 0:e}function E(e,n,t){return new j(`Syntax Error: ${t}`,{source:e,positions:[n]})}class ge{constructor(n,t,i){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=i}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class z{constructor(n,t,i,r,s,a){this.kind=n,this.start=t,this.end=i,this.line=r,this.column=s,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Se={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Te=new Set(Object.keys(Se));function Dn(e){const n=e?.kind;return typeof n=="string"&&Te.has(n)}var C;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(C||(C={}));var B;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(B||(B={}));var u;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(u||(u={}));function V(e){return e===9||e===32}function L(e){return e>=48&&e<=57}function Z(e){return e>=97&&e<=122||e>=65&&e<=90}function K(e){return Z(e)||e===95}function De(e){return Z(e)||L(e)||e===95}function Ce(e){var n;let t=Number.MAX_SAFE_INTEGER,i=null,r=-1;for(let a=0;a<e.length;++a){var s;const l=e[a],d=_e(l);d!==l.length&&(i=(s=i)!==null&&s!==void 0?s:a,r=a,a!==0&&d<t&&(t=d))}return e.map((a,l)=>l===0?a:a.slice(t)).slice((n=i)!==null&&n!==void 0?n:0,r+1)}function _e(e){let n=0;for(;n<e.length&&V(e.charCodeAt(n));)++n;return n}function Cn(e,n){const t=e.replace(/"""/g,'\\"""'),i=t.split(/\r\n|[\n\r]/g),r=i.length===1,s=i.length>1&&i.slice(1).every(T=>T.length===0||V(T.charCodeAt(0))),a=t.endsWith('\\"""'),l=e.endsWith('"')&&!a,d=e.endsWith("\\"),I=l||d,p=!(n!=null&&n.minimize)&&(!r||e.length>70||I||s||a);let A="";const k=r&&V(e.charCodeAt(0));return(p&&!k||s)&&(A+=`
`),A+=t,(p||I)&&(A+=`
`),'"""'+A+'"""'}var o;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(o||(o={}));class Oe{constructor(n){const t=new z(o.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==o.EOF)do if(n.next)n=n.next;else{const t=we(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===o.COMMENT);return n}}function xe(e){return e===o.BANG||e===o.DOLLAR||e===o.AMP||e===o.PAREN_L||e===o.PAREN_R||e===o.SPREAD||e===o.COLON||e===o.EQUALS||e===o.AT||e===o.BRACKET_L||e===o.BRACKET_R||e===o.BRACE_L||e===o.PIPE||e===o.BRACE_R}function O(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function y(e,n){return ee(e.charCodeAt(n))&&te(e.charCodeAt(n+1))}function ee(e){return e>=55296&&e<=56319}function te(e){return e>=56320&&e<=57343}function g(e,n){const t=e.source.body.codePointAt(n);if(t===void 0)return o.EOF;if(t>=32&&t<=126){const i=String.fromCodePoint(t);return i==='"'?`'"'`:`"${i}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function h(e,n,t,i,r){const s=e.line,a=1+t-e.lineStart;return new z(n,t,i,s,a,r)}function we(e,n){const t=e.source.body,i=t.length;let r=n;for(;r<i;){const s=t.charCodeAt(r);switch(s){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:t.charCodeAt(r+1)===10?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return Le(e,r);case 33:return h(e,o.BANG,r,r+1);case 36:return h(e,o.DOLLAR,r,r+1);case 38:return h(e,o.AMP,r,r+1);case 40:return h(e,o.PAREN_L,r,r+1);case 41:return h(e,o.PAREN_R,r,r+1);case 46:if(t.charCodeAt(r+1)===46&&t.charCodeAt(r+2)===46)return h(e,o.SPREAD,r,r+3);break;case 58:return h(e,o.COLON,r,r+1);case 61:return h(e,o.EQUALS,r,r+1);case 64:return h(e,o.AT,r,r+1);case 91:return h(e,o.BRACKET_L,r,r+1);case 93:return h(e,o.BRACKET_R,r,r+1);case 123:return h(e,o.BRACE_L,r,r+1);case 124:return h(e,o.PIPE,r,r+1);case 125:return h(e,o.BRACE_R,r,r+1);case 34:return t.charCodeAt(r+1)===34&&t.charCodeAt(r+2)===34?ye(e,r):Pe(e,r)}if(L(s)||s===45)return Re(e,r,s);if(K(s))return be(e,r);throw E(e.source,r,s===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:O(s)||y(t,r)?`Unexpected character: ${g(e,r)}.`:`Invalid character: ${g(e,r)}.`)}return h(e,o.EOF,i,i)}function Le(e,n){const t=e.source.body,i=t.length;let r=n+1;for(;r<i;){const s=t.charCodeAt(r);if(s===10||s===13)break;if(O(s))++r;else if(y(t,r))r+=2;else break}return h(e,o.COMMENT,n,r,t.slice(n+1,r))}function Re(e,n,t){const i=e.source.body;let r=n,s=t,a=!1;if(s===45&&(s=i.charCodeAt(++r)),s===48){if(s=i.charCodeAt(++r),L(s))throw E(e.source,r,`Invalid number, unexpected digit after 0: ${g(e,r)}.`)}else r=$(e,r,s),s=i.charCodeAt(r);if(s===46&&(a=!0,s=i.charCodeAt(++r),r=$(e,r,s),s=i.charCodeAt(r)),(s===69||s===101)&&(a=!0,s=i.charCodeAt(++r),(s===43||s===45)&&(s=i.charCodeAt(++r)),r=$(e,r,s),s=i.charCodeAt(r)),s===46||K(s))throw E(e.source,r,`Invalid number, expected digit but got: ${g(e,r)}.`);return h(e,a?o.FLOAT:o.INT,n,r,i.slice(n,r))}function $(e,n,t){if(!L(t))throw E(e.source,n,`Invalid number, expected digit but got: ${g(e,n)}.`);const i=e.source.body;let r=n+1;for(;L(i.charCodeAt(r));)++r;return r}function Pe(e,n){const t=e.source.body,i=t.length;let r=n+1,s=r,a="";for(;r<i;){const l=t.charCodeAt(r);if(l===34)return a+=t.slice(s,r),h(e,o.STRING,n,r+1,a);if(l===92){a+=t.slice(s,r);const d=t.charCodeAt(r+1)===117?t.charCodeAt(r+2)===123?ve(e,r):Fe(e,r):Ue(e,r);a+=d.value,r+=d.size,s=r;continue}if(l===10||l===13)break;if(O(l))++r;else if(y(t,r))r+=2;else throw E(e.source,r,`Invalid character within String: ${g(e,r)}.`)}throw E(e.source,r,"Unterminated string.")}function ve(e,n){const t=e.source.body;let i=0,r=3;for(;r<12;){const s=t.charCodeAt(n+r++);if(s===125){if(r<5||!O(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|w(s),i<0)break}throw E(e.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+r)}".`)}function Fe(e,n){const t=e.source.body,i=X(t,n+2);if(O(i))return{value:String.fromCodePoint(i),size:6};if(ee(i)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const r=X(t,n+8);if(te(r))return{value:String.fromCodePoint(i,r),size:12}}throw E(e.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function X(e,n){return w(e.charCodeAt(n))<<12|w(e.charCodeAt(n+1))<<8|w(e.charCodeAt(n+2))<<4|w(e.charCodeAt(n+3))}function w(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Ue(e,n){const t=e.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw E(e.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function ye(e,n){const t=e.source.body,i=t.length;let r=e.lineStart,s=n+3,a=s,l="";const d=[];for(;s<i;){const I=t.charCodeAt(s);if(I===34&&t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34){l+=t.slice(a,s),d.push(l);const p=h(e,o.BLOCK_STRING,n,s+3,Ce(d).join(`
`));return e.line+=d.length-1,e.lineStart=r,p}if(I===92&&t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34&&t.charCodeAt(s+3)===34){l+=t.slice(a,s),a=s+1,s+=4;continue}if(I===10||I===13){l+=t.slice(a,s),d.push(l),I===13&&t.charCodeAt(s+1)===10?s+=2:++s,l="",a=s,r=s;continue}if(O(I))++s;else if(y(t,s))s+=2;else throw E(e.source,s,`Invalid character within String: ${g(e,s)}.`)}throw E(e.source,s,"Unterminated string.")}function be(e,n){const t=e.source.body,i=t.length;let r=n+1;for(;r<i;){const s=t.charCodeAt(r);if(De(s))++r;else break}return h(e,o.NAME,n,r,t.slice(n,r))}const Ge=10,ne=2;function re(e){return b(e,[])}function b(e,n){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return $e(e,n);default:return String(e)}}function $e(e,n){if(e===null)return"null";if(n.includes(e))return"[Circular]";const t=[...n,e];if(We(e)){const i=e.toJSON();if(i!==e)return typeof i=="string"?i:b(i,t)}else if(Array.isArray(e))return Ve(e,t);return Be(e,t)}function We(e){return typeof e.toJSON=="function"}function Be(e,n){const t=Object.entries(e);return t.length===0?"{}":n.length>ne?"["+qe(e)+"]":"{ "+t.map(([r,s])=>r+": "+b(s,n)).join(", ")+" }"}function Ve(e,n){if(e.length===0)return"[]";if(n.length>ne)return"[Array]";const t=Math.min(Ge,e.length),i=e.length-t,r=[];for(let s=0;s<t;++s)r.push(b(e[s],n));return i===1?r.push("... 1 more item"):i>1&&r.push(`... ${i} more items`),"["+r.join(", ")+"]"}function qe(e){const n=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof e.constructor=="function"){const t=e.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const je=globalThis.process&&!0,Me=je?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var i;const r=t.prototype[Symbol.toStringTag],s=Symbol.toStringTag in n?n[Symbol.toStringTag]:(i=n.constructor)===null||i===void 0?void 0:i.name;if(r===s){const a=re(n);throw new Error(`Cannot use ${r} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class ie{constructor(n,t="GraphQL request",i={line:1,column:1}){typeof n=="string"||G(!1,`Body must be a string. Received: ${re(n)}.`),this.body=n,this.name=t,this.locationOffset=i,this.locationOffset.line>0||G(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||G(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function He(e){return Me(e,ie)}function Ye(e,n){return new Xe(e,n).parseDocument()}class Xe{constructor(n,t={}){const i=He(n)?n:new ie(n);this._lexer=new Oe(i),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(o.NAME);return this.node(n,{kind:u.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:u.DOCUMENT,definitions:this.many(o.SOF,this.parseDefinition,o.EOF)})}parseDefinition(){if(this.peek(o.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===o.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw E(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(o.BRACE_L))return this.node(n,{kind:u.OPERATION_DEFINITION,operation:C.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let i;return this.peek(o.NAME)&&(i=this.parseName()),this.node(n,{kind:u.OPERATION_DEFINITION,operation:t,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(o.NAME);switch(n.value){case"query":return C.QUERY;case"mutation":return C.MUTATION;case"subscription":return C.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(o.PAREN_L,this.parseVariableDefinition,o.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:u.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(o.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(o.DOLLAR),this.node(n,{kind:u.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:u.SELECTION_SET,selections:this.many(o.BRACE_L,this.parseSelection,o.BRACE_R)})}parseSelection(){return this.peek(o.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let i,r;return this.expectOptionalToken(o.COLON)?(i=t,r=this.parseName()):r=t,this.node(n,{kind:u.FIELD,alias:i,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(o.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(o.PAREN_L,t,o.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,i=this.parseName();return this.expectToken(o.COLON),this.node(t,{kind:u.ARGUMENT,name:i,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(o.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(o.NAME)?this.node(n,{kind:u.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:u.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:u.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:u.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case o.BRACKET_L:return this.parseList(n);case o.BRACE_L:return this.parseObject(n);case o.INT:return this.advanceLexer(),this.node(t,{kind:u.INT,value:t.value});case o.FLOAT:return this.advanceLexer(),this.node(t,{kind:u.FLOAT,value:t.value});case o.STRING:case o.BLOCK_STRING:return this.parseStringLiteral();case o.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:u.BOOLEAN,value:!0});case"false":return this.node(t,{kind:u.BOOLEAN,value:!1});case"null":return this.node(t,{kind:u.NULL});default:return this.node(t,{kind:u.ENUM,value:t.value})}case o.DOLLAR:if(n)if(this.expectToken(o.DOLLAR),this._lexer.token.kind===o.NAME){const i=this._lexer.token.value;throw E(this._lexer.source,t.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:u.STRING,value:n.value,block:n.kind===o.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:u.LIST,values:this.any(o.BRACKET_L,t,o.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:u.OBJECT,fields:this.any(o.BRACE_L,t,o.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,i=this.parseName();return this.expectToken(o.COLON),this.node(t,{kind:u.OBJECT_FIELD,name:i,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(o.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(o.AT),this.node(t,{kind:u.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(o.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(o.BRACKET_R),t=this.node(n,{kind:u.LIST_TYPE,type:i})}else t=this.parseNamedType();return this.expectOptionalToken(o.BANG)?this.node(n,{kind:u.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:u.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(o.STRING)||this.peek(o.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),r=this.many(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);return this.node(n,{kind:u.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:r})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(o.COLON);const i=this.parseNamedType();return this.node(n,{kind:u.OPERATION_TYPE_DEFINITION,operation:t,type:i})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),r=this.parseConstDirectives();return this.node(n,{kind:u.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:r})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),r=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(n,{kind:u.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:s,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(o.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseFieldDefinition,o.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),i=this.parseName(),r=this.parseArgumentDefs();this.expectToken(o.COLON);const s=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(n,{kind:u.FIELD_DEFINITION,description:t,name:i,arguments:r,type:s,directives:a})}parseArgumentDefs(){return this.optionalMany(o.PAREN_L,this.parseInputValueDef,o.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),i=this.parseName();this.expectToken(o.COLON);const r=this.parseTypeReference();let s;this.expectOptionalToken(o.EQUALS)&&(s=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(n,{kind:u.INPUT_VALUE_DEFINITION,description:t,name:i,type:r,defaultValue:s,directives:a})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),r=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(n,{kind:u.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:s,fields:a})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(n,{kind:u.UNION_TYPE_DEFINITION,description:t,name:i,directives:r,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(o.EQUALS)?this.delimitedMany(o.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(n,{kind:u.ENUM_TYPE_DEFINITION,description:t,name:i,directives:r,values:s})}parseEnumValuesDefinition(){return this.optionalMany(o.BRACE_L,this.parseEnumValueDefinition,o.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(n,{kind:u.ENUM_VALUE_DEFINITION,description:t,name:i,directives:r})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw E(this._lexer.source,this._lexer.token.start,`${P(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(n,{kind:u.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:r,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseInputValueDef,o.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===o.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),i=this.optionalMany(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);if(t.length===0&&i.length===0)throw this.unexpected();return this.node(n,{kind:u.SCHEMA_EXTENSION,directives:t,operationTypes:i})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(n,{kind:u.SCALAR_TYPE_EXTENSION,name:t,directives:i})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:u.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:s})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:u.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:s})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(n,{kind:u.UNION_TYPE_EXTENSION,name:t,directives:i,types:r})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(n,{kind:u.ENUM_TYPE_EXTENSION,name:t,directives:i,values:r})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(n,{kind:u.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:r})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(o.AT);const i=this.parseName(),r=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(n,{kind:u.DIRECTIVE_DEFINITION,description:t,name:i,arguments:r,repeatable:s,locations:a})}parseDirectiveLocations(){return this.delimitedMany(o.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(B,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new ge(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw E(this._lexer.source,t.start,`Expected ${se(n)}, found ${P(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===o.NAME&&t.value===n)this.advanceLexer();else throw E(this._lexer.source,t.start,`Expected "${n}", found ${P(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===o.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return E(this._lexer.source,t.start,`Unexpected ${P(t)}.`)}any(n,t,i){this.expectToken(n);const r=[];for(;!this.expectOptionalToken(i);)r.push(t.call(this));return r}optionalMany(n,t,i){if(this.expectOptionalToken(n)){const r=[];do r.push(t.call(this));while(!this.expectOptionalToken(i));return r}return[]}many(n,t,i){this.expectToken(n);const r=[];do r.push(t.call(this));while(!this.expectOptionalToken(i));return r}delimitedMany(n,t){this.expectOptionalToken(n);const i=[];do i.push(t.call(this));while(this.expectOptionalToken(n));return i}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==o.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw E(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function P(e){const n=e.value;return se(e.kind)+(n!=null?` "${n}"`:"")}function se(e){return xe(e)?`"${e}"`:e}var v=new Map,q=new Map,oe=!0,U=!1;function ae(e){return e.replace(/[\s,]+/g," ").trim()}function Qe(e){return ae(e.source.body.substring(e.start,e.end))}function Je(e){var n=new Set,t=[];return e.definitions.forEach(function(i){if(i.kind==="FragmentDefinition"){var r=i.name.value,s=Qe(i.loc),a=q.get(r);a&&!a.has(s)?oe&&console.warn("Warning: fragment with name "+r+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||q.set(r,a=new Set),a.add(s),n.has(s)||(n.add(s),t.push(i))}else t.push(i)}),F(F({},e),{definitions:t})}function ze(e){var n=new Set(e.definitions);n.forEach(function(i){i.loc&&delete i.loc,Object.keys(i).forEach(function(r){var s=i[r];s&&typeof s=="object"&&n.add(s)})});var t=e.loc;return t&&(delete t.startToken,delete t.endToken),e}function Ze(e){var n=ae(e);if(!v.has(n)){var t=Ye(e,{experimentalFragmentVariables:U,allowLegacyFragmentVariables:U});if(!t||t.kind!=="Document")throw new Error("Not a valid GraphQL document.");v.set(n,ze(Je(t)))}return v.get(n)}function _(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];typeof e=="string"&&(e=[e]);var i=e[0];return n.forEach(function(r,s){r&&r.kind==="Document"?i+=r.loc.source.body:i+=r,i+=e[s+1]}),Ze(i)}function Ke(){v.clear(),q.clear()}function et(){oe=!1}function tt(){U=!0}function nt(){U=!1}var x={gql:_,resetCaches:Ke,disableFragmentWarnings:et,enableExperimentalFragmentVariables:tt,disableExperimentalFragmentVariables:nt};(function(e){e.gql=x.gql,e.resetCaches=x.resetCaches,e.disableFragmentWarnings=x.disableFragmentWarnings,e.enableExperimentalFragmentVariables=x.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=x.disableExperimentalFragmentVariables})(_||(_={}));_.default=_;const c=_;var rt=(e=>(e.Contains="CONTAINS",e.EndsWith="ENDS_WITH",e.StartsWith="STARTS_WITH",e))(rt||{}),m=(e=>(e.BuiltIn="BUILT_IN",e.String="STRING",e))(m||{}),it=(e=>(e.Custom="CUSTOM",e.Error="ERROR",e.Info="INFO",e.Success="SUCCESS",e.Warning="WARNING",e))(it||{}),st=(e=>(e.Callout="CALLOUT",e.FrequentlyAskedQuestions="FREQUENTLY_ASKED_QUESTIONS",e.Heading="HEADING",e.Step="STEP",e))(st||{}),ot=(e=>(e.Unfoldered="UNFOLDERED",e))(ot||{}),at=(e=>(e.CreatedAtAsc="CREATED_AT_ASC",e.CreatedAtDesc="CREATED_AT_DESC",e.NameAsc="NAME_ASC",e.NameDesc="NAME_DESC",e.UpdatedAtAsc="UPDATED_AT_ASC",e.UpdatedAtDesc="UPDATED_AT_DESC",e))(at||{}),ct=(e=>(e.NuggetCreate="NUGGET_CREATE",e.NuggetDisplay="NUGGET_DISPLAY",e))(ct||{}),ut=(e=>(e.Edit="EDIT",e.Owner="OWNER",e.View="VIEW",e))(ut||{}),lt=(e=>(e.Get="GET",e.Put="PUT",e))(lt||{}),dt=(e=>(e.App="APP",e.Url="URL",e))(dt||{}),pt=(e=>(e.Capture="CAPTURE",e.Guidance="GUIDANCE",e))(pt||{}),ht=(e=>(e.Authentication="AUTHENTICATION",e.Generic="GENERIC",e.HighStakes="HIGH_STAKES",e))(ht||{}),ft=(e=>(e.Desktop="DESKTOP",e.Extension="EXTENSION",e.Manual="MANUAL",e.Unknown="UNKNOWN",e))(ft||{}),mt=(e=>(e.Generic="GENERIC",e.Specific="SPECIFIC",e))(mt||{}),Et=(e=>(e.StepCompletion="STEP_COMPLETION",e.StepHighlight="STEP_HIGHLIGHT",e.StepPrediction="STEP_PREDICTION",e.StepPredictionInteraction="STEP_PREDICTION_INTERACTION",e.StepView="STEP_VIEW",e))(Et||{}),It=(e=>(e.Artemis="ARTEMIS",e.Embed="EMBED",e.Guidance="GUIDANCE",e.GuideMe="GUIDE_ME",e.Web="WEB",e))(It||{}),Nt=(e=>(e.Admin="ADMIN",e.Creator="CREATOR",e.Guest="GUEST",e.Sidekick="SIDEKICK",e))(Nt||{}),kt=(e=>(e.Lite="LITE",e.Pro="PRO",e))(kt||{}),At=(e=>(e.Enterprise="ENTERPRISE",e.Pro="PRO",e.Starter="STARTER",e))(At||{}),gt=(e=>(e.WorkflowView="WORKFLOW_VIEW",e))(gt||{});const St=c`
  fragment AppWithWorkflowIds on AppWithWorkflowIds {
    id
    name
    iconURL
    url
    workflowIds
  }
`,R=c`
  fragment AppFields on App {
    id
    name
    iconURL
    url
  }
`,S=c`
  fragment ProfileFields on Profile {
    id
    firstName
    lastName
    profilePictureURL
  }
`,Tt=c`
  fragment StepFields on Step {
    id
    index
    stepIndex
    createdAt
    updatedAt
    title
    url
    description
    label
    eventType
    type
    app {
      ...AppFields
    }
    screenshot {
      url
      bounds {
        x
        y
        width
        height
        draw
        captureBoxColor {
          name
          value
        }
      }
      focalPoint {
        x
        y
      }
      sourcePath
      deliveryPath
      editorState
      zoomLevel
      pixelWidth
      pixelHeight
      altText
    }
  }
  ${R}
`,ce=c`
  fragment StepFieldsWithChildren on Step {
    ...StepFields
    children {
      ...StepFields
    }
  }
  ${Tt}
`,ue=c`
  fragment CalloutFields on Callout {
    calloutType
    type
    createdAt
    icon
    id
    index
    text
    updatedAt
  }
`,le=c`
  fragment HeadingFields on Heading {
    type
    createdAt
    icon
    id
    index
    text
    updatedAt
    url
    description
  }
`,de=c`
  fragment FrequentlyAskedQuestionsFields on FrequentlyAskedQuestions {
    type
    createdAt
    id
    index
    updatedAt
    frequentlyAskedQuestionsItems {
      question
      answer
    }
  }
`,Dt=c`
  fragment PublicWorkflowDetailFields on Workflow {
    id
    name
    description
    deletedAt
    visibility
    stepCount
    viewCount
    apps {
      ...AppFields
    }
    pins {
      id
      externalId
      url
      title
    }
    previewScreenshot {
      zoomLevel
      url
      deliveryPath
      pixelWidth
      pixelHeight
    }
    createdBy {
      ...ProfileFields
    }
    owner {
      ...ProfileFields
    }
    contentBlocks {
      ...StepFieldsWithChildren
      ...CalloutFields
      ...HeadingFields
      ...FrequentlyAskedQuestionsFields
    }
    createdAt
    updatedAt
    userPermissionLevel
    workspaceSetting {
      captureBoxColor {
        name
        value
      }
    }
  }
  ${R}
  ${S}
  ${ce}
  ${ue}
  ${le}
  ${de}
`,Ct=c`
  fragment WorkflowDetailFields on Workflow {
    ...PublicWorkflowDetailFields
    workspaceId
    folderId
  }
  ${Dt}
`,pe=c`
  fragment PublicWorkflowCardFields on Workflow {
    id
    name
    workspaceId
    contentSpace
    captureDuration
    createdAt
    deletedAt
    updatedAt
    description
    visibility
    stepCount
    viewCount
    previewScreenshot {
      url
      zoomLevel
      deliveryPath
      pixelWidth
      pixelHeight
    }
    apps {
      ...AppFields
    }
    createdBy {
      ...ProfileFields
    }
    owner {
      ...ProfileFields
    }
  }
  ${R}
  ${S}
`,he=c`
  fragment ShareFields on Share {
    permissionLevel
    profile {
      ...ProfileFields
    }
    party
    partyId
  }
  ${S}
`,_t=c`
  fragment SidenavFolderFields on Folder {
    id
    name
    contentSpace
    createdAt
    createdBy {
      ...ProfileFields
    }
    deletedAt
    owner {
      ...ProfileFields
    }
    updatedAt
    workspaceId
    shares {
      ...ShareFields
    }
    userPermissionLevel
  }
  ${S}
  ${he}
`,Ot=c`
  fragment WorkflowCardFields on Workflow {
    ...PublicWorkflowCardFields
    folderId
    folder {
      ...SidenavFolderFields
    }
    isStarred
    userPermissionLevel
  }
  ${pe}
  ${_t}
`,xt=c`
  fragment WorkflowCardFieldsWithShares on Workflow {
    ...WorkflowCardFields
    shares {
      ...ShareFields
    }
  }
  ${Ot}
  ${he}
`,wt=c`
  fragment BlurrableField on BlurrableField {
    id
    category
    modifier
    name
    pattern
    type
    value
  }
`,Lt=c`
  fragment WorkspaceUserFields on WorkspaceUser {
    id
    role
    tier
    userId
    workspaceId
    email
    firstName
    lastName
    profilePictureURL
    guidanceViewCount
    workflowLimitation {
      count
      limit
    }
  }
`,Rt=c`
  fragment WorkspaceDetails on Workspace {
    id
    settings {
      name
      logoUrl
      iconUrl
      customCaptureBoxColor {
        name
        value
      }
      captureBoxColor {
        name
        value
      }
      secureBlurSettingsV2 {
        global {
          activeFields {
            ...BlurrableField
          }
          allowChanges
        }
        domains {
          allowChanges
          domain
          activeFields {
            ...BlurrableField
          }
        }
        customFields {
          ...BlurrableField
        }
      }
    }
    tier
    workflowLimitation {
      count
      limit
    }
    workspaceUser {
      ...WorkspaceUserFields
    }
  }
  ${wt}
  ${Lt}
`,Pt=c`
  fragment ListWorkspaceUsersFields on WorkspaceUser {
    id
    role
    tier
    userId
    workspaceId
    email
    firstName
    lastName
    profilePictureURL
    guidanceViewCount
  }
`,vt=c`
  fragment UserGroupListFields on UserGroup {
    id
    name
    source
    createdAt
    updatedAt
    sharingEnabled
    description
    usersConnection {
      totalCount
    }
  }
`,Ft=c`
  mutation addContentBlock($workflowId: ID!, $input: AddContentBlockInput!) {
    addContentBlockV2(workflowId: $workflowId, input: $input) {
      contentBlock {
        id
        index
        type
        ... on Step {
          screenshotPresignedURLs {
            sourcePathPresignedURL
            sourcePath
          }
        }
      }
    }
  }
`,Ut=c`
  mutation updateContentBlock($input: UpdateContentBlockInput!) {
    updateContentBlock(input: $input) {
      id
    }
  }
`,yt=c`
  mutation createWorkflowV2($input: CreateWorkflowV2Input!) {
    createWorkflowV2(input: $input) {
      id
      workspaceId
    }
  }
`,bt=c`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      text
      emoji
      firstName
      lastName
      createdAt
    }
  }
`,Gt=c`
  mutation DeleteContentBlocks($workflowId: ID!, $contentBlockIds: [ID!]!) {
    deleteContentBlocks(workflowId: $workflowId, contentBlockIds: $contentBlockIds)
  }
`,$t=c`
  mutation DeleteWorkflows($input: DeleteWorkflowsInput) {
    deleteWorkflows(input: $input)
  }
`,Wt=c`
  mutation TrackEvents($input: TrackEventsInput!) {
    trackEvents(input: $input)
  }
`,Bt=c`
  mutation RequestWorkspaceInvitation($workspaceId: ID!) {
    requestWorkspaceInvitation(workspaceId: $workspaceId) {
      status
    }
  }
`,Vt=c`
  mutation IncrementGuidanceViewCount($workspaceId: ID!) {
    incrementWorkspaceUserGuidanceViews(workspaceId: $workspaceId) {
      id
      guidanceViewCount
    }
  }
`,qt=c`
  mutation DeleteComment($input: DeleteCommentInput!) {
    deleteComment(input: $input)
  }
`,jt=c`
  mutation MergeContentBlocks($workflowId: ID!, $contentBlockIds: [ID!]!) {
    mergeContentBlocks(workflowId: $workflowId, contentBlockIds: $contentBlockIds) {
      ...StepFieldsWithChildren
      ...CalloutFields
      ...HeadingFields
      ...FrequentlyAskedQuestionsFields
    }
  }
  ${ce}
  ${ue}
  ${le}
  ${de}
`,Mt=c`
  mutation UpdateWorkflow($input: UpdateWorkflowInput!) {
    updateWorkflowV1(input: $input) {
      id
      name
      updatedAt
      pins {
        id
        externalId
        url
      }
    }
  }
`,Ht=c`
  mutation UpsertWorkflowPin($input: UpsertWorkflowPinInput!) {
    upsertWorkflowPin(input: $input) {
      id
      externalId
      url
      title
      workflowId
    }
  }
`,Yt=c`
  mutation DeleteWorkflowPin($input: DeleteWorkflowPinInput!) {
    deleteWorkflowPin(input: $input)
  }
`,Xt=c`
  query SearchContent($query: String!, $offset: Int, $limit: Int!) {
    searchContent(query: $query, offset: $offset, limit: $limit) {
      results {
        contentType
        workflowId
        workspaceId
        name
        stepCount
        apps {
          ...AppFields
        }
        author {
          ...ProfileFields
        }
        createdAt
        updatedAt
      }
      total
    }
  }
  ${R}
  ${S}
`,Qt=c`
  query ListApps {
    listApps {
      results {
        ...AppWithWorkflowIds
      }
    }
  }
  ${St}
`,Jt=c`
  query DiscoverWorkflows($query: String!, $offset: Int, $limit: Int!, $filter: SearchContentFilter!) {
    searchContent(query: $query, offset: $offset, limit: $limit, filter: $filter) {
      results {
        contentType
        workflowId
        workspaceId
        name
        stepCount
        apps {
          ...AppFields
        }
        author {
          ...ProfileFields
        }
        updatedAt
        contentBlocks {
          url
        }
      }
      total
    }
  }
  ${R}
  ${S}
`,zt=c`
  query GetWorkflow($id: ID!) {
    getWorkflow(workflowId: $id) {
      ...WorkflowDetailFields
    }
  }
  ${Ct}
`,Zt=c`
  query ListWorkspaces($limit: Int!, $offset: Int) {
    listWorkspaces(limit: $limit, offset: $offset) {
      results {
        ...WorkspaceDetails
      }
      total
    }
  }
  ${Rt}
`,Kt=c`
  query getGuidanceSnapshotPresignedURL($input: SnapshotPresignedURLInput!) {
    getGuidanceSnapshotPresignedURL(input: $input) {
      presignedURL
      path
    }
  }
`,en=c`
  query GetStepScreenshotPresignedURLs($fileType: String!, $stepId: ID!, $workflowId: ID!) {
    getStepScreenshotPresignedURLs(input: { fileType: $fileType, stepId: $stepId, workflowId: $workflowId }) {
      sourcePathPresignedURL
      sourcePath
    }
  }
`,tn=c`
  query GetNuggetPresignedURL($input: NuggetPresignedURLInput!) {
    getNuggetPresignedURL(input: $input) {
      presignedURL
      path
      url
    }
  }
`,nn=c`
  query GetNuggetSnapshotPresignedURL($input: NuggetSnapshotPresignedURLInput!) {
    getNuggetSnapshotPresignedURL(input: $input) {
      presignedURL
      path
    }
  }
`,rn=c`
  query ListSharedWorkflows($workspaceId: ID!, $limit: Int!, $offset: Int) {
    listSharedWorkflows(workspaceId: $workspaceId, limit: $limit, offset: $offset) {
      results {
        ...WorkflowCardFieldsWithShares
      }
    }
  }
  ${xt}
`,sn=c`
  query ListTeamWorkflows(
    $workspaceId: ID!
    $limit: Int!
    $offset: Int
    $filter: ListWorkflowsFilter
    $sort: ListWorkflowsSort
  ) {
    listTeamWorkflows(
      workspaceId: $workspaceId
      limit: $limit
      offset: $offset
      filter: $filter
      sort: $sort
    ) {
      results {
        ...PublicWorkflowCardFields
      }
    }
  }
  ${pe}
`,on=c`
  query ListComments($workflowId: ID!) {
    listComments(workflowId: $workflowId) {
      results {
        id
        text
        emoji
        user {
          ...ProfileFields
        }
        firstName
        lastName
        userTrackingId
        stepId
        createdAt
      }
      total
    }
  }
  ${S}
`,an=c`
  query GetProfile($input: ProfileInput!) {
    getProfile(input: $input) {
      firstName
      lastName
      id
      profilePictureURL
    }
  }
`,cn=c`
  query GetProfiles($input: GetProfilesInput!) {
    profiles(input: $input) {
      id
      firstName
      lastName
      profilePictureURL
    }
  }
`,un=c`
  query GetWorkspaceUsersConnection(
    $workspaceId: ID!
    $first: Int!
    $after: String
    $filter: WorkspaceUsersConnectionFilter
  ) {
    getWorkspaceUsersConnection(workspaceId: $workspaceId, first: $first, after: $after, filter: $filter) {
      edges {
        node {
          ...ListWorkspaceUsersFields
        }
      }
    }
  }
  ${Pt}
`,ln=c`
  query GetWorkspaceUserUserGroup($workspaceId: ID!, $userId: ID!, $first: Int!, $after: String) {
    getWorkspaceUser(workspaceId: $workspaceId, userId: $userId) {
      id
      userId
      workspaceId
      userGroupsConnection(first: $first, after: $after) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`,dn=c`
  query GetUserGroupsConnection(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $workspaceId: ID!
    $filter: UserGroupsFilter
  ) {
    getUserGroupsConnection(
      first: $first
      after: $after
      last: $last
      before: $before
      workspaceId: $workspaceId
      filter: $filter
    ) {
      edges {
        cursor
        node {
          ...UserGroupListFields
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${vt}
`,pn=(e,n,t,i)=>e();function _n(e,n=pn){return{addContentBlock(t,i){return n(r=>e.request(Ft,t,{...i,...r}),"addContentBlock","mutation",t)},updateContentBlock(t,i){return n(r=>e.request(Ut,t,{...i,...r}),"updateContentBlock","mutation",t)},createWorkflowV2(t,i){return n(r=>e.request(yt,t,{...i,...r}),"createWorkflowV2","mutation",t)},createComment(t,i){return n(r=>e.request(bt,t,{...i,...r}),"createComment","mutation",t)},DeleteContentBlocks(t,i){return n(r=>e.request(Gt,t,{...i,...r}),"DeleteContentBlocks","mutation",t)},DeleteWorkflows(t,i){return n(r=>e.request($t,t,{...i,...r}),"DeleteWorkflows","mutation",t)},TrackEvents(t,i){return n(r=>e.request(Wt,t,{...i,...r}),"TrackEvents","mutation",t)},RequestWorkspaceInvitation(t,i){return n(r=>e.request(Bt,t,{...i,...r}),"RequestWorkspaceInvitation","mutation",t)},IncrementGuidanceViewCount(t,i){return n(r=>e.request(Vt,t,{...i,...r}),"IncrementGuidanceViewCount","mutation",t)},DeleteComment(t,i){return n(r=>e.request(qt,t,{...i,...r}),"DeleteComment","mutation",t)},MergeContentBlocks(t,i){return n(r=>e.request(jt,t,{...i,...r}),"MergeContentBlocks","mutation",t)},UpdateWorkflow(t,i){return n(r=>e.request(Mt,t,{...i,...r}),"UpdateWorkflow","mutation",t)},UpsertWorkflowPin(t,i){return n(r=>e.request(Ht,t,{...i,...r}),"UpsertWorkflowPin","mutation",t)},DeleteWorkflowPin(t,i){return n(r=>e.request(Yt,t,{...i,...r}),"DeleteWorkflowPin","mutation",t)},SearchContent(t,i){return n(r=>e.request(Xt,t,{...i,...r}),"SearchContent","query",t)},ListApps(t,i){return n(r=>e.request(Qt,t,{...i,...r}),"ListApps","query",t)},DiscoverWorkflows(t,i){return n(r=>e.request(Jt,t,{...i,...r}),"DiscoverWorkflows","query",t)},GetWorkflow(t,i){return n(r=>e.request(zt,t,{...i,...r}),"GetWorkflow","query",t)},ListWorkspaces(t,i){return n(r=>e.request(Zt,t,{...i,...r}),"ListWorkspaces","query",t)},getGuidanceSnapshotPresignedURL(t,i){return n(r=>e.request(Kt,t,{...i,...r}),"getGuidanceSnapshotPresignedURL","query",t)},GetStepScreenshotPresignedURLs(t,i){return n(r=>e.request(en,t,{...i,...r}),"GetStepScreenshotPresignedURLs","query",t)},GetNuggetPresignedURL(t,i){return n(r=>e.request(tn,t,{...i,...r}),"GetNuggetPresignedURL","query",t)},GetNuggetSnapshotPresignedURL(t,i){return n(r=>e.request(nn,t,{...i,...r}),"GetNuggetSnapshotPresignedURL","query",t)},ListSharedWorkflows(t,i){return n(r=>e.request(rn,t,{...i,...r}),"ListSharedWorkflows","query",t)},ListTeamWorkflows(t,i){return n(r=>e.request(sn,t,{...i,...r}),"ListTeamWorkflows","query",t)},ListComments(t,i){return n(r=>e.request(on,t,{...i,...r}),"ListComments","query",t)},GetProfile(t,i){return n(r=>e.request(an,t,{...i,...r}),"GetProfile","query",t)},GetProfiles(t,i){return n(r=>e.request(cn,t,{...i,...r}),"GetProfiles","query",t)},GetWorkspaceUsersConnection(t,i){return n(r=>e.request(un,t,{...i,...r}),"GetWorkspaceUsersConnection","query",t)},GetWorkspaceUserUserGroup(t,i){return n(r=>e.request(ln,t,{...i,...r}),"GetWorkspaceUserUserGroup","query",t)},GetUserGroupsConnection(t,i){return n(r=>e.request(dn,t,{...i,...r}),"GetUserGroupsConnection","query",t)}}}var hn={REACT_APP_SEGMENT_WRITE_KEY:"7vxwIWJBNFGbytd1EwrdnGA8rtOyR2Qm",REACT_APP_SENTRY_DSN:"https://d7d41ba9c12d4f7cb91a314fef9dea09@o486460.ingest.sentry.io/5543748",REACT_APP_EDGE_CONFIG:"https://edge-config.vercel.com/ecfg_en0csnhmrivqjsccxbkzezbhxnzv?token=6c5fc605-2c20-485f-8cbd-0b5515b57236",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},M=(e=>(e.AddComment="addComment",e.CaptureGuidanceSnapshot="captureGuidanceSnapshot",e.CheckAnnouncements="checkAnnouncements",e.CheckUser="checkUser",e.CheckWorkspace="checkWorkspace",e.CheckContentScriptActive="checkContentScriptActive",e.ClearAllBlur="clearAllBlur",e.ClearBlurredFields="clearBlurredFields",e.ClickElement="clickElement",e.ClosePanel="closePanel",e.ClosePanelInternal="closePanelInternal",e.CollectArtemisLogs="collectArtemisLogs",e.ContinueRecording="continueRecording",e.CurrentRoute="currentRoute",e.DeleteComment="deleteComment",e.DeleteStep="deleteStep",e.DeleteHeading="deleteHeading",e.DeleteWorkflow="deleteWorkflow",e.DeleteWorkflowPin="deleteWorkflowPin",e.DomUpdated="domUpdated",e.EdgeConfig="edgeConfig",e.ExtensionInstalled="tango-ext-installed",e.FeatureFlags="featureFlags",e.FinishRecording="finishRecording",e.GetSuggestedWorkflows="getBackgroundSearchResults",e.GetContentBlocks="getContentBlocks",e.GetHiddenThreads="getHiddenThreads",e.GetNuggetData="getNuggetData",e.GetOpenTabId="getOpenTabId",e.GetProfiles="getProfiles",e.GetRecentSearches="getRecentSearches",e.GetRecentTangos="getRecentTangos",e.GetScreenshot="getScreenshot",e.GetSharedWorkflows="getSharedWorkflows",e.GetSnapshotDataForCapture="getSnapshotDataForCapture",e.GetSnapshotDataForGuidance="GetSnapshotDataForGuidance",e.GetSnapshotDataForNugget="getSnapshotDataForNugget",e.GetTabs="getTabs",e.GetTabUrl="getTabUrl",e.GetUserPreferences="getUserPreferences",e.GetUserToken="getUserToken",e.GetUser="getUser",e.GetWorkflowData="getWorkflowData",e.GetWorkspaceUsers="getWorkspaceUsers",e.GuidanceAnalytics="guidanceAnalytics",e.HideThread="hideThread",e.HighlightStep="highlightStep",e.ZoomScreenshotStep="zoomScreenshotStep",e.IncrementGuidanceViewCount="incrementGuidanceViewCount",e.InjectOverlay="injectOverlay",e.InjectTestOnlyOpenSidePanelButton="injectTestOnlyOpenSidePanelButton",e.ListComments="listComments",e.KLAuth="klAuth",e.KLVisibility="klVisibility",e.MarkCompletedStep="markCompletedStep",e.MarkFoundStep="markFoundStep",e.MarkHasInteractedWithPage="markHasInteractedWithPage",e.MarkHighlightStep="markHighlightStep",e.NavigateTo="navigateTo",e.OpenAnnouncements="openAnnouncements",e.OpenExtension="openextension",e.OpenSidePanel="openSidePanel",e.OpenThread="openThread",e.OpenContentBlockUrl="openContentBlockUrl",e.OpenNewTab="openNewTab",e.PauseRecording="pauseRecording",e.PinData="pinData",e.PinFromWeb="pinFromWeb",e.PinFromDiscovery="pinFromDiscovery",e.PreviewWorkflow="previewWorkflow",e.ReadStep="readStep",e.RefreshWorkspaces="refreshWorkspaces",e.ReloadOptions="reloadOptions",e.ReportStep="reportStep",e.RequestWorkspaceInvitation="requestWorkspaceInvitation",e.RestartWorkflow="restartWorkflow",e.RunAutoBlur="runAutoBlur",e.SaveStep="saveStep",e.ShowThread="showThread",e.StepEventsProcessed="stepEventsProcessed",e.SearchWorkflows="searchWorkflows",e.SendNotification="sendNotification",e.SignIn="signIn",e.SignInStarted="signInStarted",e.StartFromIntegration="startFromIntegration",e.StartRecording="startRecording",e.StopAutoBlur="stopAutoBlur",e.SwitchWorkspace="switchWorkspace",e.ToggleBlurOff="toggleBlurOff",e.ToggleBlurOn="toggleBlurOn",e.ToggleUserPreference="toggleUserPreference",e.ToolbarPosition="toolbarPosition",e.Track="trackEvent",e.UpsertWorkflowPin="upsertWorkflowPin",e.UnloadContentScript="unloadContentScript",e.UploadGuidanceSnapshot="uploadGuidanceSnapshot",e.UploadNuggetSnapshot="uploadNuggetSnapshot",e.KLAnalytics="klAnalytics",e.GetLastKLEvent="getLastKLEvent",e.SetLastKLEvent="setLastKLEvent",e.UploadPinScreenshot="uploadPinScreenshot",e.VerifyUserToken="verifyUserToken",e.Version="version",e.ViewWorkflow="viewWorkflow",e.WorkflowsFound="workflowsFound",e.WorkspacesFound="workspacesFound",e.HandleDirectToGuidanceLinkClick="handleDirectToGuidanceLinkClick",e.SetActiveTab="setActiveTab",e))(M||{});const On="tango-extension",xn="tango-extension-app",wn="stitches-tango",Ln="kl-portal",Rn=hn.REACT_APP_TESTING;var fn=(e=>(e.ActionBoxOnboardingCompleted="actionBoxOnboardingCompleted",e.ActionBoxOnboardingRepeat="actionBoxOnboardingRepeat",e.AnonymousTrackingId="anonymousTrackingId",e.HighlighterColor="highlighterColor",e.IsDeveloper="isDeveloper",e.LastViewedAnnouncement="lastViewedAnnouncement",e.OnboardingCompleted="onboardingCompleted",e.SecondCaptureCompleted="secondCaptureCompleted",e.ShowedPauseTip="showedPauseTip",e.ShowKL="showKL",e.ToolbarPosition="toolbarPosition",e.WebUrl="webUrl",e))(fn||{});const Pn="creator-install-extension",vn="first-capture",Fn="/app/home?upgradeModal=unlimited",Un="app/workflow",yn="/play",bn="/splash",Gn="sign-up",$n="sign-in",Wn="https://app.tango.us/uninstall-survey",Bn="/app/workflow/:id",fe=chrome.runtime.getManifest(),Vn=fe.version,qn=!!fe.update_url?.includes("microsoft.com"),Q=navigator.userAgent.match(/Chrom(e|ium)\/([0-9.]+)/),jn=Q?parseInt(Q[2],10):null,Mn=null,Hn=280,Yn=100,Xn="MMM dd, yyyy",Qn=36e5,Jn=12e4,zn="data-tango-click-id",Zn="data-tango-action-box",Kn="data-tango-target-element",er="data-tango-highlighted-element",tr="data-tango-nugget-element",nr=2147483647;var mn=(e=>(e.Actions="actions",e.Blurring="blurring",e.Countdown="countdown",e.DirectToGuidance="direct-to-guidance",e.DirectToGuidanceSignInPrompt="direct-to-guidance-sign-in-prompt",e.EnterpriseOnboardingToast="enterprise-onboarding-toast",e.EnterpriseOnboardingSplashPage="enterprise-onboarding-splash-page",e.Finishing="finishing",e.Hidden="hidden",e.Loading="loading",e.NewPin="new-pin",e.OutOfGuidedViews="out-of-guided-views",e.Paused="paused",e.PendingSignIn="pending-sign-in",e.Preferences="preferences",e.Recording="recording",e.ScreenshotDisabled="screenshot-disabled",e.Viewing="view",e.ViewingError="view-error",e.WorkflowCreationFailed="workflow-creation-failed",e))(mn||{}),En=(e=>(e.Right="right",e.Left="left",e))(En||{}),In=(e=>(e.ALTTEXT="alt-text",e.ARIALABEL="aria-label",e.INNERTEXT="inner-text",e.LABEL="label",e.MANUAL="manual",e.NAME="name",e.NONE="none",e.OPTION="option",e.PLACEHOLDER="placeholder",e.TITLE="title",e.TYPE="type",e.VALUE="value",e))(In||{}),Nn=(e=>(e.isInMaintenanceMode="isInMaintenanceMode",e.disallowedGuidanceDomains="disallowedGuidanceDomains",e.guidanceMinDate="guidanceMinDate",e.automatixAfterCapture="automatixAfterCapture",e.captureTrackingPercentage="captureTrackingPercentage",e.minExtensionVersion="minExtensionVersion",e.minExtensionBrowserVersion="minExtensionBrowserVersion",e.klFeedbackURL="klFeedbackURL",e.inlineStylesSnapshotEnabledTeams="inlineStylesSnapshotEnabledTeams",e.retryFailedAutoLogin="retryFailedAutoLogin",e))(Nn||{}),kn=(e=>(e.CELLO_REFERRAL_PROGRAM="cello-referral-program",e.JPEG_SCREENSHOT="extension-jpeg-screenshot",e.GUIDANCE_DEBUGGER="guidance-debugger",e.KL_PILOT="kl-pilot",e.KL_LAUNCH="kl-launch",e.SIDEPANEL_REVAMP="sidepanel-revamp",e.OUT_OF_SEQUENCE="out-of-sequence",e.OUT_OF_SEQUENCE_MULTITASKING="out-of-sequence-multitasking",e.SECURE_BLUR_V2="secure-blur-v2",e))(kn||{});const rr=["Error: This request exceeds the MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND quota.","The message port closed before a response was received.","Could not establish connection. Receiving end does not exist.","Extension context invalidated.","The browser is shutting down.","ResizeObserver loop limit exceeded","Cannot access contents of the page.","No tab with id:","You are not authorized","The node to be removed is not a child of this node","TypeError: Failed to fetch","Failed to fetch","Authentication failed","The database connection is closing."],ir="Taking screenshots has been disabled",sr="MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND",or="64cdebcb-1025-4aba-a799-b9a53b96d28a",ar="33616f45-9b59-41f6-9ce2-0f2586b63c32";var An=(e=>(e.MANUAL="MANUAL",e.INTERACTIVE_AUTOMATIX="INTERACTIVE_AUTOMATIX",e.INTERACTIVE_AUTOMATIX_SIMILAR_ELEMENT="INTERACTIVE_AUTOMATIX_SIMILAR_ELEMENT",e.ARTEMIS="ARTEMIS",e))(An||{}),gn=(e=>(e.None="none",e.Manual="manual",e.Auto="auto",e))(gn||{});const cr="panel-messages",ur=3,lr=5,dr=["hidden","view","new-pin"],pr=[{id:f.Email,name:"Email addresses",type:m.BuiltIn,category:"Personal"},{id:f.Name,name:"Names",type:m.BuiltIn,category:"Personal"},{id:f.PhoneNumber,name:"Phone numbers",type:m.BuiltIn,category:"Personal"},{id:f.Ssn,name:"Social security numbers",type:m.BuiltIn,category:"Personal"},{id:f.UniqueIdentifier,name:"Unique identifiers",type:m.BuiltIn,category:"Personal"},{id:f.CreditCard,name:"Credit card numbers",type:m.BuiltIn,category:"Financial"},{id:f.Currency,name:"Money amounts",type:m.BuiltIn,category:"Financial"},{id:f.RoutingNumber,name:"Routing numbers",type:m.BuiltIn,category:"Financial"},{id:f.Tin,name:"US Taxpayer numbers (TINs)",type:m.BuiltIn,category:"Financial"},{id:f.FormField,name:"Form fields",type:m.BuiltIn,category:"Input elements"},{id:f.LongText,name:"Long text",type:m.BuiltIn,category:"Input elements"},{id:f.TableRows,name:"Table rows",type:m.BuiltIn,category:"Input elements"},{id:f.Url,name:"URLs",type:m.BuiltIn,category:"Tech"},{id:f.IpAddress,name:"IP addresses",type:m.BuiltIn,category:"Tech"},{id:f.Image,name:"Images",type:m.BuiltIn,category:"Media"},{id:f.Svg,name:"Svgs",type:m.BuiltIn,category:"Media"},{id:f.Video,name:"Videos",type:m.BuiltIn,category:"Media"},{id:f.Vin,name:"Vehicle numbers (VINs)",type:m.BuiltIn,category:"Vehicle"}];function me(e){return chrome.runtime?.id?chrome.runtime.sendMessage({message:e}):Promise.reject()}function hr(e,n,t=!1){return me({name:M.Track,eventName:e,eventProperties:n,withWorkflow:t})}function fr(e){return me({name:M.GuidanceAnalytics,event:e})}async function mr(e){const n=await chrome.storage.local.get("openTabId");return n?.openTabId?chrome.tabs.sendMessage(n.openTabId,{message:e}):Promise.reject()}export{bn as $,nr as A,f as B,it as C,Xn as D,Vn as E,kn as F,ur as G,er as H,qn as I,Kn as J,Qn as K,dt as L,M,Jn as N,fn as O,ut as P,lt as Q,mn as R,Yn as S,or as T,kt as U,ft as V,At as W,ir as X,sr as Y,Hn as Z,Un as _,me as a,st as a0,$n as a1,Pn as a2,Gn as a3,vn as a4,Wn as a5,at as a6,lr as a7,u as a8,Dn as a9,G as aa,re as ab,Se as ac,Cn as ad,Ye as ae,ot as af,_n as ag,jn as ah,Nn as ai,En as aj,F as ak,In as al,mt as am,zn as an,tr as ao,Zn as ap,rr as aq,Ln as ar,Sn as as,Tn as at,ct as au,Nt as b,Fn as c,pr as d,rt as e,m as f,fr as g,An as h,ar as i,Et as j,It as k,mr as l,ht as m,pt as n,gn as o,yn as p,gt as q,Bn as r,hr as s,cr as t,Rn as u,wn as v,Mn as w,On as x,dr as y,xn as z};
//# sourceMappingURL=SHnOzo4l.js.map
