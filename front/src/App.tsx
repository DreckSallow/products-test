import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";
import "./App.css";
import {
	CartDetail,
	NotFound,
	ProductDetail,
	ProductList,
} from "./pages/index";

import NavBar from "./components/Navs/NavBar";
import Cart from "./components/Cart";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { cartActions } from "./store/cart";
import { LocalData } from "./utils/Constants";
import { ProductModel } from "./utils/Product";
import { productsDispatch } from "./store/products";

const App = () => {
	const dispatch = useAppDispatch();
	const { error, isLoading } = useQuery("products", async () => {
		const data = await ProductModel.getProducts();
		dispatch(productsDispatch.setProducts(data));
	});

	useEffect(() => {
		const cartProducts = localStorage.getItem(LocalData.ProductsInCart);
		cartProducts && dispatch(cartActions.setProducts(JSON.parse(cartProducts)));
	}, [dispatch]);

	return (
		<BrowserRouter>
			<NavBar
				icon="🚀 Shopy"
				routes={[
					{ url: "/", text: "Products" },
					{ url: "/cart", text: "Cart" },
				]}
				extra={<Cart className="CartSyncIcon" />}
			/>
			<main className="Pages">
				<Routes>
					<Route
						path="/"
						element={<ProductList isLoading={isLoading} error={error} />}
					/>
					<Route path="/products/:productId" element={<ProductDetail />} />
					<Route path="/cart" element={<CartDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
