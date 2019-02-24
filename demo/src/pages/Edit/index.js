import React, { Component } from 'react';
import Icon from '../../components/Icon';
import Item from '../Home/component/Item';
import Tag from '../../components/Tag'
import './edit.css'

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money: props.money || 0
        }
    }


   
    render() {
        const btnList = [[7, 8, 9, 'close'], [4, 5, 6, '+'], [1, 2, 3, '-'], ['￥', 0,'.', '完成']]
        const { money } = this.state
        const icons = [
            {icon: 'eat', text: '吃喝'},
            {icon: 'gift',text: '礼物'},
            {icon:'house',text:'房租'},
            {icon: 'game',text: '娱乐'},
            {icon: 'jiaotong',text: '交通'},
            {icon: 'redpacket',text: '红包'}
        ]
        return (
            <div className='edit'>
                <div className='edit-title' >
                    <div className='edit-close'>关闭</div>
                    <div className='edit-center'>
                        <Tag onClick={() => alert(this.state.money)} 
                            style={{height: 25}}>收入</Tag>
                        <Tag active style={{ height: 25 }}
                            onClick={()=>alert(this.state.money)}>支出</Tag>
                    </div>
                    <div className='edit-save'>保存</div>
                </div>
                
                <Item money={money}/>

                <div className='edit-icons'>

                </div>
                <div className='calculate'>
                    {
                        btnList.map( (item,idx) => {
                           return <div className='cell-row' key={idx}>{
                               item.map( (i,index) => {
                                   return <div className='cell'
                                    onClick={() => alert(i)} key={index}>
                                    {i !== 'close' ? i : <Icon type='close'/>}
                                    </div>
                               })
                           }</div>
                        })
                    }
                </div>
            </div>
        );
    }
}
