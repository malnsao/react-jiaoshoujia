/**
 * 路由调用的使用方式
 */

import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import RouteConfig from './config.js'; // 引入路由的配置信息
import RouteView from './routeView,js'; // 引入路由的逻辑实现
class App extends Component {
    render() {
        return <div className="wrapper">
            <Router>
                //传入默认路由配置文件
                <RouteView defaultConfig={RouteConfig}></RouteView>
            </Router>
        </div>
    }
}
export default App;


/**
 * 二级路由的调用
 */

//  import React, { Component } from 'react';
// import RouteView from './../../router/RouteView';
// import SiderMenu from './../../components/SiderMenu/index';
// import "./index.css"
// class Home extends Component {
//     render() {
//         //接收路由配置
//         const { routers } = this.props
//         return <div className="home-wrapper">
//             <div className="left">
//                 <div className="user">
//                     <div className="user-img">
//                     </div>
//                     <p className="mt12">你瞅啥</p>
//                     <b className="mt12 radius"></b>
//                 </div>
//                 //侧边栏的组件
//                 <SiderMenu style={{ background:"#2F3B4C"}} {...this.props}></SiderMenu>
//             <div className="ri
//             </div>ght">
//                 //传入RouteView当中进行处理
//                 <RouteView routers={routers}></RouteView>
//             </div>
//         </div>
//     }

// }
// export default Home;