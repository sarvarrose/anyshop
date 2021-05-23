function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_body">
          <div className="header_body_left">
            <span className="logo">
              <a href="/cart">AnyShop</a>
            </span>
            <form className="header_form">
              <input type="text" placeholder="Seach for product / category" />
              <button className="search_btn">
                <img src="/images/search.svg" alt="" />
              </button>
            </form>
          </div>
          <div className="header_body_right">
            <nav className="navbar-expand-lg ">
              <button
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-bs-target="#navbarNavDropdown"
                data-bs-toggle="collapse"
                type="button"
              >
                <img src="/images/bars.svg" alt="" />
              </button>
              <span className="logo">
                <a href="/cart">{process.env.APP_NAME}</a>
              </span>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/categories">Categories</a>
                  </li>
                  <li>
                    <button className="header_btn">Register</button>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      aria-expanded="false"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="/account"
                      id="navbarDropdownMenuLink"
                      role="button"
                    >
                      My Account
                      <svg
                        width="4.7"
                        height="8"
                        viewBox="0 0 16 27"
                        xmlns="http://www.w3.org/2000/svg"
                        className="dropdown_arrow"
                      >
                        <path
                          d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                          fill="#fff"
                          className="_2gTTdy"
                        ></path>
                      </svg>
                    </a>
                    <ul
                      aria-labelledby="navbarDropdownMenuLink"
                      className="dropdown-menu"
                    >
                      <li>
                        <a href="/account">My Profile</a>
                      </li>
                      <li>
                        <a href="/account/orders">Orders</a>
                      </li>
                      <li>
                        <a href="/account/wishlist">Wishlist</a>
                      </li>
                      <li>
                        <button className="header_btn">Logout</button>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/cart">
                      <img src="/images/cart-empty.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
