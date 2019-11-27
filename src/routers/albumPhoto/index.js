import React, { PureComponent } from 'react';

import styles from './index'


class Album extends PureComponent {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){}

    render() {
        // console.log(this.props)
        return (
            <div>
                {this.props.children}
                123
            </div>
        )
    }
}

export default Album