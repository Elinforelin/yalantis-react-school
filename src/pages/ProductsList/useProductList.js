import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { endpoints } from './../../constants/endpoints';
import { getProductsList } from '../../store/products/selectors';
import {
  clearProductList, setOrigins, setPage, setMinPrice,
  setMaxPrice, setPerPage
} from '../../store/products/reducer';
import { fetchAllProducts, originsSelectFetchStart } from '../../store/products/actions';

export const useProductList = () => {
  const dispatch = useDispatch();
  const { list: products, page, perPage, minPrice, maxPrice, editable } = useSelector(getProductsList);

  const selectOnChange = (selectedOptions) => {
    const optionValues = selectedOptions.map(({ value }) => value);
    dispatch(originsSelectFetchStart({
      endpoints: endpoints.products.paginationList(
        page,
        perPage,
        optionValues,
        minPrice,
        maxPrice,
        editable
      ),
      newOrigins: optionValues
    }))
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const perPage = params.get('perPage');
    const origins = params.get('origins');
    const min = params.get('minPrice');
    const max = params.get('maxPrice');

    if (page) {
      dispatch(setPage(page))
    }
    if (perPage) {
      dispatch(setPerPage(perPage))
    }
    if (origins) {
      dispatch(setOrigins(origins))
    }
    if (+min) {
      dispatch(setMinPrice(+min))
    }
    if (+max) {
      dispatch(setMaxPrice(+max))
    }
    const search = window.location.search;

    dispatch(
      fetchAllProducts({
        endpoints:
          endpoints.products.list() + `${search ? search : ''}`
      })
    );
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearProductList());
    };
  }, [dispatch]);

  return {
    products,
    selectOnChange,
  };
};
