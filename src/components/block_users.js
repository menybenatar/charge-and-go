import React, { useState, useRef } from "react";
import "../css/home.css";
import MapView from "../components/mapView";
import TabView from "../components/tabView";
import NavBar from "./navBar";
import cookie from "react-cookies";
import axios from "axios";

export default function BlockUsers() {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  async function block(e) {
    e.preventDefault();
    try {
      console.log(cookie.load("token"));
      const res = await axios.put(
        "http://localhost:80/api/users/block/" + email,
        null,
        {
          headers: {
            Authorization: cookie.load("token"),
          },
        }
      );
      console.log(res.data.success);
      alert("successful = " + (res.data.success == true));
    } catch (err) {
      alert("unexpected error");
    }
    emailRef.current.value = "";
    e.submit();
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <main className="form-signin">
        <form onSubmit={block}>
          <h1 className="h3 mb-3 fw-normal">Enter User To Block</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={emailChange}
              ref={emailRef}
              required
            />
            <label>Email address</label>
          </div>
          <button className="w-100 btn btn-lg btn-danger" type="submit">
            Block
          </button>
        </form>
      </main>
    </div>
  );
}
