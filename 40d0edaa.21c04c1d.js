(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?a.a.createElement(O,i(i({ref:t},b),{},{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(142)),c={title:"v1.6.0",author:"Ewan Lyon",author_url:"https://github.com/EwanLyon",author_image_url:"https://avatars2.githubusercontent.com/u/19513845?s=460&v=4",tags:["update","v1.6.0"]},i={permalink:"/blog/2020/02/25/v1.6.0",source:"@site/blog/2020-02-25-v1.6.0.md",description:"Minor version bump.",date:"2020-02-25T00:00:00.000Z",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"v1.6.0",permalink:"/blog/tags/v-1-6-0"}],title:"v1.6.0",readingTime:.385,truncated:!0,prevItem:{title:"New Docs!",permalink:"/blog/2020/02/26/New-Docs"}},l=[{value:"New",id:"new",children:[]},{value:"Update",id:"update",children:[]},{value:"Fix",id:"fix",children:[]},{value:"Thanks to",id:"thanks-to",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Minor version bump."),Object(o.b)("h2",{id:"new"},"New"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Docs now get automatically built ",Object(o.b)("em",{parentName:"li"},"(old jsdocs)")),Object(o.b)("li",{parentName:"ul"},"Flexible mounts"),Object(o.b)("li",{parentName:"ul"},"Expose NodeCG router"),Object(o.b)("li",{parentName:"ul"},"p5.js Tutorial")),Object(o.b)("h2",{id:"update"},"Update"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Docket now on Node 10")),Object(o.b)("h2",{id:"fix"},"Fix"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check if bundle package.json has version"),Object(o.b)("li",{parentName:"ul"},"Typo in replicants description ",Object(o.b)("em",{parentName:"li"},"(objcts \u2192 objects)")),Object(o.b)("li",{parentName:"ul"},"Clone replicant default value")),Object(o.b)("h2",{id:"thanks-to"},"Thanks to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Seldszar"}),"Seldszar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Dan-Shields"}),"Dan-Shields")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/VodBox"}),"VodBox")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/EwanLyon"}),"Myself")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Hoishin"}),"Hoishin")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Lange"}),"Lange"))),Object(o.b)("p",null,"for making this update happen!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Version comparison ",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/nodecg/nodecg/compare/v1.5.0...v1.6.0"}),"here"))))}u.isMDXComponent=!0}}]);