import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	CartDetail,
	NotFound,
	ProductDetail,
	ProductList,
} from "./pages/index";

const App = () => {
	return (
		<BrowserRouter>
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
