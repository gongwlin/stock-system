import React, { Component } from 'react'
import './App.css'
import './css/header.css'
// import Header from './components/header';
// import Footer from './components/footer';

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {name: '吃饭', isDone: false},
        {name: '睡觉', isDone: true},
        {name: '打豆豆', isDone: true},
        {name: '写代码', isDone: true},
      ]
    }
  }
  //ADD TODO
  add (e) {
    if (e.keyCode === 13) {
      this.setState({
        todos: this.state.todos.concat({
          name: e.target.value,
          isDone: false
        })
      })
      e.target.value = '';
    }
  }
  //DELETE TODO
  delete (index) {
    let todos = this.state.todos;
    todos.splice(index,1);//powerful function splice()
    //Or todos = todos.filter((todo,indx)=>{return indx!==index});
    this.setState({todos})
  }
  //CHANGE TODO ITEMS' STATU
  change (index) {
    let todos = this.state.todos;
    todos[index].isDone=!todos[index].isDone;
    this.setState({todos});
  }

  render () {
    let todos = this.state.todos
    return (
      <div>
        <div className='container'>
          <h1 style={{textAlign: 'center'}}>Todolist</h1>
          <input
            type='text' className='header' placeholder='Please input a todo item' onKeyDown={e => this.add(e)}
          /><span className={'tip'}>Press Enter to add</span>
          <hr className='top' />
          <h2>Undo</h2>
          <ul>
            {
              todos.map((todo, index) => {
                return !todo.isDone ? <li key={index}><input
                  type='checkbox' key={todo.name} onClick={()=>this.change(index)}
                />{todo.name} <input type={'button'} value={'删除'} onClick={() => this.delete(index)} /></li> : ''
              })
            }
          </ul>
          <hr className='top' />
          <h2>Done</h2>
          <ul>
            {
              todos.map((todo, index) => {
                return todo.isDone ? <li className={'linethrouht'} key={index}><input
                  type='checkbox' key={todo.name} onClick={()=>this.change(index)}
                />{todo.name} <input type={'button'} value={'删除'} onClick={() => this.delete(index)} /></li> : ''
              })
            }
          </ul>
        </div>
      </div>
    )
  }

}

export default App
