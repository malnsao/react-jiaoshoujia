export default {
    profile100(state = [{ name: "测试1", des: "测试2" }], action) {
        if (action.type === 'profileReducer100') {
            return [...state, ...action.payload]
        } else {
            return state
        }
    },
    
}
