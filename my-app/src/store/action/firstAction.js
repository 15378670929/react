import { ADD_TODO } from './actionType'

export function addtodo (text) {
    return {
        type: ADD_TODO,
        text
    }
}