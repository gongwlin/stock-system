// import React, {Component} from 'react';
// import PropTypes from 'prop-types'
// 父传子用props传递
// 子组件向父组件传递数据
/* 方1：
 * 父组件写好state和处理该state的函数，
 * 同时将函数名通过props属性值的形式传入子，子调用父的函数，同时引起state变化
 */

 
/*
class Child extends Component{
  render(){
    return(
      <div>
        请输入邮箱:<input type="email" placeholder="Please input your email" onChange={this.props.handleEmail}/>
        <Grandson email={this.props.email}/>
      </div>
    )
  }
}

class Grandson extends Component{
  static propTypes = {
    email: PropTypes.string.isRequired
  }
  render(){
    return (<div><p>my grandfather's email is {this.props.email}</p></div>)
  }
}


export default class Parent extends Component{
  state = {
    email:'gongwlin@126.com'
  }
  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  render(){
    return(
      <div>
        <pre style={{font: "14px bold 宋体",color: "blue"}}>
          方1：
          父组件写好state和处理该state的函数,同时将函数名通过props属性值的形式传入子，
          子调用父的函数，同时引起state变化</pre>
        <p>用户邮箱:{this.state.email}</p>
        <Child email={this.state.email} handleEmail={this.handleEmail.bind(this)} />
      </div>
    )
  }
}
*/


/*
import PropTypes from 'prop-types';

class Child extends Component{
 static propTypes = {
    hideComponent: PropTypes.func.isRequired,
  }
  render(){
    return (<div>
      <p>I'm Child</p>
      <button onClick={this.props.hideComponent}>隐藏子组件</button>
    </div>)
  }
}


export default class Parent extends Component{
  state = {
    isShowChild: false
  }
  showComponent = ()=> this.setState({isShowChild: true})
  hideComponent = ()=> this.setState({isShowChild: false})
  render(){
    return (<div>
      <button onClick={this.showComponent}>显示子组件</button>
      {
        this.state.isShowChild ? <Child hideComponent={this.hideComponent}/>:null
      }
    </div>)
  }
}
*/


import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Parent extends Component{
    // 父组件声明自己支持 context
    static childContextTypes = {
        color:PropTypes.string,
        callback:PropTypes.func,
    }
    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext(){
        return{
            color:"blue",
            callback:this.callback.bind(this)
        }
    }
    callback(msg){
        console.log(msg)
    }
    render(){
        return(
            <div>
                <Sub></Sub>
            </div>
        );
    }
}

class Sub extends Component{
  render(){
    return(
        <div>
            <SubSub />
        </div>
    );
  }
}

class SubSub extends Component{
  // 子组件声明自己需要使用 context
  static contextTypes = {
      color:PropTypes.string,
      callback:PropTypes.func,
      age:PropTypes.number,
  }
  render(){
      const style = { color:this.context.color }
      const cb = (msg) => {
          return () => {
              this.context.callback(msg);
          }
      }
      return(
          <div style = { style }>
              SUBSUB
              <button onClick = { cb("被点击了！") }>点击我</button>
            <div>{this.context.age}</div>
          </div>
      );
  }
}
