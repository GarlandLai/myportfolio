import React, { Component } from 'react';
import {
	Tabs,
	Tab,
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
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="project-grid">
					<Card
						shadow={5}
						style={{ minWidth: '450px', height: '450px', margin: 'auto' }}
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
						<CardText style={{ height: '130px' }}>
							<p>
								Login or create account and create the perfect burger for
								delivery!
							</p>
							<p>Technology Used:</p>
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
						style={{ minWidth: '450px', height: '450px', margin: 'auto' }}
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
						<CardText style={{ height: '130px' }}>
							Meditation journaling application. Listen to the meditation and
							write some journal entries outlining you experiences!
							<p>
								Login or create account and create the perfect burger for
								delivery!
							</p>
							<p>Technology Used:</p>
						</CardText>

						<CardActions border style={{ padding: '0', alignItems: 'center' }}>
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
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				// Project 2
				<Card
					shadow={5}
					style={{ minWidth: '450px', height: '450px', margin: 'auto' }}
				>
					<CardTitle
						style={{
							color: '#fff',
							height: '225px',
							background:
								'url(https://create-react-app.dev/img/logo-og.png) center / cover',
						}}
					>
						React Project #2
					</CardTitle>
					<CardText>Add description of project</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>Live Demo</Button>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</CardActions>
				</Card>
			);
		} else if (this.state.activeTab === 2) {
			return (
				// Project 3
				<Card
					shadow={5}
					style={{ minWidth: '450px', height: '450px', margin: 'auto' }}
				>
					<CardTitle
						style={{
							color: '#fff',
							height: '225px',
							background:
								'url(https://create-react-app.dev/img/logo-og.png) center / cover',
						}}
					>
						React Project #3
					</CardTitle>
					<CardText>Add description of project</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>Live Demo</Button>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</CardActions>
				</Card>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs
					activeTab={this.state.activeTab}
					onChange={(tabId) => this.setState({ activeTab: tabId })}
					ripple
				>
					<Tab>React</Tab>
					<Tab>JavaScript</Tab>
					<Tab>Ruby on Rails</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
