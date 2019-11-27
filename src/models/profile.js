import { call, put, takeEvery } from 'redux-saga/effects'

import { profile } from '@/services/api';

let state = {
    profile: [{ name: "ABC", des: "def" }]
}

function* getProfile({ payload }) {
    // console.log('6666666', action)
    const data = yield call(profile, payload);
    yield put({ type: "profileReducer", data });
}

export default {
    state,
    effects:{
        * watchGetProfile() {
            yield takeEvery(
                'profile', getProfile
            )
        }
    },
    reducers:{
        profile({ profile } = state, action) {
                    console.log('objectprofile', action)

            switch (action.type) {
                case 'profileReducer':

                    return [...profile, ...action.payload]
                default:
                    return state
            }
        }
    }
}
    