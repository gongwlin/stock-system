import React, { Component } from 'react'
import './footer.css';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="">
                <div className='row'>
                    <div className='left'>
                        <i className='iconfont icon-pay'></i><br/><span>账户</span>
                    </div>

                    <div className='center' onClick={()=>console.log('aaa')}></div>
                  
                        <div className='right'>
                            {/* <Link to="/myinfo"> */}
                        <i className='iconfont icon-form'></i><br /><Link to="/myinfo"><span>我的</span></Link>
                            {/* </Link> */}
                        </div>
                </div>
            </div>
        )
    }
}