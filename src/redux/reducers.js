/**
 * 包含多个reduce 函数
 * reducer (Function): 接收两个参数，分别是当前的 state 和要处理的 action，返回新的state 。
 * 也就是根据老的state 和 action 产生新的state 
 */

/**
 * 计数器，一个纯函数接收两个参数
 * @param {*} state     初始值，数据类型可以是引用也可以基本数据
 * @param {*} action    是个对象，必须有一个是type且必传，payload为参数，可选的  
 * 	你在action 里 提交的必须是这样的 {type:"type",payload:可选}
 * 
 */

import { combineReducers } from 'redux'

import { INCUREMENT, DECUREMENT, BALL } from "./action-type";

let initNum = 5;

// state = 0 参数默认值
function counter(state = initNum, action) {
    // console.log(state, action)
    switch (action.type) {
        case INCUREMENT:
            return state + action.number;
        case DECUREMENT:
            return state - action.number;
        default:
            return state;
    }
}

// 模拟接口数据,初始化数据为空
let initArr = []
export function getData(state = initArr, action) {
    switch (action.type) {
        case BALL:
            return action.arr;
        default:
            return state;
    }
}




function counter1(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT1':
            return state + 1
        case 'INCREMENT_IF_ODD1':
            return (state % 2 !== 0) ? state + 1 : state
        case 'DECREMENT1':
            return state - 1
        default:
            return state
    }
}

export default combineReducers({
    counter,
    getData,
    counter1
})

