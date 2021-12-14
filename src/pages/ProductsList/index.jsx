import { Link } from 'react-router-dom';
import classes from './styles.module.css';
import Img from '../../assets/img/original.png';
import Pagination from './../../components/Pagunation/index';
import { useProductList } from './useProductList';

const ProductsList = () => {
  const { perPage, setProducts, pages, products, addToCart } = useProductList();

  return (
    <div className={classes.wrapper}>
      <Pagination perPage={perPage} setProducts={setProducts} pages={pages} />
      <div className={classes.row}>
        {products.map((product) => (
          <div key={product.id} className={classes.products}>
            <Link to={`/products/${product.id}`}>
              <img src={Img} alt="product" />
              <div className={classes.name}>{product.name.toUpperCase()}</div>
            </Link>
            <div>
              {product.price}
              {'₴'}
            </div>
            <button
              className={classes.addBtn}
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
