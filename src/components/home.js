import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import cookie from "react-cookies";
import "../css/home.css";
import MapView from "../components/mapView";
import TabView from "../components/tabView";
import MyFancyComponent from "../components/map"

// import "./signin.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { token: undefined, email: "", password: "" };
    this.setStateApp = this.props.setStateApp;
    this.validateToken = this.validateToken.bind(this);
  }

  validateToken() {
    let token;
    try {
      // const res = await axios.post("http://10.0.0.5:4000/user/login", {
      //   email: this.email,
      //   password: this.password,
      // });
      // const token = res.body.token;  todo whis shai and yair !!!
    } catch (err) {
      cookie.remove("token");
      this.setStateApp({ token: undefined });
    }
  }
  render() {
    this.validateToken();
    return (
      <div class="App">
        <nav class="navbar navbar-light navbar-expand-lg fixed-top  p-2" style={{"backgroundColor": "#e3f2fd"}}>
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Features
              </a>
              <a class="nav-item nav-link" href="#">
                Pricing
              </a>
              <a
                class="nav-item nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </nav>

        <div>
          <div class="split left">
            <TabView> </TabView>
          </div>
          <div class="split right">
            <MapView> </MapView>
          </div>
        </div>
      </div>
    );
  }
}
