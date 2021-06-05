import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

import { Link } from 'react-router-dom';

function CartItem({ item, handleUpdateCartQty, handleRemoveFromCart }) {
  console.log(item);
  return (
    <div className="shopping_body">
      <div className="product_items">
        <div className="item_img_btn">
          <Link to={'/product/' + item.id}>
            <div className="item_img">
              <img
                src={item.media.source}
                className="img-fluid"
                alt="cartImg"
              />
            </div>
          </Link>
          <div className="item_add_btn">
            <span
              className="minus"
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              <img src={minus} alt="" />
            </span>
            <span className="dynamic_text">{item.quantity}</span>
            <span
              className="plus"
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              <img src={plus} alt="" />
            </span>
          </div>
        </div>
        <div className="item_content">
          <Link to={'/product/' + item.id}>
            <span className="item_title">{item.name}</span>
          </Link>
          <div className="price_sec">
            <span className="fixed_price">
              {item.price.formatted_with_symbol}
            </span>
          </div>
          <div className="remove_items">
            <a
              onClick={() => {
                handleRemoveFromCart(item.id);
              }}
            >
              Remove
            </a>
          </div>
        </div>
      </div>
      <div className="delivery_date">
        <span className="delivey_desc">Expected Delivery</span>
        <span className="cnf_date">3 days</span>
      </div>
    </div>
  );
}

export default CartItem;
