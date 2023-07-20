import React, { Component } from "react";

export default class Register extends Component {
  state = {
    login: {
      email: "",
      username: "",
      password1: "",
      password2: "",
      checked: false,
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
  isChecked = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        checked: e.target.checked,
      },
    });
  };
  submitForm = () => {
    function isEmailValid(email) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    }
    let login = this.state.login;
    if (login.username === "" || login.email === "" || login.checked !== true) {
      alert("Something went wrong! Please fill all fields");
    } else if (!isEmailValid(login.email)) {
      alert("Something went wrong! Please enter valid email");
    } else if (login.password1 !== login.password2) {
      alert("Something went wrong! your password doesn't match each other");
    } else if (
      login.password1 === login.password2 &&
      login.password1.length < 6
    ) {
      alert("Something went wrong! password must be at least 6 characters");
    } else {
      alert("Congrats! You Successfully Registered");
      localStorage.setItem("User", JSON.stringify(login));
    }
  };
  render() {
    return (
      <div className="Register">
        <input
          onChange={this.inputVal}
          name="username"
          type="text"
          placeholder="Enter Your Username"
        />{" "}
        <br />
        <input
          onChange={this.inputVal}
          name="email"
          type="text"
          placeholder="Enter Your Email"
        />{" "}
        <br />
        <input
          onChange={this.inputVal}
          name="password1"
          type="password"
          placeholder="Enter Your Password"
        />{" "}
        <br />
        <input
          onChange={this.inputVal}
          name="password2"
          type="password"
          placeholder="Confirm Your Password"
        />{" "}
        <br />
        <label>
          <input onChange={this.isChecked} type="checkbox" />I agree to the{" "}
          <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
            terms & conditions.
          </a>
        </label>{" "}
        <br />
        <button onClick={this.submitForm}>Register</button>
      </div>
    );
  }
}
