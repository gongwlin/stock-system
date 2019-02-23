import React, { Component } from 'react'
import './rowItem.css';
import Item from '../Item'

export default class RowItem extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {

       const {
           date,
           day,
           totalMoney
       } = this.props

        return (
                <div className="rowItem">
                
                    <div className="rowItem-title">
                        <div className="date">{date}</div>
                        <div className="day">{day}</div>
                        <div className="totalMoney">{totalMoney}</div>
                    </div>

                    <Item icon='eat' type={'eat'} money={'10'} />
                    <Item icon='eat' type={'eat'} money={'10'}/>
                </div>
        )
    }
}