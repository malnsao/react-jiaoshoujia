
import { combineReducers } from 'redux'
import profile1 from './profile1'
import profile from './profile'
import profile100 from './profile100'


export default combineReducers({
    ...profile,
    ...profile1,
    ...profile100
})

