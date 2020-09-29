import React from 'react';
import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import { Switch, Route } from 'react-router-dom';

const main = () => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route exact path="/aboutme" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/resume" component={Resume} />
			<Route exact path="/projects" component={Projects} />
		</Switch>
	);
};

export default main;
