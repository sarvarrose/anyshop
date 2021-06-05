import CarousalButton from './CarousalButton';
import CarousalItem from './CarousalItem';

function Banner({ products }) {
  return (
    <section className="banner_sec">
      <div className="container">
        <div
          id="carouselExampl"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {products.map((product, index) => {
              return <CarousalButton key={index} index={index} />;
            })}
          </div>
          <div className="carousel-inner">
            {products.map((product, index) => {
              return (
                <CarousalItem key={index} index={index} product={product} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
