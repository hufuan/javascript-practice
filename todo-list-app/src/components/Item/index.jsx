import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {mouse: false};
    handleMouse =(flag) =>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck = (id)=>{
        return (event)=> {
            console.log(id, event.target.checked);
        }
    }
    render() {
        const {name, done} = this.props;
        //const {mouse} = this.state;
        return (
            <li style={{backgroupdColor:this.state.mouse ? '#ddd' : 'while'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} >
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button className="btn butn-danger" style={{display: 'none'}}>Delete</button>
            </li>
        )
    }
}
