import CartItem from "../components/Cart/CartItem";
import "../assets/styles/cart.css";

function Cart() {
  let cart = {
    items: [
      {
        productId: 1,
        name: "Test Product 1",
        price: "999.99",
        actualPrice: "1299.99",
        quantity: 2,
      },
      {
        productId: 2,
        name: "Test Product 2",
        price: "499.99",
        actualPrice: "649.99",
        quantity: 1,
      },
      {
        productId: 3,
        name: "Test Product 3",
        price: "256",
        actualPrice: "345",
        quantity: 1,
      },
    ],
  };
  return (
    <section className="shopping_cart">
      <div className="container">
        <div className="shopping_items">
          <div className="product_details">
            <div className="product_details_header">
              <h2 className="second_heading">
                Shopping Cart (
                {cart.items.length === 1
                  ? "1 item"
                  : `${cart.items.length} items`}
                )
              </h2>
              <div className="details_in_right">
                <span>
                  <img src="/images/heart.svg" alt="" />
                </span>
                <span>
                  <img src="/images/share.svg" alt="" />
                </span>
                <span>
                  <img src="/images/trash.svg" alt="" />
                </span>
              </div>
            </div>
            {cart.items.map((item) => {
              return <CartItem key={item.productId} item={item} />;
            })}
          </div>

          <div className="price_details">
            <div className="price_d_header">
              <span>Price Details</span>
            </div>
            <div className="price_d_body">
              <ul>
                <li>Price</li>
                <li>₹4499.97</li>
              </ul>
              <ul>
                <li>Discount</li>
                <li>₹1500</li>
              </ul>
              <ul>
                <li>Delivery Charges</li>
                <li className="free">FREE</li>
              </ul>
            </div>
            <div className="promo_code_sec">
              <input type="text" placeholder="Enter Coupon Code" />
              <button className="apply_btn">Apply</button>
            </div>
            <div className="total_price_sec">
              <span className="total_price">Total Price</span>
              <span>₹2999.97</span>
            </div>
            <div className="multi_btn">
              <button className="shopping_btn Continue">
                Continue Shopping
              </button>
              <a href="/checkout">
                <button className="shopping_btn Proceed">
                  Proceed to Checkout
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
