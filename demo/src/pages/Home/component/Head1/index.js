import React, { Component } from 'react'
import './head.css'

export default class Head1 extends Component {
    render() {
        // TODO 正则匹配提取类名
        // const icon = `.icno-weixin`
        const data = ['icon-weixin', 'icon-eye1', 'icon-eye','icon-umidd17','icon-tongji', 'icon-jiechuchuku', 'icon-jieruruku', 'icon-tag', 'icon-liwu', 'icon-zhufang', 'icon-rili', 'icon-jiaotong', 'icon-canyin', 'icon-ditu', 'icon-share', 'icon-redpacket', 'icon-game', 'icon-goods', 'icon-delete', 'icon-settings', 'icon-form', 'icon-more', 'icon-pay', 'icon-taxi', 'icon-edit','icon-close']
        console.log('data:',data)
        return (
            <div className="con">
               {
                   data.map( item => <span key={item}>
                    <i className={`iconfont ${item}`}></i>{item}<br/></span>
                   )
                }
                
                <div style={{marginTop: 100,height: 30}} onClick={() => this.props.history.goBack()}>GO BACK</div>
            </div>
        )
    }
}