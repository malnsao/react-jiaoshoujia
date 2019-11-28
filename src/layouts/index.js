
import React from 'react';
import asyncComponent from '@/util/asyncComponent'

const Header = asyncComponent(() => import('./Header'))
const Content = asyncComponent(() => import('./Content'))
const Footer = asyncComponent(() => import('./Footer'))

import { connect } from "react-redux";
import PropTypes from 'prop-types'

class BasicLayout extends React.PureComponent {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // this.props.onProfile();
        this.test()
    }

    test = () => {
        let { dispatch } = this.props
        dispatch({
            type:'profile',
            payload:{
                name: 1,
                id: 2, 
                age: 3
            }
        })
        dispatch({
            type: 'profile1'
        })
        dispatch({
            type: 'profile10',
            payload: {
                name: 1,
                id: 2,
                age: 30
            }
        })
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
               
        );

    }
    // 验证所需要的数据的类型,  你想要就写，不想要就不写，这个不重要，重要的是最后的合并
    // static propTypes = {
    //     obj: PropTypes.object.isRequired,
    //     incrementCreate: PropTypes.func.isRequired,
    //     decrementCreate: PropTypes.func.isRequired,
    //     incrementCreatorAsync: PropTypes.func.isRequired,
      
    // }
}

export default connect(state => ({
    data: state,
}))(BasicLayout)

// export default connect(({profile}) => ({
//     profile,
// }))(BasicLayout)
    

