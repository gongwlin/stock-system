import React, { Component } from 'react';
import { Table, message } from 'antd';
import Utils from './../../utils/utils'
import Http from '../../Http'

export default class Order extends Component {

    state = {
        list: [],
        isShowOpenCity: false
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.requestList();
    }

    requestList = async () => {
        const stockid = localStorage.getItem('stockid') || '0'

        Http.post({ url:'/order/addorder'})

        const json = await Http.get({
            url: '/order/list',
            params: { stockid, page: this.params.page }
        })
        if (json.code === 0) {
            let list = json.data.list.map((item, index) => {
                item.key = index;
                return item;
            })
            console.log('list', list)
            this.setState({
                list: list,
                pagination: Utils.pagination(json, (current) => {
                    this.params.page = current
                    this.requestList()
                })
            })
        } else {
            message.error(json.msg || '获取数据失败')
        }
    }


    render() {

        const columns = [
            {
                title: '商品编号',
                dataIndex: 'orderid'
            }, {
                title: '订单状态',
                dataIndex: 'status'
            }, {
                title: '订单价格',
                dataIndex: 'orderdetail.price'
            }, {
                title: '商品数',
                dataIndex: 'productids.length',
            }, {
                title: '支付方式',
                dataIndex: 'orderdetail.paymethod',
            }, {
                title: '顾客电话',
                dataIndex: 'customerinfo.customerphone'
            }, {
                title: '顾客地址',
                dataIndex: 'customerinfo.customeraddress',
            }
        ]
        return (
            <div className="content-wrap">
                <Table
                    bordered
                    columns={columns}
                    dataSource={this.state.list}
                    pagination={this.state.pagination}
                />
            </div>
        )
    }
}
