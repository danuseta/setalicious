/*! For license information please see app~49ea73a0.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[324],{5177:function(t,e,r){r(2675),r(9463),r(6412),r(2259),r(8125),r(3792),r(4782),r(2010),r(4731),r(479),r(875),r(287),r(6099),r(3362),r(7764),r(3500),r(2953);var n=r(602);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};f(L,u,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(A([])));_&&_!==r&&n.call(_,u)&&(L=_);var k=x.prototype=w.prototype=Object.create(L);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(a,i,c,u){var s=p(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},O(j.prototype),f(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var u="restaurants",s=(0,n.P2)("restaurant-catalogue-db",1,{upgrade:function(t){t.createObjectStore(u,{keyPath:"id"})}}),l={getRestaurant:function(t){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,s;case 4:return e.abrupt("return",e.sent.get(u,t));case 5:case"end":return e.stop()}}),e)})))()},getAllRestaurants:function(){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s;case 2:return t.abrupt("return",t.sent.getAll(u));case 3:case"end":return t.stop()}}),t)})))()},putRestaurant:function(t){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasOwnProperty("id")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,s;case 4:return e.abrupt("return",e.sent.put(u,t));case 5:case"end":return e.stop()}}),e)})))()},deleteRestaurant:function(t){return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s;case 2:return e.abrupt("return",e.sent.delete(u,t));case 3:case"end":return e.stop()}}),e)})))()}};e.A=l},4338:function(t,e,r){r(2675),r(9463),r(6412),r(2259),r(8125),r(3792),r(4782),r(2010),r(4731),r(479),r(875),r(287),r(6099),r(3362),r(7764),r(3500),r(2953),r(9204),r(6810),r(6367),r(2047),r(9386),r(8098),r(7898),r(5700),r(8706),r(9572),r(6033),r(2892),r(825),r(7495),r(8781),r(1761),r(3296),r(7208),r(8408);var n=r(5177);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};f(L,u,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(A([])));_&&_!==r&&n.call(_,u)&&(L=_);var k=x.prototype=w.prototype=Object.create(L);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(a,i,c,u){var s=p(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},O(j.prototype),f(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:e+""}function l(t,e,r){return e=d(e),function(t,e){if(e&&("object"==o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,h()?Reflect.construct(e,r||[],d(t).constructor):e.apply(t,r))}function f(t){var e="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,r){if(h())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var o=new(t.bind.apply(t,n));return r&&p(o,r.prototype),o}(t,arguments,d(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)},f(t)}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(e,t),r=e,o=[{key:"restaurant",set:function(t){this._restaurant=t,this.render()}},{key:"connectedCallback",value:(d=c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._restaurant?this.render():this.renderSkeleton();case 1:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"renderSkeleton",value:function(){this.innerHTML='\n      <article class="restaurant-item skeleton">\n        <div class="restaurant-image-container">\n          <div class="skeleton-img"></div>\n        </div>\n        <div class="restaurant-info">\n          <div class="skeleton-text restaurant-name-skeleton"></div>\n          <div class="restaurant-meta">\n            <div class="skeleton-text restaurant-city-skeleton"></div>\n            <div class="skeleton-text restaurant-rating-skeleton"></div>\n          </div>\n          <div class="skeleton-text restaurant-description-skeleton"></div>\n          <div class="skeleton-text restaurant-description-skeleton"></div>\n          <div class="restaurant-actions">\n            <div class="skeleton-text view-detail-skeleton"></div>\n          </div>\n        </div>\n      </article>\n    '}},{key:"render",value:(h=c(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.A.getRestaurant(this._restaurant.id);case 3:e=t.sent,this.innerHTML='\n        <article class="restaurant-item">\n          <div class="restaurant-image-container">\n            \x3c!-- Restaurant image placeholder --\x3e\n            <div class="restaurant-image-placeholder"></div>\n            \n            \x3c!-- Restaurant image with lazy loading --\x3e\n            <img \n              class="lazyload restaurant-image blur-up"\n              data-src="'.concat(CONFIG.BASE_IMAGE_URL).concat(this._restaurant.pictureId,'"\n              data-sizes="auto"\n              alt="').concat(this._restaurant.name,'"\n            >\n            \n            \x3c!-- Loading progress bar --\x3e\n            <div class="image-loading-progress"></div>\n          </div>\n          \n          <div class="restaurant-info">\n            <h3 class="restaurant-name">').concat(this._restaurant.name,'</h3>\n            <div class="restaurant-meta">\n              <div class="restaurant-city">\n                <span class="icon" aria-hidden="true">📍</span>\n                <span>').concat(this._restaurant.city,'</span>\n              </div>\n              <div class="restaurant-rating">\n                <span class="icon" aria-hidden="true">⭐</span>\n                <span>').concat(this._restaurant.rating,'</span>\n              </div>\n            </div>\n            <p class="restaurant-description">').concat(this._restaurant.description,'</p>\n            <div class="restaurant-actions">\n              <a \n                href="#/detail/').concat(this._restaurant.id,'" \n                class="view-detail"\n                aria-label="View details of ').concat(this._restaurant.name,'"\n              >\n                View Details\n              </a>\n              <button \n                class="favorite-button ').concat(e?"favorite":"",'"\n                aria-label="').concat(e?"Remove from Favorites":"Add to Favorites",'"\n                data-id="').concat(this._restaurant.id,'"\n              >\n                <span class="icon" aria-hidden="true">\n                  ').concat(e?"❤️":"🤍","\n                </span>\n              </button>\n            </div>\n          </div>\n        </article>\n      "),this._initFavoriteButton(),this._handleImageLoading(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),this._renderError();case 13:case"end":return t.stop()}}),t,this,[[0,9]])}))),function(){return h.apply(this,arguments)})},{key:"_handleImageLoading",value:function(){var t=this,e=this.querySelector(".restaurant-image"),r=this.querySelector(".image-loading-progress");e&&r&&(e.addEventListener("lazyloaded",(function(){e.classList.add("loaded"),r.style.width="100%",setTimeout((function(){r.style.opacity="0"}),200)})),requestAnimationFrame((function(){r.style.width="90%"})),e.addEventListener("error",(function(){t._handleImageError(e,r)})))}},{key:"_handleImageError",value:(f=c(a().mark((function t(e,r){var n,o,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.dataset.src,t.next=4,caches.open("restaurant-images");case 4:return o=t.sent,t.next=7,o.match(n);case 7:if(!(i=t.sent)){t.next=16;break}return t.next=11,i.blob();case 11:c=t.sent,e.src=URL.createObjectURL(c),e.classList.add("loaded"),t.next=18;break;case 16:e.src="/images/placeholder-restaurant.jpg",e.classList.add("error");case 18:t.next=25;break;case 20:t.prev=20,t.t0=t.catch(0),e.src="/images/placeholder-restaurant.jpg",e.classList.add("error");case 25:return t.prev=25,r&&(r.style.opacity="0"),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[0,20,25,28]])}))),function(t,e){return f.apply(this,arguments)})},{key:"_initFavoriteButton",value:(s=c(a().mark((function t(){var e,r=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.querySelector(".favorite-button")){t.next=3;break}return t.abrupt("return");case 3:e.addEventListener("click",function(){var t=c(a().mark((function t(o){var i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.preventDefault(),o.stopPropagation(),t.prev=2,i=e.dataset.id,t.next=6,n.A.getRestaurant(i);case 6:if(!t.sent){t.next=13;break}return t.next=10,n.A.deleteRestaurant(i);case 10:r._showFeedback("Removed from Favorites","success"),t.next=16;break;case 13:return t.next=15,n.A.putRestaurant(r._restaurant);case 15:r._showFeedback("Added to Favorites","success");case 16:r.render(),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(2),r._showFeedback("Unable to update favorite status","error");case 23:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"_showFeedback",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";Swal.fire({icon:e,title:"success"===e?t:"Error",html:"<strong>".concat(this._restaurant.name,"</strong> ").concat(t.toLowerCase()),position:"center",timer:2e3,showConfirmButton:!1,background:"#fff",customClass:{popup:"swal-custom",title:"swal-title",htmlContainer:"swal-text"}})}},{key:"_renderError",value:function(){this.innerHTML='\n      <article class="restaurant-item error">\n        <div class="error-message">\n          <p>Failed to load restaurant data</p>\n          <button onclick="location.reload()" class="retry-button">\n            Try Again\n          </button>\n        </div>\n      </article>\n    '}}],o&&u(r.prototype,o),i&&u(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o,i,s,f,h,d}(f(HTMLElement));customElements.define("restaurant-item",v);var y=r(2574),g=r(9926),m={BASE_URL:"https://restaurant-api.dicoding.dev",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/medium/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"RestaurantCatalogue-V1"};r(6879),r(2552);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function b(){b=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),c=new T(n||[]);return o(i,"_invoke",{value:S(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var L={};s(L,i,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(A([])));_&&_!==r&&n.call(_,i)&&(L=_);var k=x.prototype=g.prototype=Object.create(L);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==w(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,r,n){var o=h;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:p,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(w(e)+" is not iterable")}return m.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},O(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(k),s(k,u,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function x(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var L=new y.A({button:document.querySelector("#hamburger"),drawer:document.querySelector("#drawer"),content:document.querySelector("#maincontent")}),E=function(){var t,e=(t=b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L.renderPage(),t.next=3,(0,g.A)();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){x(a,n,o,i,c,"next",t)}function c(t){x(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();window.addEventListener("hashchange",(function(){L.renderPage()})),window.addEventListener("load",E),window.CONFIG=m}}]);
//# sourceMappingURL=app~49ea73a0.bundle.js.map