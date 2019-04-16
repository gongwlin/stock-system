import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes'
import { HashRouter, Link } from 'react-router-dom'
// import { combinReducers } from 'react-redux'
import { createStore, applyMiddleware } from  'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import user from './reducer/reducer'
import './axios.config'

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
    thunk
))(createStore)(user)

const store = createStoreWithMiddleware
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Link to='/login'>go login</Link>
                <span style={{paddingLeft: 30}}></span>
                <Link to='/register'>go register</Link>
            </div>
            <Routes />
        </HashRouter>
    </Provider>,
    document.getElementById('root'))