import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import cookie from "react-cookies";
// import "./signin.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.emailChange = this.emailChange.bind(this);
    // this.passwordChange = this.passwordChange.bind(this);
    // this.login = this.login.bind(this);
    this.state = { token: undefined, email: "", password: "" };
  }

  //   emailChange(e) {
  //     this.setState({ ...this.state, email: e.target.value });
  //   }

  //   passwordChange(e) {
  //     this.setState({ ...this.state, password: e.target.value });
  //   }
  render() {
    return (
      <main>
        <h1>home</h1>
      </main>
    );
  }
}
