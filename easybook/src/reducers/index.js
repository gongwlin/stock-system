import { createStore, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Header from './header/reducer'

const initialState = {
    show: false
}


const rootReducer = combineReducers({
   Header
})

const store = createStore(rootReducer,initialState)

export default store; 