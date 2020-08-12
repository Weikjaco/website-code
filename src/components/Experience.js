import React from 'react';
import workExp from '../assets/json/work-exp.json';
import Modal from './helper-components/Modal';

require('../assets/styles/style.css');

const Certificate = (props) => {
	const { number, title, caption, image } = props;

	const zoomImage = (certNo) => {
		// Get the modal
		let modal = document.getElementById('myModal');
		let img = document.getElementsByClassName('certificate')[certNo];
		let modalImg = document.getElementById('img01');
		let captionText = document.getElementById('caption');

		modal.style.display = 'block';
		modalImg.src = img.src;
		captionText.innerHTML = img.alt;
	};

	return (
		<li className="d-flex flex-column ml-5">
			<img
				className="certificate rounded pt-3"
				onClick={() => {
					zoomImage(number);
				}}
				src={`${image}`}
				alt={`${title} Certificate - Jacob Weikert`}
			/>
			<Modal />
			<span className="text-center pt-2 pb-1 small">{title}</span>
			<span className="text-center small">{`${caption}`}</span>
		</li>
	);
};

const WorkListInCountry = (props) => {
	const { country, workList, image, caption, height, style } = props;
	return (
		<div style={style} className="small px-5">
			<img src={`${image}`} alt={`${caption}`} height={`${height}`} className="pt-2" />
			<h5 className="pt-1">{`${country}`}</h5>
			<ul>{workList.map((item) => <li key={item}>{item}</li>)}</ul>
		</div>
	);
};

const Experience = () => {
	const imageLocation = './assets/images';
	const countries = Object.entries(workExp);

	return (
		<section id="experience" className="container-flow pt-5 section-bg">
			<div className="container text-light d-flex flex-column flex-wrap mt-3">
				<div className="container-1 rounded p-2">
					{/* Yellow: #f2bb05 Gray #70798c, rgba(112, 121, 140, 0.42) */}
					<h2 className="text-center pt-2">Certifications</h2>
					<div className="container-2">
						<h5 className="ml-4">Bachelor Degrees</h5>
						<ul className="d-flex small flex-wrap">
							<Certificate
								number="0"
								title="Computer Science"
								caption="GPA 3.78 / 4.00"
								image={`${imageLocation}/cs-diploma.jpg`}
							/>
							<Certificate
								number="1"
								title="Chemical Engineering"
								caption="GPA 2.89 / 4.00"
								image={`${imageLocation}/cheme-certificate.jpg`}
							/>
						</ul>
					</div>
				</div>
				<div className="container-1 rounded p-2">
					<h2 className="text-center pt-2">Companies I've worked with..</h2>
					<div className="container-2 d-flex flex-wrap justify-content-between">
						<WorkListInCountry
							country={countries[0][0]}
							workList={countries[0][1]}
							image={`${imageLocation}/USA.svg`}
							caption="USA flag in outline of USA"
							height="50px"
						/>
						<WorkListInCountry
							country={countries[1][0]}
							workList={countries[1][1]}
							image={`${imageLocation}/finland.svg`}
							caption="Wavvy Finish Flag"
							height="50px"
						/>
						<WorkListInCountry
							country={countries[2][0]}
							workList={countries[2][1]}
							image={`${imageLocation}/australia.svg`}
							caption="Aussie Flag"
							height="37px"
							style={{ marginTop: '11.5px' }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
