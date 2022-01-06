import "./bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import Member from "./pages/Member";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Groups from "./pages/Groups";
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
						<Route exact path="/events" element={<Events />} />
						<Route exact path="/member" element={<Member />} />
						<Route exact path="/admin" element={<Admin />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/groups" element={<Groups />} />
						<Route path="*" element={<Homepage />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
