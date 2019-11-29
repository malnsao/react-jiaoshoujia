import { all, call, put, takeEvery } from 'redux-saga/effects'

import { watchGetProfile, watchGetProfile10 } from './profile'
import { watchGetProfile1 } from './profile1'

import profile100 from './profile100'

import configSaga from './config'

console.log('124577',configSaga().next())

export default function* rootSaga() {

    let resulstAll = []
    for (let i = 0, len = Object.keys(profile100).length; i < len; i++) {
        resulstAll.push(
            yield takeEvery(
                Object.keys(profile100)[i],
                profile100[Object.keys(profile100)[i]]
            )
        )
    }
   
    yield all(resulstAll)
   
}
