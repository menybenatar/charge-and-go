import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import cookie from "react-cookies";
import "../styles/login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);
    this.appState = this.props.appState;
    this.state = { token: undefined, email: "", password: "" };
  }

  async login(e) {
    e.preventDefault();
    let res;
    let token;
    try {
      // const res = await axios.post("http://10.0.0.5:4000/user/login", {
      //   email: this.email,
      //   password: this.password,
      // });
      // const token = res.body.token;  todo whis shai and yair !!!
      token = "1234";
      cookie.save("token", token);
    } catch (err) {
      token = "1234";
      cookie.save("token", token);
    }
    this.appState({ token: token });
  }
  emailChange(e) {
    this.setState({ ...this.state, email: e.target.value });
  }

  passwordChange(e) {
    this.setState({ ...this.state, password: e.target.value });
  }
  render() {
    return (
      <main class="form-signin">
        <form onSubmit={this.login}>
          <img
            class="mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={this.emailChange}
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              onChange={this.passwordChange}
              required
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    );
  }
}
