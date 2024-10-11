var DataGridRenderer={as:function(r,t,a,n,e){for(var o="[",l=r.length,s=t.length,v=0;v<l;v++){var f=r[v];o+="{";for(var i=0;i<s;i++){if("int"==a[i]||"float"==a[i])var h=f[i]||"null";else h='"'+(f[i]||"")+'"';o+=t[i]+":"+h,i<s-1&&(o+=",")}o+="}",v<l-1&&(o+=","+e)}return o+="];"},asp:function(r,t,a,n,e){for(var o="",l=r.length,s=t.length,v=0;v<l;v++)for(var f=r[v],i=0;i<s;i++){if("int"==a[i]||"float"==a[i])var h=f[i]||"null";else h='"'+(f[i]||"")+'"';o+="myArray("+i+","+v+") = "+h+e}return o="Dim myArray("+(i-1)+","+(v-1)+")"+e+o},html:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o+="<table>"+e,o+=n+"<thead>"+e,o+=n+n+"<tr>"+e;for(var v=0;v<s;v++)o+=n+n+n+'<th class="'+t[v]+'-cell">',o+=t[v],o+="</th>"+e;o+=n+n+"</tr>"+e,o+=n+"</thead>"+e,o+=n+"<tbody>"+e;for(var f=0;f<l;f++){var i=r[f],h="";f===l-1?h=' class="lastRow"':0===f&&(h=' class="firstRow"'),o+=n+n+"<tr"+h+">"+e;for(v=0;v<s;v++)o+=n+n+n+'<td class="'+t[v]+'-cell">',o+=i[v],o+="</td>"+e;o+=n+n+"</tr>"+e}return o+=n+"</tbody>"+e,o+="</table>"},json:function(r,t,a,n,e){for(var o="[",l=r.length,s=t.length,v=0;v<l;v++){var f=r[v];o+="{";for(var i=0;i<s;i++){if("int"==a[i]||"float"==a[i])var h=f[i]||"null";else h='"'+(f[i]||"")+'"';o+='"'+t[i]+'":'+h,i<s-1&&(o+=",")}o+="}",v<l-1&&(o+=","+e)}return o+="]"},jsonArrayCols:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o+="{"+e;for(var v=0;v<s;v++){o+=n+'"'+t[v]+'":[';for(var f=0;f<l;f++)"int"==a[v]||"float"==a[v]?o+=r[f][v]||0:o+='"'+(r[f][v]||"")+'"',f<l-1&&(o+=",");o+="]",v<s-1&&(o+=","+e)}return o+=e+"}"},jsonArrayRows:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o+="["+e;for(var v=0;v<l;v++){o+=n+"[";for(var f=0;f<s;f++)"int"==a[f]||"float"==a[f]?o+=r[v][f]||0:o+='"'+(r[v][f]||"")+'"',f<s-1&&(o+=",");o+="]",v<l-1&&(o+=","+e)}return o+=e+"]"},jsonDict:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o+="{"+e;for(var v=0;v<l;v++){if(o+=n+'"'+r[v][0]+'": ',2==s)o+=i(v,1);else{o+="{ ";for(var f=1;f<s;f++)f>1&&(o+=", "),o+='"'+t[f]+'":'+i(v,f);o+="}"}v<l-1&&(o+=","+e)}function i(t,n){return"int"==a[n]||"float"==a[n]?r[t][n]||0:'"'+(r[t][n]||"")+'"'}return o+=e+"}"},mysql:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o+="CREATE TABLE MrDataConverter ("+e,o+=n+"id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,"+e;for(var v=0;v<s;v++){var f="VARCHAR(255)";"int"!=a[v]&&"float"!=a[v]||(f=a[v].toUpperCase()),o+=n+""+t[v]+" "+f,v<s-1&&(o+=","),o+=e}o+=");"+e,o+="INSERT INTO MrDataConverter "+e+n+"(";for(v=0;v<s;v++)o+=t[v],v<s-1&&(o+=",");o+=") "+e+"VALUES "+e;for(var i=0;i<l;i++){o+=n+"(";for(v=0;v<s;v++)"int"==a[v]||"float"==a[v]?o+=r[i][v]||"null":o+="'"+(r[i][v]||"")+"'",v<s-1&&(o+=",");o+=")",i<l-1&&(o+=","+e)}return o+=";"},php:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o+="array("+e;for(var v=0;v<l;v++){var f=r[v];o+=n+"array(";for(var i=0;i<s;i++){if("int"==a[i]||"float"==a[i])var h=f[i]||"null";else h='"'+(f[i]||"")+'"';o+='"'+t[i]+'"=>'+h,i<s-1&&(o+=",")}o+=")",v<l-1&&(o+=","+e)}return o+=e+");"},python:function(r,t,a,n,e){for(var o="[",l=r.length,s=t.length,v=0;v<l;v++){var f=r[v];o+="{";for(var i=0;i<s;i++){if("int"==a[i]||"float"==a[i])var h=f[i]||"None";else h='"'+(f[i]||"")+'"';o+='"'+t[i]+'":'+h,i<s-1&&(o+=",")}o+="}",v<l-1&&(o+=","+e)}return o+="];"},ruby:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o+="[";for(var v=0;v<l;v++){var f=r[v];o+="{";for(var i=0;i<s;i++){if("int"==a[i]||"float"==a[i])var h=f[i]||"nil";else h='"'+(f[i]||"")+'"';o+='"'+t[i]+'"=>'+h,i<s-1&&(o+=",")}o+="}",v<l-1&&(o+=","+e)}return o+="];"},xml:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o='<?xml version="1.0" encoding="UTF-8"?>'+e,o+="<rows>"+e;for(var v=0;v<l;v++){var f=r[v];o+=n+"<row>"+e;for(var i=0;i<s;i++)o+=n+n+"<"+t[i]+">",o+=f[i]||"",o+="</"+t[i]+">"+e;o+=n+"</row>"+e}return o+="</rows>"},xmlProperties:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o='<?xml version="1.0" encoding="UTF-8"?>'+e,o+="<rows>"+e;for(var v=0;v<l;v++){var f=r[v];o+=n+"<row ";for(var i=0;i<s;i++)o+=t[i]+"=",o+='"'+f[i]+'" ';o+="></row>"+e}return o+="</rows>"},xmlIllustrator:function(r,t,a,n,e){var o="",l=r.length,s=t.length;o='<?xml version="1.0" encoding="utf-8"?>'+e,o+='<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20001102//EN"    "http://www.w3.org/TR/2000/CR-SVG-20001102/DTD/svg-20001102.dtd" ['+e,o+=n+'<!ENTITY ns_graphs "http://ns.adobe.com/Graphs/1.0/">'+e,o+=n+'<!ENTITY ns_vars "http://ns.adobe.com/Variables/1.0/">'+e,o+=n+'<!ENTITY ns_imrep "http://ns.adobe.com/ImageReplacement/1.0/">'+e,o+=n+'<!ENTITY ns_custom "http://ns.adobe.com/GenericCustomNamespace/1.0/">'+e,o+=n+'<!ENTITY ns_flows "http://ns.adobe.com/Flows/1.0/">'+e,o+=n+'<!ENTITY ns_extend "http://ns.adobe.com/Extensibility/1.0/">'+e,o+="]>"+e,o+="<svg>"+e,o+='<variableSets  xmlns="&ns_vars;">'+e,o+=n+'<variableSet  varSetName="binding1" locked="none">'+e,o+=n+n+"<variables>"+e;for(var v=0;v<s;v++)o+=n+n+n+'<variable varName="'+t[v]+'" trait="textcontent" category="&ns_flows;"></variable>'+e;o+=n+n+"</variables>"+e,o+=n+n+'<v:sampleDataSets  xmlns:v="http://ns.adobe.com/Variables/1.0/" xmlns="http://ns.adobe.com/GenericCustomNamespace/1.0/">'+e;for(v=0;v<l;v++){var f=r[v];o+=n+n+n+'<v:sampleDataSet dataSetName="'+f[0]+'">'+e;for(var i=0;i<s;i++)o+=n+n+n+n+"<"+t[i]+">"+e,o+=n+n+n+n+n+"<p>"+f[i]+"</p>"+e,o+=n+n+n+n+"</"+t[i]+">"+e;o+=n+n+n+"</v:sampleDataSet>"+e}return o+=n+n+"</v:sampleDataSets>"+e,o+=n+"</variableSet>"+e,o+="</variableSets>"+e,o+="</svg>"+e}};