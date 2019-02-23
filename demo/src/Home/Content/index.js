import React, { Component } from 'react'
import './content.css'
import RowItem from '../component/RowItem'

export default class Content extends Component {
    render() {
        // const time = new Date().
        return (
            <div className="content-container">
                <RowItem date={'02-22'} day={'星期六'} totalMoney={35.8} />
                <RowItem date={'02-22'} day={'星期六'} totalMoney={35.8} />
            </div>
        )
    }
}