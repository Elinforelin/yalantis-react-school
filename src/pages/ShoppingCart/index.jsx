import classes from './styles.module.css';

import { useShoppingCart } from './useShoppingCart';
import ProductInShoppingCart from './ProductInShoppingCart/index';

const ShoppingCart = () => {
  const { productsSumItem, totalSumOfProducts } = useShoppingCart();

  return (
    <div className={classes.wrapper}>
      <div>
        <ul>
          {!!productsSumItem.length ? (
            productsSumItem.map((product) => (
              <ProductInShoppingCart product={product} key={product.id}/>
            ))
          ) : (
            <div className={classes.emptyShoppingCart}>
              Shopping Cart is empty
            </div>
          )}
        </ul>
      </div>
      <div className={classes.total}>
        TOTAL
        <div>
          {'₴ '}
          {totalSumOfProducts}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
