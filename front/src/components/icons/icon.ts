export interface Icon {
	fill?: string;
	className?: string;
	height?: number | string;
	width?: number | string;
}

export const cleanProps = (props: Icon): Required<Icon> => ({
	className: props.className ?? "",
	fill: props.fill ?? "black",
	height: props.height ?? 24,
	width: props.width ?? 24,
});
