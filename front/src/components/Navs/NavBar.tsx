import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "../icons/Menu";
import { ClassName } from "../interface";
import styles from "./Nav.module.css";

interface NavProps extends ClassName {
	routes?: {
		url: string;
		text: string;
	}[];
	icon?: string | JSX.Element;
	extra?: JSX.Element;
}

export default function NaBar(props: NavProps) {
	const [displayMenu, setDisplayMenu] = useState(false);

	const Routes = () => {
		return (
			<ul className={`links-e ${styles["links"]}`}>
				{props.routes?.map(({ url, text }, i) => {
					return (
						<li
							className={`link ${styles["link"]} color-90 text-font wt-400`}
							// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							onClick={() => {
								displayMenu && setDisplayMenu(false);
							}}
							onKeyDown={(e) => {
								e.key === "Enter" && displayMenu && setDisplayMenu(false);
							}}
						>
							<Link to={url}>{text}</Link>
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<>
			<nav className={styles["Nav"]}>
				<div
					tabIndex={0}
					className={`menu-icon ${styles["menu-icon"]}`}
					onClick={() => setDisplayMenu((p) => !p)}
					onKeyDown={(e) => {
						e.key === "ArrowUp" && setDisplayMenu(false);
						e.key === "ArrowDown" && setDisplayMenu(true);
					}}
				>
					<MenuIcon className="color-70 text-font" />
				</div>
				<div className="icon">{props.icon ?? "HOME"}</div>
				<Routes />
				{props.extra}
			</nav>
			{displayMenu && (
				<>
					<div className={`back ${styles["back"]} color-30 bg-font w-full`} />
					<div className={`bg menu ${styles["menu"]}`}>
						<div
							tabIndex={0}
							className={`close-icon ${styles["close-icon"]}`}
							onClick={() => setDisplayMenu((p) => !p)}
							onKeyDown={(e) => {
								e.key === "ArrowUp" && setDisplayMenu(false);
								e.key === "ArrowDown" && setDisplayMenu(true);
							}}
						>
							<XIcon className="color-70 text-font" />
						</div>
						<Routes />
					</div>
				</>
			)}
		</>
	);
}
