(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{22:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(1)),r=c(n(36)),u=n(30),a=c(n(37));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o.default.createElement("section",{className:r.default.div},o.default.createElement(u.BrowserRouter,null,a.default))},t}(o.default.Component);t.default=i},30:function(e,t,n){e.exports=n(0)(692)},36:function(e,t,n){e.exports={div:"_2bqbreO9uzLeZMXMKOT3a0"}},37:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=c(n(1)),u=n(30),a=c(n(5));function c(e){return e&&e.__esModule?e:{default:e}}var i=[{path:"/",ComponentName:(0,a.default)((function(){return new Promise((function(e){n.e(6).then(function(t){e(n(31))}.bind(null,n)).catch(n.oe)}))})),exact:!0},{path:"/bookmark",ComponentName:(0,a.default)((function(){return new Promise((function(e){n.e(5).then(function(t){e(n(32))}.bind(null,n)).catch(n.oe)}))})),routes:[{path:"/file",ComponentName:(0,a.default)((function(){return new Promise((function(e){n.e(0).then(function(t){e(n(24))}.bind(null,n)).catch(n.oe)}))}))}]},{path:"/file",ComponentName:(0,a.default)((function(){return new Promise((function(e){n.e(0).then(function(t){e(n(24))}.bind(null,n)).catch(n.oe)}))}))}].map((function(e,t){var n=e.path,a=e.ComponentName,c=e.exact,i=void 0===c||c,f=e.routes,l=void 0===f?[]:f;return r.default.createElement(u.Route,{exact:i,key:t,path:n,render:function(e){return r.default.createElement(a,o({},e,{routes:l}))}})}));t.default=i}}]);