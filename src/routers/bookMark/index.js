import React, { PureComponent } from 'react';

import styles from './index'

// import asyncComponent from '@/asyncComponent'

import { Route } from 'react-router-dom';

import File from './file/index'

class BookMark extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.match.url}
                {/* <Route path={`${this.props.match.url}/file`} component={File} /> */}
            </div>
        )
    }
}

export default BookMark