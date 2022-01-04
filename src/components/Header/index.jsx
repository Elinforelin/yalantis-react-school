import { useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { selectQuantity } from '../../store/shoppingCart/selectors';
import classes from './styles.module.css';

const Header = () => {
  let match = useRouteMatch(routes.shoppingCart);
  const quantity = useSelector(selectQuantity);

  return (
    <div className={classes.wrapper}>
      <NavLink to={routes.productsList}>Products</NavLink>
      {match === null && (
        <NavLink to={routes.shoppingCart}>
          Shoppind Cart: {!quantity ? '0' : quantity}
        </NavLink>
      )}
    </div>
  );
};

export default Header;
