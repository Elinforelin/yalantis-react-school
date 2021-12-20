import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import ProductsList from './pages/ProductsList';
import ShoppingCart from './pages/ShoppingCart';

import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import { routes } from './constants/routes';
import { ProductContext } from './context/ProductContext';

const RoutesShopPages = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  let quantity;
  if (shoppingCart.length) {
    quantity = shoppingCart.reduce((prev, curr) => ({
      count: prev.count + curr.count,
    }));
  }

  return (
    <Router>
      <div className="App">
        <Header quantity={quantity} />
        <Switch>
          <ProductContext.Provider value={{ setShoppingCart, shoppingCart }}>
            <Route
              path={routes.productDetails}
              render={() => <ProductDetails />}
            />
            <Route path={routes.productsList} render={() => <ProductsList />} />
            <Route path={routes.shoppingCart} render={() => <ShoppingCart />} />
            <Redirect to={routes.productsList} />
          </ProductContext.Provider>
        </Switch>
      </div>
    </Router>
  );
};

export default RoutesShopPages;
