/**
 *  该文件是对路由的配置
 */

//组件的引入
import asyncComponent from '@/util/asyncComponent'

const RouteConfig = [
    {
        //一级路由的重定向
        path: "/",
        redirect: "/bookMark"
    },
    {
        //title 
        title: "bookMark",
        //路由地址
        path: "/bookMark",
        //关键字重定向
        defaultRedirect: true,
        //组件
        component: asyncComponent(() => import("@/routers/bookMark")),
        //二级路由
        children: [
            {
                key: "1",
                defaultRedirect: true,
                title: "file",
                path: "/bookMark/file",
                component: asyncComponent(() => import("@/routers/bookMark/file")),
                children: [
                    {
                        key: "1",
                        defaultRedirect: true,
                        title: "name",
                        path: "/bookMark/file/name",
                        component: asyncComponent(() => import("@/routers/bookMark/file/name")),
                    }
                ]
            }
        ]
    },

]

export default RouteConfig;