import Img from '../../../assets/img/original.png';
import { ReactComponent as IconPlus } from '../../../assets/img/plus.svg';
import { ReactComponent as IconMinus } from '../../../assets/img/minus.svg';
import classes from './styles.module.css';

import { useShoppingCart } from '../useShoppingCart';

const ProductInShoppingCart = ({ product }) => {
  const { addToCartClick, removeFromCartClick, deleteItemClick } =
    useShoppingCart();

  return (
    <div>
      <li className={classes.product}>
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
            onClick={() => removeFromCartClick(product)}
          >
            <IconMinus />
          </button>
        </span>
        <span className={classes.count}>{product.count}</span>
        <span className={classes.addBtn}>
          <button onClick={() => addToCartClick(product)}>
            <IconPlus />
          </button>
        </span>
        <span className={classes.deleteBtn}>
          <button onClick={() => deleteItemClick(product)}>DELETE</button>
        </span>
        <span className={classes.sum}>
          {'₴ '}
          {product.sum}
        </span>
      </li>
    </div>
  );
};

export default ProductInShoppingCart;
