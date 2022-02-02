import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductsCatalog from './../../components/ProductsСatalog/index';
import {
  clearProductList,
  setEditable,
  setMaxPrice,
  setMinPrice,
  setOrigins,
  setPage,
  setPerPage,
} from './../../store/products/reducer';
import { getProductsList } from './../../store/products/selectors';
import { useFetchAllProducts } from '../../hooks/useFetchAllProducts';
import { endpoints } from '../../constants/endpoints';
import {
  fetchAllProducts,
  originsSelectFetchStart,
} from '../../store/products/actions';
import { useUrlSearchParams } from './../../hooks/useUrlSearchParams';

const MyProductsList = () => {
  const dispatch = useDispatch();
  // const { fetch } = useFetchAllProducts();
  const {
    pageFromUrl,
    perPageFromUrl,
    originsFromUrl,
    minFromUrl,
    maxFromUrl,
  } = useUrlSearchParams();
  const {
    list: products,
    page,
    origins,
    perPage,
    minPrice,
    maxPrice,
  } = useSelector(getProductsList);

  dispatch(setEditable(true));

  const selectOnChange = (selectedOptions) => {
    const optionValues = selectedOptions.map(({ value }) => value);
    // dispatch(setOrigins(optionValues));
    // fetch({ newPage: 1, newOrigins: optionValues });

    // Change logic according to HM#4

    dispatch(
      originsSelectFetchStart({
        endpoints: endpoints.products.paginationList(
          page,
          perPage,
          optionValues,
          minPrice,
          maxPrice,
          true
        ),
        newOrigins: optionValues,
        newPage: 1,
      })
    );
  };

  useEffect(() => {
    dispatch(
      fetchAllProducts({
        endpoints: endpoints.products.paginationList(
          pageFromUrl ?? page,
          perPageFromUrl ?? perPage,
          originsFromUrl ?? origins,
          minFromUrl ?? minPrice,
          maxFromUrl ?? maxPrice,
          true
        ),
      })
    );
  }, [
    dispatch,
    maxFromUrl,
    maxPrice,
    minFromUrl,
    minPrice,
    origins,
    originsFromUrl,
    page,
    pageFromUrl,
    perPage,
    perPageFromUrl,
  ]);

  useEffect(() => {
    return () => {
      dispatch(clearProductList());
    };
  }, [dispatch]);

  return (
    <div>
      <ProductsCatalog products={products} selectOnChange={selectOnChange} />
    </div>
  );
};

export default MyProductsList;
