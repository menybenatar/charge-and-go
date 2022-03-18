import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  function logout() {
    cookie.remove("token");
    navigate("/login");
  }

  return (
    <nav
      className="navbar navbar-light navbar-expand-lg fixed-top  p-2"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <a className="navbar-brand" href="/">
        Charge&Go
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
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
          <a className="nav-item nav-link" href="pricing">
            Pricing
          </a>
          <a className="nav-item nav-link" href="" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}
