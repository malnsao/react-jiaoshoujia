import React, { PureComponent } from 'react';

import styles from './index'


class Album extends PureComponent {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.hanle()
    }

    hanle = () => {
        // // fetch('/api/profile')
        // //     .then(function (response) {
        // //         return response.json();
        // //     })
        // //     .then(function (myJson) {
        // //         console.log(myJson);
        // //     });

        // fetch('/api/profile1')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (myJson) {
        //         console.log(myJson);
        //     });

        // // console.log('profile', profile)

        // console.log('11111',request('/api/profile'))
    }

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