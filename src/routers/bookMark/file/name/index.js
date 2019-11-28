import React, { PureComponent } from 'react';

class Name extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                三级路由
                {/* <h3>{match.params.id}</h3> */}
            </div>
        )
    }
}

export default Name