(()=>{var W=Object.create;var m=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var X=(t,e)=>()=>(t&&(e=t(t=0)),e);var u=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var B=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of x(e))!Z.call(t,i)&&i!==r&&m(t,i,{get:()=>e[i],enumerable:!(o=O(e,i))||o.enumerable});return t};var g=(t,e,r)=>(r=t!=null?W(N(t)):{},B(e||!t||!t.__esModule?m(r,"default",{value:t,enumerable:!0}):r,t));function n(t){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${t}`])return window["@Neos:HostPluginAPI"][`@${t}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var p=X(()=>{});var y=u((st,h)=>{p();h.exports=n("vendor")().React});var A=u((at,I)=>{p();I.exports=n("NeosProjectPackages")().NeosUiDecorators});p();var f=n("manifest");var s=g(y(),1),w=g(A(),1);var d={"--space-between":"--jonnitto-prettyembed-00i6NG-space-between",propertyLabel:"jonnitto-prettyembed-00i6NG-propertyLabel",propertyValue:"jonnitto-prettyembed-00i6NG-propertyValue",infoView:"jonnitto-prettyembed-00i6NG-infoView"};var v=(0,w.neos)(t=>({i18nRegistry:t.get("i18n")}));function V(t){let{value:e,options:r,i18nRegistry:o}=t,i=Object.entries(r).map(([a,c])=>{let l=e[a];if(!l)return null;let G=a==="duration"?Y(l):null;return{label:o.translate(c+".label"),value:o.translate(c+".value",l,[l,G])}}).filter(a=>!!a);return i.length?s.default.createElement("dl",{className:d.infoView},i.map(({label:a,value:c})=>s.default.createElement(s.Fragment,null,s.default.createElement("dt",{className:d.propertyLabel},a),s.default.createElement("dd",{className:d.propertyValue,dangerouslySetInnerHTML:{__html:c}})))):s.default.createElement("div",null,o.translate("Jonnitto.PrettyEmbedHelper:NodeTypes.Mixin.Metadata:noMetadataSet"))}var Y=t=>{let e=~~(t/3600),r=~~(t%3600/60),o=t%60;return e?`${e}:${r}:${o}`:r?`${r}:${o}`:""},C=v(V);f("Jonnitto.PrettyEmbed:Metadata",{},t=>{t.get("inspector").get("editors").set("Jonnitto.PrettyEmbed/Metadata",{component:C})});})();
