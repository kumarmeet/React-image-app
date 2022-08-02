import React from "react";

import classes from "./Images.module.css";

const Images = (props) => {
	return (
		<div className={classes["img-container"]}>
			<img className={classes.img} src={props.src} alt="new Image" />
		</div>
	);
};

export default Images;
