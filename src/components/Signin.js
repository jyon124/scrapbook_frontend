import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// const USERS = 'http://localhost:3001/api/v1/users';
const USERS = 'https://scrapbook-backend.herokuapp.com/api/v1/users'


export default class Signin extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      name: ''
    }
  }

  handleUsernameChange(e){
    this.setState({
       username: e.target.value
    })
  }

  handleNameChange(e){
    this.setState({
       name: e.target.value
    })
  }

   handlePasswordChange(e){
      this.setState({
        password: e.target.value
      })
   }

  handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user:{
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        img_url: 'https://english.metro.taipei/images/default.png'
      }})
    }
    fetch(USERS, reqObj)
    .then(resp => resp.json())
    .then(data => console.log(data))
    this.props.history.push('/login');
  }


  render(){
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="login-body"></div>
        <div className="grad"></div>
        <div className="login-header">
        <div>Scrap<span>Book</span></div>
        </div>
        <br/>
        <div className="login">
          <input onChange={(e) => this.handleNameChange(e)} value={this.state.name} type="text" name="name" placeholder="name" /><br/><br/>
          <input onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} type="text" name="username" placeholder="username" /><br/>
          <input onChange={(e) => this.handlePasswordChange(e)} value={this.state.password} type="password" name="password" placeholder="password" /><br/>
          <input className="sign-in-btn" type="submit" value="Sign up" />
          <Link to="/login" className="nav-enter">
            <div className="member-link">already a member? <u>Log in</u></div>
          </Link>
        </div>
      </form>
    )
  }
}