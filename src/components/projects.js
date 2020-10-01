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
				<Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
					<CardTitle
						style={{
							color: '#fff',
							height: '176px',
							background:
								'url(https://create-react-app.dev/img/logo-og.png) center / cover',
						}}
					>
						React Project #1
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
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>This is React two</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>This is React three</h1>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>This is React four</h1>
				</div>
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
					<Tab>React1</Tab>
					<Tab>React2</Tab>
					<Tab>React3</Tab>
					<Tab>React4</Tab>
				</Tabs>
				<section className="project-grid">
					<Grid className="projects-grid">
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
				</section>
			</div>
		);
	}
}

export default Projects;
