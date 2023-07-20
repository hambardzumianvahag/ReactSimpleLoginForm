import React, { Component } from "react";
import Tab from "./Tab";
import Register from "./Register";
import Login from "./Login";

export default class Main extends Component {
  state = {
    tab: "Register",
  };
  changeTab = (newTab) => {
    this.setState({
      tab: newTab,
    });
  };
  render() {
    return (
      <div className="Main">
        <Tab changeTab={this.changeTab} />
        {this.state.tab === "Register" ? <Register /> : <Login />}
      </div>
    );
  }
}
