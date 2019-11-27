/**
 *  引入 createStore方法 从redux ,用于创建 store 
 *  createStore()方法接收第一个参数是reducer
 **/

import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// 引入异步组件
import thunk from 'redux-thunk'

// 引入reducer,因为当前只有一个函数,先采用解构方法引入

import reducers from '@/redux/reducers'

// 将 reducer作为参数 传入 createStore()方法

import createSagaMiddleware from 'redux-saga'

// import mySaga from './sagas'
// import { helloSaga, watchIncrementAsync } from './sagas'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware( sagaMiddleware)
    ), // 使用中间件
)
sagaMiddleware.run(rootSaga)
console.log(store)
export default store;
