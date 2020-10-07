import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
	getJobData = (dataArray) => {
		const bulletPoints = dataArray.map((data, i) => {
			return (
				<p key={i}>
					<i
						key={i}
						className="fas fa-circle"
						style={{ fontSize: '7px', verticalAlign: 'middle' }}
					/>{' '}
					{data}
				</p>
			);
		});
		return bulletPoints;
	};

	render() {
		return (
			<div>
				<Grid>
					<Cell col={4} style={{ maxWidth: '280px' }}>
						<h4 style={{ marginTop: '0px' }}>{this.props.jobTitle}</h4>
						<p>
							{this.props.startYear} - {this.props.endYear}
						</p>
					</Cell>
					<Cell col={8}>
						<div className="job-data">
							{this.getJobData(this.props.jobDescription)}
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Experience;
