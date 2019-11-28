import { PROFILE_REDUCER } from '@/redux/types'

export default {
    profile(state = [{ name: "ABC", des: "def" }], action) {
        if (action.type === 'profileReducer'){
            return [...state, ...action.data]
        } else {
            return state
        }
    },
    profile10(state = [{ name: "ABC", des: "def" }], action) {
        if (action.type === 'profileReducer') {
            return [...state, ...action.data]
        } else {
            return state
        }
    },
}
