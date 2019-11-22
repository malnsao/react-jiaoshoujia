import React from 'react';
import { Route } from 'react-router-dom';

const asyncComponent = loadComponent => (

    class AsyncComponent extends React.Component {
        constructor(...args) {
            super(...args);

            this.state = {
                Component: null,
            };

            this.hasLoadedComponent = this.hasLoadedComponent.bind(this);
        }
        componentWillMount() {
            if (this.hasLoadedComponent()) {
                return;
            }

            loadComponent()
                .then(module => module.default ? module.default : module)
                .then(Component => {
                    this.setState({
                        Component
                    });
                })
                .catch(error => {
                    /*eslint-disable*/
                    console.error('cannot load Component in <AsyncComponent>');
                    /*eslint-enable*/
                    throw error;
                })
        }
        hasLoadedComponent() {
            return this.state.Component !== null;
        }
        render() {
            const {
                Component
            } = this.state;

            return (Component) ? <Component {...this.props} /> : null;
        }
    }
);

let routes = [
    {
        path: '/',//首页默认加载的页面
        ComponentName: asyncComponent(() => import("@/routes/albumPhoto/index")),
        exact: true, //是否为严格模式
    },
    {
        path: '/bookmark',//首页默认加载的页面
        ComponentName: asyncComponent(() => import("@/routes/bookMark/index")),
    },
    
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