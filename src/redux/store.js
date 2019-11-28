/**
 *  引入 createStore方法 从redux ,用于创建 store 
 *  createStore()方法接收第一个参数是reducer
 **/
import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@/redux/reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ), // 使用中间件
)
sagaMiddleware.run(rootSaga)


export default store;