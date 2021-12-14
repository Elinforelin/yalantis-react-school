import { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import ProductsList from "./pages/ProductsList";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import { routes } from "./constants/routes";
import { ProductContext } from "./context/ProductContext";

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);
	let quantity;
	if (shoppingCart.length) {
		quantity = shoppingCart.reduce((prev, curr) => ({
			count: prev.count + curr.count,
		}));
	}

	return (
		<Router>
			<div className="App">
				<Header quantity={quantity} />
				<Switch>
					<Route
						path={routes.productDetails}
						render={() => (
							<ProductContext.Provider value={{ setShoppingCart }}>
								<ProductDetails />
							</ProductContext.Provider>
						)}
					/>
					<Route
						path={routes.productsList}
						render={() => (
							<ProductContext.Provider value={{ setShoppingCart }}>
								<ProductsList />
							</ProductContext.Provider>
						)}
					/>
					<Route
						path={routes.shoppingCart}
						render={() => (
							<ProductContext.Provider
								value={{ setShoppingCart, shoppingCart }}
							>
								<ShoppingCart />
							</ProductContext.Provider>
						)}
					/>
					<Redirect to={routes.productsList} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
