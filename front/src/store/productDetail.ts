import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

export const productDetailSlice = createSlice({
	name: "productDetail",
	initialState: {} as Partial<Product>,
	reducers: {},
});

export const actions = {};

export const productDetailReducer = productDetailSlice.reducer;
