import React, { Component } from 'react'
import ProductItem from '../../components/ProductItem'
import Http from '../../Http'
import { message } from 'antd'
import './index.less'
import WrapperNav from '../../components/WrapperNav'

class PickOrder extends Component {
    state = {
        orderlist:[],
        productsinfos: [],
    }
    componentDidMount() {
       this.getList()
    }
    
    getList = async () => {
        const stockid = localStorage.getItem('stockid') || '0'
        const json = await Http.get({
            url: '/order/pickorderlist',
            params: { stockid }
        })
        if (json.code === 0) {
            this.setState({
                orderlist: json.data.orderlist[0],
                productsinfos: json.data.productsinfos[0]
            })
        }
    }

    pickdone = async () => {
        const stockid = localStorage.getItem('stockid') || '0'
        const { orderlist:{orderid} } = this.state
        const json = await Http.post({
            url: '/order/pickorder',
            params: { orderid,stockid }
        })

        if(json.code === 0) {
            message.success('操作成功')
            this.getList()
        } else {
            message.error('操作失败')
        }
    }
    render() {
        const { innerWidth } = window
        const { productsinfos, orderlist } = this.state
        const width = Math.round((innerWidth/1000) * 190)
        const isPc = innerWidth > 768
        return (
        <div className='pickorder'>
                <div className='pickorder-title' style={isPc?{width:innerWidth-width} : {top:40}}>
                <div className='orderid'>
                    订单号：{orderlist.orderid || ''}
                </div>
                <span className='pickdone' onClick={this.pickdone}>拣货完成</span>
            </div>
            {
                productsinfos.length && productsinfos.map((item, idx) => <ProductItem key={idx} item={item} orderid={orderlist.orderid}/>)
            }
           
        </div>)
    }
}

export default WrapperNav(PickOrder)