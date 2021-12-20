import Img from '../../assets/img/original.png';
import { ReactComponent as IconPlus } from '../../assets/img/plus.svg';
import { ReactComponent as IconMinus } from '../../assets/img/minus.svg';
import classes from './styles.module.css';

import { useShoppingCart } from './useShoppingCart';

const ShoppingCart = () => {
  const {
    addToCart,
    productsSumItem,
    removeFromCart,
    removeItem,
    totalSumOfProducts,
  } = useShoppingCart();

  return (
    <div className={classes.wrapper}>
      <div>
        <ul>
          {productsSumItem.map((product) => (
            <li className={classes.product} key={product.id}>
              <img src={Img} alt="" />
              <div className={classes.title}>
                {product.name}
                <div>
                  {'₴ '}
                  {product.price}
                </div>
              </div>
              <span className={classes.removeBtn}>
                <button
                  disabled={product.count === 1 && 'disabled'}
                  onClick={() => removeFromCart(product)}
                >
                  <IconMinus />
                </button>
              </span>
              <span className={classes.count}>{product.count}</span>
              <span className={classes.addBtn}>
                <button onClick={() => addToCart(product)}>
                  <IconPlus />
                </button>
              </span>
              <span className={classes.deleteBtn}>
                <button onClick={() => removeItem(product)}>DELETE</button>
              </span>
              <span className={classes.sum}>
                {'₴ '}
                {product.sum}
              </span>
            </li>
          ))}
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
