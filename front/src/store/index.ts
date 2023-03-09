import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { productsReducer } from "./products";

export const store = configureStore({
	reducer: {
		cartStore: cartReducer,
		productsStore: productsReducer,
	},
});

export type Store = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export type Stores = keyof Store;
