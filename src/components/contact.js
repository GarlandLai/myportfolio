import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from '../assets/avatar2.png';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Garland Lai</h2>
						<img src={Avatar} alt="avatar" style={{ height: '250px' }} />
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							Add some information here
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
										(123)456-1234
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
										linkedIn.com
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
