
import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '@/util/asyncComponent'

let routes = [
    {
        path: '/',//首页默认加载的页面
        ComponentName: asyncComponent(() => import(/* webpackChunkName: "albumPhoto" */"@/routers/albumPhoto")),
        exact: true, //是否为严格模式
    },
    {
        path: '/bookmark',//首页默认加载的页面
        ComponentName: asyncComponent(() => import("@/routers/bookMark")),
        routes:[
            {
                path: '/file',//首页默认加载的页面
                ComponentName: asyncComponent(() => import("@/routers/bookMark/file")),
            }
        ]
    },
    {
        path: '/file',//首页默认加载的页面
        ComponentName: asyncComponent(() => import("@/routers/bookMark/file")),
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















// const fs = require('fs');
// const path = require('path');

// //解析需要遍历的文件夹，我这以E盘根目录为例
// const filePath = path.join(__dirname, 'routes');

// //调用文件遍历方法
// fileDisplay(filePath);

// /**
//  * 文件遍历方法
//  * @param filePath 需要遍历的文件路径
//  */
// function fileDisplay(filePath) {
//     //根据文件路径读取文件，返回文件列表
//     fs.readdir(filePath, function (err, files) {
//         if (err) {
//             console.warn(err)
//         } else {
//             //遍历读取到的文件列表
//             files.forEach(function (filename) {
//                 //获取当前文件的绝对路径
//                 var filedir = path.join(filePath, filename);
//                 //根据文件路径获取文件信息，返回一个fs.Stats对象
//                 fs.stat(filedir, function (eror, stats) {
//                     if (eror) {
//                         console.warn('获取文件stats失败');
//                     } else {
//                         var isFile = stats.isFile();//是文件
//                         var isDir = stats.isDirectory();//是文件夹
//                         if (isFile) {
//                             console.log(filedir);
//                         }
//                         if (isDir) {
//                             fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
//                         }
//                     }
//                 })
//             });
//         }
//     });
// }

