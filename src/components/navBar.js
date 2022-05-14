import { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const isAdmin = cookie.load("admin") === "true";

  function logout() {
    cookie.remove("token");
    cookie.remove("admin");
    navigate("/login");
  }

  return (
    //navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow
    <header
      className="navbar navbar-light navbar-expand-md sticky-top p-0"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <a
        className="navbar-brand"
        href="/"
        style={{ backgroundColor: "#e3f2fd", boxShadow: "none" }}
      >
        Charge&Go
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup, #sidebarMenu"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="profile">
            Profile
          </a>
          {isAdmin == true && (
            <a className="nav-item nav-link" href="Admin">
              Admin
            </a>
          )}
          <a className="nav-item nav-link" href="" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
    </header>
  );
}
