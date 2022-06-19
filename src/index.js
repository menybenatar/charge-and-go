import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Profile from "./components/profile";
import ProtectedRoutes from "./components/protectedRoutes";
import AdminRoutes from "./components/adminRoutes";
import Admin from "./components/new_admin";
import NavBar from "./components/navBar";
import Notifications from "./components/notifications_window";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: undefined };
    this.setStateApp = this.setState.bind(this);
  }
  // only once is call
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.token !== nextState.token;
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
