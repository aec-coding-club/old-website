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
						<Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

						<Nav.Link onClick={() => navigate("/events")}>
							Events
						</Nav.Link>

						<Nav.Link onClick={() => navigate("/members")}>
							Membership
						</Nav.Link>

						<Nav.Link onClick={() => navigate("/about")}>
							About
						</Nav.Link>
						{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Action
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
