import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Avatar from '../assets/avatar2.png';

class Resume extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<Grid>
					<Cell col={4}>
						<div>
							<img src={Avatar} alt="avatar" style={{ height: '250px' }} />
						</div>
						<h2 stye={{ paddingTop: '2em' }}>Garland Lai</h2>
						<h4 style={{ color: 'grey' }}>Web Developer</h4>
						<hr
							style={{
								borderTop: '3px solid #833fb2',
								width: '100%',
							}}
						/>
						<p>Add some content</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
						<h5>Location</h5>
						<p>San Francisco, CA</p>
						<h5>Phone</h5>
						<p>Phone Number</p>
						<h5>Email</h5>
						<p>Garlandlai7@gmail.com</p>
						<h5>LinkedIn</h5>
						<a
							href="https://www.linkedin.com/in/garland-lai"
							style={{
								textDecoration: 'none',
							}}
							target="_blank"
							rel="noopener noreferrer"
						>
							linkedin.com/in/garland-lai
						</a>
						<h5>GitHub</h5>
						<a
							href="https://github.com/GarlandLai"
							style={{ textDecoration: 'none' }}
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/GarlandLai
						</a>
						<hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear={2009}
							endYear={2013}
							schoolName="San Francisco State University"
							schoolDescription="Business Administation - Concentration in Finance"
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Experience</h2>
						<Experience
							startYear={2009}
							endYear={2013}
							jobName="Cascade Energy"
							jobTitle="Software Developer Intern"
							jobDescription="Add Description"
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Skills</h2>
						<Skills skill="Javascript" progress={50} />
						<Skills skill="React" progress={80} />
						<Skills skill="HTML/CSS" progress={50} />
						<Skills skill="Project Management" progress={100} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
