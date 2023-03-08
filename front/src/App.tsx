import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	CartDetail,
	NotFound,
	ProductDetail,
	ProductList,
} from "./pages/index";
import { store } from "./store";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductList />} />
					<Route path="/products/:productId" element={<ProductDetail />} />
					<Route path="/cart" element={<CartDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
