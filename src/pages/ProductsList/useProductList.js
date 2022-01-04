import { useEffect } from 'react';

import { endpoints } from './../../constants/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductsList } from '../../store/products/selectors';
import { fetchApi, setOrigins } from '../../store/products/reducer';

export const useProductList = () => {
  const dispatch = useDispatch();
  const {
    list: products,
    page,
    perPage,
    minPrice,
    maxPrice,
  } = useSelector(selectProductsList);

  const selectOnChange = (selectedOptions) => {
    const optionValues = selectedOptions.map(({ value }) => value);
    dispatch(setOrigins(optionValues));
    dispatch(
      fetchApi(
        endpoints.products.paginationList(
          page,
          perPage,
          optionValues,
          minPrice,
          maxPrice
        )
      )
    );
  };

  useEffect(() => {
    dispatch(fetchApi(endpoints.products.list()));
  }, [dispatch]);

  return {
    products,
    selectOnChange,
  };
};
