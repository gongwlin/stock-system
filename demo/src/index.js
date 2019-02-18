import React from 'react';
import ReactDOM from 'react-dom';
import App from './Home';
import './assets/font/iconfont.css'
import './index.css';
import { Provider } from "react-redux";
import { BrowserRouter  } from 'react-router-dom';
import store from './store/store'

console.log(store.getState())
ReactDOM.render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
