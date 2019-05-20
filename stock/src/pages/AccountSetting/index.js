import React from 'react'
import { Card, Form, Button, Input, message } from 'antd'
import Http from '../../Http'

const FormItem = Form.Item;

class AccountSetting extends React.Component {

    state = {info: ''}
    componentDidMount() {
       this.getInfo()
    }

    getInfo = async () => {
        const json = await Http.get({
            url: '/auth/info'
        })
        if (json.code === 0) {
            this.setState({ info: json.data })
        }
    }
    handleSubmit = async () => {
        let userInfo = this.props.form.getFieldsValue()
        delete userInfo.role
        delete userInfo.stockid
        
        const json = await Http.post({
            url: '/auth/info',
            params: userInfo
        })
        if(json.code === 0){
            console.log(JSON.stringify(userInfo))
            message.success('保存成功')
        } else {
            message.error(json.msg|| '网络错误')
        }
    }

    reset = () => {
        this.props.form.resetFields();
    }


    getRole = (role)=> {
        if (!role || !role.length) return ''
        let roleArr = ''
        for(let i = 0, len = role.length; i < len; i++){
            switch (role[i]) {
                case 1:
                    roleArr += '拣货员 '
                    break
                case 2:
                    roleArr += '配送员 '
                    break
                case 3:
                    roleArr += '采购员 '
                    break
                case 4:
                    roleArr += '管理员 '
                    break
                default:
                    break
            }
        }
        return roleArr
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        const { info } = this.state
        return (
                <Card style={{ height: '100%', width: '100%' }}>
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('username', {
                                    initialValue: info.username||'',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>

                        <FormItem label="手机号" {...formItemLayout}>
                            {
                                getFieldDecorator('telphone', {
                                    initialValue: info.telphone || ''
                                })(
                                    <Input type="text" placeholder="请输手机号" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('pwd', {
                                    initialValue: info.pwd || ''
                                })(
                                    <Input type="password" placeholder="请输入修改后的密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="所属仓库编号" {...formItemLayout}>
                            {
                                getFieldDecorator('stockid', {
                                    initialValue: info.stockid || ''
                                })(
                                    <Input type="text"  disabled />
                                )
                            }
                        </FormItem>
                       

                        <FormItem label="角色" {...formItemLayout}>
                            {
                                getFieldDecorator('role', {
                                    initialValue: this.getRole(info.role)
                                })(
                                    <Input  disabled />
                                )
                            }
                        </FormItem>
                

                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.reset}>重置</Button>
                            <Button type="primary" onClick={this.handleSubmit}>保存</Button>
                        </FormItem>
                    </Form>
                </Card>
        )
    }
}
export default Form.create()(AccountSetting)