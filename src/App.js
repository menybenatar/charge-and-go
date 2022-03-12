import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import cookie from "react-cookies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Home from "./home";
// import "./signin.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.emailChange = this.emailChange.bind(this);
    // this.passwordChange = this.passwordChange.bind(this);
    // this.login = this.login.bind(this);

    this.state = { token: undefined };
    this.appState = this.setState.bind(this);
  }

  //   emailChange(e) {
  //     this.setState({ ...this.state, email: e.target.value });
  //   }

  //   passwordChange(e) {
  //     this.setState({ ...this.state, password: e.target.value });
  //   }
  componentDidMount() {
    this.setState({ token: cookie.load("token") });
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              this.state.cookie ? <Home /> : <Login appState={this.appState} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
