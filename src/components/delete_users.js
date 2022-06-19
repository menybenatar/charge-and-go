import React, { useState, useRef } from "react";
import "../css/home.css";
import MapView from "../components/mapView";
import TabView from "../components/tabView";
import NavBar from "./navBar";

export default function DeleteUsers() {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  function delete_user(e) {
    e.preventDefault();
    try {
      // const res = await axios.post("http://10.0.0.5:4000/user/login", {
      //   email: this.email,
      //   password: this.password,
      // });
      // const token = res.body.token;  todo whis shai and yair !!!
      //   cookie.save("token", token);
      //   cookie.save("admin", true);
      //   navigate("/home");
    } catch (err) {}
    emailRef.current.value = "";
    e.submit();
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <main className="form-signin">
        <form onSubmit={delete_user}>
          <h1 className="h3 mb-3 fw-normal">Enter User To Delete</h1>

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
            Delete
          </button>
        </form>
      </main>
    </div>
  );
}
