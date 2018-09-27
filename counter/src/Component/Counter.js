import React, { Component }from 'react'
import PropTypes from "prop-types"
class Counter extends Component{
    constructor(props){
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.increseAsyn = this.increseAsyn.bind(this);
        this.increseIfodd = this.increseIfodd.bind(this);
        this.timer = null;
    }
    start(){
        this.timer = setInterval(this.props.increse,100);
    }
    stop(){
        if(this.timer){
            clearInterval(this.timer);
        }
    }
    increseIfodd(){
        console.log(this.props.value);
        if(this.props.value %2 === 1){
            this.props.increse();
        }
    }
    increseAsyn(){
        setTimeout(this.props.increse,1000);
    }
    render(){
        const { value,increse,decrese } = this.props
        return (
            <div>
                Click {value} times
                { '  '}
                <button onClick = {increse}>+</button>
                { '  ' }
                <button onClick = {decrese}>-</button>
                { '  ' }
                <button onClick = {this.start}>start</button>
                { '  ' }
                <button onClick = {this.stop}>stop</button>  
                { '  ' }          
                <button onClick = {this.increseAsyn}>increseAsyn</button>
                { '  ' }
                <button onClick = {this.increseIfodd}>increseIfodd</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increse: PropTypes.func.isRequired,
    decrese: PropTypes.func.isRequired
}
export default Counter
