import { findAllByLabelText, findByText } from "@testing-library/react";
import axios from "axios";
import React, { Component } from "react";
import "../css/editProfile.css";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="h-100 p-5 border rounded-3" style={{ overflowY: "scroll" }}>
        <div class="container py-5 rounded-3">
          <div class="row g-3" style={{ "background-color": "white" }}>
            <div class="">
              <h4 class="mb-3">Edit Profile</h4>
              <form
                class="needs-validation"
                action="http://10.0.0.5:4000/user/login"
                method="put"
                novalidate
              >
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      First name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Last name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="phone" class="form-label">
                      Phone
                    </label>
                    <input
                      nume="phone"
                      class="form-control"
                      id="phone"
                      placeholder="050-1234567"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your number.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      nume="password"
                      class="form-control"
                      id="password"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your password.
                    </div>
                  </div>

                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
