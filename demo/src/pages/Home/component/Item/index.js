import React, { Component } from 'react'
import './item.css'
import Icon from '../../../../components/Icon'
export default class Item extends Component {
    

    render() {

        const {
            icon,
            type,
            money
        } = this.props
        
        return (
            <div className="rowItem-item-data" onClick={() => console.log('icon')}>
                <div className="icon"><Icon type={icon}/></div>
                <div className="type">{type}</div>
                <div className="money">{money}</div>
            </div>
        )
    }
}