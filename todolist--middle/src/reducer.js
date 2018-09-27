import {ADD, CHANGE, DELETETODO} from './action'
import  _ from 'lodash'
export const initialState = {
    todos: [
        {name: '吃饭', isDone: false},
        {name: '睡觉', isDone: false},
        {name: '打豆豆', isDone: true},
        {name: '写代码', isDone: false},
    ]
}

export default function reducer(state = initialState, action) {
    let todos = _.cloneDeep(state).todos;//深度clone 得到state.todos的副本
    switch (action.type) {
        case ADD:
            return {todos: todos.concat({name: action.name, isDone: false})}
        case DELETETODO:
            todos.splice(action.index,1)
            return  Object.assign({},{todos})
        case CHANGE:
            todos[action.index].isDone = !todos[action.index].isDone
            return {todos}
        default:
            return state
    }
}
