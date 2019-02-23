import React, { Component } from 'react'
import './head.css'

export default class Head extends Component {
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
                    {/* <div className='row row1'>
                        <i className='iconfont icon-tongji tongji' onClick={()=> alert('111')}></i>
                        <i className="iconfont icon-rili rili"></i>
                        <div className='jiating'>家庭</div>
                        <i className='iconfont icon-more more'></i>
                    </div>

                    <div className='row row2'>
                        <div className='total'>
                            <span className='rest'>0</span><br/><span>1月结余</span>
                        </div>
                    </div>

                    <div className='row row3'>
                        <div className='left'>
                            <span>0</span><br/><span>1月收入</span>
                        </div>

                        <div className='right'>
                            <span>4037.4</span><br/><span>1月支出</span>
                        </div>
                    </div> */}
            </div>
        )
    }
}