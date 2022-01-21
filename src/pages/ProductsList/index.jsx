import { useDispatch, useSelector } from 'react-redux';

import { setEditable } from '../../store/products/reducer';
import { useProductList } from './useProductList';
import { getProductsStatus } from '../../store/products/selectors';
import { requestStatuses } from './../../constants/requestStatuses';
import classes from './style.module.css';
import ProductsCatalog from './../../components/ProductsСatalog/index';

const ProductsList = () => {
  const { products, selectOnChange } = useProductList();
  const dispatch = useDispatch();
  const requestStatus = useSelector(getProductsStatus);

  dispatch(setEditable(''));
  if (requestStatus === requestStatuses.loading || !products) {
    return <div className={classes.request}>Loading...</div>;
  }

  return (
    <div>
      <ProductsCatalog products={products} selectOnChange={selectOnChange} />
    </div>
  );
};

export default ProductsList;
