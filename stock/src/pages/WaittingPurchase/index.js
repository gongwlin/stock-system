import React, { Component } from 'react'
import StockProductItem from '../../components/StockProductItem'

import './index.less'

export default class WaittingPurchase extends Component {

    render() {

        return (
        <div>
           <StockProductItem type='waitpurchase'/>
        </div>)
    }
}