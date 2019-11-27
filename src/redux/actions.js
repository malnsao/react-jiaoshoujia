
/**
 * 包含所有的action creator （是一个工厂函数）
 * 必须返回一个包含type属性的对象
 *  
 */
import { INCUREMENT, DECUREMENT, BALL } from "./action-type";

// 增加的 es6 简写，返回引用数据类型时，必须时表达式的形式 否则无效
export const incrementCreate = (number) => ({ type: INCUREMENT, number })

// 减少的
export const decrementCreate = (number) => ({ type: DECUREMENT, number })

/**
 * Action 有异步的，还有同步的，异步action 一般再开发中都是调接口
 * 需要您手动dispatch分发出去,参数是一个同步的action ，很凑巧，这里已经有一个同步的增加的action了
 * ，如果没有的话，你需要手动先提前创建同步的tacion，但不用暴露出去，因为
 * 这个同步action是为你的异步action服务的
 * @param {*} number 
 */
// 异步的增加
export const incrementCreatorAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(incrementCreate(number))
        }, 1000)
    }
}
// 先写 获取接口信息的同步的action
// const getBall = (arr) => ({ type: BALL, arr })

// 模拟异步调接口
// export const basketAsync = () => {
//     return dispatch => {
//         // 模拟调接口，最后得到的数据
        
//         const arr = [
//             { name: '足球', des: '我不会玩' },
//             { name: '羽毛球球', des: '真好打不懂啊' }
//         ]
//         setTimeout(() => {
//             dispatch(getBall(arr))
//         }, 2000)
//     }
// }

// export const basketAsync = () => {
//     return dispatch => {
//         // 模拟调接口，最后得到的数据
//         let res 
//         return dispatch(getBall(request('/api/profile')))
        

//     }
// }



// console.log('profile', profile())