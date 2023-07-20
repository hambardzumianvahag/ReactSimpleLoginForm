import React, { Component } from "react";

export default class Login extends Component {
  state = {
    login: {
      username: "",
      password: "",
    },
  };
  inputVal = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value,
      },
    });
  };
  loginForm = () => {
    let login = this.state.login;
    let local = localStorage.getItem("User");
    let user = JSON.parse(local);
    console.log(user);
    if(login.username===user.username && login.password!==user.password1){
      alert('Wrong Password!')
    }
    else if(login.username!==user.username && login.password===user.password1){
      alert('Wrong username')
    }
    else if(login.username!==user.username && login.password!==user.password1){
      alert('Wrong username and password')
    }
    else{
      alert('Success')
    }
  };
  render() {
    return (
      <div className="Login">
        <input
          name="username"
          onChange={this.inputVal}
          type="text"
          placeholder="Username"
        />{" "}
        <br />
        <input
          name="password"
          onChange={this.inputVal}
          type="password"
          placeholder="Password"
        />{" "}
        <br />
        <label>
          <input type="checkbox" />
          Remember Me
          <a href="https://www.facebook.com/login/identify">Forget Password?</a>
        </label>
        <br />
        <button onClick={this.loginForm}>Login</button>
      </div>
    );
  }
}
