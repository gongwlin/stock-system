import React, { Component } from 'react'

import './home.css'

export default class Head extends Component {
   
    render() {
        console.log('123445')
        return (
            <div className="container">
                <div>
                    {this.props.data}
                </div>
                
                <div>
                    {this.props.data}
                </div>
            </div>
        )
    }
}