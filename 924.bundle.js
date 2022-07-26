/*! For license information please see 924.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktesttask_chuckjokes=self.webpackChunktesttask_chuckjokes||[]).push([[924],{3924:(t,e,n)=>{n.r(e),n.d(e,{default:()=>L});var r=n(7294),o=n(3379),a=n.n(o),i=n(7795),c=n.n(i),l=n(569),s=n.n(l),f=n(3565),u=n.n(f),p=n(9216),d=n.n(p),h=n(4589),m=n.n(h),y=n(6228),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=s().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=d(),a()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;var g=n(5677),w=n(9669),v=n.n(w);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function k(){k=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof u?e:u,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=v(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function u(){}function p(){}function d(){}var h={};c(h,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(M([])));y&&y!==e&&n.call(y,o)&&(h=y);var b=d.prototype=u.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var f=l.arg,u=f.value;return u&&"object"==x(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(u).then((function(t){f.value=t,i(f)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function v(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,v(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function M(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,c(b,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(b),c(b,i,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=M,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function j(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const L=function(t){var e,n,o=t.datashared,a=(e=(0,r.useState)(o),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1],l=(0,r.useRef)(),s=function(){var t,e=(t=k().mark((function t(){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v().get("https://api.chucknorris.io/jokes/random").then((function(t){return c(t.data)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){j(a,r,o,i,c,"next",t)}function c(t){j(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){c(o)}),[o]),r.createElement("div",{className:"container"},r.createElement("div",{className:"jokees"},r.createElement("div",{className:"jokes",ref:l},r.createElement("div",null,r.createElement("div",{className:"joketitle"},"  ",r.createElement("h3",null,"Social Joke")),r.createElement("div",{className:"Head"},r.createElement("h1",null,"The Granny Joke"),r.createElement("div",{className:"line"}," ",r.createElement("span",null),"  ",r.createElement("h3",null,"NO #1"))),r.createElement("p",null,i.value)),r.createElement("div",{className:"rate"},r.createElement("div",{className:"cat"},r.createElement("div",{className:"thumb like"},r.createElement("img",{src:g.QY,alt:"thumb Down"})),r.createElement("p",null,"253")),r.createElement("div",{className:"cat"},r.createElement("div",{className:"thumb dislike"},r.createElement("img",{src:g.ZU,alt:"thumbUp"})),r.createElement("p",null,"23")))),r.createElement("div",{className:"bottom"},r.createElement("button",{onClick:function(){l.current.style.opacity=0,setTimeout((function(){s(),l.current.style.opacity=1}),1e3)},className:"button prev"},r.createElement("img",{src:g.uh,alt:"arrow"}),"Prev JOKE"),r.createElement("button",{onClick:function(){l.current.style.opacity=0,setTimeout((function(){s(),l.current.style.opacity=1}),1e3)},className:"button next"}," next JOKE",r.createElement("img",{src:g.SQ,alt:"arrow"})))),r.createElement("div",{className:"topjokes"},r.createElement("h2",null,"The top 10 Jokes this Week"),r.createElement("p",null,"Smoking Joke"),r.createElement("p",null,"My Boss Joke"),r.createElement("p",null," Dirty Millionaire Joke"),r.createElement("p",null,"The annoying neighbour"),r.createElement("p",null,"Knock Knowk"),r.createElement("p",null," Why Tyson lisps"),r.createElement("p",null," The drunk Police Officer"),r.createElement("p",null," My hip dad (Dad Joke)"),r.createElement("p",null,"what not to say in an elevator")))}},6228:(t,e,n)=>{n.d(e,{Z:()=>D});var r=n(8081),o=n.n(r),a=n(3645),i=n.n(a),c=n(1667),l=n.n(c),s=new URL(n(4656),n.b),f=new URL(n(3130),n.b),u=new URL(n(7099),n.b),p=new URL(n(3166),n.b),d=new URL(n(7142),n.b),h=new URL(n(786),n.b),m=new URL(n(2256),n.b),y=new URL(n(4930),n.b),b=new URL(n(4404),n.b),g=new URL(n(2701),n.b),w=new URL(n(8166),n.b),v=new URL(n(9363),n.b),x=new URL(n(8569),n.b),k=new URL(n(8918),n.b),j=new URL(n(6393),n.b),E=new URL(n(7030),n.b),L=new URL(n(7374),n.b),M=new URL(n(8997),n.b),N=i()(o()),S=l()(s),U=l()(f),R=l()(u),O=l()(p),T=l()(d),_=l()(h),I=l()(m),P=l()(y),A=l()(b),B=l()(g),G=l()(w),J=l()(v),H=l()(x),Z=l()(k),C=l()(j),F=l()(E),K=l()(L),z=l()(M);N.push([t.id,"@font-face{font-family:'Montserrat-Black';src:url("+S+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-BlackI-talic';src:url("+U+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-Bold';src:url("+R+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-Bold-Italic';src:url("+O+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-ExtraBold';src:url("+T+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-ExtraBoldItalic';src:url("+_+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-ExtraLight';src:url("+I+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-ExtraLightItalic';src:url("+P+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-Italic';src:url("+A+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-Light';src:url("+B+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-LightItalic';src:url("+G+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-Medium';src:url("+J+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-MediumItalic';src:url("+H+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-Regular';src:url("+Z+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-SemiBold';src:url("+C+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-Thin';src:url("+F+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-SemiBoldItalic';src:url("+K+") format(\"opentype\");font-display:swap}@font-face{font-family:'Montserrat-ThinItalic';src:url("+z+') format("opentype");font-display:swap}.container{width:80%;margin:auto;padding:20px;background-color:#ebebff;display:flex;flex-direction:row;justify-content:space-between}@media screen and (max-width: 750px){.container{flex-direction:column;gap:20px}}.container .jokees{padding:25px;box-shadow:5px 5px 15px 5px rgba(119,119,119,0.75);width:60%;border:none;background-color:white;border:"1px solid black";padding:"8px";transition:"opacity 1s linear"}@media screen and (max-width: 750px){.container .jokees{width:100%}}.container .jokees .jokes{margin-top:25px}.container .jokees .jokes .joketitle{border:2px solid #1cbb5b;background-color:#1cbb5b;color:#f9f9f9;width:fit-content;padding:2px 5px;border-radius:50px;margin-bottom:5px}.container .jokees .jokes .Head{display:flex;display:flex;align-items:center;justify-content:space-between}.container .jokees .jokes .Head h1{color:#cfb995;width:100%}.container .jokees .jokes .Head .line{width:100%;position:relative}.container .jokees .jokes .Head .line span{width:100%}.container .jokees .jokes .Head .line span:after{content:\'\';position:absolute;display:block;border-bottom:5px solid #cfb995;width:100%;right:50px;top:20px}.container .jokees .jokes .Head .line h3{font-size:15px;width:50px;color:#cfb995;float:right}.container .jokees .jokes p{margin-top:20px;box-decoration-break:clone;word-break:keep-all}.container .jokees .jokes .rate{margin-top:20px;display:flex;justify-content:center;align-items:center;gap:20px}.container .jokees .jokes .rate .cat{display:flex;flex-direction:column;justify-content:center;align-items:center}.container .jokees .jokes .rate .cat p{margin:0px}.container .jokees .jokes .rate .cat .thumb{background-color:#f33;border-radius:50%;display:flex;align-items:center;justify-content:center;width:40px;height:40px;cursor:pointer}.container .jokees .jokes .rate .cat .thumb img{width:20px;height:20px}.container .jokees .jokes .rate .cat .thumb:hover{background-color:#900}.container .jokees .jokes .rate .cat .like{background-color:#57e690;color:#57e690;transition:all 0.3s ease}.container .jokees .jokes .rate .cat .like:hover{background-color:#1cbb5b}.container .jokees .bottom{margin-top:1rem;padding:20px;display:flex;justify-content:center;flex-direction:row;width:100%;cursor:pointer;background-color:white}@media screen and (max-width: 750px){.container .jokees .bottom{padding:5px}}.container .jokees .bottom .button{width:100px;background-color:#fff;color:#cfb995;font-size:15px;height:30px;width:120px;margin-left:20px;border:1px solid #b2b2b2;display:flex;cursor:pointer;font-family:"Montserrat-Medium";justify-content:space-evenly;align-items:center;transition:all 0.3s ease}.container .jokees .bottom .button:hover{background-color:#b50d0d}@media screen and (max-width: 750px){.container .jokees .bottom .button{width:100%;margin-left:5px;font-size:small}.container .jokees .bottom .button img{width:7px;height:7px}}.container .jokees .bottom img{width:9px;height:15px}.container .topjokes{width:30%;padding:20px;box-shadow:5px 5px 15px 5px rgba(119,119,119,0.75);background-color:white;cursor:pointer}.container .topjokes p{line-height:35px;text-decoration:underline}@media screen and (max-width: 750px){.container .topjokes{margin-top:30px;width:100%;display:flex;flex-direction:column;align-items:center}}\n',""]);const D=N}}]);