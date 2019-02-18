import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, ['吃饭','睡觉','打豆豆',1,2,3,4,5,6,7,8,9,10]);

export default store;
