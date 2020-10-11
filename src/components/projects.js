import React, { Component } from 'react';
import {
	Grid,
	Cell,
	Card,
	CardTitle,
	CardActions,
	Button,
	CardMenu,
	IconButton,
	CardText,
} from 'react-mdl';

class Projects extends Component {
	render() {
		return (
			<div className="project-container">
				<h2>My Projects</h2>
				<hr />
				<Grid>
					<Cell col={12}>
						<div className="project-grid">
							<Card
								shadow={5}
								style={{
									minWidth: '440px',
									height: '450px',
									margin: 'auto',
								}}
							>
								<CardTitle
									style={{
										color: '#fff',
										height: '225px',
										background:
											'url(https://create-react-app.dev/img/logo-og.png) center / cover',
									}}
								>
									The Good Burger
								</CardTitle>
								<CardText style={{ height: '75px' }}>
									<p>
										Login or create account and create the perfect burger for
										delivery!
									</p>
								</CardText>
								<CardText style={{ height: '35px' }}>
									<p>
										<strong>Technology Used: </strong> React, Styled Components,
										Firebase
									</p>
								</CardText>
								<CardActions border style={{ padding: '0' }}>
									<Button colored>
										<a
											href="https://github.com/GarlandLai/Burger-Builder"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
										</a>
									</Button>
									<Button colored>
										<a
											href="https://react-my-burger-a16da.web.app"
											target="_blank"
											rel="noopener noreferrer"
										>
											Live Demo
										</a>
									</Button>
									<CardMenu style={{ color: '#fff' }}>
										<IconButton name="share" />
									</CardMenu>
								</CardActions>
							</Card>
							<Card
								shadow={5}
								style={{
									minWidth: '440px',
									height: '450px',
									margin: 'auto',
								}}
							>
								<CardTitle
									style={{
										color: '#fff',
										height: '225px',
										background:
											'url(https://create-react-app.dev/img/logo-og.png) center / cover',
									}}
								>
									ZIAI
								</CardTitle>
								<CardText style={{ height: '75px' }}>
									Meditation journaling application. Listen to the meditation
									and write some journal entries outlining you experiences!
									<p>
										Login or create account and create the perfect burger for
										delivery!
									</p>
								</CardText>
								<CardText style={{ height: '35px' }}>
									<p>
										<strong>Technology Used: </strong> React, Ruby on Rails,
										postgreSQL
									</p>
								</CardText>

								<CardActions
									border
									style={{ padding: '0', alignItems: 'center' }}
								>
									<Button colored>
										<a
											href="https://github.com/GarlandLai/Capstone-2.0"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub Front-end
										</a>
									</Button>
									<Button colored>
										<a
											href="https://github.com/GarlandLai/capstone-backend"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub Back-end
										</a>
									</Button>
									<Button colored>
										<a
											href="https://react-my-burger-a16da.web.app"
											target="_blank"
											rel="noopener noreferrer"
										>
											Live Demo
										</a>
									</Button>
									<CardMenu style={{ color: '#fff' }}>
										<IconButton name="share" />
									</CardMenu>
								</CardActions>
							</Card>
							<Card
								shadow={5}
								style={{
									minWidth: '440px',
									height: '450px',
									margin: 'auto',
								}}
							>
								<CardTitle
									style={{
										color: '#fff',
										height: '225px',
										background:
											'url(https://create-react-app.dev/img/logo-og.png) center / cover',
									}}
								>
									Posion Oak Field Guild
								</CardTitle>
								<CardText style={{ height: '75px' }}>
									<p>
										Checkout out this informative website about Poison Oak. You
										can even play our game to see if you can identify it. It's
										not as easy as it looks!
									</p>
								</CardText>
								<CardText style={{ height: '35px' }}>
									<p>
										<strong>Technology Used: </strong>
										JavaScript, JQuery, HTML/CSS, Bootstrap
									</p>
								</CardText>
								<CardActions
									border
									style={{ padding: '0', alignItems: 'center' }}
								>
									<Button colored>
										<a
											href="https://github.com/GarlandLai/PoisonOak"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
										</a>
									</Button>

									<Button colored>
										<a
											href="https://oak-fg.firebaseapp.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											Live Demo
										</a>
									</Button>
									<CardMenu style={{ color: '#fff' }}>
										<IconButton name="share" />
									</CardMenu>
								</CardActions>
							</Card>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
