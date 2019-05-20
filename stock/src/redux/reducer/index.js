/**
 * reducer
 */
import { type } from '../action'

const reducer = (state, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            }
        case type.SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            };
        default:
            return {...state};
    }
};

export default reducer;