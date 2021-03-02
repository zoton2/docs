(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(142)),i={id:"waitForReplicants",title:"waitForReplicants",sidebar_label:"waitForReplicants"},l={unversionedId:"classes/waitForReplicants",id:"classes/waitForReplicants",isDocsHomePage:!1,title:"waitForReplicants",description:"(static) waitForReplicants(replicants) \u2192 \\{Promise.&lt;any>\\}",source:"@site/docs/classes/waitForReplicants.md",slug:"/classes/waitForReplicants",permalink:"/docs/classes/waitForReplicants",editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/waitForReplicants.md",version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1610153791,sidebar_label:"waitForReplicants",sidebar:"mainSidebar",previous:{title:"readReplicant",permalink:"/docs/classes/readReplicant"},next:{title:"sendMessage",permalink:"/docs/classes/sendMessage"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"(static)")," ",Object(c.b)("inlineCode",{parentName:"p"},"waitForReplicants(replicants)")," ",Object(c.b)("em",{parentName:"p"},"\u2192 ","{","Promise.","<","any>","}")),Object(c.b)("p",null,"Lets you easily wait for a group of Replicants to finish declaring."),Object(c.b)("p",null,"Returns a promise which is resolved once all provided Replicants have emitted a change event, which is indicates that they must have finished declaring."),Object(c.b)("p",null,"This method is only useful in client-side code. Server-side code never has to wait for Replicants."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"replicants"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Replicant"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"From a graphic or dashboard panel:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const rep1 = nodecg.Replicant('rep1');\nconst rep2 = nodecg.Replicant('rep2');\n\n// You can provide as many Replicant arguments as you want,\n// this example just uses two Replicants.\nNodeCG.waitForReplicants(rep1, rep2).then(() => {\n    console.log('rep1 and rep2 are fully declared and ready to use!');\n});\n")))}p.isMDXComponent=!0}}]);