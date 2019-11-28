export default {
    profile1(state = [], action) {
        if (action.type === 'profileReducer1') {
            return action.payload
        } else {
            return state
        }
    }
}
