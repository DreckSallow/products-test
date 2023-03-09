import { Product } from "../interfaces";

interface ProductFetch extends Product {
	_id: string;
}

export class ProductModel {
	static async getProducts() {
		const res = await fetch("http://localhost:5000/api/products");
		const data = (await res.json()) as Array<ProductFetch>;
		return data.map(({ _id, ...rest }) => {
			return { ...rest, id: _id, image: `http://localhost:5000${rest.image}` };
		});
	}
}