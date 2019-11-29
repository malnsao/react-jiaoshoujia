// /**
//  * 封装sagas
//  */

// function* watchGetProfile1({ call, put }) {
//     const response = yield call(profile, payload);
//     yield put({
//         type: 'profileReducer',
//         payload: response
//     });
// }


// function funName(fun) {
//     // 获取函数名字
//     let ret = fun.toString();
//     ret = ret.substr('function '.length);
//     ret = ret.substr(0, ret.indexOf('('));
//     console.log('ret', ret)
//     return ret
// }

// function funParmas(fun) {
//     // 获取传进来的函数参数
//     let STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
//     let ARGUMENT_NAMES = /([^\s,]+)/g;
//     let fnStr = fun.toString().replace(STRIP_COMMENTS, '');
//     let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
//     if (result === null)
//         result = [];

//     console.log('result', result)
//     return result
// }

// // funName(watchGetProfile1)
// // funParmas(watchGetProfile1)

// function change(fun) {

//     // 获取函数名字
//     let funName = fun.toString();
//     funName = funName.substr('function '.length);
//     funName = funName.substr(0, ret.indexOf('('));
//     console.log('funName', funName)

//     // let funName1 = funName(fun)
//     // let funParmas1 = funParmas(fun)

//     // 获取传进来的函数参数
//     let STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
//     let ARGUMENT_NAMES = /([^\s,]+)/g;
//     let fnStr = fun.toString().replace(STRIP_COMMENTS, '');
//     let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
//     if (result === null)
//         result = [];

//     console.log('result', result)

//     return {
//         *[funName](funParmas = result) {
//             console.log('222')
//             console.log('funParmas', funParmas)
//             yield takeEvery(
//                 'profile',
//                 function* getProfile({ payload }) {
//                     const data = yield call(profile, payload);
//                     yield put({ type: "profileReducer", data });
//                 }
//             )
//         }
//     }
// }
// let a = change(watchGetProfile1)

// console.log('a', a)

// // a[funName(watchGetProfile1)]()
// a.watchGetProfile1().next()




// // console.log('watchGetProfile', watchGetProfile)

// // function change(fun) {

// //     // 获取函数名字
// //     let funName = fun.toString();
// //     funName = funName.substr('function '.length);
// //     funName = funName.substr(0, funName.indexOf('('));
// //     console.log('funName', funName)

// //     // let funName1 = funName(fun)
// //     // let funParmas1 = funParmas(fun)

// //     // 获取传进来的函数参数
// //     let STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
// //     let ARGUMENT_NAMES = /([^\s,]+)/g;
// //     let fnStr = fun.toString().replace(STRIP_COMMENTS, '');
// //     let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
// //     if (result === null)
// //         result = [];

// //     console.log('result', result)

// //     return {
// //         *[funName](funParmas = result) {
// //             console.log('222')
// //             console.log('funParmas', funParmas)
// //             yield takeEvery(
// //                 'profile',
// //                 function* getProfile({ payload }) {
// //                     const data = yield call(profile, payload);
// //                     yield put({ type: "profileReducer", data });
// //                 }
// //             )
// //         }
// //     }
// // }
// // let a = change(watchGetProfile({ call, put}))


import { all, call, put, takeEvery } from 'redux-saga/effects'

import profile100 from './profile100'

export default function* configSaga() {
    let resulstAll = []
    for (let i = 0, len = Object.keys(profile100).length; i < len; i++) {
        resulstAll.push(
            yield takeEvery(
                Object.keys(profile100)[i],
                profile100[Object.keys(profile100)[i]]
            )
        )
    }

    return resulstAll
}