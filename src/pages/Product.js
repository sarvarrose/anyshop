import '../assets/styles/product.css';
import slider_arrow from '../assets/images/slider-arrow.svg';
import minus from '../assets/images/minus.svg';
import plus from '../assets/images/plus.svg';

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { commerce } from '../lib/commerce';

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [variance, setVariance] = useState(0);
  const [isProduct, setIsProduct] = useState(true);
  const [fetching, setFetching] = useState(true);
  let [quantity, setQuantity] = useState(1);

  var HtmlToReactParser = require('html-to-react').Parser;
  var htmlToReactParser = new HtmlToReactParser();

  useEffect(async () => {
    await fetchProduct(id)
      .then((product) => {
        setProduct(product);
        setFetching(false);
      })
      .catch((error) => {
        setIsProduct(false);
        console.log(error);
        setFetching(false);
      });
  }, []);

  const updateQuantity = (increment = true) => {
    if (increment) {
      setQuantity(++quantity);
    } else {
      if (quantity > 1) {
        setQuantity(--quantity);
      }
    }
  };

  const fetchProduct = async (productId) => {
    return await commerce.products.retrieve(productId).then((result) => {
      return result;
    });
  };

  const handleAddToCart = (productId, quantity) => {
    console.log(product);
    commerce.cart
      .add(productId, quantity, variance)
      .then((item) => {
        this.setState({ cart: item.cart });
      })
      .catch((error) => {
        console.error('There was an error adding the item to the cart', error);
      });
  };

  const handleSetVariance = (index, e) => {
    setVariance(index);
  };

  const Slider = () => {
    return (
      <div className="p_slider">
        <div
          id="carouselExampleControlssss"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {product.assets.map((asset, index) => {
              return (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? ' active' : ''}`}
                >
                  <img
                    src={asset.url}
                    alt={asset.filename}
                    className="img-fluid"
                  />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlssss"
            data-bs-slide="prev"
          >
            <img src={slider_arrow} alt="" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlssss"
            data-bs-slide="next"
          >
            <img src={slider_arrow} alt="" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="buy_btn_both">
          <a
            className="goto_cart purchase_btn"
            onClick={() => handleAddToCart(id, quantity)}
          >
            ADD TO CART
          </a>
          <a href="/" className="buy_now purchase_btn">
            + WISHLIST
          </a>
        </div>
      </div>
    );
  };

  const QuantitySelector = () => {
    return (
      <div className="item_add_btn">
        <span
          className="minus"
          onClick={() => {
            updateQuantity(false);
          }}
        >
          <img src={minus} alt="" />
        </span>
        <span className="dynamic_text">{quantity}</span>
        <span
          className="plus"
          onClick={() => {
            updateQuantity(true);
          }}
        >
          <img src={plus} alt="" />
        </span>
      </div>
    );
  };

  const VariantSelector = ({ variant }) => {
    return (
      <div className="size_sec">
        <span>{variant.name}</span>
        <div className="size_all">
          <ul>
            {variant.options.map((option, index) => {
              return (
                <li key={option.id}>
                  {variant.options.length > 1 ? (
                    <a
                      className={index === variance ? 'selected' : ''}
                      onClick={(e) => {
                        handleSetVariance(index, e);
                      }}
                    >
                      {option.name}
                    </a>
                  ) : (
                    <a className="selected">{option.name}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  const RelatedProduct = ({ product }) => {
    return (
      <div className="item">
        <img src={product.media.source} alt="" />
        <p>
          {product.name} - {product.price.formatted_with_symbol}
        </p>
      </div>
    );
  };

  return (
    <>
      {fetching ? (
        <p>Fetching Product Details</p>
      ) : !isProduct ? (
        <p>Product Not Found</p>
      ) : (
        <div className="container">
          <div className="products">
            <Slider />
            <div className="p_text">
              <span className="p_text_header">{product.name}</span>
              {product.categories.map((category) => {
                return (
                  <Link to={'/category/' + category.slug} key={category.id}>
                    <span className="specl_pric">{category.name}</span>
                  </Link>
                );
              })}
              <span className="fixed_price">
                {product.price.formatted_with_symbol}
              </span>
              {product.conditionals.is_inventory_managed && (
                <span className="text-danger">
                  Hurry, Only {product.inventory.available} left!
                </span>
              )}
              {product.variant_groups.map((variant) => {
                return <VariantSelector variant={variant} key={variant.id} />;
              })}
              <div className="Quantity_sec">
                <span>Quantity:</span>
                <QuantitySelector />
              </div>
              <div className="description_details">
                <div className="details_content">
                  {htmlToReactParser.parse(product.description)}
                </div>
              </div>
            </div>
          </div>
          <div className="related">
            {product.related_products.slice(3).map((product) => {
              return <RelatedProduct product={product} key={product.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
