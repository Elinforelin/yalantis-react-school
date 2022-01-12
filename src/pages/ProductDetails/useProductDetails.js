import { useEffect, } from 'react';
import { useParams } from 'react-router-dom';

import { endpoints } from '../../constants/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/shoppingCart/reducer';
import { getProductDetails } from './../../store/product/selectors';
import { fetchProduct } from '../../store/product/reducer';

export const useProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector(getProductDetails);
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(endpoints.products.details(productId)));
    }
  }, [productId]);

  const addToCartClick = () => dispatch(addToCart(product));

  return {
    product,
    addToCartClick,
  };
};
