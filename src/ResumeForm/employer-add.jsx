import React from 'react';

class AddEmployerForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			employer: '',
			position: '',
			hireDate: '',
			endDate: '',
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
						Employer:
						<input name="employer" onChange={this.handleChange} />
					</label>
					<label>
						Position:
						<input name="position" onChange={this.handleChange} />
					</label>
					<label>
						Hire Date:
						<input type="date" name="hireDate" onChange={this.handleChange} />
					</label>
					<label>
						End Date:
						<input type="date" name="endDate" onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default AddEmployerForm;
