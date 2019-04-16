import axios from 'axios'
import { Toast } from 'antd-mobile'
axios.defaults.baseURL= 'http://localhost:9000'
// axios.defaults.withCredentials = true
// axios.defaults.crossDomain = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 给请求添加loading效果
axios.interceptors.request.use(function(config) {
    Toast.loading('加载中',0)
    return config
})


// 接收到响应 隐藏loading
axios.interceptors.response.use(function(config) {
    Toast.hide()
    return config
})