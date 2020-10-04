import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Avatar from '../assets/avatar2.png';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img src={Avatar} alt="avatar" style={{ height: '200px' }} />
						</div>
						<h2 stye={{ paddingTop: '2em' }}>Garland Lai</h2>
						<h4 style={{ color: 'grey' }}>Web Developer</h4>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<p>Add some content</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<h5>Location</h5>
						<p>San Francisco, CA</p>
						<h5>Phone</h5>
						<p>(123) 456-7891</p>
						<h5>Email</h5>
						<p>Garlandlai7@gmail.com</p>
						<h5>Website</h5>
						<p>MyWebsite.com</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
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
