import React from 'react';
import '../css/header.css';
export default class Header extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <input type="text"  className="head" placeholder="please input todo item"/>
                </div>
            </div>
        )
    }
}
