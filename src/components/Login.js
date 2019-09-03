import React from 'react';
import Api from '../services/Api.js'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }

    handleLogin(e){
        e.preventDefault();
        const bodyObj = {
            user: {
            username: this.state.username,
            password: this.state.password
        }}
        Api.login(bodyObj)
        .then(data => {
            if(data.error){
                this.setState({
                    error: true
                })
            } else {
                this.props.handleLogin(data)
                this.props.history.push('/newslist')
            }
        })
    }

    render(){
        return (
        <form onSubmit={(e) => {this.handleLogin(e)}}>
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
                    <h4 className="error-message">Invalid username or Password</h4>
                </div> 
                : 
                null
                }
                <input onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} type="text" placeholder="username" name="user"/><br/>
                <input onChange={(e) => this.handlePasswordChange(e)} value={this.state.password} type="password" placeholder="password" name="password"/><br/>
                <input type='submit' value="Login"/>
                <Link to="/signin" className="nav-enter">
                    <div className="member-link">not a member yet? <u> Sign up</u></div>
                </Link>
            </div>
        </form>
        )
    }
}
export default Login;