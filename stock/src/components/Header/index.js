import React from 'react'
import { Row,Col } from "antd"
import './index.less'
import Util from '../../utils/utils'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            userName: this.props.userName || 'admin'
        })
        
        this.timer = setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    logout = () => {
        localStorage.clear()
    }
    render(){
        const { menuType } = this.props;
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <Link to='/login' onClick={this.logout}>退出</Link>
                    </Col>
                </Row>
                {
                    menuType?'':
                        <Row className="breadcrumb">
                            {/* <Col span={4} className="breadcrumb-title">
                                {menuName || '首页'}
                            </Col> */}
                            <Col span={24} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                            </Col>
                        </Row>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userName: state.userName
    }
}
export default connect(mapStateToProps)(Header)