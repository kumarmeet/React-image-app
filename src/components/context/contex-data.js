import React, { createContext, useState } from "react";

const ImageContext = createContext({
	images: [],
	addImageUrl: (url) => {},
	formSubmitHandler: (event) => {},
});

export const ImageProvider = (props) => {
	const [image, setImage] = useState([]);

	const formSubmitHandler = (event) => {
		event.preventDefault();
	};

	const getUrlHandler = (urlString) => {
		setImage((prev) => [urlString, ...prev]);
	};

	return (
		<ImageContext.Provider
			value={{
				images: image,
				addImageUrl: getUrlHandler,
				formSubmitHandler: formSubmitHandler,
			}}
		>
			{props.children}
		</ImageContext.Provider>
	);
};

export default ImageContext;
