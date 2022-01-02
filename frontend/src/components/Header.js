import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./../styles/Header.css";
const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="Header">
			<Navbar bg="light" expand="lg" fixed="top">
				<Navbar.Brand
					style={{ marginLeft: "30px" }}
					onClick={() => navigate("/")}
					className="navbrand"
				>
					AEC Coding Club
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					style={{ marginRight: "30px" }}
				/>
				<Navbar.Collapse
					id="basic-navbar-nav"
					style={{ marginLeft: "30px" }}
				>
					<Nav
						className="ms-auto"
						style={{
							fontSize: "20px",
							marginRight: "30px",
						}}
					>
						<Nav.Link onClick={() => navigate("/hehe")}>
							Home
						</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Something
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
