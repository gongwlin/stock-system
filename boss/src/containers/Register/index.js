import React, { Component, Fragment } from 'react'
import { 
    Radio, 
    InputItem, 
    WingBlank, 
    WhiteSpace,
    Button 
} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { register } from '../../reducer/actions'
import { connect } from 'react-redux'

import Logo from '../../components/Logo'
const RadioItem = Radio.RadioItem

class Register extends Component {
    state = {
        user: '123',
        pwd: '',
        repwd: '',
        type: 'genius'
    }

    handleChange = (key,val) => {
        this.setState({[key]:val})
    }

    onRegister = () => {
        const { user, pwd, type, repwd } = this.state
        this.props.register({ user, pwd, type, repwd })
    }

    render() {
        const { type } = this.state
        const { msg, redirectTo } = this.props
        console.log('redirectTo', redirectTo)
        return (
            <Fragment>
                { redirectTo ? <Redirect to={redirectTo} /> : null}
                <Logo />
                <WingBlank>
                    <p style={{ paddingLeft: 17, color: 'red' }}>{msg}</p>
                    <WhiteSpace />
                    <InputItem onChange={v => this.handleChange('user',v)}>
                        用户名
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' 
                        onChange={v => this.handleChange('pwd', v)}>
                        密码
                    </InputItem>
                    <WhiteSpace />
                    <InputItem type='password' 
                        onChange={v => this.handleChange('repwd', v)}>
                        确认密码
                    </InputItem>
                    <WhiteSpace />
                    <RadioItem checked={type === 'genius'}
                        onClick={() => this.handleChange('type', 'genius')}>
                        牛人
                    </RadioItem>
                    <WhiteSpace />
                    <RadioItem checked={type === 'boss'}
                        onClick={() => this.handleChange('type', 'boss')}>
                        BOSS
                    </RadioItem>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button type='primary' onClick={this.onRegister}>注册</Button>
                </WingBlank>
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: params => dispatch(register(params))
    }
}

function mapStateToProps(state) {
    return { msg: state.msg, redirectTo: state.redirectTo }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)