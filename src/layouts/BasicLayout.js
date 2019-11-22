
import React from 'react';
import Header from './Header/index'
import Footer from './Footer/index'

import {
    BrowserRouter as Router,
    HashRouter
} from "react-router-dom";

import routeConfig from '@/router';

import store from '@/store.js';
import { Provider } from 'react-redux';

class BasicLayout extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Header />
                <section>
                    <Router>
                        {routeConfig}
                    </Router>
                </section>
                <Footer />
            </Provider>
        );
    }
}
export default BasicLayout



    