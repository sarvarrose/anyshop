import facebook from '../assets/images/facebook.svg';
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_main">
          <div className="footer_item">
            <span className="logo">AnyShop</span>
          </div>
          <div className="footer_item">
            <span className="f_link_header">Quick Links</span>
            <ul>
              <a href="/">Home</a>
              <a href="/sitemap">Sitemap</a>
            </ul>
          </div>
          <div className="footer_item">
            <span className="f_link_header">Company</span>
            <ul>
              <a href="/about-us">About Us</a>
              <a href="/contact-us">Contact Us</a>
            </ul>
          </div>
          <div className="footer_item">
            <span className="f_link_header">Policies</span>
            <ul>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/refund-policy">Refund Policy</a>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          <div className="copyRight_body">
            <span>© AnyShop. 2021. All Rights Reserved.</span>
            <div className="social_media">
              <span>Follow us:</span>
              <ul>
                <li>
                  <a href="#">
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
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
