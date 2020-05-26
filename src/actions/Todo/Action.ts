import { ActionType } from 'typesafe-actions'
import * as ActionCreater from './ActionCreater'

export type TodoAction = ActionType<typeof ActionCreater>
