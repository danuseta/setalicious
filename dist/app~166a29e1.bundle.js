/*! For license information please see app~166a29e1.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[109],{2451:function(t,e,r){r(2675),r(9463),r(6412),r(2259),r(8125),r(8706),r(2008),r(4423),r(3792),r(8598),r(2062),r(4782),r(2010),r(4731),r(479),r(875),r(287),r(6099),r(3362),r(7495),r(1415),r(1699),r(7764),r(1761),r(5746),r(2762),r(3500),r(2953),r(3296),r(7208),r(8408);var n=r(449);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new F(n||[]);return i(a,"_invoke",{value:O(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};f(L,s,(function(){return this}));var _=Object.getPrototypeOf,k=_&&_(_(P([])));k&&k!==r&&n.call(k,s)&&(L=k);var E=x.prototype=w.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function r(a,i,c,s){var u=p(t[a],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=N(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=x,i(E,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(R.prototype),f(R.prototype,u,(function(){return this})),e.AsyncIterator=R,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new R(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(E),f(E,l,"Generator"),f(E,s,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))}}var s={render:function(){var t=this;return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div class="content">\n        <h1 class="content__heading">Explore Restaurants</h1>\n        <div class="search-container">\n          <form id="searchForm" class="search-form">\n            <div class="search-input-container">\n              <input \n                type="search" \n                id="searchInput" \n                class="search-input" \n                placeholder="Search restaurants..."\n                aria-label="Search restaurants"\n                value="'.concat(t._getSearchQueryFromURL(),'"\n              >\n              <button type="submit" class="search-button" aria-label="Search">\n                <i class="fa fa-search"></i>\n              </button>\n            </div>\n          </form>\n        </div>\n        <div id="restaurants" class="restaurant-list">\n          ').concat(t._generateSkeletons(),'\n        </div>\n        <div id="no-results" class="no-results" style="display: none">\n          <p>No restaurants found matching your search.</p>\n          <button class="all-restaurants-button">\n            <i class="fa fa-utensils"></i>\n            Show All Restaurants\n          </button>\n        </div>\n      </div>\n    '));case 1:case"end":return e.stop()}}),e)})))()},_getSearchQueryFromURL:function(){try{return new URLSearchParams(window.location.search).get("q")||""}catch(t){return""}},_generateSkeletons:function(){for(var t="",e=0;e<6;e++)t+='\n        <div class="restaurant-item skeleton">\n          <div class="restaurant-image-container">\n            <div class="skeleton-img"></div>\n          </div>\n          <div class="restaurant-info">\n            <div class="skeleton-text restaurant-name-skeleton"></div>\n            <div class="restaurant-meta">\n              <div class="skeleton-text restaurant-city-skeleton"></div>\n              <div class="skeleton-text restaurant-rating-skeleton"></div>\n            </div>\n            <div class="skeleton-text restaurant-description-skeleton"></div>\n            <div class="skeleton-text restaurant-description-skeleton"></div>\n            <div class="restaurant-actions">\n              <div class="skeleton-text view-detail-skeleton"></div>\n            </div>\n          </div>\n        </div>\n      ';return t},afterRender:function(){var t=this;return c(a().mark((function e(){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={restaurantsContainer:document.querySelector("#restaurants"),searchForm:document.querySelector("#searchForm"),searchInput:document.querySelector("#searchInput"),noResults:document.querySelector("#no-results"),loadingIndicator:document.querySelector(".loading-indicator"),showAllButton:document.querySelector(".all-restaurants-button")},e.prev=1,e.next=4,(0,n.YG)();case 4:if((0,n.Rm)(),!(o=t._getSearchQueryFromURL())){e.next=11;break}return e.next=9,t._performSearch(o,r);case 9:e.next=13;break;case 11:return e.next=13,t._loadAllRestaurants(r);case 13:r.showAllButton&&r.showAllButton.addEventListener("click",c(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.searchInput&&(r.searchInput.value=""),(n=new URL(window.location)).searchParams.delete("q"),window.history.pushState({},"",n),e.next=6,t._loadAllRestaurants(r);case 6:case"end":return e.stop()}}),e)})))),r.searchForm.addEventListener("submit",function(){var e=c(a().mark((function e(n){var o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o=r.searchInput.value.trim(),i=new URL(window.location),o?i.searchParams.set("q",o):i.searchParams.delete("q"),window.history.pushState({},"",i),!o){e.next=10;break}return e.next=8,t._performSearch(o,r);case 8:e.next=12;break;case 10:return e.next=12,t._loadAllRestaurants(r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),t.renderError(e.t0,r.restaurantsContainer);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))()},_loadAllRestaurants:function(t){var e=this;return c(a().mark((function r(){var n,o,i,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.restaurantsContainer,o=t.noResults,r.prev=1,r.next=4,e._fetchRestaurantsFromCache();case 4:return(i=r.sent)&&(e.renderRestaurants(i,n),e._showResults(n,o),e._initializeLazyLoading()),r.next=8,e._fetchRestaurantsFromNetwork();case 8:(c=r.sent)&&(!i||JSON.stringify(c)!==JSON.stringify(i))&&(e.renderRestaurants(c,n),e._showResults(n,o),e._initializeLazyLoading()),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(1),e.renderError(r.t0,n);case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},_fetchRestaurantsFromNetwork:function(){return c(a().mark((function t(){var e,r,n,o,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(CONFIG.BASE_URL,"/list"));case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,n=r.restaurants,o=5,i=0;case 10:if(!(i<n.length)){t.next=17;break}return c=n.slice(i,i+o),t.next=14,Promise.all(c.map((function(t){return fetch("".concat(CONFIG.BASE_URL,"/detail/").concat(t.id)).then((function(t){return t.json()})).then((function(e){"serviceWorker"in navigator&&caches.open("restaurant-details").then((function(r){return r.put("".concat(CONFIG.BASE_URL,"/detail/").concat(t.id),new Response(JSON.stringify(e)))}))})).catch((function(t){}))})));case 14:i+=o,t.next=10;break;case 17:return t.abrupt("return",n);case 20:return t.prev=20,t.t0=t.catch(0),t.abrupt("return",null);case 24:case"end":return t.stop()}}),t,null,[[0,20]])})))()},_fetchRestaurantsFromCache:function(){return c(a().mark((function t(){var e,r,n,o,i,s,u,l,f;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,caches.open("api-responses");case 3:return e=t.sent,t.next=6,e.match("".concat(CONFIG.BASE_URL,"/list"));case 6:if(!(r=t.sent)){t.next=13;break}return t.next=10,r.json();case 10:if(!((n=t.sent).restaurants&&n.restaurants.length>0)){t.next=13;break}return t.abrupt("return",n.restaurants);case 13:return t.next=15,caches.open("restaurant-details");case 15:return o=t.sent,t.next=18,o.keys();case 18:return i=t.sent,s=i.filter((function(t){return t.url.includes("/detail/")})),u=s.map(function(){var t=c(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.match(e);case 2:if(!(r=t.sent)){t.next=8;break}return t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n.restaurant);case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=23,Promise.all(u);case 23:return l=t.sent,f=l.filter(Boolean),t.abrupt("return",f.length>0?f:null);case 28:return t.prev=28,t.t0=t.catch(0),t.abrupt("return",null);case 32:case"end":return t.stop()}}),t,null,[[0,28]])})))()},_prefetchRestaurantDetailsAndImages:function(t){var e=this;return c(a().mark((function r(){var n,o,i,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null!=t&&t.length){r.next=2;break}return r.abrupt("return");case 2:n=5,o=new Set,i=0;case 5:if(!(i<t.length)){r.next=13;break}return(c=t.slice(i,i+n).filter((function(t){return!o.has(t.id)}))).forEach((function(t){return o.add(t.id)})),r.next=10,Promise.all(c.map((function(t){return e._optimizedImageLoading("".concat(CONFIG.BASE_IMAGE_URL).concat(t.pictureId)).catch((function(t){}))})));case 10:i+=n,r.next=5;break;case 13:case"end":return r.stop()}}),r)})))()},_initializeLazyLoading:function(){var t=this;if("IntersectionObserver"in window){var e=new IntersectionObserver((function(e,r){e.forEach((function(e){if(e.isIntersecting){var n=e.target;t._loadImage(n),r.unobserve(n)}}))}),{rootMargin:"50px"});document.querySelectorAll(".restaurant-item__thumbnail").forEach((function(t){return e.observe(t)}))}},_loadImage:function(t){var e=t.dataset.src;e&&(t.src=e)},_performSearch:function(t,e){var r=this;return c(a().mark((function n(){var o,i,c,s,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.restaurantsContainer,i=e.noResults,n.prev=1,o.innerHTML=r._generateSkeletons(),i&&(i.style.display="none"),n.next=6,r._fetchRestaurantsFromNetwork();case 6:if(c=n.sent){n.next=11;break}return n.next=10,r._fetchRestaurantsFromCache();case 10:c=n.sent;case 11:if(c){n.next=13;break}throw new Error("No restaurant data available");case 13:s=t.toLowerCase().split(" ").filter((function(t){return t.length>0})),(u=c.filter((function(t){var e=[t.name||"",t.city||""].join(" ").toLowerCase();return s.every((function(t){return e.includes(t)}))}))).length>0?(r.renderRestaurants(u,o),r._showResults(o,i),r._initializeLazyLoading()):r._showNoResults(o,i),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(1),r.renderError(n.t0,o);case 22:case"end":return n.stop()}}),n,null,[[1,18]])})))()},_showLoading:function(t,e,r){t&&t.classList.add("active"),e&&(e.style.display="none"),r&&(r.style.display="none")},_hideLoading:function(t){t&&t.classList.remove("active")},_showResults:function(t,e){t&&t.classList.remove("loading"),e&&(e.style.display="none")},_showNoResults:function(t,e){t&&(t.innerHTML=""),e&&(e.style.display="block")},renderRestaurants:function(t,e){e&&(e.innerHTML="",t.forEach((function(t){var r=document.createElement("restaurant-item");r.setAttribute("data-id",t.id),r.restaurant=t,e.appendChild(r)})))},renderError:function(t,e){e&&(e.innerHTML='\n      <div class="error">\n        <p>Error loading restaurants</p>\n        <p>'.concat(t.message||"Something went wrong",'</p>\n        <button onclick="window.location.reload()" class="retry-button">Try Again</button>\n      </div>\n    '))}};e.A=s},449:function(t,e,r){r.d(e,{Rm:function(){return h},YG:function(){return f},o2:function(){return c}});r(2675),r(9463),r(6412),r(2259),r(8125),r(8706),r(3792),r(4782),r(2010),r(4731),r(479),r(875),r(287),r(6099),r(3362),r(7764),r(3500),r(2953);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new F(n||[]);return i(a,"_invoke",{value:O(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};f(L,s,(function(){return this}));var _=Object.getPrototypeOf,k=_&&_(_(P([])));k&&k!==r&&a.call(k,s)&&(L=k);var E=x.prototype=w.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function r(o,i,c,s){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function O(e,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=N(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=x,i(E,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(R.prototype),f(R.prototype,u,(function(){return this})),e.AsyncIterator=R,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new R(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(E),f(E,l,"Generator"),f(E,s,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)}))}}var c=function(){return navigator.onLine?fetch("".concat("https://restaurant-api.dicoding.dev","/list"),{method:"HEAD"}).then((function(){return!0})).catch((function(){return!1})):Promise.resolve(!1)},s=!0,u=null,l=function(t){var e=document.createElement("div");e.className=t?"online-toast":"offline-toast",e.innerHTML='\n    <div class="'.concat(t?"online":"offline",'-toast-content">\n      <span>').concat(t?"✅ Connected":"⚠️ No Internet Connection","</span>\n      <p>").concat(t?"Internet connection restored":"You are working in offline mode","</p>\n    </div>\n  "),document.body.appendChild(e),setTimeout((function(){return e.remove()}),3e3)},f=function(){var t=i(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:if(e=t.sent,s&&!e||!s&&u!==e)try{"undefined"!=typeof Swal?Swal.fire({icon:e?"success":"warning",title:e?"Connected":"No Internet Connection",text:e?"Your internet connection has been restored.":"You are working in offline mode. Some features may be limited.",position:"top-end",timer:3e3,toast:!0,showConfirmButton:!1}):l(e)}catch(t){l(e)}return u=e,s=!1,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){f(),window.addEventListener("online",(function(){u=!1,s=!1,f()})),window.addEventListener("offline",(function(){u=!0,s=!1,f()})),setInterval(i(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:case"end":return t.stop()}}),t)}))),3e4)}}}]);
//# sourceMappingURL=app~166a29e1.bundle.js.map