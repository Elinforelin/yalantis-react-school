import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import ProductsList from '../pages/ProductsList';
import ShoppingCart from '../pages/ShoppingCart';

import ProductDetails from '../pages/ProductDetails';
import Header from '../components/Header';
import { routes } from '../constants/routes';

const RoutesShopPages = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            path={routes.productDetails}
            render={() => <ProductDetails />}
          />
          <Route path={routes.productsList} render={() => <ProductsList />} />
          <Route path={routes.shoppingCart} render={() => <ShoppingCart />} />
          <Redirect to={routes.productsList} />
        </Switch>
      </div>
    </Router>
  );
};

export default RoutesShopPages;
