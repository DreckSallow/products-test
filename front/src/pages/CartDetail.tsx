import { useMemo } from "react";
import CartProduct from "../components/Product/CartProduct/CartProduct";
import { Product } from "../interfaces";
import { cartActions } from "../store/cart";
import { useAppStore } from "../store/hooks";

export default function CartDetail() {
	const [cartStore, dispatch] = useAppStore((s) => s.cartStore);
	const [cartProducts] = useAppStore((s) => {
		return s.productsStore.products.filter((p) => cartStore.products[p.id]);
	});

	const totalAmount = useMemo(() => {
		return Object.entries(cartStore.products)
			.reduce((acc, [k, { count }]) => {
				const p: Product | undefined = cartProducts.find((p) => p.id === k);
				if (!p) return acc;
				return acc + p.price * count;
			}, 0)
			.toFixed(3);
	}, [cartStore, cartProducts]);

	return (
		<section className="CartPage">
			<header>
				<h2 className="color-90 fn-300 wt-500 text-font">Cart Details</h2>
			</header>
			<section>
				<div className="CartProducts">
					{cartProducts.map((p) => {
						return (
							<CartProduct
								count={cartStore.products[p.id].count}
								total={cartStore.products[p.id].count * p.price}
								product={p}
								key={p.id}
								onAdd={() => {
									if (cartStore.products[p.id].count < p.countInStock) {
										dispatch(cartActions.addOne(p.id));
									}
								}}
								onRemove={() => {
									dispatch(cartActions.removeOne(p.id));
								}}
							/>
						);
					})}
				</div>
				<div className="CartAmount bg">
					<div className="coupon">
						<h5 className="fn-200 wt-500 color-50 text-font">
							Have a coupon code?
						</h5>
						<input type="text" placeholder="ABCDEF..." />
					</div>
					<div className="total-amount">
						<div>
							<span className="fn-200 color-90 text-font">Total:</span>
							<span className="wt-500 fn-200 text-accent">${totalAmount}</span>
						</div>
						<button
							disabled={!(Number(totalAmount) > 0)}
							className={`bg-accent text-bg w-full wt-500 fn-200 ${
								Number(totalAmount) > 0 ? "color-100" : "color-70"
							}`}
							onClick={() =>
								Number(totalAmount) > 0 && alert("Processing... :)")
							}
						>
							Continue
						</button>
					</div>
				</div>
			</section>
		</section>
	);
}
