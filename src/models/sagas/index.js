import { all } from 'redux-saga/effects'

import { watchGetProfile, watchGetProfile10 } from './profile'
import { watchGetProfile1 } from './profile1'

export default function* rootSaga() {
    yield all([
        watchGetProfile(),
        watchGetProfile1(),
        watchGetProfile10()

    ])
}
