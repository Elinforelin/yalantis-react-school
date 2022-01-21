import { useDispatch } from 'react-redux';

import classes from './../styles.module.css';
import {
  setMaxPrice,
  setMinPrice,
  setPage,
} from '../../../store/products/reducer';
import { useFetchAllProducts } from '../../../hooks/useFetchAllProducts';

const PriceFilter = () => {
  const dispatch = useDispatch();

  const { fetch } = useFetchAllProducts();

  const applyPrices = (event) => {
    event.preventDefault();
    fetch();
  };

  const setPrice = (event) => {
    const name = event.target.name;
    if (name === 'min') {
      dispatch(setMinPrice(+event.target.value));
    } else {
      dispatch(setMaxPrice(+event.target.value));
    }
    dispatch(setPage(1));
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
