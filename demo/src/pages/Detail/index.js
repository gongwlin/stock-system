import React, { Component } from 'react';
import { getUrlQueryParams } from '../../Utils'
import Icon from '../../components/Icon'
import Item from '../Home/component/Item'
import './index.css'
export default class Detail extends Component {

    constructor(props) {
        super(props)
        this.param = getUrlQueryParams(props.location.search)
    }

    render() {
        // console.log('this.props.location.query', getUrlQueryParams(this.props.location.search))
        const { history } = this.props
        const { date, totalmoney: money} = this.param
        const title = '支出'
        const account = '未选择', recorder = '少平', note = '快递'
        return (
           <div className='detail'>
                <div className='detail-title'>
                    <div onClick={() => history.goBack()} className='goback'></div>
                    <div className='title'>{title}</div>
                    <div className='delete' onClick={() => console.log('deleted')}>
                        <Icon type='delete' size={30} color='#828282' />
                    </div>
                </div>

                <Item icon='eat' type='eat' money={money} isDetail={true}/>
                
                <ul className='ul-info'>
                    <li>
                        <div><Icon type='goods'/>  账户</div>
                        <div><Icon type='tag' />  记录人</div>
                        <div><Icon type='rili' />  时间</div>
                        <div><Icon type='edit' />  备注</div>
                    </li>
                    <li>
                        <div>{account}</div>
                        <div>{recorder}</div>
                        <div>{date}</div>
                        <div>{note}</div>
                    </li>
                </ul>
                <div className='detail-btn-wrap'>
                    <button className='detail-btn'>自动记账 </button>
                </div>

                <div className='detail-comment'>
                    <ul className='comment-ul'>
                        <li>成员评论</li>
                        <li onClick={()=>alert('write comment')}><Icon type='edit' /> 写评论</li>
                    </ul>

                    <div className='comment-data'>想说就说，别控制~</div>
                </div>

                <div className='detail-rest'></div>
           </div>
        );
    }
}
