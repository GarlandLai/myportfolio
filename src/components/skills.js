import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
	render() {
		return (
			<Grid>
				<Cell col={12}>
					<div style={{ display: 'inline', overflow: 'none', width: '80%' }}>
						<p style={{ fontSize: '14px', fontWeight: '400' }}>
							Javascript | React | JQuery | Node | Ruby on Rails | Sinatra |
							PostgreSQL | HTML | CSS | Unit testing |Jasmine | Jest | Mocha |
							Debugging | Redux | Github | Basic AWS | Firebase | Webpack | APIs
							| Object Oriented Programming | Heroku | SCRUM/Agile | SaaS |Slack
							| Airtable | Confluence | Project Management | Customer Service |
							Microsoft Office
						</p>
					</div>
				</Cell>
			</Grid>
		);
	}
}

export default Skills;
