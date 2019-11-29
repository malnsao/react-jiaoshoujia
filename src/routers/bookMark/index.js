import React, { PureComponent } from 'react';

import styles from './index'

// import asyncComponent from '@/asyncComponent'

import { Route } from 'react-router-dom';

import File from './file/index'
// import RouterView from '@/routers/routerView'; // 引入路由的逻辑实现

// import RouterView from '@/util/routerView'; // 引入路由的逻辑实现
import RouterView from '@/router'; // 引入路由的逻辑实现



class BookMark extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('BookMark',this.props)
        const { routers } = this.props
        //接收路由配置
        return (
            <div>
                {this.props.match.url}
                <a href="#/bookMark/file">跳1111</a>
                {/* <Route path={`${this.props.match.url}/file`} component={File} /> */}
                <RouterView routers={routers}></RouterView>
            </div>
        )
    }
}

export default BookMark