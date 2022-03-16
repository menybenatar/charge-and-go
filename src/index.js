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
    this.appState = this.setState.bind(this);
  }
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
              this.state.token ? <Home /> : <Login appState={this.appState} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

