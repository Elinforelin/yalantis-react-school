import classes from './styles.module.css';
import Img from '../../assets/img/original.png';
import { useProductDetails } from './useProductDetails';

const ProductDetails = () => {
  const { product, addToCart } = useProductDetails();

  return (
    <div className={classes.wrapper}>
      <img src={Img} alt="" />
      <div className={classes.product}>{product.name}</div>
      <div className={classes.origin}>
        {'Origin: '}
        {product.origin}
      </div>
      <div className={classes.price}>
        {product.price}
        {' ₴'}
      </div>

      <div>
        <button className={classes.addBtn} onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
