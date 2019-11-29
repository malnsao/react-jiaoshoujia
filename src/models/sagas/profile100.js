import {
    profile
} from '@/services/api';
import { all, call, put, takeEvery } from 'redux-saga/effects'

export default {
    * watchGetProfile100({ payload }) {
        // console.log('payload', payload)
        const response = yield call(profile, payload);
        yield put({
            type: 'profileReducer100',
            payload: response
        });
    },
    * watchGetProfile1000({ payload }) {
        // console.log('payload', payload)
        const response = yield call(profile, payload);
        yield put({
            type: 'profileReducer100',
            payload: response
        });
    },
}

// export function* watchGetProfile100({ payload }) {
//     // console.log('payload', payload)
//     const response = yield call(profile, payload);
//     yield put({
//         type: 'profileReducer',
//         payload: response
//     });
// }

