import React from 'react'
import { Card, Select} from 'antd'
import ReactEcharts from 'echarts-for-react'
import echartTheme from './echartTheme'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
export default class Line extends React.Component {

    state = {}

    componentWillMount(){
        echarts.registerTheme('Imooc',echartTheme);
    }

    getOption() {
        let option = {
            title: {
                text: '一周数据'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 4,
                    data: [
                        1000,
                        2000,
                        1500,
                        500,
                        2000,
                        1200,
                        800
                    ]
                },
                {
                    name: '销售额',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 4,
                    itemStyle: {
                        normal: {
                            color: 'red',
                            borderColor: 'red'  //拐点边框颜色
                        }
                    },
                    data: [6000,9000,8000,4500,9000,7000,5000]
                },
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
                        style={{
                        height: 500
                    }}/>
                </Card>
                
            </div>
        );
    }
}