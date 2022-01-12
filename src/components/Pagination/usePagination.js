import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { getProductsList } from '../../store/products/selectors';
import classes from './styles.module.css';
import { useFetchAllProducts } from '../../hooks/useFetchAllProducts';

export const usePagination = () => {
  const {
    page: currentPage,
    perPage,
    totalItems,
  } = useSelector(getProductsList);

  const { fetch } = useFetchAllProducts()

  const pagesCount = Math.ceil(totalItems / perPage);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  const onPageChange = (page) => {
    fetch({ newPage: page })
  };

  const nextPageClick = () => {
    onPageChange(currentPage + 1);
  };
  const prevPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const changePerPageClick = (pageOption) => {
    fetch({ newPerPage: pageOption.value, newPage: 1 })
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
