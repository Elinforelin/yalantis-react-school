import Select from 'react-select';

import classes from './styles.module.css';
import { itemsPerPageOptions } from './../../constants/pagination';
import { usePagination } from './usePagination';

const Pagination = () => {
  const {
    pages,
    perPage,
    currentPage,
    nextPageClick,
    prevPageClick,
    changePerPageClick,
    paginationNumbers,
    getPaginationButton,
  } = usePagination();

  return (
    <div className={classes.pagination}>
      <button disabled={currentPage === 1} onClick={prevPageClick}>
        {'<'}
      </button>
      <div className={classes.pageNumbers}>
        {pages.length > 8
          ? paginationNumbers.map((page) =>
              page === -1 ? (
                <span key={page}>...</span>
              ) : (
                getPaginationButton(page)
              )
            )
          : pages.map((page) => getPaginationButton(page))}
      </div>
      <button disabled={currentPage === pages.length} onClick={nextPageClick}>
        {'>'}
      </button>
      <Select
        placeholder
        isSearchable={false}
        className={classes.select}
        value={{ value: perPage, label: String(perPage) }}
        options={itemsPerPageOptions}
        onChange={changePerPageClick}
      />
    </div>
  );
};

export default Pagination;
