import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
	// const update = (e) => {
	// 	if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
	// 		// Select next navigation and select click
	// 		let navigationOptions = document.querySelectorAll('nav a[href^="#"]');
	// 		let activeIdx = 0;
	// 		let newActive = 0;

	// 		for (let i = 0; i < navigationOptions.length; i++) {
	// 			if (navigationOptions[i].classList.contains('active')) {
	// 				activeIdx = i; // store index
	// 			}
	// 		}
	// 		console.log(navigationOptions[activeIdx].getAttribute('href'));

	// 		if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
	// 			newActive = activeIdx === 0 ? navigationOptions.length - 1 : activeIdx - 1;
	// 			console.log(navigationOptions[newActive].getAttribute('href'));
	// 			navigationOptions[newActive].classList.add('active');
	// 			navigationOptions[activeIdx].classList.remove('active');
	// 			navigationOptions[newActive].click();
	// 		}
	// 		// newActive = active === navigationOptions.length - 1 ? 0 : newActive;
	// 		// newActive = active === 0 ? (newActive = navigationOptions.length - 1) : newActive;
	// 	}
	// };

	useEffect(() => {
		document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function(e) {
				e.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	}, []);

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
				<Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'flex-end' }}>
					<Nav className="mr-0">
						<Nav.Link href="#intro">Home</Nav.Link>
						<Nav.Link href="#skills">Skills</Nav.Link>
						<Nav.Link href="#experience">Experience</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
