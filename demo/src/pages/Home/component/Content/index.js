import React, { Component } from 'react'
import './content.css'
import RowItem from '../RowItem'
import { Link } from 'react-router-dom';

export default class Content extends Component {
    render() {
        console.log(window.screenTop)
        const data = [
            { type: 'eat', icon: 'eat', price: 20 },
            { type: 'eat', icon: 'eat', price: 30 },
            { type: 'eat', icon: 'eat', price: 40 },
            { type: 'eat', icon: 'eat', price: 50 },
            { type: 'eat', icon: 'eat', price: 60 },

        ]
        const date = '02-20', day = '星期一', 
            totalMoney = data.reduce( (item1, item2) => {
                return item1 + item2.price;
            },0)


        console.log('totalMoney',totalMoney)
        return (
            <div className="content-container">

                {/* <Link to={{
                    pathname: '/detail',
                    search: '?date='+ date +'&day='+day+'&totalmoney='+totalMoney,

                }}> */} 
                <Link to={`/detail/?date=${date}&day=${encodeURI(day)}&totalmoney=${totalMoney}`}>
                    <RowItem date={date} day={day} 
                        totalMoney={totalMoney} data={data}/>
                </Link>

                <Link to={`/detail/?date=${date}&day=${encodeURI(day)}&totalmoney=${Math.floor(Math.random() * 100)}`}>
                    <RowItem date={date} day={day}
                        totalMoney={totalMoney} />
                </Link>

                <RowItem date={'02-22'} day={'星期6'} totalMoney={Math.floor(Math.random() * 100)} />

                <RowItem date={'02-23'} day={'星期1'} totalMoney={Math.floor(Math.random() * 100)} />
            </div>
        )
    }
}