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
							<p>
								Javascript | React | Redux | JQuery | NodeJS | Ruby on Rails |
								PostgreSQL | HTML | CSS | Bootstrap | React-MDL | Materialize |
								Github | Basic AWS | Firebase | Object Oriented Programming
							</p>
							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="http://linkedin.com/in/Garland-Lai"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-linkedin" aria-hidden="true" />
								</a>
								{/* Github */}
								<a
									href="http://github.com/GarlandLai"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-github-square" aria-hidden="true" />
								</a>
								{/* Epicodus */}
								<a
									href="https://www.epicodus.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fas fa-laptop-code" />
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
