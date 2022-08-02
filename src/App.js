import React from "react";
import { ImageProvider } from "./components/context/contex-data";
import Form from "./components/Form/Form";
import ImageList from "./components/ImageList/ImageList";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
	return (
		<ImageProvider>
			<Navigation logo="LOGO" />
			<Form />
			{<ImageList />}
		</ImageProvider>
	);
};

export default App;
