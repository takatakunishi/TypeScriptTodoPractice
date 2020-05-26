import { ToDoActionTypes } from './ActionType'
import { createAction } from 'typesafe-actions'

export const AddTodoAction = createAction(
    ToDoActionTypes.ADD_TODO,
    (text: string) => text,
)();


export const DeleteTodoAction = createAction(
    ToDoActionTypes.DELETE_CONST,
    (id: number) => id
)();