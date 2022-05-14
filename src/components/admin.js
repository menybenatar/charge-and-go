import React, { Component } from "react";
import NavBar from "./navBar";
import "../css/admin.css";

export default class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [
      <NavBar></NavBar>,
      <div className="row">
        <div class="col-md-4 col-sm-12 col-lg-3 ">
          <div>
            <button type="button" class="btn btn-info btn-lg">
              Info
            </button>
            <button type="button" class="btn btn-info btn-lg">
              Info
            </button>
          </div>
        </div>
        <div class="col bg-secondary main ">
          <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
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
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
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
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
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
        </div>
      </div>,
    ];
  }
}
