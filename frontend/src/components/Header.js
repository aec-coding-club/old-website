import React from "react";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
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
					AEC Coding Club &nbsp;
					<Image src="images/club_logo_transparent.png" width={25} />
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
						<Nav.Link onClick={() => navigate("/")}>
							Home &nbsp;
							<Image
								src="images/home_gif_remove.gif"
								width={40}
							/>
						</Nav.Link>
						<Nav.Link onClick={() => navigate("/events")}>
							Events &nbsp;
							<Image
								src="images/event_gif_remove.gif"
								width={40}
							/>
						</Nav.Link>
						<Nav.Link onClick={() => navigate("/groups")}>
							Groups &nbsp;
							<Image
								src="images/whatsapp_gif_remove.gif"
								width={40}
							/>
						</Nav.Link>
						<NavDropdown
							title="Login as"
							id="basic-nav-dropdown"
							style={{
								paddingTop: "2px",
							}}
						>
							<NavDropdown.Item
								onClick={() => navigate("/member")}
							>
								Member &nbsp;
								<Image
									src="images/student_logo.png"
									width={30}
								/>
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={() => navigate("/admin")}
							>
								Coordinator &nbsp;
								<Image src="images/admin_logo.png" width={30} />
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link onClick={() => navigate("/about")}>
							About &nbsp;
							<Image src="images/about_logo.png" width={40} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
