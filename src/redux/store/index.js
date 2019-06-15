// 引入createStore创建store，引入applyMiddleware 来使用中间件
import { createStore, applyMiddleware } from 'redux';
// 引入所有的reducer
import thunk from 'redux-thunk'
import reducer from './../reducer';
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
    menuName: '首页', 
    userName: ''
}
const enhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(reducer, initialState, enhancer)

export default store;