import Select from 'react-select';

import classes from './styles.module.css';
import Pagination from './../../components/Pagination/index';
import ProductItem from './ProductItem';

import { originOptions } from '../../constants/origins';
import PriceFilter from './PriceFilter/index';

const ProductsCatalog = ({ products, selectOnChange }) => {
  const params = new URLSearchParams(window.location.search);
  const originsParams = params.get('origins');
  let originsUrl;

  if (originsParams !== null) {
    const originsParamsArr = originsParams.split(',');
    originsUrl = originsParamsArr.map((item) => ({
      value: item,
      label: item.charAt().toUpperCase() + item.slice(1),
    }));
  }

  return (
    <div className={classes.wrapper}>
      <Pagination />
      <div className={classes.filterWrap}>
        <Select
          className={classes.select}
          isMulti
          options={originOptions}
          onChange={selectOnChange}
          value={originsUrl}
        />
        <PriceFilter />
      </div>
      <div className={classes.row}>
        {products?.length &&
          products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductsCatalog;
