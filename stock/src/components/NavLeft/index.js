import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import MenuList from '../../MenuList'
import './index.less'

// import io from 'socket.io-client'

class NavLeft extends React.Component {
    state = {
        pickCount: 0
    }
    componentWillMount(){
        let role = localStorage.getItem('role') || '[4]'
        role = JSON.parse(role)
        console.log('role',role)
        if(role.indexOf(4) !== -1) {
            const menuTreeNode = this.renderMenu(MenuList);
            this.setState({ menuTreeNode })
            return
        }
        let arr = MenuList.filter(v => v.common || v.role === role[0])
        console.log('arr', arr)
        const menuTreeNode = this.renderMenu(arr)
        this.setState({ menuTreeNode })
    }

    componentDidMount() {
        // const socket = io.connect('http://localhost:9000')
        
        // socket.emit('login', 'hello')
        // socket.on('badge',(data) => {
        //     this.setState({ badge:data})
        // })
        // let role = localStorage.getItem('role')
        // role = JSON.parse(role)
        // console.log('role', role)
        // if (role.indexOf(4) !== -1) {
        //     socket.emit('pickorder')
        //     socket.on('pickorder/count', () => {
        //     // this.audio.play()
        //     })
        // }
        
    }

    // 菜单点击
    handleClick = ({ item, key }) => {
        if (key === this.state.currentKey) {
            return false
        }
        // 移动端关闭menu
        const { closeMenu } = this.props
        closeMenu && closeMenu()
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.children.props.children));

        this.setState({
            currentKey: key
        })
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item)=>{
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}
                    {/* <Badge count={this.badgeVisible(item.title)} style={{ marginLeft: 15, boxShadow: "none"}}/> */}
                </NavLink>
            </Menu.Item>
        })
    }
    
    render() {
        const hidelogo = this.props.hidelogo === true
        return (
            <div>
                {
                    !hidelogo && <div className="logo">
                        {/* <img src="/assets/logo-ant.svg" alt=""/> */}
                        <h1>智慧仓储</h1>
                    </div>
                }
                <audio src={require('./waitbuy.mp3')} ref={audio => this.audio = audio}></audio>
                <Menu
                    onClick={this.handleClick}
                    theme='dark'
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft)