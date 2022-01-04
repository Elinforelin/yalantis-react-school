import { useDispatch, useSelector } from 'react-redux';

import classes from './../styles.module.css';
import {
  fetchApi,
  setMaxPrice,
  setMinPrice,
} from '../../../store/products/reducer';
import { selectProductsList } from '../../../store/products/selectors';
import { endpoints } from '../../../constants/endpoints';

const PriceFilter = () => {
  const dispatch = useDispatch();
  const { page, perPage, minPrice, maxPrice, origins } =
    useSelector(selectProductsList);

  const applyPrices = (event) => {
    event.preventDefault();
    dispatch(
      fetchApi(
        endpoints.products.paginationList(
          page,
          perPage,
          origins,
          minPrice,
          maxPrice
        )
      )
    );
  };

  const setPrice = (event) => {
    const name = event.target.name;
    if (name === 'min') {
      dispatch(setMinPrice(+event.target.value));
    }
    dispatch(setMaxPrice(+event.target.value));
  };

  return (
    <form onSubmit={applyPrices} className={classes.form}>
      <input type="number" placeholder="min" name="min" onChange={setPrice} />
      <input type="number" placeholder="max" name="max" onChange={setPrice} />
      <button className={classes.apply} type="submit">
        Apply
      </button>
    </form>
  );
};

export default PriceFilter;
