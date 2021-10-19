import React, { Component } from 'react'
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
  render() {
    const {todos} = this.state;
    return (
      <div>
        
        <div className="todo-container">
          <div className="todo-wrap">
            <Header a={this.addTodo}/>
            <List todos={todos}/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}
