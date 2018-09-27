import React, {Component} from 'react'
import './App.css'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

export default class App extends Component {
    render() {
        const logger = createLogger()
        const store = createStore(reducer,applyMiddleware(thunk,logger));
        return (
            <Provider store={store}>
                <div className='container'>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </Provider>
        )
    }
}
