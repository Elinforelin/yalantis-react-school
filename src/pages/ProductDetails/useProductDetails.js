import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { endpoints } from '../../constants/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/shoppingCart/reducer';
import { selectProductDetails } from './../../store/product/selectors';
import { fetchApi } from '../../store/product/reducer';

export const useProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProductDetails);
  const params = useParams();

  useEffect(() => {
    if (params.productId) {
      dispatch(fetchApi(endpoints.products.details(params.productId)));
    }
  }, [params.productId]);

  const addToCartClick = () => dispatch(addToCart(product));

  return {
    product,
    addToCartClick,
  };
};
