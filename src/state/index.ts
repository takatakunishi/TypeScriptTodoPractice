import rootReducer from '../reducers/index'
import { StateType } from 'typesafe-actions'

type RootState = StateType<typeof rootReducer>
// type s = ReturnType<typeof rootReducer>

export default RootState