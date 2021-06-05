import facebook from '../assets/images/facebook.svg';
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';

import { Link } from 'react-router-dom';

function Footer() {
  const SocialItem = (link = '', image = '') => {
    return (
      <li>
        <a href={link}>
          <img src={image} alt="" />
        </a>
      </li>
    );
  };

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
                <SocialItem link="https://www.facebook.com" image={facebook} />
                <SocialItem link="https://www.linkedin.com" image={linkedin} />
                <SocialItem link="https://twitter.com" image={twitter} />
                <SocialItem link="https://www.youtube.com" image={youtube} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
