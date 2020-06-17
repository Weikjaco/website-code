import React from 'react';

const Picture = (src1, src2, src3, alt) => {
	return (
		<picture>
			<source media="(min-width:1008px)" srcSet={src3} />
			<source media="(min-width:640px)" srcSet={src2} />
			<img src={src1} alt={alt} />
		</picture>
	);
};

export default Picture;
