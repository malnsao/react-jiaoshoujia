import React, { PureComponent } from 'react';

class File extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                二级路由
                <h3>{match.params.id}</h3>
            </div>
        )
    }
}

export default File