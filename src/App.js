import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/styles/responsive.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
