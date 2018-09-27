import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from '../src/App1'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
