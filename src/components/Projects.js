import React, { useState, useEffect } from 'react';
import projectList from '../assets/json/projects.json';
import Footer from './sub-components/Footer';
import Modal from './helper-components/Modal';
import { Carousel } from 'react-bootstrap';

require('../assets/styles/style.css');

const ProjectCard = (props) => {
	const { title, images, description, stack, place } = props;
	const [ index, setIndex ] = useState(0);

	const zoomImage = (image) => {
		// Get the modal
		let modal = document.getElementById('myModal');
		let img = document.getElementById(image);
		let modalImg = document.getElementById('img01');
		let captionText = document.getElementById('caption');

		modal.style.display = 'block';
		modalImg.src = img.src;
		captionText.innerHTML = img.alt;
	};

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	useEffect(() => {
		let indicators = document.getElementsByClassName('carousel-indicators');
		const [ , ...rest ] = indicators;
		for (let item in [ ...rest ]) {
			[ ...rest ][item].style.position = 'static';
		}
	}, []);

	return (
		<article
			className="px-2 project-card text-center rounded mt-5 pt-3"
			style={{ minWidth: '320px', maxWidth: '320px', minHeight: '28em' }}
		>
			<h1 className="mb-0">{title}</h1>
			<p className="m-0  mb-2 small">{place}</p>
			{images.length > 1 ? (
				<Carousel
					className="d-flex flex-column-reverse"
					activeIndex={index}
					onSelect={handleSelect}
					interval={null}
					key={title}
				>
					{images.map((image, index) => {
						return (
							<Carousel.Item key={index}>
								<img
									id={image}
									src={image}
									height="160px"
									width="220px"
									alt={image.substring(image.lastIndexOf('/') + 1, image.lastIndexOf('.'))}
									onClick={() => {
										zoomImage(image);
									}}
									className="project-img"
								/>
								<Carousel.Caption className="position-static py-0" />
							</Carousel.Item>
						);
					})}
				</Carousel>
			) : (
				<React.Fragment>
					<img
						id={images[0]}
						src={images[0]}
						height="160px"
						width="220px"
						alt={images[0].substring(images[0].lastIndexOf('/') + 1, images[0].lastIndexOf('.'))}
						onClick={() => {
							zoomImage(images[0]);
						}}
						className="mb-5 project-img"
					/>
					<Modal />
				</React.Fragment>
			)}
			<p className="mb-3 small">
				<b>Tech Stack:</b> {stack.join(', ')}
			</p>
			<p>{description}</p>
		</article>
	);
};

const Projects = () => {
	// const imageLocation = './assets/images';
	return (
		<React.Fragment>
			<section id="projects" className="container-fluid text-light pt-5 section-bg-reverse">
				<h1 className="pt-5 text-light text-center">Projects</h1>
				<div className="d-flex flex-wrap justify-content-around">
					{projectList.map((project, index) => {
						return (
							<ProjectCard
								title={project.Title}
								images={project.Image}
								description={project.Description}
								stack={project.Stack}
								place={project.For}
								key={index}
							/>
						);
					})}
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
};

export default Projects;
