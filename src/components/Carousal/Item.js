function Item() {
  return (
    <a className="product" href="#">
      <div className="product_body">
        <div className="product_image">
          <img
            src="/images/product-1.jpeg"
            alt="product_img"
            className="img-fluid"
          />
        </div>
        <div className="product_content">
          <span className="p_name">Product Name</span>
          <span className="p_off">Min 60% Off</span>
          <span className="p_shop">Shop Now!</span>
        </div>
      </div>
    </a>
  );
}

export default Item;
