import facebook from '../assets/images/facebook.svg';
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_main">
          <div className="footer_item">
            <span className="logo">{process.env.REACT_APP_NAME}</span>
          </div>
          <div className="footer_item">
            <span className="f_link_header">Quick Links</span>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/sitemap">Sitemap</Link>
            </ul>
          </div>
          <div className="footer_item">
            <span className="f_link_header">Company</span>
            <ul>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </ul>
          </div>
          <div className="footer_item">
            <span className="f_link_header">Policies</span>
            <ul>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          <div className="copyRight_body">
            <span>
              ©<Link to="/">AnyShop</Link> {new Date().getFullYear()}. All
              Rights Reserved.
            </span>
            <div className="social_media">
              <span>Follow us:</span>
              <ul>
                <li>
                  <a href="https://www.facebook.com">
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <img src={linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <img src={youtube} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
