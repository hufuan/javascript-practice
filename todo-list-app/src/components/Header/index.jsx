import React, { Component } from 'react'
import './index.css'
import { nanoid } from 'nanoid';

export default class Header extends Component {
    handleKeyUp = (event) =>{
        const {keyCode, target} = event;
        if (keyCode !== 13)
            return;
        if (target.value === ""){
            alert("can't input empty value!");
            return;
        }

        console.log(target.value, keyCode);
        const todoObj = {id: nanoid(), name:target.value, done: false};
        this.props.a(todoObj);
        target.value = '';
    }
    render() {
        return (
            <div className="todo-header">
                <input  onKeyUp={this.handleKeyUp} type="text" placeholder="please input your task name, enter to confirm!"/>
            </div>
        )
    }
}
