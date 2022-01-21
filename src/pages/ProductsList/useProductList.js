import { useEffect } from 'react';

import { endpoints } from './../../constants/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../store/products/selectors';
import { clearProductList, setOrigins } from '../../store/products/reducer';
import { useFetchAllProducts } from '../../hooks/useFetchAllProducts';
import { fetchAllProducts } from '../../store/products/actions';

export const useProductList = () => {
  const dispatch = useDispatch();
  const { list: products } = useSelector(getProductsList);

  const { fetch } = useFetchAllProducts();

  const selectOnChange = (selectedOptions) => {
    const optionValues = selectedOptions.map(({ value }) => value);
    dispatch(setOrigins(optionValues));
    fetch({ newOrigins: optionValues });
  };

  useEffect(() => {
    dispatch(fetchAllProducts({ endpoints: endpoints.products.list() }));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearProductList());
    };
  }, []);

  return {
    products,
    selectOnChange,
  };
};
