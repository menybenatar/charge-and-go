import React, { Component } from "react";
import NavBar from "./navBar";
import Sidebar from "./sidebar";

import "../css/admin.css";

export default class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container-fluid p-0" style={{ overflowX: "hidden" }}>
        <NavBar />
        <div className="row">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
