import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { number, object, string } from 'yup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { originsArray, originsValues } from '../../constants/origins';
import { setModalActive } from '../../store/modal/reducer';
import { endpoints } from '../../constants/endpoints';
import { removeProductDetails } from './../../store/product/reducer';
import { routes } from './../../constants/routes';
import { getProductDetails } from '../../store/product/selectors';
import { fetchAllProducts } from './../../store/products/actions';
import { fetchProduct } from '../../store/product/actions';

const schema = object().shape({
  name: string().required().max(20).min(3),
  price: number().positive().integer().typeError('you must specify a number'),
  origin: string().required().oneOf(originsArray),
});

export const useProductForm = () => {
  const pageIsProducts = useRouteMatch(routes.productsList);
  const productForChange = useSelector(getProductDetails);
  const dispatch = useDispatch();

  const isEdit = productForChange?.id;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      price: '',
      origin: originsValues.usa,
    },
  });

  const disabledSubmit = isSubmitting || !isValid || !isDirty;

  useEffect(() => {
    if (isEdit) {
      reset(productForChange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productForChange]);

  const createProduct = async (data) => {
    await dispatch(
      fetchProduct({
        endpoints: endpoints.products.list(),
        method: 'POST',
        payload: { product: data },
      })
    );
    if (pageIsProducts) {
      dispatch(fetchAllProducts({ endpoints: endpoints.products.list() }));
    } else {
      dispatch(
        fetchAllProducts({ endpoints: endpoints.products.myProducts() })
      );
    }
    dispatch(setModalActive(false));
    reset();
  };

  const editProduct = async (data) => {
    await dispatch(
      fetchProduct({
        endpoints: endpoints.products.details(productForChange.id),
        method: 'PATCH',
        payload: { product: data },
      })
    );
    dispatch(fetchAllProducts({ endpoints: endpoints.products.myProducts() }));
    dispatch(setModalActive(false));
    reset();
  };

  useEffect(() => {
    return () => {
      dispatch(removeProductDetails());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = (e) => {
    e.preventDefault();
    dispatch(setModalActive(false));
  };

  const onReset = (e) => {
    e.preventDefault();
    reset(productForChange);
  };
  const isEditForm = isEdit ? editProduct : createProduct;

  return {
    handleSubmit,
    register,
    errors,
    disabledSubmit,
    control,
    createProduct,
    editProduct,
    closeModal,
    onReset,
    isEdit,
    isSubmitting,
    isEditForm,
  };
};
