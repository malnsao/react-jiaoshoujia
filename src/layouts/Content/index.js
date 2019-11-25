import React from 'react';

import styles from './index.less'

import {
    BrowserRouter as Router,
    HashRouter
} from "react-router-dom";

import routeConfig from '@/router';

class Content extends React.Component {
    render() {
        return (
            <section className={styles.div}>
                <Router>
                    {routeConfig}
                </Router>
            </section>

        )
    }
}


export default Content