function SideBarItem({ label, handleClick }) {
  return (
    <li class="nav-item btn order border-primary m-3">
      <a class="nav-link " aria-current="page" onClick={handleClick}>
        {label}
      </a>
    </li>
  );
}

export default function Sidebar({ items }) {
  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="position-sticky pt-5">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link " href=""></a>
          </li>
          {items &&
            items.map((item) => (
              <SideBarItem
                label={item.label}
                handleClick={item.handleClick}
              ></SideBarItem>
            ))}
        </ul>
      </div>
    </nav>
  );
}
