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
    <section class="checkout_sec">
      <div class="container">
        <div class="shopping_address">
          <div class="shopping_left">
            <div class="shopping_header">
              <h2 class="second_heading">Shipping Address</h2>
              <div class="select_new_address">
                <a href="#">
                  <i class="fas fa-plus"></i> New Address
                </a>
              </div>
            </div>
            {addresses.map((address) => {
              return <Address key={address.id} address={address} />;
            })}
          </div>
          <div class="s_price_right">
            <div class="s_price_header">
              <span>Price Details</span>
            </div>
            <div class="shopping_price_body">
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
                <li class="free">FREE</li>
              </ul>
              <ul>
                <li>Coupon Applied</li>
                <li>
                  <i className="rupee-sign"></i> 80
                </li>
              </ul>
            </div>
            <div class="pay_bill_sec">
              <span class="total_price">Amount Payable</span>
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
