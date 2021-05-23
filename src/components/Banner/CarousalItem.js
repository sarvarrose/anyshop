function CarousalItem({ index, item }) {
  return (
    <div className={`carousel-item${index === 0 ? ' active' : ''}`}>
      <div className="banner_main">
        <div className="banner_main_left">
          <h1 className="heading_first">{item.heading}</h1>
          <div className="banner_content">
            <span className="banner_desc">{item.description}</span>
            <span className="banner_discount_price">
              {item.price_description}
            </span>
            <a className="add_btn" href={item.link}>
              Add to Cart
            </a>
          </div>
        </div>
        <div className="banner_main_right">
          <img src={item.image_path} alt="banner_img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default CarousalItem;
