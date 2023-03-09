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

const saveInfoCart = (products: CartProduct) => {
	localStorage.setItem(LocalData.ProductsInCart, JSON.stringify(products));
};

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
			saveInfoCart(state.products);
		},
		setProducts(state: State, action: PayloadAction<CartProduct>) {
			state.products = action.payload;
			state.length = Object.values(action.payload).reduce((acc, { count }) => {
				return acc + count;
			}, 0);
		},
		removeOne(state: State, action: PayloadAction<Product["id"]>) {
			if (state.products[action.payload]) {
				const count = state.products[action.payload].count;
				if (count > 0) {
					state.products[action.payload].count -= 1;
					state.length -= 1;
				}
				if (state.products[action.payload].count <= 0) {
					state.products = Object.entries(state.products).reduce(
						(acc, [k, v]) => {
							if (action.payload === k) {
								return acc;
							}
							return { ...acc, [k]: v };
						},
						{},
					);
				}
				saveInfoCart(state.products);
			}
		},
		addOne(state: State, action: PayloadAction<Product["id"]>) {
			if (state.products[action.payload]) {
				state.products[action.payload].count += 1;
				state.length += 1;
				saveInfoCart(state.products);
			}
		},
	},
});

export const cartActions = {
	addProductId: cartSlice.actions.addProductId,
	setProducts: cartSlice.actions.setProducts,
	removeOne: cartSlice.actions.removeOne,
	addOne: cartSlice.actions.addOne,
};

export const cartReducer = cartSlice.reducer;
