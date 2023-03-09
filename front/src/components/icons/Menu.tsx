import { cleanProps, Icon } from "./icon";

export const MenuIcon = (p: Icon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			{...cleanProps(p)}
		>
			<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
		</svg>
	);
};

export const XIcon = (p: Icon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			{...cleanProps(p)}
		>
			<path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
		</svg>
	);
};
