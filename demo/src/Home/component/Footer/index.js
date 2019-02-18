import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="">
                <div className='row'>
                    <div className='left'>
                        <i className='iconfont icon-pay'></i><br/><span>账户</span>
                    </div>

                    <div className='right'>
                        <i className='iconfont icon-form'></i><br/><span>我的</span>
                    </div>
                </div>
            </div>
        )
    }
}