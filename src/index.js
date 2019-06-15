import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import Route from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('root'))
