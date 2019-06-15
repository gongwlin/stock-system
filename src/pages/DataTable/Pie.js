import React from 'react'
import {Card,Select} from 'antd'
import ReactEcharts from 'echarts-for-react';
// import echartTheme from './echartTheme'
import themeLight from './themeLight'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Bar extends React.Component {

    state = {}

    componentWillMount(){
        echarts.registerTheme('Imooc',themeLight);
    }

    getOption() {
        let option = {
            title: {
                text: '一周订单数据',
                x : 'center'
            },
            legend : {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            tooltip: {
                trigger : 'item',
                formatter : "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name : '订单量',
                    type : 'pie',
                    radius : '55%',
                    center : [
                        '50%', '60%'
                    ],
                    data:[
                        {
                            value:1000,
                            name:'周一'
                        },
                        {
                            value: 1000,
                            name: '周二'
                        },
                        {
                            value: 2000,
                            name: '周三'
                        },
                        {
                            value: 1500,
                            name: '周四'
                        },
                        {
                            value: 3000,
                            name: '周五'
                        },
                        {
                            value: 2000,
                            name: '周六'
                        },
                        {
                            value: 1200,
                            name: '周日'
                        },
                    ],
                    itemStyle : {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return option;
    }

    handleChange = (value) => {
        this.props.history.replace('/datatable/' + value.key)
        console.log('value', value)
    }
    
    render() {
        return (
            <div>
                <Select labelInValue defaultValue={{ key: 'bar' }} style={{ width: 120 }} onChange={this.handleChange}>
                    <Select.Option value="bar">条形图</Select.Option>
                    <Select.Option value="pie">饼图</Select.Option>
                    <Select.Option value="line">折线图</Select.Option>
                </Select>
                <Card>
                    <ReactEcharts
                        option={this.getOption()}
                        theme="Imooc"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: 500 }}/>
                </Card>
            
            </div>
        )
    }
}