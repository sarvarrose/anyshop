import '../assets/styles/auth.css';
import { ReactComponent as FacebookIcon } from '../assets/images/facebook.svg';
import { ReactComponent as GoogleIcon } from '../assets/images/google.svg';
function Auth() {
  return (
    <div className="sign_login">
      <div className="container">
        <div className="sign_login_sec">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Login
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Sign up
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="login">
                <div className="login_header">
                  <span>
                    Don't have an account? <a href="#">Sign up</a>
                  </span>
                </div>
                <div className="login_body">
                  <form className="from">
                    <input type="text" placeholder="Enter Email / Phone" />
                    <input type="password" placeholder="Enter Password" />
                    <a href="#" className="forget_pass">
                      Forgot Password?
                    </a>
                    <button className="login_btn">Login</button>
                  </form>
                  <span className="or">OR</span>
                  <div className="social_login">
                    <a className="btn-google" href="#">
                      <div className="google-content">
                        <div className="logo">
                          <GoogleIcon />
                        </div>
                        <p>Sign in with Google</p>
                      </div>
                    </a>
                    <a className="btn-fb" href="#">
                      <div className="fb-content">
                        <div className="logo">
                          <FacebookIcon />
                        </div>
                        <p>Sign in with Facebook</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="sign_up">
                <div className="login">
                  <div className="login_header">
                    <span>
                      New to <a href="/">AnyShop</a>
                    </span>
                  </div>
                  <div className="login_body">
                    <form className="from">
                      <input type="text" placeholder="Enter Email / Phone" />
                      <input type="text" placeholder="Enter Name" />
                      <input type="password" placeholder="Enter Password" />
                      <button className="login_btn">Signup</button>
                    </form>
                    <span className="or">OR</span>
                    <div className="social_login">
                      <a className="btn-google" href="#">
                        <div className="google-content">
                          <div className="logo">
                            <GoogleIcon />
                          </div>
                          <p>Signup with Google</p>
                        </div>
                      </a>
                      <a className="btn-fb" href="#">
                        <div className="fb-content">
                          <div className="logo">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </div>
                          <p>Signup with Facebook</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
