import heart from '../assets/images/heart.svg';
import share from '../assets/images/share.svg';
import trash from '../assets/images/trash.svg';

import CartItem from '../components/Cart/CartItem';
import '../assets/styles/cart.css';
import { commerce } from '../lib/commerce';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import exportFromJSON from 'export-from-json';

function Cart() {
  //   let cart = {
  //     items: [
  //       {
  //         productId: 1,
  //         name: 'Test Product 1',
  //         price: '999.99',
  //         actualPrice: '1299.99',
  //         quantity: 2,
  //       },
  //       {
  //         productId: 2,
  //         name: 'Test Product 2',
  //         price: '499.99',
  //         actualPrice: '649.99',
  //         quantity: 1,
  //       },
  //       {
  //         productId: 3,
  //         name: 'Test Product 3',
  //         price: '256',
  //         actualPrice: '345',
  //         quantity: 1,
  //       },
  //     ],
  //   };
  const [cart, setCart] = useState({
    total_unique_items: 0,
    subtotal: {
      formatted_with_symbol: '$0',
    },
  });
  const [fetching, setFetching] = useState(true);

  const ExportToExcel = () => {
    console.log('Exporting Cart Items');
    exportFromJSON({
      data: cart.line_items,
      fileName: cart.id + '.csv',
      exportType: 'csv',
    });
  };

  const handleUpdateCartQty = (lineItemId, quantity) => {
    return commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        console.log(resp.cart);
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log('There was an error updating the cart items', error);
      });
  };

  const handleRemoveFromCart = (lineItemId) => {
    return commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(
          'There was an error removing the item from the cart',
          error,
        );
      });
  };

  const handleEmptyCart = async () => {
    return await commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error('There was an error emptying the cart', error);
      });
  };
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
  return (
    <section className="shopping_cart">
      <div className="container">
        <div className="shopping_items">
          <div className="product_details">
            <div className="product_details_header">
              <h2 className="second_heading">
                Shopping Cart (
                {cart.total_unique_items === 1
                  ? '1 item'
                  : `${cart.total_unique_items} items`}
                )
              </h2>
              <div className="details_in_right">
                <span
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Export Cart Items"
                  onClick={() => ExportToExcel()}
                >
                  <img src={share} alt="share" />
                </span>
                <span
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Empty Cart"
                  onClick={() => {
                    handleEmptyCart();
                  }}
                >
                  <img src={trash} alt="trash" />
                </span>
              </div>
            </div>
            {fetching ? (
              <p>Fetching Cart Details</p>
            ) : cart.total_items ? (
              cart.line_items.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                );
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

          <div className="price_details">
            <div className="price_d_header">
              <span>Price Details</span>
            </div>
            <div className="price_d_body">
              <ul>
                <li>Price</li>
                <li>{cart.subtotal.formatted_with_symbol}</li>
              </ul>
              <ul>
                <li>Discount</li>
                <li>Calculated at checkout</li>
              </ul>
              <ul>
                <li>Delivery Charges</li>
                <li>Calculated at checkout</li>
              </ul>
            </div>

            <div className="total_price_sec">
              <span className="total_price">Cart Value</span>
              <span>{cart.subtotal.formatted_with_symbol}</span>
            </div>
            <div className="multi_btn">
              <Link to={'/'}>
                <button className="shopping_btn Continue">
                  Continue Shopping
                </button>
              </Link>
              {cart.total_items > 0 && (
                <Link to={'/checkout'}>
                  <button className="shopping_btn Proceed">
                    Proceed to Checkout
                  </button>
                </Link>
              )}
            </div>
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

export default Cart;
