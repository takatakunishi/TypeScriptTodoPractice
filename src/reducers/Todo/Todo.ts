import { ToDos } from '../../state/Todos'
import { TodoAction } from '../../actions/Todo/Action'
import { ToDoActionTypes } from '../../actions/Todo/ActionType'

const initialState: ToDos = []

export default (state = initialState, action: TodoAction): ToDos => {
    const latestId = state.length
    switch (action.type)
}