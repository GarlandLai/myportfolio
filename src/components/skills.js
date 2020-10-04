import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { MySkills } from './resume/jobInfo';

class Skills extends Component {
	getFormattedSkills = (skills) => {
		const currentSkills = skills.map((skill) => <span>{skill}</span>);
		return currentSkills;
	};
	render() {
		return (
			<Grid>
				<Cell col={12}>
					<div style={{ display: 'inline', overflow: 'none', width: '80%' }}>
						{this.getFormattedSkills(MySkills)}
					</div>
				</Cell>
			</Grid>
		);
	}
}

export default Skills;
