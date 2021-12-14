import { useContext, useMemo } from 'react';
import { ProductContext } from '../../context/ProductContext';

import { useAddToCart } from "../../hooks/useAddToCart";

export const useShoppingCart = () => {
  const { setShoppingCart, shoppingCart } = useContext(ProductContext);

  const productsSumItem = shoppingCart.map((item) => ({
    ...item,
    sum: +item.count * +item.price,
  }));

  const { addToCart } = useAddToCart(setShoppingCart);

  const removeFromCart = (product) => {
    const exists = shoppingCart.find((item) => item.id === product.id);
    if (exists) {
      setShoppingCart(
        shoppingCart.map((item) =>
          item.id === product.id
            ? {
              ...exists,
              count: exists.count - 1,
            }
            : item
        )
      );
    }
  };
  const removeItem = (product) => {
    setShoppingCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const total = useMemo(() => {
    return productsSumItem
      .reduce((acc, curr) => acc + curr.sum, 0)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }, [productsSumItem]);

  return {
    addToCart,
    productsSumItem,
    removeFromCart,
    removeItem,
    total
  }
}