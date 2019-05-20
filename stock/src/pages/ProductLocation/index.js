import React, { Component } from 'react'
import { Card, Button, Form, Input, Modal, message } from 'antd'
import Http from '../../Http'
import Utils from '../../utils/utils'
import ETable from '../../components/ETable/index'
const FormItem = Form.Item;

export default class ProductLocation extends Component {

    state = {
        list: []
    }

    params = {
        page: 1
    }

    requestList = async () => {
        const stockid = localStorage.getItem('stockid') || '0'
        const json = await Http.get({
            url: '/productlocation/get',
            params: {
                stockid,
                page: this.params.page
            }
        })

        console.log(json)
        if (json.code === 0) {
            this.setState({
                list: json.data.list.map((item, index) => {
                    item.key = index
                    return item
                }),
                pagination: Utils.pagination(json.data, (current) => {
                    this.params.page = current
                    this.requestList()
                })
            })
        }
    }

    componentDidMount() {
        this.requestList()
    }

    handleOk = async () => {
        const item = this.state.selectedItem
        const json = await Http.post({ url: '/productlocation/delete', params: { ...item } })
        if (json.code === 0) {
            message.success('操作成功')
            this.requestList()
        } else {
            message.error(json.msg || '操作失败')
        }
    }


    handleOperator = (type) => {
        let item = this.state.selectedItem;
        if (type === 'create') {
            this.setState({
                title: '新增储位记录',
                isVisible: true,
                type
            })
        } else if (type === "edit" || type === 'detail') {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一条储位记录'
                })
                return
            }
            this.setState({
                title: type === 'edit' ? '编辑储位记录' : '查看详情',
                isVisible: true,
                locationInfo: item,
                type
            })
        } else if (type === "delete") {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一条储位记录'
                })
                return
            }

            Modal.confirm({
                title: '确定要删除此记录吗？',
                onCancel: () => { },
                onOk: this.handleOk
            })
        }
    }

    handleSubmit = async () => {
        const type = this.state.type
        if (type === 'detail') {
            this.setState({ isVisible: false })        
            return
        }
        let data = this.locationForm.props.form.getFieldsValue()
        const json = await Http.post({
            url: type === 'create' ? '/productlocation/add' : '/productlocation/update',
            params: { ...data }
        })

        this.setState({ isVisible: false })
        if (json.code === 0) {
            message.success('操作成功')
            this.requestList()
            return
        }
        message.error('操作失败')
    }

    render() {
        const columns = [{
            title: '储位编号',
            dataIndex: 'locationid'
        }, {
            title: '仓库编号',
            dataIndex: 'stockid'
        }, {
            title: '商品编号',
            dataIndex: 'productid',
        }
        ]
        return (
            <div>
                <Card style={{ marginTop: 10 }}>
                    <Button type="primary" icon="plus" onClick={() => this.handleOperator('create')}>新增储位记录</Button>
                    <Button icon="edit" onClick={() => this.handleOperator('edit')}>编辑储位</Button>
                    <Button onClick={() => this.handleOperator('detail')}>储位详情</Button>
                    <Button type="danger" icon="delete" onClick={() => this.handleOperator('delete')}>删除储位记录</Button>
                </Card>
                <div className="content-wrap">
                    <ETable
                        columns={columns}
                        updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                        selectedRowKeys={this.state.selectedRowKeys}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal
                    title={this.state.title}
                    visible={this.state.isVisible}
                    onOk={this.handleSubmit}
                    width={800}
                    onCancel={() => {
                        this.locationForm.props.form.resetFields();
                        this.setState({
                            isVisible: false,
                            locationInfo: ''
                        })
                    }}
                >
                    <LocationForm
                        locationInfo={this.state.locationInfo}
                        type={this.state.type}
                        wrappedComponentRef={(inst) => this.locationForm = inst}
                    />
                </Modal>
            </div >
        )
    }
}
class LocationForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        };
        const locationInfo = this.props.locationInfo || {};
        const type = this.props.type;
        console.log('locationInfo', locationInfo)
        return (
            <Form layout="horizontal">
                <FormItem label="储位编号" {...formItemLayout}>
                    {
                        locationInfo && type === 'detail' ? locationInfo.locationid :
                            getFieldDecorator('locationid', {
                                initialValue: locationInfo.locationid || ''
                            })(
                                <Input type="text" />
                            )
                    }
                </FormItem>
                <FormItem label="商品编号" {...formItemLayout}>
                    {
                        locationInfo && type === 'detail' ? locationInfo.productid :
                            getFieldDecorator('productid', {
                                initialValue: locationInfo.productid || ''
                            })(
                                <Input type="text" disabled />
                            )
                    }
                </FormItem>


                <FormItem label="仓库编号" {...formItemLayout}>
                    {
                        locationInfo && type === 'detail' ? locationInfo.stockid :
                            getFieldDecorator('stockid', {
                                initialValue: locationInfo.stockid
                            })(
                                <Input placeholder="请输入仓库编号" />
                            )
                    }
                </FormItem>
            </Form>
        );
    }
}
LocationForm = Form.create({})(LocationForm)