import { useContext, useState, useEffect } from 'react';
import { ProductContext } from './../../context/ProductContext';
import { fetchApi } from './../../utils/fetch';
import { endpoints } from './../../constants/endpoints';
import { useAddToCart } from './../../hooks/useAddToCart';


export const useProductList = () => {
  const { setShoppingCart } = useContext(ProductContext);

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

  const { addToCart } = useAddToCart(setShoppingCart);
  return {
    perPage,
    setProducts,
    pages,
    products,
    addToCart
  }
}