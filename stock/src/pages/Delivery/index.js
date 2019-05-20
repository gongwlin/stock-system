import React, { Component } from 'react'
import DeliveryOrderItem from '../../components/DeliveryOrderItem'
import Http from '../../Http'
import './index.less'
import { message } from 'antd';

export default class Delivery extends Component {
    state = {data: []}
    componentDidMount() {
        this.getList()
    }

    getList = async () => {
        const stockid = localStorage.getItem('stockid') || '0'
        const json = await Http.get({
            url: '/order/deliverorderlist',
            params: {
                stockid
            }
        })
        if (json.code === 0) {
            this.setState({ data: json.data })
        } else {
            message.warn(json.msg || '网络错误')
        }
    }
    render() {
        const { data } = this.state
        return (
        <div className='delivery'>
        {
                    data.map((item, index) => <DeliveryOrderItem getList={this.getList} item={item} key={index}/>)
        }
        </div>)
    }
}