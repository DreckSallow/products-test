import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

export interface Products {
	products: Product[];
}

const initialState: Products = {
	products: [],
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts: (state: Products, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
		},
	},
});

export const productsDispatch = {
	setProducts: productsSlice.actions.setProducts,
};

export const productsReducer = productsSlice.reducer;
