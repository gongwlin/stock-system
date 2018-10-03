import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reduxMiddleWare = applyMiddleware(thunk)(createStore)

export const store = createStore(rootReducer,initialState,)