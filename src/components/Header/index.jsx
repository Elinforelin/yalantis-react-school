import { NavLink, useLocation } from "react-router-dom";

import classes from "./styles.module.css";

const Header = ({ quantity }) => {
	let location = useLocation();

	return (
		<div className={classes.wrapper}>
			<NavLink to="/products">Products</NavLink>
			{location.pathname !== "/shopping-cart" && (
				<NavLink to="/shopping-cart">
					Shoppind Cart: {!quantity ? "0" : quantity.count}
				</NavLink>
			)}
		</div>
	);
};
export default Header;
