import React from 'react'
import { Statistic, Icon } from 'antd'

import './index.less'

export default class Home extends React.Component{
    render(){
        return (
            <div className='home'>
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                />
                <Statistic title="Active Users" value={112893} />
                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            </div>
        );
    }
}