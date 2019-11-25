
import React from 'react';
import store from '@/store.js';
import { Provider } from 'react-redux';
import asyncComponent from '@/util/asyncComponent'

const Header = asyncComponent(() => import('./Header'))
const Content = asyncComponent(() => import('./Content'))
const Footer = asyncComponent(() => import('./Footer'))

class BasicLayout extends React.PureComponent {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Content />
                <Footer />
            </Provider>
        );
    }
}
export default BasicLayout



    