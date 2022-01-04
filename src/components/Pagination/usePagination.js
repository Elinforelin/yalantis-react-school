import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';

import { endpoints } from '../../constants/endpoints';
import { selectProductsList } from '../../store/products/selectors';
import { fetchApi } from '../../store/products/reducer';
import classes from './styles.module.css';

export const usePagination = () => {
  const {
    page: currentPage,
    perPage,
    totalItems,
    origins,
    minPrice,
    maxPrice,
  } = useSelector(selectProductsList);
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(totalItems / perPage);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onPageChange = (page) => {
    console.log(minPrice, maxPrice);
    dispatch(
      fetchApi(
        endpoints.products.paginationList(
          page,
          perPage,
          origins,
          minPrice,
          maxPrice
        )
      )
    );
  };

  const nextPageClick = () => {
    onPageChange(currentPage + 1);
  };
  const prevPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const changePerPageClick = (pageOption) => {
    dispatch(
      fetchApi(
        endpoints.products.paginationList(
          1,
          pageOption.value,
          origins,
          minPrice,
          maxPrice
        )
      )
    );
  };

  const paginationNumbers = useMemo(() => {
    const pageNumbers = pages.map((page, idx) => {
      if (
        (idx !== 0 && idx + 1 < currentPage - 2) ||
        !(
          currentPage > idx + 1 ||
          idx + 1 <= currentPage + 2 ||
          idx + 1 === pages.length
        )
      ) {
        return -1;
      }
      return page;
    });

    const result = [];

    pageNumbers.forEach((page) => {
      if ((result[result.length - 1] !== -1 && page === -1) || page !== -1) {
        result.push(page);
      }
    });

    return result;
  }, [currentPage, pages]);

  const getPaginationButton = (page) => (
    <button
      key={page}
      className={currentPage === page ? classes.active : ''}
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  );

  return {
    perPage,
    pages,
    currentPage,
    onPageChange,
    nextPageClick,
    prevPageClick,
    changePerPageClick,
    paginationNumbers,
    getPaginationButton,
  };
};
