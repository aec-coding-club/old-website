import React from "react";
import "./../styles/Footer.css";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router";
const Footer = () => {
	const navigate = useNavigate();
	const fblink = "https://www.google.com";
	const gmaillink = "https://www.google.com";
	const aecwebsitelink = "";
	return (
		<div className="Footer">
			<div className="logos">
				<Image
					src={"images/aec_logo.jpg"}
					width={40}
					className="logo"
					onClick={() => (window.location.href = aecwebsitelink)}
				/>
				<Image
					src={"images/fb_logo.png"}
					width={40}
					className="logo"
					onClick={() => (window.location.href = fblink)}
				/>
				<Image
					src={"images/gmail_logo.png"}
					width={40}
					className="logo"
					onClick={() => (window.location.href = gmaillink)}
				/>
			</div>
			<div className="copyright">
				<p>
					<span style={{ fontSize: "15px" }}>&copy;</span> Coding Club
					- Asansol Engineering College - 2022.
				</p>
			</div>
		</div>
	);
};

export default Footer;
