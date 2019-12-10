import React from 'react';

class AddCertTrainingForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			type: '',
			name: '',
			provider: '',
			date: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target.name;

		this.setState({
			[target]: event.target.value,
		});

		console.log(this.state);
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
						<input type="radio" value="certification" name="type" onChange={this.handleChange} />
						Certification
					</label>
					<label>
						<input type="radio" value="training" name="type" onChange={this.handleChange} />
						Training
					</label>
					<label>
						Name:
						<input name="name" onChange={this.handleChange} />
					</label>
					<label>
						Provider:
						<input name="provider" onChange={this.handleChange} />
					</label>
					<label>
						Date:
						<input type="date" name="date" onChange={this.handleChange} />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default AddCertTrainingForm;
