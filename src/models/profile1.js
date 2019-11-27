import { call, put, takeEvery } from 'redux-saga/effects'

import { profile1 } from '@/services/api';

let state = {
    profile1: []
}

export default {
    state,
    effects: {
        * watchGetProfile1() {
            yield takeEvery(
                'profile1',
                function* getProfile1({ payload }) {
                    // console.log('6666666', action)
                    let response = yield call(profile1, payload);
                    yield put({
                        type: "profileReducer1",
                        payload: response
                    });
                }
            )
        }
    },
    reducers: {
        profile1(state, action) {
            console.log('object', action)
            switch (action.type) {
                case 'profileReducer1':
                    return action.payload
                default:
                    return state
            }
        }
    }
}
