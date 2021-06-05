import '../assets/styles/categories.css';
import { commerce } from '../lib/commerce';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import Filter from '../components/Category/Filter';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function Category() {
  const currentLocation = location.pathname;
  const [document_title, setDocumentTitle] = useDocumentTitle('Category');
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [filters, setFilters] = useState({});
  const [priceMax, setPriceMax] = useState(0);
  const [algo, setAlgo] = useState([]);
  const handleToggle = async () => {
    console.log('route changed', category);
    setFetching(true);
    setProducts([]);
    setDocumentTitle(
      'Category - ' +
        category[0].toUpperCase() +
        category.substr(1).toLowerCase(),
    );
    await fetchProducts().then((products) => {
      setProducts(products);
      setFetching(false);
    });
  };
  useEffect(async () => {
    await fetchProducts().then((products) => {
      setProducts(products);
      setFetching(false);
    });
    await fetchAllProducts().then((products) => {
      let algoProd = algo;
      products.forEach((product) => {
        let tempProd = {
          id: product.id,
          name: product.name,
          price: product.price.raw,
          category: product.categories[0].name,
          image: product.assets[0].url,
        };
        algoProd.push(tempProd);
      });
      console.log(algoProd);
      console.log(products);
      setAlgo(algoProd);
      //   setFetching(false);
    });
  }, []);

  useEffect(() => {
    handleToggle();
  }, [currentLocation]);
  useEffect(() => {
    let filtersObj = {};
    if (products.length) {
      products.forEach((product) => {
        // console.log(product);
        let productPriceRounded = Math.ceil(product.price.formatted / 10) * 10;
        if (priceMax < productPriceRounded) {
          setPriceMax(productPriceRounded);
        }
        product.variant_groups.forEach((variant) => {
          let variantOptions = [];
          variant.options.forEach((option) => {
            variantOptions.push(option.name);
          });
          let variantName = variant.name;
          if (variantName in filtersObj) {
            filtersObj[variantName] = filtersObj[variantName].concat(
              variantOptions.filter(
                (value) => !filtersObj[variantName].includes(value),
              ),
            );
          } else {
            filtersObj[variantName] = variantOptions;
          }
        });
      });
      setFilters({ ...filtersObj });
    }
  }, [products]);

  const fetchProducts = async () => {
    return await commerce.products
      .list({
        category_slug: [category],
      })
      .then((products) => {
        return products.data;
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  };

  const fetchAllProducts = async () => {
    return await commerce.products
      .list()
      .then((products) => {
        return products.data;
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  };
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
          <Filter filters={filters} priceMax={priceMax} />
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

export default Category;
