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
                    <img src="/images/facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/linkedin.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/twitter.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/youtube.svg" alt="" />
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
