(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(54),c=(r=u)&&r.__esModule?r:{default:r};function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e){return function(t){function n(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,u=Array(o),c=0;c<o;c++)u[c]=arguments[c];return t=r=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),r.state={Component:null},a(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"componentWillMount",value:function(){var t=this;this.hasLoadedComponent()||e().then((function(e){return e.default})).then((function(e){t.setState({Component:e})})).catch((function(e){throw console.error("Cannot load component in <AsyncComponent />"),e}))}},{key:"hasLoadedComponent",value:function(){return null!==this.state.Component}},{key:"render",value:function(){var e=this.state.Component;return e?c.default.createElement(e,this.props):null}}]),n}(c.default.Component)}},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INCUREMENT="INCUREMENT",t.DECUREMENT="DECUREMENT",t.INCUREMENTASYNC="INCUREMENTASYNC",t.BALL="BALL"},138:function(e,t,n){e.exports=n(29)(885)},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return fetch(e,t).then((function(e){return e.json()})).then((function(e){return console.log("object",e),e})).catch((function(){return response.text()}))}},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(n(54)),u=n(97),c=a(n(136));function a(e){return e&&e.__esModule?e:{default:e}}var i=[{path:"/",ComponentName:(0,c.default)((function(){return new Promise((function(e){n.e(8).then(function(t){e(n(365))}.bind(null,n)).catch(n.oe)}))})),exact:!0},{path:"/bookmark",ComponentName:(0,c.default)((function(){return new Promise((function(e){n.e(7).then(function(t){e(n(366))}.bind(null,n)).catch(n.oe)}))})),routes:[{path:"/file",ComponentName:(0,c.default)((function(){return new Promise((function(e){n.e(1).then(function(t){e(n(139))}.bind(null,n)).catch(n.oe)}))}))}]},{path:"/file",ComponentName:(0,c.default)((function(){return new Promise((function(e){n.e(1).then(function(t){e(n(139))}.bind(null,n)).catch(n.oe)}))}))}].map((function(e,t){var n=e.path,c=e.ComponentName,a=e.exact,i=void 0===a||a,l=e.routes,f=void 0===l?[]:l;return o.default.createElement(u.Route,{exact:i,key:t,path:n,render:function(e){return o.default.createElement(c,r({},e,{routes:f}))}})}));t.default=i},142:function(e,t,n){n(99),e.exports=n(345)},143:function(e,t,n){e.exports=n(29)(46)},29:function(e,t){e.exports=react},345:function(e,t,n){"use strict";n(99);var r=i(n(54)),o=i(n(346));n(347);var u=i(n(348)),c=i(n(351)),a=(n(97),i(n(141)),n(138));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(){o.default.render(r.default.createElement(a.Provider,{store:c.default},r.default.createElement(u.default,null)),document.getElementById("root"))};l(),c.default.subscribe(l)},346:function(e,t,n){e.exports=n(29)(10)},347:function(e,t,n){},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(54)),u=l(n(136)),c=n(349),a=n(138),i=l(n(350));function l(e){return e&&e.__esModule?e:{default:e}}var f=(0,u.default)((function(){return new Promise((function(e){Promise.all([n.e(0),n.e(4)]).then(function(t){e(n(367))}.bind(null,n)).catch(n.oe)}))})),s=(0,u.default)((function(){return new Promise((function(e){n.e(6).then(function(t){e(n(372))}.bind(null,n)).catch(n.oe)}))})),d=(0,u.default)((function(){return new Promise((function(e){Promise.all([n.e(0),n.e(5)]).then(function(t){e(n(373))}.bind(null,n)).catch(n.oe)}))})),p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.increment=function(){var e=1*n.select.value;n.props.incrementCreate(e)},n.decrement=function(){var e=1*n.select.value;n.props.decrementCreate(e)},n.incrementAsync=function(){var e=1*n.select.value;setTimeout((function(){n.props.incrementCreate(e)}),1e3)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.basketAsync()}},{key:"render",value:function(){var e=this,t=this.props.obj,n=t.counter,r=t.getData;return console.log("getData",r),o.default.createElement("div",null,o.default.createElement(f,null),o.default.createElement(s,null),o.default.createElement(d,null),o.default.createElement("div",null,o.default.createElement("h4",null,"点击了",n,"次"),o.default.createElement("br",null),o.default.createElement("select",{ref:function(t){return e.select=t}},o.default.createElement("option",{value:"1"},"1"),o.default.createElement("option",{value:"2"},"2"),o.default.createElement("option",{value:"3"},"3"))," ",o.default.createElement("button",{onClick:this.increment},"点击增加")," ",o.default.createElement("button",{onClick:this.decrement},"点击减少")," ",o.default.createElement("button",{onClick:this.incrementAsync},"延时1秒增加"),o.default.createElement("div",null,o.default.createElement("h4",null,"模拟接口数据"),o.default.createElement("div",null,r.name))))}}]),t}(o.default.PureComponent);p.propTypes={obj:i.default.object.isRequired,incrementCreate:i.default.func.isRequired,decrementCreate:i.default.func.isRequired,incrementCreatorAsync:i.default.func.isRequired},t.default=(0,a.connect)((function(e){return{obj:e}}),{incrementCreate:c.incrementCreate,decrementCreate:c.decrementCreate,incrementCreatorAsync:c.incrementCreatorAsync,basketAsync:c.basketAsync})(p)},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.basketAsync=t.incrementCreatorAsync=t.decrementCreate=t.incrementCreate=void 0;var r,o=n(137),u=n(140),c=(r=u)&&r.__esModule?r:{default:r};var a=t.incrementCreate=function(e){return{type:o.INCUREMENT,number:e}};t.decrementCreate=function(e){return{type:o.DECUREMENT,number:e}},t.incrementCreatorAsync=function(e){return function(t){setTimeout((function(){t(a(e))}),1e3)}},t.basketAsync=function(){return function(e){return e((t=(0,c.default)("/api/profile"),{type:o.BALL,arr:t}));var t}}},350:function(e,t,n){e.exports=n(29)(1)},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96),o=n(352),u=a(n(353)),c=a(n(354));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.createStore)(c.default,(0,o.composeWithDevTools)((0,r.applyMiddleware)(u.default)));console.log(i),t.default=i},353:function(e,t,n){e.exports=n(29)(887)},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getData=a;var r=n(96),o=n(137),u=5;var c=[];function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case o.BALL:return t.arr;default:return e}}t.default=(0,r.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case o.INCUREMENT:return e+t.number;case o.DECUREMENT:return e-t.number;default:return e}},getData:a})},363:function(e,t){e.exports=antd},54:function(e,t,n){e.exports=n(29)(0)},96:function(e,t,n){e.exports=n(29)(373)},97:function(e,t,n){e.exports=n(29)(882)}},[[142,3,0]]]);