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
			<BrowserRouter>
				<Header />
				<div className="MainBody">
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						<Route exact path="/hehe" element={<Homepage />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
