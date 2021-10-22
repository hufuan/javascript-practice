import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
    search = ()=>{
        const {keyWordElement:{value: keyWord}} = this;
        console.log("keyWord", keyWord)
        this.props.updateAppState({isFirst:false, isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({isLoading: false, users: response.data.items});
            },
            error => {
                this.props.updateAppState({isLoading:false, err: error.message})
                console.log('failed', error);}
        );
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading"> Search github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you want to search"/> 
                    <button  onClick={this.search}> search button </button>
                </div>
            </section>
        )
    }
}
