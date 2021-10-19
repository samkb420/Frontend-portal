import React, { Component } from 'react'
import Login from './Login';

export default class Hero extends Component {
    
    render() {
       return (
            <div>
               <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-5">
                        <Login setUser={this.setUser}/> 
                        </div>
                        <div className="col-md-7">
                            <p>lorem ispum</p>
                            </div>
                    </div>
                </div>
                           
            </div>
        )
    }
}
