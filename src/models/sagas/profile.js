import { call, put, takeEvery } from 'redux-saga/effects'
// import { takeEvery } from 'redux-saga/effects'

import {
    profile
} from '@/services/api';


// export function* watchGetProfile100({ payload }) {
//     const response = yield call(profile, payload);
//     yield put({
//         type: 'profileReducer',
//         payload: response
//     });
// }

export function* watchGetProfile() {
    yield takeEvery(
        'profile',
        function* watchGetProfile({ payload }) {
            console.log('watchGetProfile')
            const data = yield call(profile, payload);
            yield put({ type: "profileReducer", data });
        }
    )
}

export function* watchGetProfile10() {
    yield takeEvery(
        'profile10',
        function* getProfile({ payload }) {
            const data = yield call(profile, payload);
            yield put({ type: "profileReducer10", data });
        }
    )
}


// export default {
//     * watchGetProfile100({ payload }) {
//         const response = yield call(profile, payload);
//         yield put({
//             type: 'profileReducer',
//             payload: response
//         });
//     },

// }