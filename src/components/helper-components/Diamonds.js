import React from 'react';
require('../../assets/styles/style.css');

const Diamond = (props) => {
	const { amount } = props;
	const content = [];

	for (let i = 0; i < amount; i++) {
		content.push(<span key={i} className="diamond mr-2" />);
	}
	return content;
};

export default Diamond;
