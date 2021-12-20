export const useAddToCart = (setShoppingCart) => {
  const addToCart = (product) => {
    setShoppingCart((prevState) => {
      const exists = prevState.find((item) => item.id === product.id);

      if (exists) {
        const productsWithCount = prevState.map((item) =>
          item.id === product.id
            ? {
              ...exists,
              count: exists.count + 1,
            }
            : item
        );
        return productsWithCount;
      }
      return [...prevState, { ...product, count: 1 }];
    });
  };

  return { addToCart }
} 