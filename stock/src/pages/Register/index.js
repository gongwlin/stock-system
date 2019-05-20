import React from 'react'
import {Card,Form,Button,Input,Radio,DatePicker,message} from 'antd'
import moment from 'moment'
import Http from '../../Http'
import './index.less'
import { setUsername } from '../../redux/action'
import { connect } from 'react-redux'


const FormItem = Form.Item;
const RadioGroup = Radio.Group


class FormRegister extends React.Component{

    state={}

    handleSubmit = async() => {
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        const json = await Http.post({url: '/auth/register',params: userInfo})
        console.log(json)
        if( json.code === 0){
            message.success('注册成功')
            localStorage.setItem('token', json.data.token)
            localStorage.setItem('role', JSON.stringify(json.data.role))
            localStorage.setItem('refresh_token', json.data.refresh_token)
            this.props.setUsername(userInfo.username)
            this.props.history.push('/accountsetting')
        }else {
            message.error(json.msg || '注册失败')
        }
    }

    goLogin = () => {
        this.props.history.push('/login')
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
       const isPc = window.innerWidth > 768
        return (
            <div className='register-wrap' style={!isPc ? { paddingTop: 0}: null}>
                <Card className='register' style={!isPc ? { height: '100vh',overflow: 'auto'} : null}>
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
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
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('pwd', {
                                    initialValue: ''
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="确认密码" {...formItemLayout}>
                            {
                                getFieldDecorator('repwd', {
                                    initialValue: ''
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="手机号" {...formItemLayout}>
                            {
                                getFieldDecorator('telphone', {
                                    initialValue: ''
                                })(
                                    <Input type="telphone" placeholder="请输入电话号码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: 'man'
                                })(
                                    <RadioGroup>
                                        <Radio value="man">男</Radio>
                                        <Radio value="woman">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="出生年月" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue:moment()
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.goLogin}>登录</Button>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setUsername: (username) => dispatch(setUsername(username))
    }
}


export default connect(null, mapDispatchToProps)(Form.create()(FormRegister))