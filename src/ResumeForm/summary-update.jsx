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
	}

	handleSubmit(event) {
		event.preventDefault();
		const state = this.state;
		console.log('state in submit', this.state);
		this.props.onFormComplete(state, event.target.name);
	}

	render() {
		return (
			<div>
				<form>
					<label>
						Summary:
						<textarea name="summary" onChange={this.handleChange} />
					</label>
				</form>

				<form onSubmit={this.updateBullet}>
					<label>
						Bullet:
						<input name="bullet" />
					</label>
					<input type="submit" value="Submit" />
				</form>

				<button name="projects" onClick={this.handleSubmit}>
					All done
				</button>
			</div>
		);
	}
}

export default SummaryForm;
