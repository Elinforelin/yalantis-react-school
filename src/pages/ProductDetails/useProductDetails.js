import { useEffect, } from 'react';
import { useParams } from 'react-router-dom';

import { endpoints } from '../../constants/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/shoppingCart/reducer';
import { getProductDetails } from './../../store/product/selectors';
import {  removeProductDetails } from '../../store/product/reducer';
import { fetchProduct } from '../../store/product/actions';

export const useProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector(getProductDetails);
  const { productId } = useParams();
  
  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct({ endpoints: endpoints.products.details(productId) }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const addToCartClick = () => dispatch(addToCart(product));

  useEffect(() => {
    return () => { dispatch(removeProductDetails()) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    product,
    addToCartClick,
  };
};
