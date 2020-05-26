import { combineReducers } from 'redux'
import todoReducer from './Todo'

const rootReducer = combineReducers({
    todo: todoReducer,
})

export default rootReducer

