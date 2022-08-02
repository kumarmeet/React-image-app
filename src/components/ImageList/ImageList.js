import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import ImageContext from "../context/contex-data";

import classes from "./ImageList.module.css";
import Images from "./Images";

const ImageList = () => {
	const ctx = useContext(ImageContext);

	const listOfImage =
		ctx.images.length > 0 &&
		ctx.images.map((url, idx) => {
			return <Images src={url} key={idx} alt={uuid()} />;
		});

	return <div className={classes.container}>{listOfImage}</div>;
};

export default ImageList;
