import bars from '../assets/images/bars.svg';
import cart_empty from '../assets/images/cart-empty.svg';
import search from '../assets/images/search.svg';
import down from '../assets/images/down.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const loginUser = () => {
    setIsLoggedIn(true);
  };
  const logoutUser = () => {
    setIsLoggedIn(false);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_body">
          <div className="header_body_left">
            <span className="logo">
              <Link to="/">{process.env.REACT_APP_NAME}</Link>
            </span>
            <form className="header_form">
              <input type="text" placeholder="Seach for product / category" />
              <button className="search_btn">
                <img src={search} alt="" />
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
                <img src={bars} alt="" />
              </button>
              <span className="logo">
                <Link to="/">{process.env.REACT_APP_NAME}</Link>
              </span>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      aria-expanded="false"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      id="navbarDropdownMenuLink"
                      role="button"
                    >
                      Categories
                      <img src={down} alt="" />
                    </Link>

                    <ul
                      aria-labelledby="navbarDropdownMenuLink"
                      className="dropdown-menu"
                    >
                      <li>
                        <Link to={'/category/shoes'}>Shoes</Link>
                      </li>
                      <li>
                        <Link to={'/category/jackets'}>Jackets</Link>
                      </li>
                      <li>
                        <Link to={'/category/belts'}>Belts</Link>
                      </li>
                      <li>
                        <Link to={'/category/bags'}>Bags</Link>
                      </li>
                      <li>
                        <Link to={'/category/wallets'}>Wallets</Link>
                      </li>
                    </ul>
                  </li>
                  {!isLoggedIn ? (
                    <li>
                      <button
                        className="header_btn"
                        onClick={() => {
                          loginUser();
                        }}
                      >
                        Login
                      </button>
                    </li>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <Link
                          to="/account"
                          aria-expanded="false"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          id="navbarDropdownMenuLink"
                          role="button"
                        >
                          My Account <img src={down} alt="" />
                        </Link>

                        <ul
                          aria-labelledby="navbarDropdownMenuLink"
                          className="dropdown-menu"
                        >
                          <li>
                            <Link to={'/account'}>My Profile</Link>
                          </li>
                          <li>
                            <Link to={'/account/orders'}>Orders</Link>
                          </li>
                          <li>
                            <Link to={'/account/wishlist'}>Wishlist</Link>
                          </li>
                          <li>
                            <button
                              className="header_btn"
                              onClick={() => {
                                logoutUser();
                              }}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link to={'/cart'}>
                          <img src={cart_empty} alt="" />
                        </Link>
                      </li>
                    </>
                  )}
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
