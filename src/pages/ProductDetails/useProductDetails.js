import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { fetchApi } from '../../utils/fetch';
import { useAddToCart } from './../../hooks/useAddToCart';
import { endpoints } from '../../constants/endpoints';
import { ProductContext } from './../../context/ProductContext';


export const useProductDetails = () => {
  const { setShoppingCart } = useContext(ProductContext);
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (params.productId) {
      fetchApi(endpoints.products.details(params.productId)).then((data) =>
        setProduct(data)
      );
    }
  }, [params.productId]);

  const { addToCart } = useAddToCart(setShoppingCart);
  return {
    product,
    addToCart
  }
}