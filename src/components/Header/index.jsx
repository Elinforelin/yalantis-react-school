import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import { routes } from '../../constants/routes';

import classes from './styles.module.css';

const Header = ({ quantity }) => {
  let match = useRouteMatch(routes.shoppingCart);

  return (
    <div className={classes.wrapper}>
      <NavLink to={routes.productsList}>Products</NavLink>
      {match === null && (
        <NavLink to={routes.shoppingCart}>
          Shoppind Cart: {!quantity ? '0' : quantity.count}
        </NavLink>
      )}
    </div>
  );
};

export default Header;
