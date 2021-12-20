export const endpoints = {
  products: {
    list: () => 'products',
    details: (productId) => `products/${productId}`,
    paginationList: (number, perPage) =>
      `products?page=${number}&count=${perPage}`,
  },
};
