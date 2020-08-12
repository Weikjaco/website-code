import React, { useState } from 'react';
import Navigation from './sub-components/Navigation';
require('../assets/styles/style.css');

const Intro = () => {
	const [aboutMe, setAboutMe] = useState(false);

	const expand = () => {
		aboutMe ? setAboutMe(false) : setAboutMe(true);
	};

	const customStyle = {
		header: {
			minHeight: '100vh'
		}
	}

	return (
		<header id="intro" className="container-fluid text-light" style={customStyle.header}>
			<Navigation />
			<div className="position-relative">
				<div id="intro-aboutme" className="position-absolute">
					<span onClick={expand}>
						<u>Read about me</u>
					</span>
					{aboutMe ? (
						<div id="intro-aboutme-description">
							<p>
								With an eye for detail and a bachelor's in Computer Science, I can create amazing
								displays with scalable access to data. Matching who I am to a career has been a
								significant achievement, and I am now thriving to become a professional fullstack
								engineer with an emphasis on frontend development.
							</p>
						</div>
					) : null}
				</div>

				<div id="intro-stats" className="position-absolute pt-5 d-flex flex-wrap small align-items-center">
					<div className="border-right px-2">
						<p>2+ Years Experience</p>
					</div>
					<div className="border-right px-2">
						<p>3 Computer Science Internships</p>
					</div>
					<div className="border-right px-2">
						<p>1 Chemical Engineering Internship</p>
					</div>
					<div className="px-2">
						<p>3 Different Countries</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Intro;
