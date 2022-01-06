import React from "react";
import "./../styles/About.css";
const About = () => {
	const inaug_poster = "images/drive/inaug_poster.png";
	return (
		<div>
			<div style={{ textAlign: "center", marginTop: "20px" }}>
				<h5>
					Managed by Department of Information Technology - Asansol
					Engineering College
				</h5>
				<h6>
					Est. 11 April, 2021{" "}
					<button
						className="btn btn-sm btn-primary"
						onClick={() => (window.location.href = inaug_poster)}
					>
						Click
					</button>
				</h6>
			</div>
			<div className="box">
				<h1>Teacher Coordinators</h1>
				<li>Mr. Sudip Kumar De</li>
				<li>Dr. Anup Kumar Mukhopadhyay</li>
				<li>Mr. Biplap Kumar Mondal</li>
			</div>
			<div className="box">
				<h1>Student Coordinators (Active)</h1>
				<li>Varun Kedia</li>
				<li>Soumita Hazra</li>
				<li></li>
			</div>
		</div>
	);
};

export default About;
