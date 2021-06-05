import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [cartId, setcartId] = useState('');
  const [document_title, setDocumentTitle] = useDocumentTitle('Orders');

  const url = new URL('https://api.chec.io/v1/orders');

  let params = {
    limit: '10',
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );

  let headers = {
    'X-Authorization': process.env.REACT_APP_CHEC_PUBLIC_SECRET,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const getCartId = () => {
    var name = 'commercejs_cart_id=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };
  useEffect(async () => {
    setcartId(getCartId());
    await fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setOrders(json.data);
        // setOrders(json.data.filter((order) => order.cart_id === cartId));
        setFetching(false);
      });
  }, []);

  return (
    <div>
      {fetching ? (
        <p>Fetching Orders</p>
      ) : (
        orders.map((order) => {
          console.log(order);
          return (
            <div className="border rounded" key={order.id}>
              <div className="container">
                <h5 className="card-title">Order ID: {order.id}</h5>
                <h5 className="card-title">
                  Amount: {order.order_value.formatted_with_symbol}
                </h5>
                <p className="card-text">
                  Payment Status: {order.status_payment}
                </p>
                <p className="card-text">
                  Delivery Status: {order.status_fulfillment}
                </p>
                <h5>Order Items:</h5>
                <ul>
                  {order.order.line_items.map((item) => {
                    return <li key={item.id}>{item.product_name}</li>;
                  })}
                </ul>
              </div>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Orders;
