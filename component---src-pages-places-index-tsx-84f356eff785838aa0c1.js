(self.webpackChunkpersian_data=self.webpackChunkpersian_data||[]).push([[264],{6666:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(7294),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=r.a},function(e,t,n){"use strict";var r=n(3),a=n.n(r),l=n(4),o=n.n(l),c=n(9),s=(n.n(c),function(e){var t=e.obj;if(0===Object.keys(t).length)return null;var n=JSON.stringify(t,void 0,2);return n=(n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,(function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),"<span class='"+t+"'>"+e+"</span>"})),a.a.createElement("div",{className:"ReactJsonSyntaxHighlighter"},a.a.createElement("pre",{dangerouslySetInnerHTML:{__html:n}}))});s.propTypes={obj:o.a.object.isRequired},t.a=s},function(e,t){e.exports=r},function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";var r=n(6),a=n(7),l=n(8);e.exports=function(){function e(e,t,n,r,o,c){c!==l&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,a,l,o,c,s){if(r(t),!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,l,o,c,s],f=0;(i=new Error(t.replace(/%s/g,(function(){return u[f++]})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){}]))},1455:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var r=n(7294),a=n(1597),l=function(){return r.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L6.81066 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H6.81066L11.5303 17.4697C11.8232 17.7626 11.8232 18.2374 11.5303 18.5303C11.2374 18.8232 10.7626 18.8232 10.4697 18.5303L4.46967 12.5303C4.17678 12.2374 4.17678 11.7626 4.46967 11.4697L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z",fill:"#22282F"}))},o=function(){return r.createElement(a.rU,{to:"/",className:"absolute top-0 left-0 p-8 md:px-5 flex items-center space-x-1"},r.createElement(l,null),r.createElement("span",{className:"font-medium text-sm"},"‌Home"))}},4223:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(7294),a=n(6666),l=n.n(a),o=function(e){var t;return r.createElement("div",{className:"w-full h-96 rounded-lg bg-gray-light bg-opacity-20 p-10 text-sm font-medium overflow-auto "+(null!==(t=e.className)&&void 0!==t?t:"")},r.createElement(l(),{obj:e.code}))},c=function(){return r.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 1.25H7.94513C6.57754 1.24998 5.47522 1.24996 4.60825 1.36652C3.70814 1.48754 2.95027 1.74643 2.34835 2.34835C1.74643 2.95027 1.48754 3.70814 1.36652 4.60825C1.24996 5.47522 1.24998 6.57754 1.25 7.94513V8V10V10.0549C1.24998 11.4225 1.24996 12.5248 1.36652 13.3918C1.48754 14.2919 1.74643 15.0497 2.34835 15.6517C2.95027 16.2536 3.70814 16.5125 4.60825 16.6335C5.32326 16.7296 6.19834 16.7464 7.25029 16.7494C7.25206 17.7968 7.26472 18.6632 7.35452 19.3688C7.46291 20.2206 7.6943 20.9432 8.23521 21.5335C8.30892 21.6139 8.3861 21.6911 8.46654 21.7648C9.05683 22.3057 9.77943 22.5371 10.6312 22.6455C11.4528 22.75 12.4922 22.75 13.7817 22.75H13.8333H16H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6516 21.6516C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V16V13.8333V13.7817C22.75 12.4922 22.75 11.4528 22.6455 10.6312C22.5371 9.77943 22.3057 9.05683 21.7648 8.46654C21.6911 8.3861 21.6139 8.30892 21.5335 8.23521C20.9432 7.6943 20.2206 7.46291 19.3688 7.35452C18.6632 7.26472 17.7968 7.25206 16.7494 7.25029C16.7464 6.19834 16.7296 5.32326 16.6335 4.60825C16.5125 3.70814 16.2536 2.95027 15.6517 2.34835C15.0497 1.74643 14.2919 1.48754 13.3918 1.36652C12.5248 1.24996 11.4225 1.24998 10.0549 1.25H10H8ZM16.75 8.7504V10V10.0549V10.0549C16.75 11.4225 16.75 12.5248 16.6335 13.3918C16.5125 14.2919 16.2536 15.0497 15.6517 15.6517C15.0497 16.2536 14.2919 16.5125 13.3918 16.6335C12.5248 16.75 11.4225 16.75 10.0549 16.75H10.0549H10H8.7504C8.75246 17.7986 8.76512 18.5713 8.84252 19.1795C8.93117 19.8761 9.09386 20.2502 9.34113 20.5201C9.38535 20.5683 9.43166 20.6147 9.47992 20.6589C9.74976 20.9061 10.1239 21.0688 10.8205 21.1575C11.5364 21.2486 12.4801 21.25 13.8333 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16V13.8333C21.25 12.4801 21.2486 11.5364 21.1575 10.8205C21.0688 10.1239 20.9061 9.74976 20.6589 9.47992C20.6147 9.43166 20.5683 9.38535 20.5201 9.34113C20.2502 9.09386 19.8761 8.93117 19.1795 8.84252C18.5713 8.76512 17.7986 8.75246 16.75 8.7504ZM3.40901 3.40901C3.68577 3.13225 4.07434 2.9518 4.80812 2.85315C5.56347 2.75159 6.56458 2.75 8 2.75H10C11.4354 2.75 12.4365 2.75159 13.1919 2.85315C13.9257 2.9518 14.3142 3.13225 14.591 3.40901C14.8678 3.68577 15.0482 4.07434 15.1469 4.80812C15.2484 5.56347 15.25 6.56458 15.25 8V10C15.25 11.4354 15.2484 12.4365 15.1469 13.1919C15.0482 13.9257 14.8678 14.3142 14.591 14.591C14.3142 14.8678 13.9257 15.0482 13.1919 15.1469C12.4365 15.2484 11.4354 15.25 10 15.25H8C6.56458 15.25 5.56347 15.2484 4.80812 15.1469C4.07434 15.0482 3.68577 14.8678 3.40901 14.591C3.13225 14.3142 2.9518 13.9257 2.85315 13.1919C2.75159 12.4365 2.75 11.4354 2.75 10V8C2.75 6.56458 2.75159 5.56347 2.85315 4.80812C2.9518 4.07434 3.13225 3.68577 3.40901 3.40901Z",fill:"#22282F"}))},s=n(7161),i=function(e){var t=e.title,n=e.description,a=e.data,l=e.githubSrc,i=(0,r.useState)(!1),u=i[0],f=i[1];return r.createElement("div",{className:"mt-12 w-full"},r.createElement("h2",{className:"font-bold"},t),n&&r.createElement("span",{className:"text-sm text-gray-dark mb-4"},n),r.createElement(o,{code:a,className:"mt-4"}),r.createElement("div",{className:"flex justify-between mt-2"},r.createElement("button",{className:"text-xs flex items-center space-x-2 font-medium h-9 rounded-md px-5 border border-gray-light border-opacity-40 hover:border-opacity-100",onClick:function(){f(!0),navigator.clipboard.writeText(JSON.stringify(a)),setTimeout((function(){f(!1)}),700)}},u?"Copied":r.createElement(r.Fragment,null,r.createElement(c,null),r.createElement("span",null,"Copy JSON"))),r.createElement("a",{href:l,target:"_blank",rel:"noreferrer",className:"flex items-center space-x-2 opacity-70 hover:opacity-100 cursor-pointer"},r.createElement("span",{className:"text-xs text-gray-dark"},"View this JSON in github"),r.createElement(s.E,{className:"fill-gray-dark"}))))}},580:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return s}});var r=n(7294),a=n(1011),l=n(4223),o=n(4353),c=n(1455);t.default=function(){return r.createElement("main",{className:"relative container p-5 md:w-[700px] mx-auto pt-36 flex flex-col items-center text-primary pb-32"},r.createElement(c.x,null),r.createElement("h1",{className:"text-3xl font-extrabold"},"Places"),r.createElement("h4",{className:"text-base font-normal mt-4 text-gray-light"},"Persian practical data for programmers"),a.x.map((function(e){return r.createElement(l.d,e)})),r.createElement(o.$,null))};var s=function(){return r.createElement(r.Fragment,null,r.createElement("title",null,"Places"),r.createElement("meta",{name:"description",content:"Persian practical data for programmers"}))}}}]);
//# sourceMappingURL=component---src-pages-places-index-tsx-84f356eff785838aa0c1.js.map