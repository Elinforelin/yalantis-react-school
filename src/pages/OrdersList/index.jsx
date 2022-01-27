import { Link } from 'react-router-dom';

import { useOrdersList } from './useOrdersList';
import classes from './style.module.css';
import { routes } from '../../constants/routes';

const OrdersList = () => {
  const { list } = useOrdersList();

  return (
    <div className={classes.wrapper}>
      {list.map(({ pieces, id, createdAt }) => (
        <Link to={`${routes.orders}/${id}`} key={id} className={classes.item}>
          <div className={classes.explainedField}>Order № {id}</div>
          <div className={classes.explainedField}>
            Date: {createdAt.slice(0, 10)}
          </div>
          <div className={classes.explainedField}>Items:</div>

          {pieces.map((item) => (
            <div key={item.id} className={classes.item}>
              <span>{item.product.name} - </span>
              <span>{item.product.price} ₴</span>
            </div>
          ))}
        </Link>
      ))}
    </div>
  );
};

export default OrdersList;
