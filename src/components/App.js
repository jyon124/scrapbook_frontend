import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signin from './Signin';
import '../App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      auth: { user:{} }
    };
  }

  handleLogin(user){
    this.setState({
      auth: { user }
    })
  }

  handleLogout(user){
    this.setState({
        auth: { user: {} }
    })
    localStorage.removeItem('token')
  }

render(){
  return (
      <div>
        <Navbar 
          user={this.state.auth.user}
          handleLogout={() => this.handleLogout()}
        />
        <div>
          <div>
            <Route path="/login" render={(routeProps) => {
              return <Login {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} />
            }} />
            <Route path="/signin" render={(routeProps) => {
              return <Signin {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} />
            }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
