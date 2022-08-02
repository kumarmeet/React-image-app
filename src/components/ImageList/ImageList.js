import React, { useContext } from "react";
import ImageContext from "../context/contex-data";

import classes from "./ImageList.module.css";
import Images from "./Images";

const ImageList = (props) => {
	const ctx = useContext(ImageContext);

	const listOfImage =
		ctx.images.length > 0 &&
		ctx.images.map((url, idx) => {
			return <Images src={url} key={idx} />;
		});

	return <div className={classes.container}>{listOfImage}</div>;
};

export default ImageList;
