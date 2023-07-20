import React, { Component } from "react";

export default class Tab extends Component {
  render() {
    return (
      <div className="Tab">
        <button onClick={() => this.props.changeTab('Register')}>Register</button>
        <button onClick={() => this.props.changeTab('Login')}>Login</button>
      </div>
    );
  }
}
