import { Link } from 'react-router-dom';

function CarousalItem({ product, index, item }) {
  return (
    <div className={`carousel-item${index === 0 ? ' active' : ''}`}>
      <div className="banner_main">
        <div className="banner_main_left">
          <h1 className="heading_first">{product.name}</h1>
          <div className="banner_content">
            <span className="banner_desc">
              {product.price.formatted_with_symbol}
            </span>
            <span className="banner_discount_price">Description</span>
            <Link className="add_btn" to={'/product/' + product.id}>
              Add to Cart
            </Link>
          </div>
        </div>
        <div className="banner_main_right">
          <img
            src={product.assets[0].url}
            alt="banner_img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default CarousalItem;
