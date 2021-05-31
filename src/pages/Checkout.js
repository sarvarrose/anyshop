import '../assets/styles/checkout.css';
import Address from '../components/Checkout/Address';

function Checkout() {
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
            {addresses.map((address) => {
              return <Address key={address.id} address={address} />;
            })}
          </div>
          <div className="s_price_right">
            <div className="s_price_header">
              <span>Price Details</span>
            </div>
            <div className="shopping_price_body">
              <ul>
                <li>Price</li>
                <li>
                  <i className="rupee-sign"></i> 4499.97
                </li>
              </ul>
              <ul>
                <li>Discount</li>
                <li>
                  <i className="rupee-sign"></i> 1500
                </li>
              </ul>
              <ul>
                <li>Delivery Charges</li>
                <li className="free">FREE</li>
              </ul>
              <ul>
                <li>Coupon Applied</li>
                <li>
                  <i className="rupee-sign"></i> 80
                </li>
              </ul>
            </div>
            <div className="pay_bill_sec">
              <span className="total_price">Amount Payable</span>
              <span>
                <i className="rupee-sign"></i> 2999.97
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
