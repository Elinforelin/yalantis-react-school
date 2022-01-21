import { useSelector, useDispatch } from 'react-redux';

import { endpoints } from '../constants/endpoints';
import { fetchAllProducts } from '../store/products/actions';
import { getProductsList } from '../store/products/selectors';

export const useFetchAllProducts = () => {
  const dispatch = useDispatch();
  const { page, perPage, minPrice, maxPrice, origins, editable } =
    useSelector(getProductsList);

  const fetch = ({ newPage, newOrigins, newPerPage } = {}) => {
    dispatch(
      fetchAllProducts({
        endpoints: endpoints.products.paginationList(
          newPage ?? page,
          newPerPage ?? perPage,
          newOrigins ?? origins,
          minPrice,
          maxPrice,
          editable
        ),
      })
    );
  };

  return {
    fetch,
  };
};
