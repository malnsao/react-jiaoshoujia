/**
 * 路由递归逻辑实现
 */
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
class routerView extends React.Component {

    render() {

        // props接收配置文件
        // routers 下一级路由的参数
        // defaultConfig默认传参

        const { routers, defaultConfig } = this.props



        // 这里判断【下一级路由的参数】是否有值 ? 【使用下一级路由的参数】 ： 【默认路由参数】

        let routerDate = routers ? routers : defaultConfig;

        //数据二次处理

        //筛除没有重定向的
        let routerDatepath = routerDate.filter((item) => {
            return !item.redirect
        })

        //筛选重定向
        let defualtRouter = routerDate.filter((item) => {
            return item.redirect
        })

        //重定向
        let defualtRedirect = defualtRouter.map((item, i) => {
            return <Redirect key={i} path={item.path} to={item.redirect}></Redirect>
        })
        return (<Switch>
            {
                routerDatepath && routerDatepath.map((item, index) => {
                    const Comp = item.component
                    // 一个大坑 要用render 不然用component会导致页面的回流
                    return <Route path={item.path} render={
                        //api 路由相关参数参数及其它
                        (api) => {
                            //动态的title
                            document.title = item.title || "路由配置"
                            //把下一级路由参数存入props中
                            return <Comp routers={item.children} {...api}></Comp>
                        }
                    } key={"key" + item.key}></Route>
                    //重定向
                }).concat(defualtRedirect)
            }
        </Switch>)
    }

}


export default routerView