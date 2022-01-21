export const endpoints = {
  products: {
    list: () => 'products',
    myProducts: () => 'products?editable=true',
    details: (productId) => `products/${productId}`,
    paginationList: (page, perPage, origins, min, max, editable) =>
      `products?page=${page}&perPage=${perPage}${origins?.length ? `&origins=${origins}` : ''
      }${min ? `&minPrice=${min}` : ''}${max ? `&maxPrice=${max}` : ''}${editable ? `&editable=${editable}` : ''}
      `,
  },
  orders: {
    list: () => 'orders',
    orderDetails: (orderId) => `orders/${orderId}`
  }
};