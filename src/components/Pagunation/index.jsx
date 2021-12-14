import { useState } from "react";
import { endpoints } from "../../constants/endpoints";
import { fetchApi } from "../../utils/fetch";

import classes from "./styles.module.css";

const Pagination = ({ perPage, setProducts, pages }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (number) => {
		setCurrentPage(number);
		fetchApi(endpoints.products.paginationList(number, perPage)).then((data) =>
			setProducts(data.items)
		);
	};
	return (
		<div className={classes.pagination}>
			{pages.map((page) => (
				<span
					key={page}
					className={currentPage === page ? classes.active : ""}
					onClick={() => onPageChange(page)}
				>
					{page}
				</span>
			))}
		</div>
	);
};

export default Pagination;
