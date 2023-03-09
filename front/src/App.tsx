import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const cartProducts = localStorage.getItem(LocalData.ProductsInCart);
		cartProducts && dispatch(cartActions.setProducts(JSON.parse(cartProducts)));
	}, [dispatch]);

	return (
		<BrowserRouter>
			<NavBar
				icon={"Dikson"}
				routes={[
					{ url: "/", text: "Products" },
					{ url: "/cart", text: "Cart" },
				]}
				extra={<Cart className="CartSyncIcon" />}
			/>
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
				<Route path="/cart" element={<CartDetail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
