import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { endpoints } from '../../constants/endpoints';
import { fetchAllProducts } from '../../store/products/actions';

import { cleanShoppingCart, removeFromCart } from '../../store/shoppingCart/reducer';
import { deleteTotallyFromCart } from '../../store/shoppingCart/reducer';
import { addToCart } from '../../store/shoppingCart/reducer';
import { getShoppingCart } from '../../store/shoppingCart/selectors';

export const useShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(getShoppingCart);

  let productsSumItem = useMemo(() => {
    if (shoppingCart.length) {
      return shoppingCart.map((item) => ({
        ...item,
        sum: +item.count * +item.price,
      }));
    }
    return [];
  }, [shoppingCart]);

  const addToCartClick = (product) => dispatch(addToCart(product));

  const removeFromCartClick = (product) => dispatch(removeFromCart(product));

  const deleteItemClick = (product) => dispatch(deleteTotallyFromCart(product));

  const totalSumOfProducts = useMemo(() => {
    return productsSumItem
      .reduce((acc, curr) => acc + curr.sum, 0)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }, [productsSumItem]);

  const itemIncart = shoppingCart.map(({ id, count }) => ({
    productId: id,
    count,
  }));

  const confirmOrder = async () => {
    await dispatch(
      fetchAllProducts({
        endpoints: endpoints.orders.list(),
        method: 'POST',
        payload: {
          order: {
            pieces: itemIncart,
          },
        },
      })
    );
    dispatch(cleanShoppingCart());
    window.location.href = '/orders';
  };

  return {
    shoppingCart,
    addToCartClick,
    productsSumItem,
    removeFromCartClick,
    deleteItemClick,
    totalSumOfProducts,
    confirmOrder
  };
};
