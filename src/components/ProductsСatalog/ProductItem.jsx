import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from './styles.module.css';
import Img from '../../assets/img/original.png';
import { endpoints } from '../../constants/endpoints';
import { addToCart } from '../../store/shoppingCart/reducer';
import { routes } from './../../constants/routes';
import { setModalActive } from '../../store/modal/reducer';
import { fetchProduct } from './../../store/product/actions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const match = useRouteMatch(routes.myProducts);

  const addToCartClick = () => dispatch(addToCart(product));

  const changeProduct = async (event) => {
    await dispatch(
      fetchProduct({
        endpoints: endpoints.products.details(event.target.value),
      })
    );
    dispatch(setModalActive(true));
  };

  return (
    <div className={classes.products}>
      <Link to={`${routes.productsList}/${product.id}`}>
        <img src={Img} alt="product" />
        <div className={classes.name}>{product.name.toUpperCase()}</div>
        <small>{product.origin}</small>
      </Link>
      <div>
        {product.price}
        {'₴'}
      </div>
      {!match ? (
        <button className={classes.addBtn} onClick={addToCartClick}>
          Add to cart
        </button>
      ) : (
        <button
          className={classes.addBtn}
          onClick={changeProduct}
          value={product.id}
        >
          Edit product
        </button>
      )}
    </div>
  );
};

export default ProductItem;
