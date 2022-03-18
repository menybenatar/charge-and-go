import React, { Component } from "react";
import ReactDOM from "react-dom";
import cookie from "react-cookies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: undefined };
    this.setStateApp = this.setState.bind(this);
  }
  // only once is call
  validateToken() {
    let token = cookie.load("token");
    try {
      // const res = await axios.post("http://10.0.0.5:4000/user/login", {
      //   email: this.email,
      //   password: this.password,
      // });
      // const token = res.body.token;  todo whis shai and yair !!!
    } catch (err) {
      cookie.remove("token");
      token = undefined;
    }
    this.setStateApp({ token: token });
  }
  componentDidMount() {
    this.validateToken();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.token !== nextState.token;
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              this.state.token ? (
                <Home setStateApp={this.setStateApp} />
              ) : (
                <Login setStateApp={this.setStateApp} />
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
