import React from 'react';
require('../assets/styles/style.css');

const Icon = (props) => {
	const { src, alt, height, width, linkTo } = props;

	return (
		<a href={linkTo} target="_blank" rel="noopener noreferrer">
			<img className="logo ml-1 my-1" src={src} alt={alt} height={height} width={width} />
		</a>
	);
};

const ExternalSources = () => {
	return (
		<aside>
			<div className="position-fixed text-light" style={{ top: '30%', left: '0px', zIndex: 100 }}>
				<div className="right-triangle-slope-right" />
				<div className="d-flex flex-column" style={{ backgroundColor: '#0000006b' }}>
					<Icon
						src="https://img.icons8.com/fluent/80/000000/facebook-new.png"
						alt="facebook-link"
						height="40px"
						width="40px"
						linkTo="https://www.facebook.com/jacob.weikert"
					/>
					<Icon
						src="https://img.icons8.com/nolan/80/linkedin.png"
						alt="linkedin-link"
						height="40px"
						width="40px"
						linkTo="https://www.linkedin.com/in/jacob-weikert-cs/"
					/>
					<Icon
						src="https://img.icons8.com/bubbles/50/000000/github.png"
						alt="github-link"
						height="40px"
						width="40px"
						linkTo="https://github.com/Weikjaco"
					/>
					<Icon
						src="https://img.icons8.com/plasticine/100/000000/map.png"
						alt="github-link"
						height="40px"
						width="40px"
						linkTo="https://github.com/Weikjaco"
					/>
				</div>
				<div className="right-triangle-slope-right-reflected" />
			</div>
		</aside>
	);
};

export default ExternalSources;
