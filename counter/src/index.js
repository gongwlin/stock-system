import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import Counter from "./Component/Counter";
import counter from './reducer/reducer';

// import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter)


const render = () => ReactDOM.render(<Counter 
    value = {store.getState()}
    increse = {()=> store.dispatch({'type':'INCRESE'}) }
    decrese = {()=> store.dispatch({'type':'DECRESE'}) }
/>, document.getElementById('root'));

render()
store.subscribe(render)

// registerServiceWorker();
