import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import skillsList from '../assets/json/skills.json';
import Diamond from './helper-components/Diamonds.js';
require('../assets/styles/style.css');

const SkillEntity = (props) => {
	const { subTitle, rating } = props;
	const stars = [];
	let numStars = 5;
	let count = 0;
	let paddingRight = 0;
	let height = 17;
	let width = height;

	while (count < numStars) {
		count < numStars - rating
			? stars.push(
					<img
						src="./assets/images/silver-star.png"
						alt="Silver Star"
						key={count}
						height={height}
						width={width}
						style={{ paddingRight: paddingRight + 'px' }}
					/>
				)
			: stars.push(
					<img
						src="./assets/images/yellow-star.svg"
						alt="Gold Star"
						key={count}
						height={height}
						width={width}
						style={{ paddingRight: paddingRight + 'px' }}
					/>
				);
		count++;
		paddingRight = count * 18;
		width += 18;
	}

	return (
		<div className="mx-2" style={{ maxWidth: '100px' }}>
			<div className="d-flex flex-column align-items-end ">{stars}</div>
			<p className="text-light text-left pl-1 pt-2" style={{ fontSize: '12px' }}>
				{subTitle}
			</p>
		</div>
	);
};

// return children.map(child => {
//     child.className = 'class'
//     return React.cloneElement(child, {
//          className: 'class'
//      })
// })

const CarouselFrame = (props) => {
	const { title, skills, className } = props;
	const active = className;

	return (
		<Carousel.Item className={`${active}`} style={{ minHeight: '210px' }}>
			<div className="d-flex justify-content-center flex-wrap pt-5 mt-1" style={{ minHeight: '192px' }}>
				{Object.entries(skills).map(([ subTitle, rating ]) => {
					return <SkillEntity key={subTitle} subTitle={subTitle} rating={rating} />;
				})}
			</div>
			<Carousel.Caption className="position-static py-0">
				<h3 style={{ fontFamily: 'Times New Roman, Georgia, serif' }}>{title}</h3>
			</Carousel.Caption>
		</Carousel.Item>
	);
};

const Skills = () => {
	const [ index, setIndex ] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	useEffect(() => {
		let indicators = document.getElementsByClassName('carousel-indicators');
		indicators[0].style.position = 'static';
	}, []);

	const frames = Object.entries(skillsList);

	return (
		<section id="skills" className="text-light pt-5 section-bg-reverse">
			<h2 className="text-center py-4">Technical Skills</h2>
			<Carousel
				className="d-flex flex-column-reverse"
				activeIndex={index}
				onSelect={handleSelect}
				interval={null}
			>
				{frames.map(([ title, skills ]) => {
					return <CarouselFrame key={title} title={title} skills={skills} />;
				})}
			</Carousel>

			<div className="d-flex flex-column flex-wrap mx-5 pt-4 px-4">
				<h6 className="w-25 pb-1 border-bottom">Rating Descriptions:</h6>
				<small className="d-flex flex-column style-description pl-2 my-1">
					<span className="my-1">
						<Diamond amount="1" /> 1-star: I've performed various readings with this skill.
					</span>
					<span className="my-1">
						<Diamond amount="2" /> 2-star: Readings and have 0-6 months of experience.
					</span>
					<span className="my-1">
						<Diamond amount="3" /> 3-star: Readings, 6-12 months of experience, and I am efficient with this
						skill with little guidance.
					</span>
					<span className="my-1">
						<Diamond amount="4" /> 4-star: Readings, 12+ months experience, No guidance needed.
					</span>
					<span className="my-1">
						<Diamond amount="5" /> 5-star: I have mastered this skill and understand the under-the-hood
						workings, the best security practices (if applicable), and the best performance (if applicable).
					</span>
				</small>
			</div>
		</section>
	);
};

export default Skills;

// Story of me (traveling)
// Interests (feeds I follow, interesting news)
// Personality (from plentonics)
// Past work experiences (new pages?)
