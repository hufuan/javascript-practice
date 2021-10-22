import React, { Component } from 'react'
import axios from 'axios';
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {users: [],
  isFirst: true,
  isLoading: false,
  err: ''};
  updateAppState = (stateObj) =>{
    this.setState(stateObj);
  }
  render() {
    const {users} = this.state
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
