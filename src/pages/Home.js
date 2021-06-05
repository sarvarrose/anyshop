import '../assets/styles/home.css';

import React, { useState, useEffect } from 'react';

import { commerce } from '../lib/commerce';
import Banner from '../components/Banner';
import Carousal from '../components/Carousal';
const { featuredProducts, dealsOfTheDay } = require('../config');
function Home() {
  const [featured, setFeatured] = useState([]);
  const [deals, setDeals] = useState([]);
  const [fetching, setFetching] = useState(true);

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

  return (
    <>
      <Banner products={featured} />
      <Carousal products={deals} />
    </>
  );
}

export default Home;
