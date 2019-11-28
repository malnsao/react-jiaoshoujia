import React, { PureComponent } from 'react';
// import RouterView from '@/routers/routerView'; // 引入路由的逻辑实现

// import RouterView from '@/util/routerView'; // 引入路由的逻辑实现

import RouterView from '@/router'; // 引入路由的逻辑实现

class File extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { routers } = this.props
        return (
            <div>
                二级路由
                {/* <h3>{match.params.id}</h3> */}
                <a href="#/bookMark/file/name">跳</a>
                <RouterView routers={routers}></RouterView>
            </div>
        )
    }
}

export default File