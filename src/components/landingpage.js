import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkl_n3vOKXZhEEgRGFtIXZMNlINKOUyLahMA&usqp=CAU"
							alt="avatar"
							className="avatar-image"
						/>
						<div className="banner-text">
							<h1>Web Developer</h1>
							<hr />
							<p>React | Javascript | Ruby on Rails | NodeJS | PostgreSQL</p>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
