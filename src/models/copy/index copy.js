// 初始数据
const state111 = {}
// 请求数据回来的数据
const effects111 = {}
// 请求回来的数据赋值给初始数据
const reducers111 = {}

import { call, put, takeEvery, all } from 'redux-saga/effects'
import { profile, profile1 } from '@/services/api';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'


function* getProfile({ payload }) {
    // console.log('6666666', action)
    const data = yield call(profile, payload);
    yield put({ type: "profileReducer", data });
}

function* watchGetProfile() {
    yield takeEvery('profile', getProfile)
}

function* rootSaga() {
    yield all([
        watchGetProfile()
    ])
}

const state = {
    profile: []
}

const reducers = {
    profile({ profile } = state, action) {
        switch (action.type) {
            case 'profileReducer':
                return [...profile, ...action.data]
            default:
                return state
        }
    }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        ...reducers
    }),
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ), // 使用中间件
)
sagaMiddleware.run(rootSaga)

// console.log(store)
export default store;