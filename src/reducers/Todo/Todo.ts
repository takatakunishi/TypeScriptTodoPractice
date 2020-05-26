import { ToDos } from '../../state/Todos'
import { TodoAction } from '../../actions/Todo/Action'
import { ToDoActionTypes } from '../../actions/Todo/ActionType'

const initialState: ToDos = []

export default (state = initialState, action: TodoAction): ToDos => {
    const latestId = state.length
    switch (action.type) {
        case ToDoActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: latestId + 1,
                    text: action.payload
                }
            ]
        case ToDoActionTypes.DELETE_CONST:
            return state.filter(data => data.id != action.payload)
        default:
            const _: never = action
            return state
    }
}