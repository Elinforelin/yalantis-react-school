import { useSelector, useDispatch } from "react-redux";

import { endpoints } from "../constants/endpoints"
import { fetchAllProducts } from "../store/products/reducer";
import { getProductsList } from "../store/products/selectors";

export const useFetchAllProducts = () => {
  const dispatch = useDispatch();
  const {
    page,
    perPage,
    minPrice,
    maxPrice,
    origins
  } = useSelector(getProductsList);

  const fetch = ({ newPage, newOrigins, newPerPage } = {}) => {
    dispatch(fetchAllProducts(endpoints.products.paginationList(
      newPage ?? page,
      newPerPage ?? perPage,
      newOrigins ?? origins,
      minPrice,
      maxPrice
    )
    ))
  };

  return {
    fetch
  };
};
