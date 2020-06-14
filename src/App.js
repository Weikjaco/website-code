import React from 'react';
import Skills from './components/Skills';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ExternalSources from './components/ExternalSources';

const App = () => {
	return (
		<main>
			<Intro />
			<Skills />
			<Experience />
			<Projects />
			<ExternalSources />
		</main>
	);
};

export default App;
