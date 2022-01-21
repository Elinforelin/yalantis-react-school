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
import MyProductsList from './../pages/MyProductsList';
import OrdersList from './../pages/OrdersList/index';
import OrderDetails from './../pages/OrderDetails/index';

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
          <Route path={routes.myProducts} render={() => <MyProductsList />} />
          <Route path={routes.orderDetail} render={() => <OrderDetails />} />
          <Route path={routes.orders} render={() => <OrdersList />} />
          <Redirect to={routes.productsList} />
        </Switch>
      </div>
    </Router>
  );
};

export default RoutesShopPages;
