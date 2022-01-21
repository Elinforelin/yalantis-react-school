import { useSelector } from 'react-redux';

import classes from './styles.module.css';
import Img from '../../assets/img/original.png';
import { useProductDetails } from './useProductDetails';
import { getProductStatus } from '../../store/product/selectors';
import { requestStatuses } from './../../constants/requestStatuses';

const ProductDetails = () => {
  const { product, addToCartClick } = useProductDetails();
  const requestStatus = useSelector(getProductStatus);

  if (requestStatus === requestStatuses.loading || !product?.id) {
    return <div className={classes.wrapper}>Loading...</div>;
  }

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
      {!product.isEditable && (
        <button className={classes.addBtn} onClick={addToCartClick}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
