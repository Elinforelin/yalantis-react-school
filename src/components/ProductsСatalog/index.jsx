import Select from 'react-select';

import classes from './styles.module.css';
import Pagination from './../../components/Pagination/index';
import ProductItem from './ProductItem';

import { originOptions } from '../../constants/origins';
import PriceFilter from './PriceFilter/index';

const ProductsCatalog = ({ products, selectOnChange }) => {
  return (
    <div className={classes.wrapper}>
      <Pagination />
      <div className={classes.filterWrap}>
        <Select
          className={classes.select}
          isMulti
          options={originOptions}
          onChange={selectOnChange}
        />
        <PriceFilter />
      </div>
      <div className={classes.row}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCatalog;
