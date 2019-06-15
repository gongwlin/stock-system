import React from 'react'
import { Row, Col } from 'antd'
import Header from '../../components/Header'
import NavLeft from '../../components/NavLeft'
import '../../style/common.less'
import './index.less'
import WrapperNav from '../../components/WrapperNav'

class HomeWrap extends React.Component {
// 判断是 移动端还是PC端

    render() {
        const isPC = window.innerWidth && window.innerWidth >= 768

        return (
            <Row className="container">
                <Col span={isPC ? 3 : 0} className="nav-left">
                    <NavLeft />
                </Col>
                    <Col span={isPC ? 21 : 24} className="main">
                    {
                        isPC && <Header/>
                    }
                    <Row className="content">
                       <div className='content-home'>
                           {this.props.children}
                        </div>
                    </Row>
                   
                </Col>
            </Row>
        );
    }
}
export default WrapperNav(HomeWrap)