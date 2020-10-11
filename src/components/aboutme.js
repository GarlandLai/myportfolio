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
			</Cell>
		</Grid>
	);
};

export default about;
