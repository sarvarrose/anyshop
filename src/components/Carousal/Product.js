import Item from './Item';

function Product({ index }) {
  let items = [1, 2, 3, 4];
  return (
    <div className={`carousel-item${index === 0 ? ' active' : ''}`}>
      <div className="deals_main">
        {items.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Product;
