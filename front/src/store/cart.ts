import { Product } from "./../interfaces/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalData } from "../utils/Constants";

interface CartProduct {
	[k: Product["id"]]: {
		count: number;
	};
}

interface State {
	products: CartProduct;
	length: number;
}

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: {},
		length: 0,
	} as State,
	reducers: {
		addProductId(state: State, action: PayloadAction<Product["id"]>) {
			if (state.products[action.payload]) {
				state.products[action.payload].count += 1;
			} else {
				state.products[action.payload] = {
					count: 1,
				};
			}
			state.length += 1;
			localStorage.setItem(
				LocalData.ProductsInCart,
				JSON.stringify(state.products),
			);
		},
		setProducts(state: State, action: PayloadAction<CartProduct>) {
			state.products = action.payload;
			state.length = Object.values(action.payload).reduce((acc, { count }) => {
				return acc + count;
			}, 0);
		},
	},
});

export const cartActions = {
	addProductId: cartSlice.actions.addProductId,
	setProducts: cartSlice.actions.setProducts,
};

export const cartReducer = cartSlice.reducer;
