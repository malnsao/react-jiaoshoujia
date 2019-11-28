import React from 'react';
import styles from './index.less'
import {
    BrowserRouter as Router,
    HashRouter
} from "react-router-dom";

import RouteConfig from '@/common/routeConfig'; // 引入路由的配置信息
import RouterView from '@/router'; // 引入路由的逻辑实现

class Content extends React.Component {
    render() {
        return (
            <section className={styles.div}>
                <HashRouter>
                    {/* //传入默认路由配置文件 */}
                    <RouterView defaultConfig={RouteConfig}></RouterView>
                </HashRouter>
            </section>

        )
    }
}
export default Content