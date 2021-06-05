import '../assets/styles/home.css';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { commerce } from '../lib/commerce';
import Banner from '../components/Banner';

const { featuredProducts, dealsOfTheDay } = require('../config');

function Home() {
  const [featured, setFeatured] = useState([]);
  const [deals, setDeals] = useState([]);
  const [fetching, setFetching] = useState(true);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(async () => {
    await fetchAllProducts().then((products) => {
      let tempFeatured = [];
      let tempDeals = [];
      products.forEach((product) => {
        if (featuredProducts.includes(product.id)) {
          tempFeatured.push(product);
        }
        if (dealsOfTheDay.includes(product.id)) {
          tempDeals.push(product);
        }
      });
      setFeatured(tempFeatured);
      setDeals(tempDeals);
      setFetching(false);
    });
  }, []);

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

  const CarousalItem = ({ product }) => {
    return (
      <Link className="product" to={'/product/' + product.id}>
        <div className="product_body">
          <div className="product_image">
            <img
              src={product.assets[0].url}
              alt="product_img"
              className="img-fluid"
            />
          </div>
          <div className="product_content">
            <span className="p_name">{product.name}</span>
            <span className="p_off">{product.price.formatted_with_symbol}</span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <Banner products={featured} />
      <section className="deals_sec">
        <div className="container">
          <div className="deals_header">
            <h1 className="second_heading">Categories</h1>
            <Link to="/search" className="view_btn">
              VIEW ALL
            </Link>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">Shoes</div>
              <div className="col">Jackets</div>
              <div className="col">Bag</div>
              <div className="col">Wallets</div>
            </div>
          </div>
        </div>
      </section>
      <section className="deals_sec">
        <div className="container">
          <div className="deals_header">
            <h1 className="second_heading">Categories</h1>
            <Link to="/search" className="view_btn">
              VIEW ALL
            </Link>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">Shoes</div>
              <div className="col">Jackets</div>
              <div className="col">Bag</div>
              <div className="col">Wallets</div>
            </div>
          </div>
        </div>
      </section>
      <section className="deals_sec">
        <div className="container">
          <div className="deals_header">
            <h1 className="second_heading">Deals of the Day</h1>
            <Link to="/search" className="view_btn">
              VIEW ALL
            </Link>
          </div>
          <Carousel responsive={responsive} infinite={true}>
            {deals.map((product, index) => {
              return <CarousalItem key={index} product={product} />;
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Home;
