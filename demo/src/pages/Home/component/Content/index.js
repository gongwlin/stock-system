import React, { Component } from 'react'
import './content.css'
import RowItem from '../RowItem'

export default class Content extends Component {
    render() {
        console.log(window.screenTop)
        return (
            <div className="content-container">

                <RowItem date={'02-20'} day={'星期1'} 
                totalMoney={Math.floor(Math.random() * 100)} />

                <RowItem date={'02-21'} day={'星期4'} 
                totalMoney={Math.floor(Math.random() * 100)} />

                <RowItem date={'02-22'} day={'星期6'} totalMoney={Math.floor(Math.random() * 100)} />

                <RowItem date={'02-23'} day={'星期1'} totalMoney={Math.floor(Math.random() * 100)} />
            </div>
        )
    }
}