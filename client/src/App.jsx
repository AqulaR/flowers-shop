import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {

	return (
		<>
			<Router>
				{/* сюда будете вставлять  всякие контексты и настройки*/}
				<AppRoutes />
			</Router>
		</>
	);
}

export default App;
