
import React from 'react';
// import store from '@/redux/store';
// import { Provider } from 'react-redux';
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
        // dispatch({
        //     type: 'profile1'
        // })
    }

    render() {
        // const { counter, getData } = this.props.obj
        // console.log('getData', getData);

        console.log('this.props', this.props)

        // const { value1, onIncrement1, onDecrement1, onIncrementAsync1 } = this.props
        return (
            // <Provider store={store}>
            <div>
                <Header />
                <Content />
                <Footer />
               
                {/* <div>
                    <p>
                        Clicked: {value1.counter1} times
                        <button onClick={onIncrement1}>+</button>
                        <button onClick={onDecrement1}>-</button>
                        <button onClick={onIncrementAsync1}>Increment async</button>
                    </p>
                </div> */}
            </div>
               
            // </Provider>
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
    

