import React, { Component } from 'react'
import { Card, Button, Form, Input, Select, Modal,message } from 'antd'
import Http from '../../Http'
import Utils from '../../utils/utils'
import ETable from '../../components/ETable/index'
const FormItem = Form.Item;
const Option = Select.Option;

export default class User extends Component {

    state = {
        list: []
    }

    params = {
        page: 1
    }

    requestList = async () => {
        const json = await Http.get({
            url: '/user/list',
            params: {
                page: this.params.page
            }
        })

        console.log(json)
        if(json.code === 0) {
            this.setState({
                list: json.data.list.map((item, index) => {
                    item.key = index
                    item.birthday = item.birthday.slice(0,10)
                    return item;
                }),
                pagination: Utils.pagination(json.data, (current) => {
                    this.params.page = current;
                    this.requestList();
                })
            })
        }
    }

    componentDidMount() {
        this.requestList();
    }

    handleOk = async () => {
        const item = this.state.selectedItem
        const { _id } = item
        const json = await Http.post({url: '/user/delete',params:{userid: _id}})
        if(json.code === 0) {
            this.requestList()
        }
    }

    // // 操作员工
    handleOperator = (type) => {
        let item = this.state.selectedItem;
        if (type === 'create') {
            this.setState({
                title: '新增员工',
                isVisible: true,
                type
            })
        } else if (type === "edit" || type === 'detail') {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个用户'
                })
                return;
            }
            this.setState({
                title: type === 'edit' ? '编辑用户' : '查看详情',
                isVisible: true,
                userInfo: item,
                type
            })
        } else if (type === "delete") {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个用户'
                })
                return;
            }

            Modal.confirm({
                title: '确定要删除此用户吗？',
                onCancel: () => {},
                onOk: this.handleOk,
            })
        }
    }

    handleSubmit = async () => {
        const type = this.state.type
        if (type === 'detail') {
            this.setState({ isVisible: false })
            return
        }
        let data = this.userForm.props.form.getFieldsValue();
        const json = await Http.post({
            url: type === 'create' ? '/user/add' : '/user/update',
            params: {...data}
        })        
        
        this.setState({isVisible: false})
        if (json.code === 0) {
            message.success('操作成功')
            this.requestList()
            return
        }
        message.error('操作失败')

    }

    render() {
        const columns = [{
            title: 'id',
            dataIndex: '_id'
        }, {
            title: '用户名',
            dataIndex: 'username'
        }, {
                title: '联系方式',
                dataIndex: 'telphone'
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                return sex === 'man' ? '男' : '女'
            }
        }, {
                title: '角色',
                dataIndex: 'role',
                render(state) {
                    let config = {
                        '1': '拣货员',
                        '2': '配送员',
                        '3': '采购员',
                        '4': '管理员'
                    }
                    return config[state];
                }
            }, 
            {
            title: '生日',
            dataIndex: 'birthday'
        }]
        return (
            <div>
                <Card style={{ marginTop: 10 }}>
                    <Button type="primary" icon="plus" onClick={() => this.handleOperator('create')}>新增员工</Button>
                    <Button icon="edit" onClick={() => this.handleOperator('edit')}>编辑员工</Button>
                    <Button onClick={() => this.handleOperator('detail')}>员工详情</Button>
                    <Button type="danger" icon="delete" onClick={() => this.handleOperator('delete')}>删除员工</Button>
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
                        this.userForm.props.form.resetFields();
                        this.setState({
                            isVisible: false,
                            userInfo: ''
                        })
                    }}
                >
                    <UserForm 
                        userInfo={this.state.userInfo} 
                        type={this.state.type} 
                        wrappedComponentRef={(inst) => this.userForm = inst} 
                    />
                </Modal>
            </div>
        );
    }
}
class UserForm extends React.Component {

    getState = (state) => {
        return {
            '1': '拣货员',
            '2': '配送员',
            '3': '采购员',
            '4': '管理员',
        }[state]
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 16 }
        };
        const userInfo = this.props.userInfo || {};
        const type = this.props.type;
        console.log('userInfo', userInfo)
        return (
            <Form layout="horizontal">
                <FormItem label="id" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? userInfo._id :
                            getFieldDecorator('_id', {
                                initialValue: userInfo._id
                            })(
                                <Input type="text"  disabled />
                            )
                    }
                </FormItem>
                <FormItem label="姓名" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? userInfo.username :
                            getFieldDecorator('username', {
                                initialValue: userInfo.username
                            })(
                                <Input type="text" placeholder="请输入姓名" />
                            )
                    }
                </FormItem>
                
                <FormItem label="手机号" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? userInfo.telphone :
                            getFieldDecorator('telphone', {
                                initialValue: userInfo.telphone
                            })(
                                <Input placeholder="请输入手机号码" />
                            )}
                </FormItem>
                <FormItem label="角色" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? this.getState(userInfo.role) :
                            getFieldDecorator('role', {
                                initialValue: userInfo.role
                            })(
                                <Select>
                                    <Option value={1}>拣货员</Option>
                                    <Option value={2}>配送员</Option>
                                    <Option value={3}>采购员</Option>
                                    <Option value={4}>管理员</Option>
                                </Select>
                            )}
                </FormItem>
            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm)