import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
	const StyledLink = (url, title) => (
		<Link style={{ fontWeight: 'bold', fontSize: '16px' }} to={url}>
			{title}
		</Link>
	);
	return (
		<div className="App">
			{/* Uses a header that scrolls with the text, rather than staying locked at the top */}
			<div className="demo-big-content">
				<Layout >
					<Header
						className="header-color"
						title={
							<Link
								style={{
									textDecoration: 'none',
									color: 'white',
									fontWeight: 'bold',
								}}
								to="/"
							>
								My Porfolio
							</Link>
						}
						scroll
					>
						<Navigation>
							{StyledLink('/resume', 'Resume')}
							{StyledLink('/aboutme', 'About Me')}
							{StyledLink('/projects', 'Projects')}
							{StyledLink('/contact', 'Contact')}
						</Navigation>
					</Header>
					<Drawer
						title={
							<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
								My Porfolio
							</Link>
						}
					>
						<Navigation>
							<Link to="/resume">Resume</Link>
							<Link to="/aboutme">About Me</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/contact">Contact</Link>
						</Navigation>
					</Drawer>
					<Content>
						<div className="page-content" />
						<Main />
					</Content>
				</Layout>
			</div>
		</div>
	);
}

export default App;
