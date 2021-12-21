import { useState, useEffect } from 'react';

import { fetchApi } from './../../utils/fetch';
import { endpoints } from './../../constants/endpoints';

export const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const pagesCount = Math.ceil(totalItems / perPage);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  useEffect(() => {
    fetchApi(endpoints.products.list()).then((data) => {
      setProducts(data.items);
      setPerPage(data.perPage);
      setTotalItems(data.totalItems);
    });
  }, []);

  return {
    perPage,
    setProducts,
    pages,
    products,
  };
};
