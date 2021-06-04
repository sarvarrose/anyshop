import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Category from './pages/Category';
import Product from './pages/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StaticPage from './pages/StaticPage';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/category/:category">
            <Category />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/sitemap">
            <StaticPage name="Sitemap" />
          </Route>
          <Route exact path="/about-us">
            <StaticPage name="About Us" />
          </Route>
          <Route exact path="/contact-us">
            <StaticPage name="Contact Us" />
          </Route>
          <Route exact path="/privacy-policy">
            <StaticPage name="Privacy Policy" />
          </Route>
          <Route exact path="/refund-policy">
            <StaticPage name="Refund Policy" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
