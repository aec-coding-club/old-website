import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./../styles/Header.css";
const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="Header">
			<Navbar bg="primary" expand="lg">
				<Navbar.Brand
					style={{ marginLeft: "20px" }}
					onClick={() => navigate("/")}
					className="navbrand"
				>
					AEC Coding Club
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					style={{ marginRight: "20px" }}
				/>
				<Navbar.Collapse
					id="basic-navbar-nav"
					style={{ marginLeft: "20px" }}
				>
					<Nav
						className="ms-auto"
						style={{ marginRight: "20px", fontSize: "20px" }}
					>
						<Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
						<Nav.Link onClick={() => navigate("/")}>
							Events
						</Nav.Link>
						<NavDropdown title="Login as" id="basic-nav-dropdown">
							<NavDropdown.Item>Member</NavDropdown.Item>
							<NavDropdown.Item>Coordinator</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link onClick={() => navigate("/")}>About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
