import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import cookie from "react-cookies";
// import "./signin.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { token: undefined, email: "", password: "" };
  }
  render() {
    return (
      <main>
        <h1>home</h1>
      </main>
    );
  }
}
