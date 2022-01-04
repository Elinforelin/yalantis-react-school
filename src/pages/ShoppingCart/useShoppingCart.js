import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { removeFromCart } from '../../store/shoppingCart/reducer';
import { deleteTotallyFromCart } from '../../store/shoppingCart/reducer';
import { addToCart } from '../../store/shoppingCart/reducer';

import { selectShoppingCart } from '../../store/shoppingCart/selectors';
import { useDispatch } from 'react-redux';

export const useShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = Object.values(useSelector(selectShoppingCart));

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

  return {
    addToCartClick,
    productsSumItem,
    removeFromCartClick,
    deleteItemClick,
    totalSumOfProducts,
  };
};
