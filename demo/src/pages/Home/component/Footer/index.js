import React, { Component } from 'react'
import './footer.css';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
           <div>
            <div className='row'>
                <div className='left'>
                    <Link to='/account'>
                    <i className='iconfont icon-pay'></i><br/>
                    <span>账户</span>
                    </Link>
                </div>
            
                   <Link className='center' to='/edit'></Link>
                
                <div className='right'>
                    <Link to="/myinfo">
                        <i className='iconfont icon-form'></i><br /><span>我的</span>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}