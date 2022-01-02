import { useEffect, useState } from "react";
import axios from "axios";
import "./spacelab.css";
function App() {
	const [data, setData] = useState("nofing");
	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get("/api");
			setData(data);
		};
		getData();
	});
	return (
		<div className="App">
			<h1>hello world</h1>
			<h2>{data}</h2>
		</div>
	);
}

export default App;
