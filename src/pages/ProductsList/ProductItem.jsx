import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from './styles.module.css';
import Img from '../../assets/img/original.png';
import { endpoints } from '../../constants/endpoints';
import { addToCart } from '../../store/shoppingCart/reducer';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartClick = () => dispatch(addToCart(product));

  return (
    <div className={classes.products}>
      <Link to={endpoints.products.details(product.id)}>
        <img src={Img} alt="product" />
        <div className={classes.name}>{product.name.toUpperCase()}</div>
        <small>{product.origin}</small>
      </Link>
      <div>
        {product.price}
        {'₴'}
      </div>
      <button className={classes.addBtn} onClick={addToCartClick}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
