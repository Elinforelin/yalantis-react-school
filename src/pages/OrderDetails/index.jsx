import classes from './styles.module.css';
import { useOrderDetail } from './useOrderDetail';

const OrderDetails = () => {
  const { orderDetails } = useOrderDetail();
  let data;
  if (orderDetails?.id) {
    data = orderDetails.createdAt.slice(0, 10);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <div className={classes.explainedField}>Order № {orderDetails.id}</div>
        <div className={classes.explainedField}>Date:{data}</div>
        <div className={classes.explainedField}>Items:</div>
        {orderDetails.pieces &&
          orderDetails.pieces.map((item) => (
            <div className={classes.item} key={item.product.price}>
              <span>{item.product.name} - </span>
              <span>{item.product.price}₴ </span>
              <span> {item.count} pieces</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderDetails;
