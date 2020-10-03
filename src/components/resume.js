import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src={
									'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg'
								}
								alt="avatar"
								style={{ height: '200px' }}
							/>
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
						Right
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
