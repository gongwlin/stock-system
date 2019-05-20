import React,{ Component } from "react"
import { Card, Form, Input, Button, Icon, Checkbox } from "antd"
import Http from '../../Http'
import { setUsername } from '../../redux/action'
import { connect } from 'react-redux'
import './index.less'

const FormItem = Form.Item

class FormLogin extends Component{
    state = {
        tipWord: ''
    }

    handleSubmit = async () =>{
        this.setState({tipWord: ''})
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
        //    console.log('values',values)
        })
        
        const json = await Http.post({url: '/auth/login',params: userInfo})
        if(json.code === 0) {
            const role = json.data.role
            localStorage.setItem('token', json.data.token)
            localStorage.setItem('refresh_token', json.data.refresh_token)
            localStorage.setItem('role', JSON.stringify(role))
            this.props.setUsername(userInfo.username)
            let path = ''
            //  '1': '拣货员',
            // '2': '配送员',
            // '3': '采购员',
            // '4': '管理员',
            if (role.indexOf(1) !== -1) {
                path = '/pickorder'
            } else if (role.indexOf(2) !== -1) {
                path = '/delivery'
            } else if (role.indexOf(3) !== -1) {
                path = '/waittingpurchase'
            } else if (role.indexOf(4) !== -1) {
                path = '/datatable'
            } else {
                path = '/accountsetting'
            }
            this.props.history.push(path)
        }else{
            this.setState({tipWord: json.msg})
        }
    }

    goRegister = () => {
        this.props.history.push('/register')
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div className='login-wrap' >
                <div className='login'>
                    <Card style={{marginTop:10}}>
                        <Form style={{width:300}}>
                            <FormItem>
                                {
                                    getFieldDecorator('username',{
                                        initialValue:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'用户名不能为空'
                                            },
                                            {
                                                min:1,max:10,
                                                message:'长度不在范围内'
                                            },
                                            {
                                                pattern:new RegExp('^\\w+$','g'),
                                                message:'用户名必须为字母或者数字'
                                            }
                                        ]
                                    })(
                                        <Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />
                                    )
                                }
                            </FormItem>
                            <FormItem className='form-item'>
                                {
                                    getFieldDecorator('pwd', {
                                        initialValue: '',
                                        rules: []
                                    })(
                                        <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />
                                    )
                                }
                            </FormItem>
                            <div className='tip'>{this.state.tipWord}</div>
                            <FormItem>
                                {
                                    getFieldDecorator('remember', {
                                        valuePropName:'checked',
                                        initialValue: true
                                    })(
                                        <Checkbox>记住密码</Checkbox>
                                    )
                                }
                                <span className='forgetpwd' onClick={alert.bind(null,'sorry!密码忘了无法登录')}>忘记密码</span>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" style={{ marginLeft: '15%' }} onClick={this.goRegister}>注册</Button>
                                <Button type="primary" style={{marginLeft: '20%'}} onClick={this.handleSubmit}>登录</Button>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapDispathToProps(dispatch) {
    return {
        setUsername: (username) => dispatch(setUsername(username))
    }
}
export default connect(null,mapDispathToProps)(Form.create()(FormLogin))