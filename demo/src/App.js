import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as action from './store/action';
import { bindActionCreators } from "redux"
/**
 * 
 * 
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        text: ''
    }
    this.onHandle = this.onHandle.bind(this)
  }

  onHandle () {
    const { text } = this.state
    if( !text ) return
    this.props.actions.add(text)
    this.setState({text:''})
  }
  render() {
    const { data } = this.props
    return (
      <Fragment>
        <div className="wrap" >
          <input className="input" value={this.state.text} onChange={(e)=> this.setState({text: e.target.value})}/>
          <button className="btn" onClick={this.onHandle}>确认</button>
        <p>***提示:点击确认进行添加，点击已有项目删除***</p>
        </div>
        <ul className="wrap mt20">
          {
            data.map( (val,index) =>{
              return <li key={index} onClick={() => this.props.actions.remove(index)}>{val}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}
const mapState = (state) => {
  return {
    data: state
  }
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(action, dispatch)
  }
}

export default connect(mapState,mapDispatch)(App);
