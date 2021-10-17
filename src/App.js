
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { Component } from 'react';
import axios from 'axios';

export default class App extends Component{
  state = {}

  componentDidMount=()=>{
       

    axios.get('user').then(
        res =>{
           this.setUser(res.data)
            console.log(res);
        },
        err =>{
            console.log(err);
        }
    )
};
 setUser = user =>{
  this.setState({
    user:user
  })
}
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      
 
     <Header user={this.state.user} setUser={this.setUser}/>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={()=><Home user={this.state.user}/>} />
            <Route exact path="/login" component={() => <Login setUser={this.setUser}/>} />
            <Route exact path="/register" component={Register} />

            </Switch>
        
        </div>
      </div>


    </div>
    </BrowserRouter>
  );
  }
}


