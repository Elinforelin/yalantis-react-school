export const endpoints = {
  products: {
    list: () => 'products',
    details: (productId) => `products/${productId}`,
    paginationList: (page, perPage, origins, min, max) =>
      `products?page=${page}&perPage=${perPage}${
        origins?.length ? `&origins=${origins}` : ''
      }${min ? `&minPrice=${min}` : ''}${max ? `&maxPrice=${max}` : ''}`,
  },
};
