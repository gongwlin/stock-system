import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    ERROR_MSG,
    // LOAD_DATA,
} from './types'
import axios from 'axios'

function loginSuccess(data) {
    return { type: LOGIN_SUCCESS, payload: data}
}

function registerSuccess(data) {
    return { type: REGISTER_SUCCESS, payload: data }
}

export function errorMsg(data) {
    return { type: ERROR_MSG, payload: data }
}

export const login = ({user,pwd}) => {
    if (!user || !pwd) {
        return errorMsg('用户密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', {user,pwd})
            .then(res => {
                if (res.data.code === 0) {
                    console.log('res.data.data', res.data.data)
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
   
}


export const register = ({ user, pwd, type,repwd }) => {
    if (!user || !pwd || !type) {
        return errorMsg('用户名或密码不能为空')
    } else if (pwd !== repwd) {
        return errorMsg('两次输入密码不一致')
    }
    return dispatch => {
        axios.post('/user/register', { user, pwd, type })
            .then(res => {
                if (res.data.code === 0) {
                    dispatch(registerSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}




