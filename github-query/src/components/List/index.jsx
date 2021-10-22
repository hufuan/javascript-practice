import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props;
        return (
            <div className="row">
                {
                    isFirst ? <h2>input keywords, and then click search</h2> :
                    isLoading ? <h2>Loading....</h2>:
                    err ? <h2 style={{color: 'red'}}>{err}</h2> :
                    this.props.users.map((userObj) =>{
                        return (
                            <div key={userObj.id} className="card">
                            <a  ref="noreferrer" href={userObj.html_url} target="_blank">
                                <img alt="head_portrait" src = {userObj.avatar_url} style={{width: '100px'}}>

                                </img>
                            </a>
                            <p className="card-text"> {userObj.login}</p>
                            </div>
                        );   
                    })
                }
            </div>
        )
    }
}
