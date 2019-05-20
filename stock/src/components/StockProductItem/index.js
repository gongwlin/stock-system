import React, { Component } from 'react';
import { Table, message } from 'antd';
import Utils from './../../utils/utils'

import Http from '../../Http'

export default class City extends Component {

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

    // 默认请求我们的接口数据
    requestList = async () => {
        const type = this.props.type === 'waitpurchase'
        const stockid = localStorage.getItem('stockid') || '0'
        const json = await Http.get({
            url: type ? '/product/waitpurchaselist' : '/product/list',
            params: {stockid,page: this.params.page}
        })
        if (json.code === 0) {
            let list = json.data.list.map((item, index) => {
                item.key = index;
                return item;
            })
            console.log('list',list)
            this.setState({
                list: list,
                pagination: Utils.pagination(json.data, (current) => {
                    this.params.page = current
                    this.requestList()
                })
            })
        }else {
            message.error(json.msg || '获取数据失败')
        }
    }


    render() {

        const columns = [
            {
                title: '商品编号',
                dataIndex: 'productid'
            }, {
                title: '商品名称',
                dataIndex: 'productname'
            }, {
                title: '库存数',
                dataIndex: 'count',
            }, {
                title: '储位编号',
                dataIndex: 'productloc',
            }, {
                title: '商品类型',
                dataIndex: 'producttype'
            }, {
                title: '进价',
                dataIndex: 'incomeprice',
            }, {
                title: '售价',
                dataIndex: 'sellprice'
            }, {
                title: '规格',
                dataIndex: 'unit'
            },
            {
                title: '有效期',
                dataIndex: 'userfultime',
                render: Utils.formateDate
            }
        ]

        const waitpurchaseColumns = [
            {
                title: '商品编号',
                dataIndex: 'productid'
            }, {
                title: '商品名称',
                dataIndex: 'productname'
            }, {
                title: '库存数',
                dataIndex: 'count',
            }, {
                title: '储位编号',
                dataIndex: 'productloc',
            }, {
                title: '商品类型',
                dataIndex: 'producttype'
            },{
                title: '规格',
                dataIndex: 'unit'
            }
        ]
        const type = this.props.type === 'waitpurchase'
        return (
            <div className="content-wrap">
                <Table
                    bordered
                    columns={type ? waitpurchaseColumns : columns}
                    dataSource={this.state.list}
                    pagination={this.state.pagination}
                />
            </div>
        )
    }
}
