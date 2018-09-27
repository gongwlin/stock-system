import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'
import './content.css'

class Content extends React.Component {
  render () {
    let {todos,actions} = this.props
    return (
      <div>
        <hr className={'top'}/>
        <h2 >Undo</h2>
        <ul>
          {
             todos.map((todo, index) => {
              return !todo.isDone ? <li key={index}><input
                type='checkbox' key={todo.name} onChange={() => actions.change(index)}
              />{todo.name} <input type={'button'} value={'删除'} onClick={() => actions.deletetodo(index)} /></li> : ''
            })
          }
        </ul>
        <hr className={'top'}/>
        <h2 >Done</h2>
        <ul>
          {
              todos.map((todo, index) => {
              return todo.isDone ? <li className={'linethrough'} key={index}><input checked={"checked"}
                type='checkbox' key={todo.name} onChange={() => actions.change(index)}
              />{todo.name} <input type={'button'} value={'删除'} onClick={() => actions.deletetodo(index)} /></li> : ''
            })
          }
        </ul>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {todos: state.todos}
}

function mapDispatchToProps (dispatch) {
  return {
    actions:bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
