import React from 'react'
import { connect } from 'react-redux'
import { add,addTimeout } from '../../action'
import './header.css'

class Header extends React.Component {
    handler(e){
        if(e.keyCode===13){
            this.props.add(e.target.value.trim());
            e.target.value = '';
        }
    }
    handler1(){
        let e = this.refs.input;
        let value = e.value.trim();
        if(value) {
            this.props.addTimeout(value);
        }
        e.value = '';
    }
    render () {
        return (
            <div>
                <h1 style={{textAlign: 'center'}} >Todolist</h1>
                <input
                    type='text' className='header' ref='input' placeholder='please input todo item'
                    onKeyDown={(e) => this.handler(e)}
                />
                <span className={'tip'}>Press Enter add a TODO</span>
                <div ><button className={'btn'} onClick={() => this.handler1()}>add todo after 2s</button></div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        add:(name)=>dispatch(add(name)),
        addTimeout:(name)=>dispatch(addTimeout(name))
    }
}

export default connect(null,mapDispatchToProps)(Header)


