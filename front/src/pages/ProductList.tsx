import { useState, useCallback, FormEvent, useEffect } from "react";
import { useQuery } from "react-query";
import { SearchIcon } from "../components/icons/Search";
import ProductComponent from "../components/Product/Product";
import { useAppStore } from "../store/hooks";
import { productsDispatch } from "../store/products";
import { ProductModel } from "../utils/Product";

export default function ProductList() {
	const [products, dispatch] = useAppStore((s) => s.productsStore.products);
	const [selectedProducts, setSelectedProducts] = useState(products);

	const { error, isLoading } = useQuery("products", async () => {
		const data = await ProductModel.getProducts();
		dispatch(productsDispatch.setProducts(data));
	});

	useEffect(() => {
		setSelectedProducts(products);
	}, [products]);

	const handleSearch = useCallback(
		(e: FormEvent<HTMLInputElement>) => {
			const query = (e.target as HTMLInputElement).value;
			setSelectedProducts(
				products.filter((p) =>
					p.name.toLowerCase().includes(query.toLowerCase()),
				),
			);
		},
		[products],
	);

	return (
		<section className="ProductsPage">
			<section className="header">
				<div>
					<span className="fn-200 text-font wt-bold">Search product:</span>
					<div className="input w-full">
						<input
							type="text"
							placeholder="Search for a product"
							onInput={handleSearch}
						/>
						<div className="icon color-50 text-font">
							<SearchIcon />
						</div>
					</div>
				</div>
			</section>
			<section className="products-section">
				{isLoading && <h2 className="fn-600">Loading....</h2>}
				{!!error && <h2 className="fn-600">Error occurred!....</h2>}
				{!isLoading && selectedProducts.length === 0 && (
					<h2 className="fn-600">No products found :{"("}</h2>
				)}
				{selectedProducts.map((p) => {
					return (
						<ProductComponent
							product={p}
							key={p.id}
							max={70}
							onAddToCart={() => console.log("id: ", p.id)}
						/>
					);
				})}
			</section>
		</section>
	);
}
