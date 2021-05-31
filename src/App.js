import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/product">
            <Product />
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
