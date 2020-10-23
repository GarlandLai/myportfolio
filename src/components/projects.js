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
									marginBottom: '25px',
								}}
							>
								<CardTitle
									style={{
										color: 'black',
										height: '225px',

										background:
											'url(https://i.pinimg.com/originals/7c/98/fd/7c98fdf56fb54121465775d8287e0cb6.gif) center / cover',
									}}
								>
									The Good Burger
								</CardTitle>
								<CardText style={{ height: '75px' }}>
									<p>
										Are you hungry? Login or create an account to get delivery
										on the burger of your dreams! You can customize the
										ingredients and enter your information for delivery!
									</p>
								</CardText>
								<CardText style={{ height: '35px' }}>
									<p>
										<strong>Technology Used: </strong> React, Styled Components,
										CSS, and Firebase
									</p>
								</CardText>
								<CardActions
									border
									style={{
										padding: '0',
										display: 'flex',
										justifyContent: 'space-evenly',
									}}
								>
									<Button colored style={{ height: '50px', width: "50%" }}>
										<a
											href="https://github.com/GarlandLai/Burger-Builder"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
										</a>
									</Button>
									<Button colored style={{ height: '50px', width: "50%" }}>
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
									marginBottom: '25px',
								}}
							>
								<CardTitle
									style={{
										color: 'black',
										height: '225px',
										background:
											'url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/21/10/worldmeditationdayindybest.jpg) center / cover',
									}}
								>
									ZIAI Meditation Journal
								</CardTitle>
								<CardText style={{ height: '75px' }}>
									<p>
										Are you stress or just need time to recharge and gain some
										clarity? Go ahead and listen to one of the meditaitons and
										create a journal entry to keep track of your experience!
									</p>
								</CardText>
								<CardText style={{ height: '35px' }}>
									<p>
										<strong>Technology Used: </strong> React, Styled Components,
										CSS, Ruby on Rails, PostgreSQL, React-scroll, Materialize,
										and Heroku
									</p>
								</CardText>

								<CardActions
									border
									style={{
										padding: '0',
										display: 'flex',
										justifyContent: 'space-evenly',
									}}
								>
									<Button colored style={{ height: '50px' }}>
										<a
											href="https://github.com/GarlandLai/Capstone-2.0"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub Front-end
										</a>
									</Button>
									<Button colored style={{ height: '50px' }}>
										<a
											href="https://github.com/GarlandLai/capstone-backend"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub Back-end
										</a>
									</Button>
									<Button colored style={{ height: '50px' }}>
										<a
											href="https://ziai-ea663.web.app"
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
									marginBottom: '25px',
								}}
							>
								<CardTitle
									style={{
										color: 'black',
										height: '225px',
										background:
											'url(https://www.outdoorjoes.com/posts/3f9dfe80a85b40b0a2e43f58f8a47272/image/embed) center / cover',
									}}
								>
									Posion Oak Field Guide
								</CardTitle>
								<CardText style={{ height: '75px' }}>
									<p>
										Going on a trip and need some quick information about poison
										oak? Check out this informative field guide to learn
										everything you need to know!
									</p>
								</CardText>
								<CardText style={{ height: '35px' }}>
									<p>
										<strong>Technology Used: </strong>
										JavaScript, JQuery, Webpack, HTML/CSS, and Bootstrap
									</p>
								</CardText>
								<CardActions
									border
									style={{
										padding: '0',
										display: 'flex',
										justifyContent: 'space-evenly',
									}}
								>
									<Button colored style={{ height: '50px', width: "50%" }}>
										<a
											href="https://github.com/GarlandLai/PoisonOak"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
										</a>
									</Button>

									<Button colored style={{ height: '50px', width: "50%" }}>
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
