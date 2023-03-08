import { Product } from "./../interfaces/Product";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [] as Product[],
	},
	reducers: {},
});

export const actions = {};

export const cartReducer = cartSlice.reducer;
