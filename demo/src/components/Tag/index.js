import React from 'react';
import './tag.css';

export default class Tag extends React.PureComponent {
    
    render() {
        const { style = {}, active, onClick = ()=>{} } = this.props

        return (
            <div className={ active ? ' bill-tag-active' : 'bill-tag'} 
                onClick={() => onClick() }
                style={style} >
                {this.props.children}
            </div>
        )
    }
}