import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { getQuantity } from '../../store/shoppingCart/selectors';
import Modal from '../Modal';
import classes from './styles.module.css';
import ProductForm from '../ProductForm';
import { setModalActive } from '../../store/modal/reducer';

const Header = () => {
  const matchWithShoppingCart = useRouteMatch(routes.shoppingCart);
  const quantity = useSelector(getQuantity);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setModalActive(true));
  };

  return (
    <div className={classes.wrapper}>
      <NavLink to={routes.productsList}>Products</NavLink>
      <NavLink to={routes.myProducts}>My products</NavLink>
      <Modal>
        <ProductForm />
      </Modal>

      {matchWithShoppingCart === null && (
        <>
          <button className={classes.createProduct} onClick={openModal}>
            Create product
          </button>
          <NavLink to={routes.shoppingCart}>
            Shoppind Cart: {!quantity ? '0' : quantity}
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
