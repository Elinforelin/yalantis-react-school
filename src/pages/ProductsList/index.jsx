import classes from './styles.module.css';
import Pagination from './../../components/Pagination/index';
import { useProductList } from './useProductList';
import ProductItem from './ProductItem';

const ProductsList = () => {
  const { perPage, setProducts, pages, products } = useProductList();

  return (
    <div className={classes.wrapper}>
      <Pagination perPage={perPage} setProducts={setProducts} pages={pages} />
      <div className={classes.row}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
