import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Education from './resume/education';
import Experience from './resume/experience';
import Skills from './skills';
import Avatar from '../assets/avatar2.png';

import { CascadeEnergy } from './resume/jobInfo';

class Resume extends Component {
	state = { activeTab: 0 };

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="project-grid">
					<Experience
						startYear="October 2019"
						endYear="April 2019"
						jobTitle="Software Developer Intern"
						jobDescription={CascadeEnergy}
					/>
				</div>
			);
		}
	}

	render() {
		return (
			<div
				style={{ textAlign: 'center', background: '#27221f', color: 'white' }}
			>
				<Grid>
					<Cell col={4}>
						<div>
							<img src={Avatar} alt="avatar" style={{ height: '250px' }} />
						</div>
						<h2 stye={{ paddingTop: '2em' }}>Garland Lai</h2>
						<h4 style={{ color: 'grey' }}>Web Developer</h4>
						<hr
							style={{
								borderTop: '3px solid #e22947',
								width: '100%',
							}}
						/>
						<p>
							Motivated individual with engaging interpersonal skills and
							expertise in cultivating strong connections. Demonstrates strong
							analytical and problem solving abilities. Experienced in
							individual and collaborative work with cross-functional teams.
							Eager and excited to learn and grow within the tech field!
						</p>
						<hr style={{ borderTop: '3px solid #e22947', width: '100%' }} />
						<h5>Location</h5>
						<p>San Francisco, CA</p>
						<h5>Phone</h5>
						<p>Phone Number</p>
						<h5>Email</h5>
						<p>Garlandlai7@gmail.com</p>
						<h5>LinkedIn</h5>
						<a
							className="on-hover"
							href="https://www.linkedin.com/in/garland-lai"
							target="_blank"
							rel="noopener noreferrer"
						>
							linkedin.com/in/garland-lai
						</a>
						<h5>GitHub</h5>
						<a
							className="on-hover"
							href="https://github.com/GarlandLai"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/GarlandLai
						</a>
						<hr style={{ borderTop: '3px solid #e22947', width: '100%' }} />
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
						<div className="resume-tabs">
							<Tabs
								activeTab={this.state.activeTab}
								onChange={(tabId) => this.setState({ activeTab: tabId })}
								ripple
							>
								<Tab>Cascade Energy</Tab>
								<Tab>Bridgewell Resources</Tab>
								<Tab>Google X</Tab>
							</Tabs>

							<Grid>
								<Cell col={12}>
									<div className="content">{this.toggleCategories()}</div>
								</Cell>
							</Grid>
						</div>

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
