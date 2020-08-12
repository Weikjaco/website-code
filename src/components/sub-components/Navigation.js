import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
	const navClick = (e) => {
		e.preventDefault();
		document.querySelector(e.target.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	};

	const customStyle = {
		navbar: {
			justifyContent: 'flex-end'
		}
	}

	return (
		<Navbar
			collapseOnSelect
			bg="transparent"
			variant="dark"
			fixed="top"
			expand="md"
			className="d-flex justify-content-between"
			id="navigation"
		>
			<Container>
				<Navbar.Brand>Jacob Weikert</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" style={customStyle.navBar} >
					<Nav className="mr-0">
						<Nav.Link href="#intro" onClick={navClick}>
							Home
						</Nav.Link>
						<Nav.Link href="#skills" onClick={navClick}>
							Skills
						</Nav.Link>
						<Nav.Link href="#experience" onClick={navClick}>
							Experience
						</Nav.Link>
						<Nav.Link href="#projects" onClick={navClick}>
							Projects
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
