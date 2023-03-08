import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

export interface Products {
	products: Product[];
}

export const productsSlice = createSlice<Products, {}>({
	name: "products",
	initialState: {
		products: [
			{
				name: "Dikson",
				brand: "Dreck",
				category: "Algo",
				description: "Dikson product",
				countInStock: 2,
				id: "",
				image: "",
				numReviews: 2,
				price: 1,
				rating: 2,
			},
		],
	},
	reducers: {},
});

export const actions = {};

export const productsReducer = productsSlice.reducer;
