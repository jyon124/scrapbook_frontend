import React from 'react';
import Api from '../services/Api.js'

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
        Api.login(this.state)
        .then(data => {
            if(data.error){
                this.setState({
                    error: true
                })
            } else {
                console.log("AH")
                this.props.handleLogin(data)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return (
        <div>
            <h1>Login</h1>
            {this.state.error ? <h4>Invalid username or Password</h4> : null}
            <form onSubmit={(e) => {this.handleLogin(e)}}>
                <label>Username: </label>
                <input onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} />
                <br/>
                <label>Password: </label>
                <input onChange={(e) => this.handlePasswordChange(e)} value={this.state.password} type="password" />
                <br/>
                <input type='submit' value='Login' />
            </form>
        </div>
        )
    }
}
export default Login;