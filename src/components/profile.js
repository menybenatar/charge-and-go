import React, { Component } from "react";
import NavBar from "./navBar";
import EditProfile from "./editProfile";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <EditProfile></EditProfile>
      </div>
    );
  }
}
