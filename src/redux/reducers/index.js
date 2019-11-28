
import { combineReducers } from 'redux'
import profile1 from './profile1'
import profile from './profile'

export default combineReducers({
    ...profile,
    ...profile1
})

