import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ProductModel } from "../utils/Product";
import { useAppStore } from "../store/hooks";
import { useMemo } from "react";
import { cartActions } from "../store/cart";

export default function ProductDetail() {
	const { productId } = useParams();
	const [productsInCart, dispatch] = useAppStore((s) => {
		if (!productId) {
			return {
				count: 0,
			};
		}
		return s.cartStore.products[productId] ?? { count: 0 };
	});
	const { data, error, isLoading } = useQuery("product", () =>
		ProductModel.getProduct(productId as string),
	);

	const rating = useMemo(() => {
		if (!data) {
			return [0, 0, 0, 0, 0];
		}

		let rating = data.rating + 1;
		const nums = [];

		for (let i = 0; i < 5; i++) {
			rating = rating - 1;
			if (rating < 0) {
				nums.push(0);
				continue;
			}
			if (rating < 1) {
				nums.push(rating);
				continue;
			}
			nums.push(rating);
		}

		return nums;
	}, [data]);

	const disabled = useMemo(() => {
		if (!data) {
			return false;
		}
		return data.countInStock <= productsInCart.count;
	}, [data, productsInCart]);

	if (isLoading) {
		return <h2 className="fn-300 text-font">Loading...</h2>;
	}
	if (error || !data) {
		return <h2 className="fn-300 text-font">An error ocurred! :0</h2>;
	}

	return (
		<section className="ProductDetail">
			<header>
				<h1 className="color-90 fn-300 wt-500 text-font">ProductDetail</h1>
			</header>
			<div className="product-card">
				<div className="product-img">
					<img src={data.image} alt={data.name} />
				</div>
				<div className="info-card">
					<div className="info-card-header">
						<span className="product-stock wt-500 text-bg fn-80 bg-accent">
							{data.countInStock - productsInCart.count > 0
								? `In Stock: ${data.countInStock - productsInCart.count}`
								: "Out of stock"}
						</span>
						<div className="product-rating">
							{rating.map((r, i) => {
								return (
									<span
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={i}
										className={`bg-font ${
											r === 1 ? "rating-100" : "rating-50"
										}`}
									>
										<i style={{ width: `${r * 100}%` }} />
									</span>
								);
							})}
						</div>
					</div>
					<h4 className="color-90 text-font fn-200 wt-500">{data.name}</h4>
					<div className="product-chips fn-80 color-70 text-font">
						<span className="">{data.brand}</span>
						<span className="">{data.category}</span>
					</div>
					<p className="color-70 text-font">{data.description}</p>
					<div className="product-actions fn-200">
						<span className="product-price wt-500 text-font">
							${data.price}
						</span>
						<button
							className={`${
								disabled ? "color-70" : "color-100"
							} product-add-to-cart wt-500 text-bg fn-100 bg-accent`}
							onClick={() =>
								!disabled && dispatch(cartActions.addProductId(data.id))
							}
						>
							Add Item to Cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
