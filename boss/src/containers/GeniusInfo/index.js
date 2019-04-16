import React, { Component, Fragment } from 'react'
import {
    NavBar,
    WingBlank, 
    WhiteSpace,
    Button
} from 'antd-mobile'
// import { Redirect } from 'react-router-dom'

export default class GeniusInfo extends Component {
    render() {
        console.log('12342353245')
        // const { redirectTo } = this.props
        return (
            <Fragment>
                {/* { redirectTo ? <Redirect to={redirectTo} /> : null} */}
                <NavBar mode='dark' style={{position:'fixed', top: 0}}>
                123
                </NavBar>                  
                <WingBlank>
                    <Button type='primary'>保存</Button>
                    <WhiteSpace/>
                </WingBlank>
            </Fragment>
        )
    }
}