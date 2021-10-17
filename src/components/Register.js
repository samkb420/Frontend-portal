import axios from 'axios';
import React, { Component } from 'react'

export default class Register extends Component {

    handleSubmit = e =>{
        e.preventDefault();
        console.log("works")

        const data = {
            first_name:this.firstName,
            last_name:this.lastName,
            email:this.email,
            password:this.password,
            
        };
        axios.post('register',data).then(
            res =>{
                console.log(res)
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
    };

    render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <div className="for-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="first name"
                    onChange={e => this.firstName = e.target.value}/>
                </div>
                <div className="for-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"
                    onChange={e => this.lastName = e.target.value}/>
                </div>
                <div className="for-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                    onChange={e => this.email = e.target.value}/>
                </div>
                <div className="for-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={e => this.password = e.target.value}/>
                </div>
                
                <div class="d-grid gap-2 ">
                <button className="btn mt-2 btn-primary">Register</button>
                </div>
            </form>
        </div>
    )
    }
}


