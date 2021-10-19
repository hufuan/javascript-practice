import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="todo-footer"> 
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
                    <span>finished 0 </span>
                </span>
                <button className="btn btn-danger">clear finished tasks</button>
            </div>
        )
    }
}
