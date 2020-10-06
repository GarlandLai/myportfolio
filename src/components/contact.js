import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from '../assets/avatar2.png';

class Contact extends Component {
	state = {
		showPhone: false,
	};
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Garland Lai</h2>
						<img src={Avatar} alt="avatar" style={{ height: '250px' }} />
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							Excited and eager to connect. I'd love to discuss how I can be of
							value to your team!
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent
										style={{
											fontSize: '25px',
											fontFamily: 'Anton',
											fontWeight: 300,
										}}
									>
										<i className="fa fa-phone-square" aria-hidden="true" />
										<button
											onClick={() => this.setState({ showPhone: true })}
											style={{
												fontSize: '25px',
												fontFamily: 'Anton',
												fontWeight: 300,
												border: 'none',
												background: 'none',
											}}
										>
											{this.state.showPhone ? '(415) 517-1671' : 'Show Number'}
										</button>
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{
											fontSize: '25px',
											fontFamily: 'Anton',
											fontWeight: 300,
										}}
									>
										<i className="fab fa-linkedin" aria-hidden="true" />
										<a
											href="https://www.linkedin.com/in/garland-lai"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: 'black', textDecoration: 'none' }}
										>
											linkedin.com/in/garland-lai
										</a>
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{
											fontSize: '25px',
											fontFamily: 'Anton',
											fontWeight: 300,
										}}
									>
										<i className="fa fa-envelope" aria-hidden="true" />
										Garlandlai7@gmail.com
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
