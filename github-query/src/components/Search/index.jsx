import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    search = async()=>{
        const {keyWordElement:{value: keyWord}} = this;
        //PubSub.publish("test-topic", {name: 'tom', age: 18})
        console.log("keyWord", keyWord)
        //this.props.updateAppState({isFirst:false, isLoading:true})
        PubSub.publish("test-topic", {isFirst:false, isLoading:true})
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data = await response.json();
            PubSub.publish("test-topic", {isLoading: false, users: data.items});
        } catch (error) {
            console.log('failed', error);
            PubSub.publish("test-topic", {isLoading:false, err: error.message})
        }
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
