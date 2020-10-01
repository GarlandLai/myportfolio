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
							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								{/* Github */}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
								{/* freecodecamp */}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-free-code-camp" aria-hidden="true" />
								</a>
								{/* youtube */}
								<a
									href="http://google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
