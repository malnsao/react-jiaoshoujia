
import React from 'react';
// import store from '@/redux/store';
// import { Provider } from 'react-redux';
import asyncComponent from '@/util/asyncComponent'

const Header = asyncComponent(() => import('./Header'))
const Content = asyncComponent(() => import('./Content'))
const Footer = asyncComponent(() => import('./Footer'))

import { incrementCreate, decrementCreate, incrementCreatorAsync, basketAsync } from "@/redux/actions";
import { connect } from "react-redux";
import PropTypes from 'prop-types'




class BasicLayout extends React.PureComponent {

    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.basketAsync();
    }

    // 点击增加
    increment = () => {
        let number = this.select.value * 1
        // this.props.store.dispatch(incrementCreate(number))
        this.props.incrementCreate(number)
    }
    // 点击减少
    decrement = () => {
        // 获取选中的下拉框的值
        let number = this.select.value * 1
        // 更新 state的值
        this.props.decrementCreate(number)
        // this.props.store.dispatch(decrementCreate(number))

    }
    // 异步操作延时加1
    incrementAsync = () => {
        let number = this.select.value * 1

        setTimeout(() => {
            this.props.incrementCreate(number)
            // this.props.store.dispatch(incrementCreate(number))
        }, 1000)
    }

    render() {
        const { counter, getData } = this.props.obj
        console.log('getData', getData);

        console.log(this.props)

        const { value1, onIncrement1, onDecrement1, onIncrementAsync1 } = this.props
        return (
            // <Provider store={store}>
            <div>
                <Header />
                <Content />
                <Footer />
                <div>
                    <h4>点击了{counter}次</h4>

                    <br />
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>点击增加</button>&nbsp;
                    <button onClick={this.decrement}>点击减少</button>&nbsp;
                    <button onClick={this.incrementAsync}>延时1秒增加</button>
                    <div>
                        <h4>模拟接口数据</h4>
                        {/* <div>{getData.name}</div> */}
                        {
                            getData.lenth > 0 && getData.map((k, v) => {
                                return (
                                    <li key={v}>{k.name}</li>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <p>
                        Clicked: {value1.counter1} times
                        <button onClick={onIncrement1}>+</button>
                        <button onClick={onDecrement1}>-</button>
                        <button onClick={onIncrementAsync1}>Increment async</button>
                    </p>
                </div>
            </div>
               
            // </Provider>
        );

    }
    // 验证所需要的数据的类型,  你想要就写，不想要就不写，这个不重要，重要的是最后的合并
    static propTypes = {
        obj: PropTypes.object.isRequired,
        incrementCreate: PropTypes.func.isRequired,
        decrementCreate: PropTypes.func.isRequired,
        incrementCreatorAsync: PropTypes.func.isRequired,
      
    }
}
export default connect(
    state => ({ obj: state }),  // 这个必须是函数
    { incrementCreate, decrementCreate, incrementCreatorAsync, basketAsync } // 这是个对象啊 
)(BasicLayout) // 这样写以后导出的就不是App组件，而是被connect包装成了一个新的组件



    