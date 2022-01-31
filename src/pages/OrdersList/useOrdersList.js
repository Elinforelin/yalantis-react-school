import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { endpoints } from './../../constants/endpoints';
import { getOrdersList } from './../../store/orders/selector';
import { createOrderStart } from './../../store/orders/actions';

export const useOrdersList = () => {
  const dispatch = useDispatch();
  const list = useSelector(getOrdersList);

  useEffect(() => {
    dispatch(createOrderStart({ endpoints: endpoints.orders.list() }));
  }, [dispatch]);

  return {
    list,
  };
};
