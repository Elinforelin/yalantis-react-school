import { useDispatch, useSelector } from 'react-redux';
import { setMaxPrice, setMinPrice, setOrigins, setPage, setPerPage } from '../store/products/reducer';
import { getProductsList } from '../store/products/selectors';


export const useUrlSearchParams = () => {
  const { page, perPage } = useSelector(getProductsList);

  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const pageFromUrl = params.get('page');
  const perPageFromUrl = params.get('perPage');
  const originsFromUrl = params.get('origins');
  const minFromUrl = params.get('minPrice');
  const maxFromUrl = params.get('maxPrice');

  if (page) {
    dispatch(setPage(page));
  }
  if (perPage) {
    dispatch(setPerPage(perPage));
  }
  if (originsFromUrl) {
    dispatch(setOrigins(originsFromUrl));
  }
  if (+minFromUrl) {
    dispatch(setMinPrice(+minFromUrl));
  }
  if (+maxFromUrl) {
    dispatch(setMaxPrice(+maxFromUrl));
  }

  return { pageFromUrl, perPageFromUrl, originsFromUrl, minFromUrl, maxFromUrl }
} 