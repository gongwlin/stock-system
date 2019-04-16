import React, { Component, Fragment } from 'react'
import {
    NavBar,
    InputItem,
    TextareaItem,
    WhiteSpace
} from 'antd-mobile'
import Avatar from '../../components/Avatar'
export default class BossInfo extends Component {
    state = {
        money: '',
        company: '',
        des: '',
        avatar:''
    }
    handleChange = (key, val) => {
        this.setState({[key]:val})
    }
    render() {
        // console.log( this.state )
        return (
            <Fragment>
                <NavBar mode='dark'>BOSS信息完善页</NavBar>
                <Avatar selectAvatar={this.handleChange.bind(this,'avatar')}/>
                <WhiteSpace/>
                <InputItem
                    onChange={this.handleChange.bind(this,'money')}
                >职位薪资</InputItem>
                <WhiteSpace />

                <InputItem
                    onChange={this.handleChange.bind(this, 'company')}
                
                >公司名称</InputItem>
                <WhiteSpace />

                <TextareaItem
                    onChange={this.handleChange.bind(this, 'des')}
                    rows={5}
                    autoHeight
                    title={'招聘简介'}
                ></TextareaItem>
            </Fragment>
        )
    }
}
