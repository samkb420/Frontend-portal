import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    state={}

    handleSubmit = e =>{
        e.preventDefault();

        const data = {
            email:this.email,
            password:this.password
        };
        axios.post('login',data).then(
            res =>{
                localStorage.setItem('token',res.data.token);
                this.setState({
                    loggedIn:true
                });
                    
                this.props.setUser(res.data);
                console.log(res.data);
            }
        ).catch(
            err =>{
                console.log(err);
            }
        )
    };
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/"/>;
        }
        return (
            <div>
                
         
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
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
                    <button className="btn mt-2 btn-success">Login</button>
                    </div>
                </form>
            </div>
            
        )
    }
}
