import { useEffect } from 'react';

import ProductsCatalog from './../../components/ProductsСatalog/index';
import { useDispatch } from 'react-redux';
import {
  setEditable,
  setOrigins,
} from './../../store/products/reducer';
import { useSelector } from 'react-redux';
import {
  getProductsList,
  getProductsStatus,
} from './../../store/products/selectors';
import { useFetchAllProducts } from '../../hooks/useFetchAllProducts';
import { endpoints } from '../../constants/endpoints';
import classes from './style.module.css';
import { requestStatuses } from './../../constants/requestStatuses';
import { fetchAllProducts } from '../../store/products/actions';

const MyProductsList = () => {
  const dispatch = useDispatch();
  const { fetch } = useFetchAllProducts();
  const { list: products } = useSelector(getProductsList);
  const requestStatus = useSelector(getProductsStatus);

  dispatch(setEditable('true'));

  const selectOnChange = (selectedOptions) => {
    const optionValues = selectedOptions.map(({ value }) => value);
    dispatch(setOrigins(optionValues));
    fetch({ newPage: 1, newOrigins: optionValues });
  };

  useEffect(() => {
    dispatch(fetchAllProducts({ endpoints: endpoints.products.myProducts() }));
  }, [dispatch]);

  if (requestStatus === requestStatuses.loading || !products) {
    return <div className={classes.request}>Loading...</div>;
  }

  return (
    <div>
      <ProductsCatalog products={products} selectOnChange={selectOnChange} />
    </div>
  );
};

export default MyProductsList;
