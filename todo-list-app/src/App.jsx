import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
export default class App extends Component {
  state = {todos:[
    {id: '001', name: 'eating', done: true},
    {id: '002', name: 'sleep', done: false},
    {id: '003', name: 'coding', done: true},
    {id: '004', name: 'shoping', done: true}
  ]}
  addTodo = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({todos:newTodos})
  }

  updateTodo = (id, done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=>{
      if (todoObj.id === id) return {...todoObj, done}
      else 
        return todoObj;

    });
    this.setState({todos:newTodos})
  }
  deleteTodo = (id)=> {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
        return todoObj.id !== id
    });
    this.setState({todos:newTodos});
  }
  //select all
  checkAllTodo = (done) =>{
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done};
    });
    this.setState({todos:newTodos});
  }
  clearAllDone = () =>{
    const {todos} = this.state;
    const newTodos = todos.filter(todoObj=>{return !todoObj.done;}
    );
    this.setState({todos:newTodos});
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone= {this.clearAllDone}/>
          </div>
        </div>
      </div>
    )
  }
}
