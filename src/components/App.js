import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Login from './Login';
import Signin from './Signin';
import NewsList from './NewsList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NewsShow from './NewsShow';
import ScrapBooksContainer from '../containers/scrapbooksContainer'

class App extends Component {

  constructor(){
    super();
    this.state = {
      auth: { user: {} }
    };
  }

  handleLogin(user){
    this.setState({
      auth: { user }
    })
    localStorage.setItem('user', user.jwt)
  }

  handleLogout(user){
    this.setState({
        auth: { user: {} }
    })
    localStorage.removeItem('user')
  }

render(){
  return (
    <Router>
      <div>
        <Navbar 
          user={this.state.auth.user}
          handleLogout={() => this.handleLogout()}
        />
            <Switch>
            <Route exact path="/login" render={(routeProps) => {
              return <Login {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} />
            }} />
            <Route exact path="/signin" render={(routeProps) => {
              return <Signin {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} />
            }} />
            <Route exact path="/newslist" render={(routeProps) => {
              return <NewsList {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} />
            }} />
            <Route exact path="/newslist/:id" component={NewsShow} />
            <Route exact path="/scrapbooks" render={(routeProps) => {
              return <ScrapBooksContainer {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} />
            }} />
            </Switch>
          </div>
    </Router>
    )
  }
}

export default App;
