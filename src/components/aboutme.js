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
			<Cell col={1}></Cell>
			<Cell col={6}>
				<h2>About Me</h2>
				<hr />
				<p>
					Hi there! I'm Garland. Prior to my decision to switch career paths into Tech, I worked as a Project Manager at a Wholesale Supply Chain company managing over 10+ large multi-family constructions projects. What I enjoyed most about my time with Bridgewell Resources was the relationships I was able to create with team members and customers. Although I have decided to move forward from this role, I am grateful for the experience.
				</p>
				<p>
					After 2 years, I decided to make the leap and invest in my interest in web development. I enrolled in 6-month Web Development course called Epicodus. With over 1000 hours of hands-on learning and problem solving, I was able to delve into the web development fundamentals and most importantly, I gained a thrist for continously learning. 
					</p>
					<p>
					This experience led to my internship as a Software Developer with Cascade Energy. At Cascade, I gained valuable knowledge, hands-on experience, and a deeper understanding of writing quality code in large established codebase. The mentorship of senior software developers have ingrained an eagerness and excitement further my growth within the tech industry.
				</p>
				<br />
			</Cell>
			<Cell col={1}></Cell>
		</Grid>
	);
};

export default about;
