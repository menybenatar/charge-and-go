import React, { Component } from "react";
import NavBar from "./navBar";
import Sidebar from "./sidebar";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container-fluid p-0" style={{ overflowX: "hidden" }}>
        <NavBar />
        <div className="row">
          <Sidebar
            items={[
              {
                label: "meny 1",
                handleClick: () => {},
              },
              {
                label: "meny 2",
                handleClick: () => {},
              },
              {
                label: "meny 3",
                handleClick: () => {},
              },
            ]}
          />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main>
        </div>
      </div>
    );
  }
}
