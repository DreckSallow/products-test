import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import "./styles.css";
import App from "./App";
import { store } from "./store";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<App />
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
