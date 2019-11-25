import React from 'react';
import { Route } from 'react-router-dom';

import asyncComponent from './asyncComponent'

let routes = [
    {
        path: '/',//首页默认加载的页面
        ComponentName: asyncComponent(() => import(/* webpackChunkName: "albumPhoto" */"@/routes/albumPhoto/index")),
        exact: true, //是否为严格模式
    },
    {
        path: '/bookmark',//首页默认加载的页面
        ComponentName: asyncComponent(() => import("@/routes/bookMark/index")),
        routes:[
            
            
        ]
    },
    {
        path: '/file',//首页默认加载的页面
        ComponentName: asyncComponent(() => import("@/routes/bookMark/file/index")),
    }
    
];

const routeConfig = routes.map(
    ({ path, ComponentName, exact = true, routes = [] }, key) => (
        <Route
            exact={exact}
            key={key}
            path={path}
            render={props => (
                //主要是为了传递嵌套路由到子组件 
                //类似于 <User {...props} routes={routes} />
                <ComponentName {...props} routes={routes} />
            )}
        />
    )
)
export default routeConfig;