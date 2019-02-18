import { createStore,combineReducers } from 'redux';
import reducer from './reducer';
import reducer1 from './reducer1';

const reducers = combineReducers({reducer,reducer1})
const store = createStore(reducers);

export default store;
