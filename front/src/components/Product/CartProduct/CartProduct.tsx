import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./CartProduct.module.css";
import { Product } from "../../../interfaces";

interface CartProductProps {
	product: Product;
	count?: number;
	total?: number;
	onRemove(): void;
	onAdd(): void;
}

export default function CartProduct({
	product,
	onRemove,
	onAdd,
	total,
	count,
}: CartProductProps) {
	const summary = useMemo(
		() => product.description.slice(0, 80).concat("..."),
		[product.description],
	);

	return (
		<div className={`CartProduct ${styles["CartProduct"]}`}>
			<div className={`img ${styles["img"]}`}>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={`info ${styles["info"]} w-full`}>
				<Link to={`/products${product.id}`}>
					<h4 className="fn-100 wt-500" title={product.name}>
						{product.name}
					</h4>
				</Link>
				<p className="fn-80 color-70 text-font">{summary}</p>
				<div className={`amount ${styles["amount"]}`}>
					<span className="fn-100 wt-500">${product.price}</span>
					<div className={`actions ${styles["actions"]}`}>
						<button className="text-accent" onClick={onRemove}>
							{" "}
							-
						</button>
						<span className="wt-500 fn-100">{count ?? 0}</span>
						<button className="color-100 bg-accent text-bg" onClick={onAdd}>
							+
						</button>
					</div>
				</div>
				<div className="">
					<span className="fn-100 wt-500">Total: {total?.toFixed(2) ?? 0}</span>
				</div>
			</div>
		</div>
	);
}
