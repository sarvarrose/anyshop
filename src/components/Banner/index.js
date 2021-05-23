import CarousalButton from './CarousalButton';
import CarousalItem from './CarousalItem';

function Banner() {
  let items = [
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
    <section className="banner_sec">
      <div className="container">
        <div
          id="carouselExampl"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {items.map((item, index) => {
              return <CarousalButton key={index} index={index} />;
            })}
          </div>
          <div className="carousel-inner">
            {items.map((item, index) => {
              return <CarousalItem key={index} index={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
