import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../assets/avatar2.png';

const about = () => {
	return (
		<Grid className="about-body">
			<Cell col={4}>
				<img src={Avatar} alt="avatar" style={{ height: '500px' }} />
				<h2>Garland Lai</h2>
			</Cell>
			<Cell col={8}>
				<h2>About Me</h2>
				<hr />
				<h4>Career Wise</h4>
				<p>
					Hi there! I'm Garland. Prior to my decision to switch career paths
					into Tech, I worked as a Project Manager at a Wholesale Supply Chain
					company that provided building materials for large multi-family
					construction projects. Although I have decided to move forward from
					this role, I am grateful for the experience.
				</p>
				<p>
					I decided to make the leap and jumpstart my career as a Web Developer.
					I enrolled in Epicodus Web Development bootcamp. After 1000+ hours of
					hands-on developing, I was abke to...... This experience has lead me
					to my internship with Cascade Energy as a Software Developer. I gained
					valuable knowledge, hands-on experience, and a deeper understanding of
					writing quality code in large establish codebase. I learned so much
					from the mentorship of senior software developers and have ingrained
					an eagerness and excitement further my growth within the tech
					industry.
				</p>
				<br />
				<h4>Outside of Career</h4>
				<p>
					During my free time, I enjoy being playing sports, learning new
					things, reading, relaxing at the park/beach, and hanging out with
					friends and family.
				</p>
			</Cell>
		</Grid>
	);
};

export default about;
