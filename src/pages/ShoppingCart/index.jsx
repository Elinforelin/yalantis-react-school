import { NavLink } from 'react-router-dom';

import classes from './styles.module.css';
import { useShoppingCart } from './useShoppingCart';
import ProductInShoppingCart from './ProductInShoppingCart/index';
import { routes } from './../../constants/routes';

const ShoppingCart = () => {
  const { productsSumItem, totalSumOfProducts, confirmOrder } =
    useShoppingCart();

  return (
    <div className={classes.wrapper}>
      <div>
        <ul>
          {!!productsSumItem.length ? (
            productsSumItem.map((product) => (
              <ProductInShoppingCart product={product} key={product.id} />
            ))
          ) : (
            <div className={classes.emptyShoppingCart}>
              Shopping Cart is empty
            </div>
          )}
        </ul>
      </div>
      <NavLink to={routes.orders} className={classes.orderHistory}>
        Order history
      </NavLink>
      <div className={classes.total}>
        <div>TOTAL</div>

        <div>
          {'₴ '}
          {totalSumOfProducts}
        </div>
        <div>
          <button
            onClick={confirmOrder}
            disabled={!parseInt(totalSumOfProducts)}
            className={classes.confirmBtn}
          >
            Сonfirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
