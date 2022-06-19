import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import "../css/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    let res;
    let token;
    try {
      // const res = await axios.post("http://10.0.0.5:4000/user/login", {
      //   email: this.email,
      //   password: this.password,
      // });
      // const token = res.body.token;  todo whis shai and yair !!!

      cookie.save("token", token);
      cookie.save("admin", true);
      cookie.save("notifications", true);

      navigate("/home");
    } catch (err) {
      setError(true);
    }
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <main className="form-signin">
      <form onSubmit={login}>
        <img
          className="mb-4"
          src="home_logo.png"
          alt=""
          width="80%"
          height="80%"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={emailChange}
            required
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={passwordChange}
            required
            title=" merki"
            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          >
            {/* <div></div> */}
          </input>
          <label>Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>

        <div
          className={
            "alert alert-danger m-1  p-2 " + (error ? "d-block" : "d-none")
          }
          role="alert"
        >
          Connection failed!
        </div>
      </form>
    </main>
  );
}
