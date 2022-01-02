import "./bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./styles/App.css";
function App() {
	useEffect(() => {
		document.title = "AEC Coding Club";
	});
	return (
		<div className="App">
			<Header />
			<div className="MainBody">
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Homepage />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}

export default App;
