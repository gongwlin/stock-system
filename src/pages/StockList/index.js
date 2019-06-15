import React, { Component,Fragment } from 'react'
import StockProductItem from '../../components/StockProductItem'
import Http from '../../Http'

export default class StockList extends Component {
    state = {data: []}
    async componentDidMount() {
        const stockid = localStorage.getItem('stockid') || 0
        const json = await Http.get({
            url: '/product/list',
            params: {
                stockid:stockid
            }
        })
        if(json.code === 0){
            this.setState({data: json.data})
            console.log('json',json)
        }
    }
    render() {
        const { data } = this.state
        return (
            <Fragment>
                <StockProductItem item={data}/>
            </Fragment>
        )
    }
}