import React, { Component } from 'react';
import { Button,Layout, Tabs ,StickyContainer,Col,BackTop} from 'antd';
import 'antd/dist/antd.css';
import './indexstyle.css'
const {Header,Content,Footer} = Layout
const TabPane = Tabs.TabPane


export default class Home extends Component{
    render(){
        return (
            <Layout>
                <Header className={'container'}>
                    11
                </Header>
                <Button type="primary" >111</Button>



                <BackTop visibilityHeight="200" />
            </Layout>
        )
    }
}