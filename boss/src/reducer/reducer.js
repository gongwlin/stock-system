import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    ERROR_MSG,
    LOAD_DATA,
} from './types'

import { getPath } from '../utils'


const initState = {
    user: '',
    isAuth: false,
    type: '',
    redirectTo: '',
    msg: ''
}

export default function user(state=initState, action) {
    switch(action.type) {
    case LOGIN_SUCCESS:
        return { ...action.payload, isAuth: true, redirectTo: getPath(action.payload) }
    case REGISTER_SUCCESS:
        return { ...action.payload, isAuth: true, redirectTo:getPath(action.payload) }
    case ERROR_MSG:
        return { msg: action.payload, isAuth: false }
    case LOAD_DATA:
        return { ...action.payload, isAuth: false}
    default:
        return state
    }
}