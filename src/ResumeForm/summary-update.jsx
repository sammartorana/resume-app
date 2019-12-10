import React from 'react';

class SummaryForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			summary: '',
			bullets: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateBullet = this.updateBullet.bind(this);
	}

	updateBullet(event) {
		event.preventDefault();

		console.log('adding', event.target.bullet.value);

		this.setState({ bullets: [...this.state.bullets, event.target.bullet.value] });

		console.log(this.state.bullets);
	}

	handleChange(event) {
		const target = event.target.name;

		this.setState({
			[target]: event.target.value,
		});

		console.log(this.state);
	}

	logStuff(event) {
		console.log('things are happening', event.target.value);
	}

	handleSubmit(event) {
		console.log('Final State:', this.state);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Summary:
						<textarea name="summary" onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>

				<form onSubmit={this.updateBullet}>
					<label>
						Bullet:
						<textarea name="bullet" />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default SummaryForm;
