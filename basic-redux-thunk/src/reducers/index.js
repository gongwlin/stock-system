import { combineReducers } from 'redux';
import * as items from './items';

// Combine all reducers into root reducer
export default combineReducers({
    ...items
});