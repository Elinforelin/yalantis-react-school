import { useDispatch, useSelector } from 'react-redux';

import classes from './../styles.module.css';
import {
  setMaxPrice,
  setMinPrice,
  setPage,
} from '../../../store/products/reducer';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../../../store/products/actions';
import { getProductsList } from '../../../store/products/selectors';
import { endpoints } from '../../../constants/endpoints';

const PriceFilter = () => {
  const dispatch = useDispatch();
  const [minPrice, setMin] = useState('');
  const [maxPrice, setMax] = useState('');

  const { page, perPage, origins, editable } = useSelector(getProductsList);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const max = params.get('maxPrice');
    const min = params.get('minPrice');
    setMin(min);
    setMax(max);
  }, []);

  const applyPrices = (event) => {
    event.preventDefault();
    dispatch(setPage(1));
    dispatch(setMinPrice(minPrice));
    dispatch(setMaxPrice(maxPrice));
    dispatch(
      fetchAllProducts({
        endpoints: endpoints.products.paginationList(
          page,
          perPage,
          origins,
          minPrice,
          maxPrice,
          editable
        ),
      })
    );
  };

  const setPrice = (event) => {
    const name = event.target.name;
    if (name === 'min') {
      setMin(+event.target.value);
    } else {
      setMax(+event.target.value);
    }
  };

  return (
    <form onSubmit={applyPrices} className={classes.form}>
      <input
        type="number"
        placeholder="min"
        name="min"
        onChange={setPrice}
        value={minPrice}
      />
      <input
        type="number"
        placeholder="max"
        name="max"
        onChange={setPrice}
        value={maxPrice}
      />
      <button className={classes.apply}>Apply</button>
    </form>
  );
};

export default PriceFilter;
