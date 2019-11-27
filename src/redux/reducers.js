
import { combineReducers } from 'redux'


const state = {
    profile:[]
}


function profile({ profile } = state, action) {
    switch (action.type) {
        case 'profileReducer':
            return [...profile, ...action.data]
        default:
            return state
    }
}
export default combineReducers({
    profile,
})

