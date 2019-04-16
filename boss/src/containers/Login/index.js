import React, { Component, Fragment } from 'react'
import { InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Logo from '../../components/Logo'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../reducer/actions'

class Login extends Component {
    state = {
        user: '123',
        pwd: '123'
    }
    onLogin = () => {
        const { user, pwd } = this.state
        this.props.login({ user, pwd })
    }

    onRegister = () => {
        this.props.history.push('/register')
    }
    render() {
        console.log('this.props.redirectTo', this.props.redirectTo)
        return (
            <Fragment>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo />
                <WingBlank>
                    <WhiteSpace />
                    <p style={{ color: 'red', paddingLeft: 17 }}>
                        {this.props.msg ? this.props.msg : null}
                    </p>
                    <InputItem
                        value={this.state.user}
                        onChange={val => this.setState({ user: val })}
                    >
                        用户
                    </InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={val => this.setState({ pwd: val })}
                        value={this.state.pwd}
                        type='password'
                    >
                    密码
                    </InputItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.onLogin}>
                        登录
                    </Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.onRegister}>
                        注册
                    </Button>
                </WingBlank>
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: params => dispatch(login(params))
    }
}

function mapStateToProps(state) {
    return { msg: state.msg, redirectTo: state.redirectTo }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
