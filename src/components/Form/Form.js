import React, { useContext, useRef } from "react";
import ImageContext from "../context/contex-data";
import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "./Form.module.css";

const Form = () => {
	const urlRef = useRef();
	const ctx = useContext(ImageContext);

	const submitHandler = (event) => {
		ctx.formSubmitHandler(event);
		const urlString = urlRef.current.value;
		ctx.addImageUrl(urlString);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				ref={urlRef}
				label="Image Url"
				input={{ type: "url", id: "url", name: "url" }}
			/>
			<Button>ADD</Button>
		</form>
	);
};

export default Form;
