import React from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
	return (
		<nav className={classes.navbar}>
			<ul>
				<li>{props.logo}</li>
				<li className={classes["span-container"]}>
					<span></span>
					<span></span>
					<span></span>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
