import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/styles/responsive.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
