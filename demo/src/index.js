import React from 'react';
import ReactDOM from 'react-dom';
import './assets/font/iconfont.css'
import './index.css';
import { Provider } from "react-redux";
import { HashRouter  } from 'react-router-dom';
import store from './store/store'
import Routes from './Routes'

console.log(store.getState())
ReactDOM.render(
    <HashRouter >
        <Provider store={store}>
          <Routes />
        </Provider>
    </HashRouter>, document.getElementById('root'));
