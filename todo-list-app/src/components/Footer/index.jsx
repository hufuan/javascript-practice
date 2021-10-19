import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleCheckAll = (event)=>{
        this.props.checkAllTodo(event.target.checked);
    }
    handldClearAllDone = ()=>{
        this.props.clearAllDone();
    }
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, todo)=>{return pre + (todo.done ? 1 : 0)}, 0);
        const total = todos.length;

        return (
            <div className="todo-footer"> 
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={(doneCount === total && total !== 0) ? true : false}/>
                </label>
                <span>
                    <span>finished: {doneCount} </span> / All: {total}
                </span>
                <button onClick={this.handldClearAllDone} className="btn btn-danger">clear finished tasks</button>
            </div>
        )
    }
}
