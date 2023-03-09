import { Config } from "../config";
import { Product } from "../interfaces";

interface ProductFetch extends Product {
	_id: string;
}

export class ProductModel {
	static async getProducts() {
		const res = await fetch(`${Config.SERVER_URL}/api/products`);
		const data = (await res.json()) as Array<ProductFetch>;
		return data.map(({ _id, ...rest }) => {
			return { ...rest, id: _id, image: `${Config.SERVER_URL}${rest.image}` };
		});
	}
	static async getProduct(id: string) {
		const res = await fetch(`${Config.SERVER_URL}/api/products/${id}`);
		const data = (await res.json()) as ProductFetch;
		return {
			...data,
			id: data._id,
			image: `${Config.SERVER_URL}${data.image}`,
		};
	}
}
