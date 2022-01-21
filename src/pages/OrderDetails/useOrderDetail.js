import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { endpoints } from '../../constants/endpoints';
import { getOrderDetails } from '../../store/orderDetail/selector';
import { fetchOrderDetail } from '../../store/orderDetail/actions';

export const useOrderDetail = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector(getOrderDetails);
  const { orderId } = useParams();

  useEffect(() => {
    if (orderId) {
      dispatch(
        fetchOrderDetail({ endpoints: endpoints.orders.orderDetails(orderId) })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  return {
    orderDetails,
  };
};
