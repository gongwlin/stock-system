import React, {Component} from 'react';

// 子组件向父组件传递数据
class Child extends Component{
  render(){
    return(
      <div>
        请输入邮箱:<input type="email" placeholder="Please input your email" onChange={this.props.handleEmail}/>
      </div>
    )
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
        <p>用户邮箱:{this.state.email}</p>
        <Child  handleEmail={this.handleEmail.bind(this)} />
      </div>
    )
  }
}
