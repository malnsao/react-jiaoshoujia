import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import request from '@/util/request';


function* helloSaga() {
    console.log('Hello Sagas!');
}

function* incrementAsync() {
    // yield delay(1000)
    yield put({ type: 'INCREMENT1' })
}


function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC1', incrementAsync)
    let a = yield request('/api/profile')
    console.log('a',a)
}



// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
    ])
}