import { useMemo } from "react";
import styles from "./Product.module.css";
import { Product } from "../../interfaces";
import { Link } from "react-router-dom";

interface ProductProps {
	product: Product;
	max?: number;
	onAddToCart: () => void;
}

export default function ProductComponent({
	product,
	onAddToCart,
	max = 10,
}: ProductProps) {
	const summary = useMemo(
		() => product.description.slice(0, max).concat("..."),
		[product.description, max],
	);

	return (
		<div className={`Product ${styles["Product"]}`}>
			<div className="img">
				<img src={product.image} alt={product.name} />
			</div>
			<div className={`info ${styles["info"]}`}>
				<h4 className="fn-300 wt-500" title={product.name}>
					<Link to={`/products/${product.id}`}>{product.name}</Link>
				</h4>
				<p className="fn-100 color-70 text-font">{summary}</p>
				<div>
					<h5 className="fn-100 wt-500">${product.price}</h5>
					<button
						className="color-100 bg-accent text-bg fn-100"
						onClick={onAddToCart}
					>
						Add item to cart
					</button>
				</div>
			</div>
		</div>
	);
}
