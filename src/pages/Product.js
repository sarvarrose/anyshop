import "../assets/styles/product.css";
import mobile from "../assets/images/mobile.jpeg";
import slider_arrow from "../assets/images/slider-arrow.svg";
import minus from "../assets/images/minus.svg";
import plus from "../assets/images/plus.svg";

function Product() {
  return (
    <>
      <div className="container">
        <div className="products">
          {/* slider  */}
          <div className="p_slider">
            <div
              id="carouselExampleControlssss"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={mobile} alt="items" className="img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src={mobile} alt="items" className="img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src={mobile} alt="items" className="img-fluid" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlssss"
                data-bs-slide="prev"
              >
                <img src={slider_arrow} alt="" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlssss"
                data-bs-slide="next"
              >
                <img src={slider_arrow} alt="" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="buy_btn_both">
              <a href="/" className="goto_cart purchase_btn">
                GO TO CART
              </a>
              <a href="/" className="buy_now purchase_btn">
                BUY NOW
              </a>
            </div>
          </div>
          {/* slider end */}
          {/* text  */}
          <div className="p_text">
            <a href="/">
              <span className="p_text_header">
                realme Narzo 30A (Laser Black, 32 GB) (2 GB RAM)
              </span>
              <span className="specl_pric">Special price</span>
              <span className="fixed_price">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="rupee-sign"
                  className="svg-inline--fa fa-rupee-sign fa-w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"
                  ></path>
                </svg>
                10,199
              </span>
            </a>
            <div className="product_desc">
              <ul>
                <li>2 GB RAM | 32 GB ROM | Expandable Upto 256 GB</li>
                <li>15.49 cm (6.1 inch) HD+ Display</li>
                <li>8MP Rear Camera | 5MP Front Camera</li>
                <li>5000 mAh Li-ion Polymer Battery</li>
                <li>MediaTek Helio A20 Processor</li>
              </ul>
            </div>
            <div className="color_sec">
              <div className="color_1 color_select"></div>
              <div className="color_2 color_select"></div>
            </div>
            <div className="size_sec">
              <span>SIZE:</span>
              <div className="size_all">
                <ul>
                  <li>
                    <a href="/">L</a>
                  </li>
                  <li>
                    <a href="/">M</a>
                  </li>
                  <li>
                    <a href="/">XXM</a>
                  </li>
                  <li>
                    <a href="/">XXL</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Quantity_sec">
              <span>Quantity:</span>
              <div className="item_add_btn">
                <span className="minus">
                  <img src={minus} alt="" />
                </span>
                <span className="dynamic_text">2</span>
                <span className="plus">
                  <img src={plus} alt="" />
                </span>
              </div>
            </div>
            <div className="description_details">
              <div className="details_content">
                <span className="dsc_header">5000 mAh battery</span>
                <p>
                  The 5000 mAh battery offers up to 28-hours of video playback
                  time, 121-hours of audio playback time (with headsets),
                  35-hours of 4G talktime, 12-hours of web surfing time,
                  14-hours of gaming, and 3-days of standby time.
                </p>
              </div>
              <div className="details_content">
                <span className="dsc_header">
                  2 GB of RAM and 32 GB of Storage
                </span>
                <p>
                  This smartphone is powered by a 12nm Helio A20 1.8 GHz
                  Quad-core processor and 2 GB of RAM for a smooth and
                  uninterrupted performance. Also, the 32 GB of storage space
                  lets you store music, photos, and various other files.
                </p>
              </div>
              <div className="details_content">
                <span className="dsc_header">Fingerprint and Face Unlock</span>
                <p>
                  To ensure optimum security, this smartphone has a Fingerprint
                  Sensor and Face Unlock feature. So, no one else can access
                  your phone without your knowledge.
                </p>
              </div>
            </div>
          </div>
          {/* text  */}
        </div>
      </div>
    </>
  );
}

export default Product;
