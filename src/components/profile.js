import React, { Component } from "react";
import NavBar from "./navBar";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Profile Page</h1>
      </div>
    );
  }
}
