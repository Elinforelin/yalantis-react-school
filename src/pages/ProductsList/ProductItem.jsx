import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './styles.module.css';
import Img from '../../assets/img/original.png';
import { useAddToCart } from './../../hooks/useAddToCart';
import { ProductContext } from './../../context/ProductContext';
import { endpoints } from './../../constants/endpoints';

const ProductItem = ({ product }) => {
  const { setShoppingCart } = useContext(ProductContext);

  const { addToCart } = useAddToCart(setShoppingCart);

  const addToCartClick = () => addToCart(product);

  return (
    <div className={classes.products}>
      <Link to={endpoints.products.details(product.id)}>
        <img src={Img} alt="product" />
        <div className={classes.name}>{product.name.toUpperCase()}</div>
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
