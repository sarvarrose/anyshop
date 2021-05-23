import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';
import product_image from '../../assets/images/product-1.jpeg';

function CartItem({ item }) {
  return (
    <div className="shopping_body">
      <div className="product_items">
        <div className="item_img_btn">
          <div className="item_img">
            <img src={product_image} className="img-fluid" alt="cartImg" />
          </div>
          <div className="item_add_btn">
            <span className="minus">
              <img src={minus} alt="" />
            </span>
            <span className="dynamic_text">{item.quantity}</span>
            <span className="plus">
              <img src={plus} alt="" />
            </span>
          </div>
        </div>
        <div className="item_content">
          <span className="item_title">{item.name}</span>
          <span className="item_desc">
            This is a sample product description that
          </span>
          <span className="item_desc">can span multiple lines</span>
          <div className="price_sec">
            <span className="fixed_price">
              <i className="rupee-sign"></i> {item.price}
            </span>
            <span className="price">
              <i className="rupee-sign"></i> {item.actualPrice}
            </span>
            <span className="percent_off_price">33% Off</span>
          </div>
          <div className="remove_items">
            <a href="#">Remove</a>
            <a href="#">Move to Wishlist</a>
          </div>
        </div>
      </div>
      <div className="delivery_date">
        <span className="delivey_desc">Expected Delivery</span>
        <span className="cnf_date">Tomorrow</span>
      </div>
    </div>
  );
}

export default CartItem;
