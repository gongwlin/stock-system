import React, { Component } from 'react'
import './index.css'

export default class Logo extends Component {
    render() {
        return (
            <div className='logo-container'>
                <img src={require('./job.png')} alt='logo'/>
            </div>
        )
    }
}