import { Link } from "react-router-dom";
import { useAppStore } from "../store/hooks";
import { CartIcon } from "./icons/others";
import { ClassName } from "./interface";

export default function Cart(props: ClassName) {
	const [length] = useAppStore((s) => s.cartStore.length);

	return (
		<Link to="/cart">
			<div className={`${props.className} color-90 text-font`}>
				<CartIcon />
				<span className="wt-400">{length}</span>
			</div>
		</Link>
	);
}
