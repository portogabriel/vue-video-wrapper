!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("tty"),require("util"),require("fs"),require("net")):"function"==typeof define&&define.amd?define(["exports","tty","util","fs","net"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).vueVideoWrapper={},e.tty,e.util,e.fs,e.net)}(this,(function(e,t,n,r,o){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(t),u=i(n),s=i(r),l=i(o);
/*! @vimeo/player v2.12.2 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function h(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function p(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function y(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function v(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(y(r))return"https://vimeo.com/".concat(r);if(v(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var g=void 0!==Array.prototype.indexOf,w="undefined"!=typeof window&&void 0!==window.postMessage;if(!(d||g&&w))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*!
   * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(o(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(o(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(o(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(o(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:b);var E=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){
/*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
  */
var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function l(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var r=new d(n);try{t.call(e,(function(){l.apply(r,arguments)}),(function(){c.apply(r,arguments)}))}catch(e){c.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(e){c.call(new d(n),e)}}}function c(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){l.call(t,e)}),(function(e){c.call(t,e)}))}catch(e){c.call(t,e)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var y=e({},"constructor",p,!1);return p.prototype=y,e(y,"__NPO__",0,!1),e(p,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),p},(n=b)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])})),k=new WeakMap;function P(e,t,n){var r=k.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),k.set(e.element,r)}function T(e,t){return(k.get(e.element)||{})[t]||[]}function _(e,t,n){var r=k.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],k.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),k.set(e.element,r),r[t]&&0===r[t].length}function S(e,t){var n=k.get(e);k.set(t,n),k.delete(e)}var O=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return O.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function C(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!v(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return C(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}function M(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function A(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function I(e,t){var n,r=[];if((t=M(t)).event){if("error"===t.event)T(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),_(e,t.data.method,n)}));r=T(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=T(e,t);if(n.length<1)return!1;var r=n.shift();return _(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var F=new WeakMap,V=new WeakMap,N={},z=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!p(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!v(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(F.has(t))return F.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new E((function(e,o){if(n._onMessage=function(t){if(v(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=M(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();I(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=x(t,r);j(m(i),i,t).then((function(e){var r=C(e,t);return n.element=r,n._originalElement=t,S(t,r),F.set(n.element,n),e})).catch(o)}}));if(V.set(this,i),F.set(this.element,this),"IFRAME"===this.element.nodeName&&A(this,"ping"),N.isEnabled){var a=function(){return N.exit()};N.on("fullscreenchange",(function(){N.isFullscreen?P(n,"event:exitFullscreen",a):_(n,"event:exitFullscreen",a),n.ready().then((function(){A(n,"fullscreenchange",N.isFullscreen)}))}))}return this}var t,n,r;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new E((function(r,o){return t.ready().then((function(){P(t,e,{resolve:r,reject:o}),A(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new E((function(n,r){return e=h(e,"get"),t.ready().then((function(){P(t,e,{resolve:n,reject:r}),A(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new E((function(r,o){if(e=h(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){P(n,e,{resolve:r,reject:o}),A(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===T(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),P(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");_(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=V.get(this)||new E((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return E.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return N.isEnabled?N.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return N.isEnabled?N.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return N.isEnabled?E.resolve(N.isFullscreen):this.get("fullscreen")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new E((function(t){V.delete(e),F.delete(e.element),e._originalElement&&(F.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),e._window.removeEventListener("message",e._onMessage),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&f(t.prototype,n),r&&f(t,r),e}();d||(N=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=x(e);j(m(t),t,e).then((function(t){return C(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(v(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}())
/*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */;var R=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;function U(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var q=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=arguments,i=U(e),a=1;a<arguments.length;a++){for(var u in n=Object(o[a]))D.call(n,u)&&(i[u]=n[u]);if(R){r=R(n);for(var s=0;s<r.length;s++)L.call(n,r[s])&&(i[r[s]]=n[r[s]])}}return i},B=["play","pause","ended","timeupdate","progress","seeked","texttrackchange","cuechange","cuepoint","volumechange","error","loaded"],W=0,Y={name:"VimeoPlayer",props:{videoId:{type:Number,required:!0},playerHeight:{type:[String,Number],default:320},playerWidth:{type:[String,Number],default:640},options:{type:Object,default:function(){return{}}},videoUrl:{type:String,default:void 0},loop:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},controls:{type:Boolean,default:!0}},methods:{update:function(e){return this.player.loadVideo(e)},play:function(){return this.player.play()},pause:function(){return this.player.pause()},mute:function(){return this.player.setVolume(0)},unmute:function(e){return void 0===e&&(e=.5),this.player.setVolume(e)},emitVueEvent:function(e){var t=this;this.player.on(e,(function(n){t.$emit(e,n,t.player)}))},setEvents:function(){var e=this;this.player.ready().then((function(){this.$emit("ready",this.player)})).catch((function(t){e.$emit("error",t,e.player)})),B.forEach((function(t){return e.emitVueEvent.call(e,t)}))}},data:function(){return{htmlId:"embed-vimeo-video-"+(W+=1),player:null}},render:function(e){return e("div",{attrs:{id:this.htmlId}})},mounted:function(){var e={id:this.videoId,width:this.playerWidth,height:this.playerHeight,loop:this.loop,autoplay:this.autoplay,controls:this.controls};this.videoUrl&&(e.url=this.videoUrl),this.player=new z(this.htmlId,q(e,this.options)),this.setEvents()},watch:{videoId:"update"},beforeDestroy:function(){this.player.unload()}};function $(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function G(e,t){return e(t={exports:{}},t.exports),t.exports}var H=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},Q=function(e,t,n){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof t&&(n=t,t={}),t=t||{},n=n||function(){},o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async=!("async"in t)||!!t.async,o.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(o,t.attrs),t.text&&(o.text=""+t.text),("onload"in o?J:X)(o,n),o.onload||J(o,n),r.appendChild(o)};function J(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function X(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}var Z=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=Q)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,r.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),t(window.YT)}}}))},e.exports=t.default}));$(Z);var K=1e3,ee=60*K,te=60*ee,ne=24*te,re=365.25*ne,oe=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*re;case"days":case"day":case"d":return n*ne;case"hours":case"hour":case"hrs":case"hr":case"h":return n*te;case"minutes":case"minute":case"mins":case"min":case"m":return n*ee;case"seconds":case"second":case"secs":case"sec":case"s":return n*K;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(e);if("number"===n&&!1===isNaN(e))return t.long?function(e){return ie(e,ne,"day")||ie(e,te,"hour")||ie(e,ee,"minute")||ie(e,K,"second")||e+" ms"}(e):function(e){if(e>=ne)return Math.round(e/ne)+"d";if(e>=te)return Math.round(e/te)+"h";if(e>=ee)return Math.round(e/ee)+"m";if(e>=K)return Math.round(e/K)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function ie(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var ae=G((function(e,t){var n;function r(e){function r(){var e=arguments;if(r.enabled){var o=r,i=+new Date,a=i-(n||i);o.diff=a,o.prev=n,o.curr=i,n=i;for(var u=new Array(arguments.length),s=0;s<u.length;s++)u[s]=e[s];u[0]=t.coerce(u[0]),"string"!=typeof u[0]&&u.unshift("%O");var l=0;u[0]=u[0].replace(/%([a-zA-Z%])/g,(function(e,n){if("%%"===e)return e;l++;var r=t.formatters[n];if("function"==typeof r){var i=u[l];e=r.call(o,i),u.splice(l,1),l--}return e})),t.formatArgs.call(o,u);var c=r.log||t.log||console.log.bind(console);c.apply(o,u)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=r.debug=r.default=r).coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=oe,t.names=[],t.skips=[],t.formatters={}})),ue=(ae.coerce,ae.disable,ae.enable,ae.enabled,ae.humanize,ae.names,ae.skips,ae.formatters,G((function(e,t){function n(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=ae).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))})),e.splice(i,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(n())}))),se=(ue.log,ue.formatArgs,ue.save,ue.load,ue.useColors,ue.storage,ue.colors,G((function(e,t){(t=e.exports=ae).init=function(e){e.inspectOpts={};for(var n=Object.keys(t.inspectOpts),r=0;r<n.length;r++)e.inspectOpts[n[r]]=t.inspectOpts[n[r]]},t.log=function(){return r.write(u.default.format.apply(u.default,arguments)+"\n")},t.formatArgs=function(e){var n=this.namespace;if(this.useColors){var r=this.color,o="  [3"+r+";1m"+n+" [0m";e[0]=o+e[0].split("\n").join("\n"+o),e.push("[3"+r+"m+"+t.humanize(this.diff)+"[0m")}else e[0]=(new Date).toUTCString()+" "+n+" "+e[0]},t.save=function(e){null==e?delete process.env.DEBUG:process.env.DEBUG=e},t.load=o,t.useColors=function(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):a.default.isatty(n)},t.colors=[6,2,3,4,5,1],t.inspectOpts=Object.keys(process.env).filter((function(e){return/^debug_/i.test(e)})).reduce((function(e,t){var n=t.substring(6).toLowerCase().replace(/_([a-z])/g,(function(e,t){return t.toUpperCase()})),r=process.env[t];return r=!!/^(yes|on|true|enabled)$/i.test(r)||!/^(no|off|false|disabled)$/i.test(r)&&("null"===r?null:Number(r)),e[n]=r,e}),{});var n=parseInt(process.env.DEBUG_FD,10)||2;1!==n&&2!==n&&u.default.deprecate((function(){}),"except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();var r=1===n?process.stdout:2===n?process.stderr:function(e){var t;switch(process.binding("tty_wrap").guessHandleType(e)){case"TTY":(t=new a.default.WriteStream(e))._type="tty",t._handle&&t._handle.unref&&t._handle.unref();break;case"FILE":var n=s.default;(t=new n.SyncWriteStream(e,{autoClose:!1}))._type="fs";break;case"PIPE":case"TCP":var r=l.default;(t=new r.Socket({fd:e,readable:!1,writable:!0})).readable=!1,t.read=null,t._type="pipe",t._handle&&t._handle.unref&&t._handle.unref();break;default:throw new Error("Implement me. Unknown stream file type!")}return t.fd=e,t._isStdio=!0,t}(n);function o(){return process.env.DEBUG}t.formatters.o=function(e){return this.inspectOpts.colors=this.useColors,u.default.inspect(e,this.inspectOpts).split("\n").map((function(e){return e.trim()})).join(" ")},t.formatters.O=function(e){return this.inspectOpts.colors=this.useColors,u.default.inspect(e,this.inspectOpts)},t.enable(o())}))),le=(se.init,se.log,se.formatArgs,se.save,se.load,se.useColors,se.colors,se.inspectOpts,G((function(e){"undefined"!=typeof process&&"renderer"===process.type?e.exports=ue:e.exports=se}))),ce=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default}));$(ce);var fe=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default}));$(fe);var de=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default}));$(de);var he=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=de)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default}));$(he);var pe=G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=a(le),r=a(ce),o=a(fe),i=a(he);function a(e){return e&&e.__esModule?e:{default:e}}var u=(0,n.default)("youtube-player"),s={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){u('event "%s"',r,t),e.trigger(n,t)}},r=!0,i=!1,a=void 0;try{for(var s,l=o.default[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){n(s.value)}}catch(e){i=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw a}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},o=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments,n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=t[a];return e.then((function(e){var t=i.default[r],n=e.getPlayerState(),a=e[r].apply(e,o);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(n)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),i=void 0;"number"==typeof t.timeout&&(i=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(i),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=t[i];return e.then((function(e){return e[r].apply(e,o)}))}},a=!0,u=!1,s=void 0;try{for(var l,c=r.default[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var f=l.value;o(f)}}catch(e){u=!0,s=e}finally{try{!a&&c.return&&c.return()}finally{if(u)throw s}}return n}};t.default=s,e.exports=t.default}));$(pe);var ye=$(G((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=a(H),o=a(Z),i=a(pe);function a(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,r.default)();if(u||(u=(0,o.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var l=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):u.then((function(n){var o=new n.Player(e,t);return s.on("ready",(function(){r(o)})),null}))})),c=i.default.promisifyPlayer(l,a);return c.on=s.on,c.off=s.off,c},e.exports=t.default}))),ve=0,me=[{name:"YOUTUBE",component:{name:"YoutubePlayer",props:{videoId:String,playerVars:{type:Object,default:function(){return{}}},height:{type:[Number,String],default:360},width:{type:[Number,String],default:640},resize:{type:Boolean,default:!1},resizeDelay:{type:Number,default:100},nocookie:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!1}},data:function(){var e;return ve+=1,{player:{},events:(e={},e[-1]="unstarted",e[1]="play",e[2]="pause",e[0]="ended",e[3]="buffering",e[5]="cued",e),resizeTimeout:null,htmlId:"embed-youtube-video-"+ve}},computed:{aspectRatio:function(){return this.width/this.height}},methods:{playerReady:function(e){this.$emit("ready",e.target)},playerStateChange:function(e){null!==e.data&&-1!==e.data&&this.$emit(this.events[e.data],e.target)},playerError:function(e){this.$emit("error",e.target)},updatePlayer:function(e){e?1!==this.playerVars.autoplay?this.player.cueVideoById({videoId:e}):this.player.loadVideoById({videoId:e}):this.player.stopVideo()},resizeProportionally:function(){var e=this;this.player.getIframe().then((function(t){var n=e.fitParent?t.parentElement.offsetWidth:t.offsetWidth,r=n/e.aspectRatio;e.player.setSize(n,r)}))},onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.resizeProportionally,this.resizeDelay)}},watch:{videoId:"updatePlayer",resize:function(e){e?(window.addEventListener("resize",this.onResize),this.resizeProportionally()):(window.removeEventListener("resize",this.onResize),this.player.setSize(this.width,this.height))},width:function(e){this.player.setSize(e,this.height)},height:function(e){this.player.setSize(this.width,e)}},beforeDestroy:function(){null!==this.player&&this.player.destroy&&(this.player.destroy(),delete this.player),this.resize&&window.removeEventListener("resize",this.onResize)},mounted:function(){window.YTConfig={host:"https://www.youtube.com/iframe_api"};var e=this.nocookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";this.player=new ye(this.$el,{host:e,width:this.width,height:this.height,videoId:this.videoId,playerVars:this.playerVars}),this.player.on("ready",this.playerReady),this.player.on("stateChange",this.playerStateChange),this.player.on("error",this.playerError),this.resize&&window.addEventListener("resize",this.onResize),this.fitParent&&this.resizeProportionally()},render:function(e){return e("div",{attrs:{id:this.htmlId}})}}},{name:"VIMEO",component:Y}],ge={functional:!0,props:{player:{type:String,required:!0,validator:function(e){return-1!==me.map((function(e){return e.name})).indexOf(e.toUpperCase())}},videoId:{type:[String,Number],required:!0}},render:function(e,t){var n=t.props,r=t.listeners,o=me.find((function(e){return e.name==n.player.toUpperCase()}));if(o)return e(o.component,{props:{videoId:n.videoId},on:r})}};function we(e){we.installed||(we.installed=!0,e.component("v-video-wrapper",ge))}var be={install:we},Ee=null;"undefined"!=typeof window?Ee=window.Vue:"undefined"!=typeof global&&(Ee=global.vue),Ee&&Ee.use(be),ge.install=we,e.default=ge,Object.defineProperty(e,"__esModule",{value:!0})}));
