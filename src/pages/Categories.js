import '../assets/styles/categories.css';
import { commerce } from '../lib/commerce';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  useEffect(async () => {
    await fetchProducts().then((products) => {
      setProducts(products);
      setFetching(false);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="mobile_filter">
          <button
            className=" "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="filter"
              className="svg-inline--fa fa-filter fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
              ></path>
            </svg>{' '}
            Filter
          </button>
        </div>
        <div className="categories">
          <div className="filter_sec">
            <div className="filter_item">
              <span className="filter_title">Filter</span>
              <div className="form-check">
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_one"
                  />
                  <label className="form-check-label" htmlFor="filter_one">
                    Filter 1
                  </label>
                </div>
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_two"
                  />
                  <label className="form-check-label" htmlFor="filter_two">
                    Filter 2
                  </label>
                </div>
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_three"
                  />
                  <label className="form-check-label" htmlFor="filter_three">
                    Filter 3
                  </label>
                </div>
              </div>
            </div>
            {/* brand  */}
            <div className="filter_item">
              <span className="filter_title">Brand</span>
              <div className="form-check">
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_four"
                  />
                  <label className="form-check-label" htmlFor="filter_four">
                    Filter 1
                  </label>
                </div>
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_five"
                  />
                  <label className="form-check-label" htmlFor="filter_five">
                    Filter 2
                  </label>
                </div>
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_six"
                  />
                  <label className="form-check-label" htmlFor="filter_six">
                    Filter 3
                  </label>
                </div>
              </div>
            </div>
            {/* price filter  */}
            <div className="filter_item">
              <span className="filter_title">Price Filter</span>
              <div className="form-check">
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_seven"
                  />
                  <label className="form-check-label" htmlFor="filter_seven">
                    Filter 1
                  </label>
                </div>
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_eight"
                  />
                  <label className="form-check-label" htmlFor="filter_eight">
                    Filter 2
                  </label>
                </div>
                <div className="filers_i">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="filter_nine"
                  />
                  <label className="form-check-label" htmlFor="filter_nine">
                    Filter 3
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="categories_item">
            <div className="ct_body">
              {fetching
                ? 'Fetching Products'
                : products.map((product) => {
                    return (
                      <div className="ct_items" key={product.id}>
                        <Link to={'/product/' + product.id}>
                          <div className="ct_img">
                            <img
                              src={product.assets[0].url}
                              alt="items"
                              className="img-fluid"
                            />
                          </div>
                          <div className="product_content_all">
                            <span className="p_name">{product.name}</span>
                          </div>
                          <div className="price_sec">
                            <span className="fixed_price">
                              {product.price.formatted_with_symbol}
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const fetchProducts = async () => {
  return await commerce.products
    .list()
    .then((products) => products.data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log('There was an error fetching the products', error);
    });
};
export default Categories;
