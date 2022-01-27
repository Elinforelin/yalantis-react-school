import { useDispatch, useSelector } from 'react-redux';

import { setEditable } from '../../store/products/reducer';
import { useProductList } from './useProductList';
import ProductsCatalog from './../../components/ProductsСatalog/index';
import { useEffect } from 'react';

const ProductsList = () => {
  const { products, selectOnChange } = useProductList();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEditable(''));
  }, [dispatch]);

  return (
    <div>
      <ProductsCatalog products={products} selectOnChange={selectOnChange} />
    </div>
  );
};

export default ProductsList;
