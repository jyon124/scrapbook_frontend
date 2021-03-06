import React from 'react';
import { Link } from 'react-router-dom';
// const USERS = 'http://localhost:3001/api/v1/users';
const USERS = 'https://scrapbook-backend.herokuapp.com/api/v1/users';

export default class Signin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      name: '',
      error: false,
      success: false,
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    if(localStorage.getItem('user')){
        this.props.history.push('/newslist')
      } else {
        return
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
    .then(data => {
      if(data.error){
        this.setState({
          error: true,
          errorMessage: data.error
        })
      } else {
        this.setState({
          success: true,
          errorMessage: ''
        })
      }
    })
  }

  pushToLogin = () => {
    setTimeout(() => { this.props.history.push('/login') }, 700);
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
          {
          this.state.error ? 
          <div className="error-container">
              <h4 className="error-message">{this.state.errorMessage}</h4>
          </div> 
          : 
          null
          }
          {
          this.state.success ? 
          <div className="success-container">
            <h4 className="success-message">You have Successfully Signed Up!</h4>
            {this.pushToLogin()}
          </div>
          :
          null
          }
          <input onChange={(e) => this.handleNameChange(e)} value={this.state.name} type="text" name="name" placeholder="Name" className="sign-up-name" /><br/>
          <input onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} type="text" name="username" placeholder="Username" /><br/>
          <input onChange={(e) => this.handlePasswordChange(e)} value={this.state.password} type="password" name="password" placeholder="Password" /><br/>
          <input className="sign-in-btn" type="submit" value="Sign up" />
          <div className="member-link"><Link to="/login" className="nav-enter">already a member? <u>Log in</u></Link></div>
        </div>
      </form>
    )
  }
}