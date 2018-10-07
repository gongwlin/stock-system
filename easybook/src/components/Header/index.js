import React, { Component } from 'react';
import './index.css'

export default  class Header extends Component {
    constructor(){
        super();
        this.handleblur = this.handleblur.bind(this)
        this.handlefocus = this.handlefocus.bind(this)
        this.state = {
            show: false
        }
    }
    handleblur() {
        this.setState(()=>({show:false}))
    }

    handlefocus() {
        this.setState(()=>({show:true}))
    }
    render() {
        return (
            <div className="header">
                <img className="logo" alt="logo" width="100" height="56" src={require('./../../assets/img/navlogo.png')}/>
                <div className="homepage"><i className="iconfont">&#xe6c5; </i>首页</div>
                <div className="downloadapp"><i className="iconfont">&#xe60a; </i>下载App</div>
                <input className="search" 
                    onFocus={this.handlefocus} 
                    onBlur={this.handleblur}
                />
                <div className={this.state.show ? "mask" : "noshow"}></div>
                <div className="write"><i className="iconfont">&#xe703; </i>写文章</div>
                <div className="register">注册</div>
                <div className="login">登入</div>
                <div className="Aa"><i className="iconfont">&#xe602; </i></div>
            </div>
        )
    }

}