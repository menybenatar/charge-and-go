import React, { Component } from "react";
import NavBar from "./navBar";

export default class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Admin Page</h1>
      </div>
    );
  }
}
