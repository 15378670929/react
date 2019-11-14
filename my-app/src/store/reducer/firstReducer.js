import {combineReducers} from 'redux'
import {ADD_TODO} from '../action/actionType'
const initialState = () => {
    return {
      count: 0,
      todos: []
    }
}
function todoApp (state = initialState(), action){
    switch(action.type){
        case ADD_TODO: 
            return Object.assign({}, state, {
                count: state.count+1,
                todos: [...state.todos,{text: action.text}]
            })
        default : return state
    }
}

const reducer = combineReducers({
  todoApp
})

export default reducer