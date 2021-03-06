import '../assets/styles/checkout.css';
import Address from '../components/Checkout/Address';
import { commerce } from '../lib/commerce';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [cart, setCart] = useState({
    total_unique_items: 0,
    subtotal: {
      formatted_with_symbol: '$0',
    },
    line_items: [],
  });

  const [fetching, setFetching] = useState(true);
  const [checkoutToken, setCheckoutToken] = useState('');
  const generateCheckoutToken = () => {
    if (cart.line_items.length) {
      commerce.checkout
        .generateToken(cart.id, { type: 'cart' })
        .then((token) => {
          setCheckoutToken(token);
        })
        .catch((error) => {
          console.log('There was an error in generating a token', error);
        });
    }
    // console.log(checkout);
    console.log(checkoutToken);
  };

  let addresses = [
    {
      id: 1,
      name: 'Test Address 1',
      address: 'Dummy Address 1, City, State, India - XXXXX',
      default: true,
    },
    {
      id: 2,
      name: 'Test Address 2',
      address: 'Dummy Address 2, City, State, India - XXXXX',
    },
    {
      id: 3,
      name: 'Test Address 3',
      address: 'Dummy Address 3, City, State, India - XXXXX',
    },
  ];

  useEffect(async () => {
    setCart(
      await fetchCart()
        .then((cart) => {
          console.log(cart);
          setFetching(false);
          return cart;
        })
        .catch((error) => {
          console.log(error);
          setFetching(false);
        }),
    );
  }, []);

  useEffect(() => {
    generateCheckoutToken();
    console.log(checkoutToken);
  }, [cart]);
  return (
    <section className="checkout_sec">
      <div className="container">
        <div className="shopping_address">
          <div className="shopping_left">
            <div className="shopping_header">
              <h2 className="second_heading">Shipping Address</h2>
              <div className="select_new_address">
                <a href="#">
                  <i className="fas fa-plus"></i> New Address
                </a>
              </div>
            </div>
            {fetching ? (
              <p>Fetching Cart Details</p>
            ) : cart.line_items.length ? (
              addresses.map((address) => {
                return <Address key={address.id} address={address} />;
              })
            ) : (
              <>
                <p>Your cart is empty</p>
                <Link to={'/'}>
                  <button className="shopping_btn Continue">
                    Continue Shopping
                  </button>
                </Link>
              </>
            )}
          </div>
          <div className="s_price_right">
            <div className="s_price_header">
              <span>Price Details</span>
            </div>
            <div className="shopping_price_body">
              <ul>
                <li>Price</li>
                <li>{cart.subtotal.formatted_with_symbol}</li>
              </ul>
              <ul>
                <li>Delivery Charges</li>
                <li className="free">FREE</li>
              </ul>
              <ul>
                <li>Coupon Applied</li>
                <li>{cart.subtotal.formatted_with_symbol}</li>
              </ul>
            </div>
            <div className="promo_code_sec">
              <input type="text" placeholder="Enter Coupon Code" />
              <button className="apply_btn">Apply</button>
            </div>
            <div className="pay_bill_sec">
              <span className="total_price">Amount Payable</span>
              <span>{cart.subtotal.formatted_with_symbol}</span>
            </div>
            <a href={cart.hosted_checkout_url} target="_blank" rel="noreferrer">
              <button className="shopping_btn Continue">
                Complete Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const fetchCart = () => {
  return commerce.cart.retrieve().then((cart) => {
    return cart;
  });
};

export default Checkout;
