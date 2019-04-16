import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Auth extends Component {
    componentDidMount() {
        const path = ['login','register']

        const pathName = this.props.location.pathName
        if (path.indexOf(pathName)) return null

        axios.get('/user/info')
            .then(res => {
                if(res.data.code === 0) {
                    console.log('res.data',res.data.data)
                }else {
                    this.props.history.push('/login')
                }
            })
    }

    render() {
        // const au = this.props

        // 未登录到登录页  根据cookie来判断
        // 如果登录 判断是否完善信息  
        // 调到info页
        // 调到首页
        console.log('props1',this.props)
        return (
            <div>测试页面</div>
        )
    }
}

export default withRouter(Auth)