import { all, call, put, takeEvery } from 'redux-saga/effects'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import profile from './profile'

import { profile1 } from '@/services/api';


// import profile1 from './profile1'


// console.log('object111', profile1)

// console.log(profile.effects)

function* getProfile1({ payload }) {
    // console.log('6666666', action)
    let response = yield call(profile1, payload);
    yield put({
        type: "profileReducer1",
        payload: response
    });
}




function* watchGetProfile1() {
    yield takeEvery(
        'profile1', getProfile1
    )
}

function* rootSaga() {
    yield all([
        ...profile.effects,
        // ...profile1.effects
        watchGetProfile1()
    ])
}

const state = {
    ...profile.state,
    // ...profile1.state,
}

const reducers = {
    ...profile.reducers,
    // ...profile1.reducers,

    profile1({ profile1 } = state, action) {
        console.log('object', action)
        switch (action.type) {
            case 'profileReducer1':
                return action.payload
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