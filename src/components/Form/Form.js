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
		var reader = new FileReader();
		// let base64String = "";

		reader.onload = function () {
			// base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
			ctx.addImageUrl(reader.result);
		};

		reader.readAsDataURL(urlRef.current.files[0]);
		urlRef.current.value = "";
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				ref={urlRef}
				label="Image Url"
				input={{ type: "file", id: "imageUrl", name: "imageUrl" }}
			/>
			<Button>ADD</Button>
		</form>
	);
};

export default Form;
