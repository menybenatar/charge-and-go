export default function NavBar() {
  return (
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top  p-2"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <a class="navbar-brand" href="/">
        Charge&Go
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
          <a class="nav-item nav-link" href="profile">
            Profile
          </a>
          <a class="nav-item nav-link" href="pricing">
            Pricing
          </a>
        </div>
      </div>
    </nav>
  );
}
