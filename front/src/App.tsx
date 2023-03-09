import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
	CartDetail,
	NotFound,
	ProductDetail,
	ProductList,
} from "./pages/index";
import { store } from "./store";
import NavBar from "./components/Navs/NavBar";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<NavBar
						icon={"Dikson"}
						routes={[
							{ url: "/", text: "Products" },
							{ url: "/cart", text: "Cart" },
						]}
					/>
					<Routes>
						<Route path="/" element={<ProductList />} />
						<Route path="/products/:productId" element={<ProductDetail />} />
						<Route path="/cart" element={<CartDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	);
};

export default App;
