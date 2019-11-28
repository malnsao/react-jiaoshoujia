import { call, put, takeEvery } from 'redux-saga/effects'
import {
    profile1
} from '@/services/api';

export function* watchGetProfile1() {
    yield takeEvery(
        'profile1',
        function* getProfile1({ payload }) {
            let response = yield call(profile1, payload);
            yield put({
                type: "profileReducer1",
                payload: response
            })
        }
    )
}
