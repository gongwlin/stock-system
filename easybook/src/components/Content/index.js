import React, { Component } from 'react';
import './index.css'

export default  class Content extends Component {
    constructor(){
        super();
        
    }
    
    render() {
        return (
            <div>
               <div className="container">
                    <div className="col1">
                        <img alt="swiper" width="625" height="270" src={require('../../assets/img/swiper.jpg')}/>
                        <div className="banner"><img width="32" height="32" alt="katon" src={require('../../assets/img/katon1.jpg')}/>手绘</div>
                    </div>
                    <div className="col2">
                        <img alt="slider"  width="280" height="50" src={require('../../assets/img/7hot.png')}/>
                        <img alt="slider"  width="280" height="50"  src={require('../../assets/img/30hot.png')}/>
                        <img alt="slider"  width="280" height="50"  src={require('../../assets/img/pro.png')}/>
                        <img alt="slider"  width="280" height="50"  src={require('../../assets/img/copyright.png')}/>
                        <img alt="slider"  width="280" height="50"  src={require('../../assets/img/study.png')}/>
                        <div className="qrcode">
                            <img className="left" alt="qrcode" src={require('../../assets/img/small-qrcode.png')} height="60" width='60' />
                            <div className="right">
                                <p>下载简书手机App ></p>
                                <p>随时随地发现和创作内容</p>
                            </div>
                        </div>

                    </div>
                    {/* List */}
               </div>
            </div>
        )
    }
    
}