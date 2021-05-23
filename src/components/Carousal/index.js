import Product from './Product';
import slider_arrow from '../../assets/images/slider-arrow.svg';

function Carousal({ title }) {
  let products = [
    {
      heading: 'Leather Belt with Brass Buckle',
      description: 'Best Seller in Belts @ 25% flat discount',
      price_description: 'Discounted Price: Rs. XXXX',
      link: '/products',
    },
    {
      heading: 'Leather Belt with Brass Buckle',
      description: 'Best Seller in Belts @ 25% flat discount',
      price_description: 'Discounted Price: Rs. XXXX',
      link: '/products',
    },
    {
      heading: 'Leather Belt with Brass Buckle',
      description: 'Best Seller in Belts @ 25% flat discount',
      price_description: 'Discounted Price: Rs. XXXX',
      link: '/products',
    },
  ];
  return (
    <section className="deals_sec">
      <div className="container">
        <div className="deals_header">
          <h1 className="second_heading">{title}</h1>
          <a href="/products" className="view_btn">
            VIEW ALL
          </a>
        </div>
        <div
          id="carouselExampleControlsss"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {products.map((product, index) => {
              return <Product key={index} index={index} product={product} />;
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsss"
            data-bs-slide="prev"
          >
            <img src={slider_arrow} alt="" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsss"
            data-bs-slide="next"
          >
            <img src={slider_arrow} alt="" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousal;
