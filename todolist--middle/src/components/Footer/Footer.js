import React, { Component} from 'react';
import './footer.css'
import { connect } from 'react-redux';

class Footer extends Component{
    //合计undo 以及done 的数量
    calculate(){
        let undo=0,done=0;
        this.props.todos.forEach((todo)=>{
            if(todo.isDone){
                done++;
            }else{
                undo++;
            }
        });
        return [undo,done]
    }
    render(){
        return (
            <div>
                <hr/>
                <div className="footer">
                    totalUndo:{this.calculate()[0]}    totalDone:{this.calculate()[1]}
                </div>
            </div>
        )
    }
}

function  mapStateToProps(state) {
  return  {todos:state.todos}
}

export default  connect(mapStateToProps)(Footer)
