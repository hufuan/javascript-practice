import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, todo)=>{return pre + (todo.done ? 1 : 0)}, 0);
        const total = todos.length;

        return (
            <div className="todo-footer"> 
                <label>
                    <input type="checkbox" checked={doneCount === total}/>
                </label>
                <span>
                    <span>finished: {doneCount} </span> / All: {total}
                </span>
                <button className="btn btn-danger">clear finished tasks</button>
            </div>
        )
    }
}
