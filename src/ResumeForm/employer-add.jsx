import React from 'react';

class AddEmployerForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			employer: '',
			position: '',
			hireDate: '',
			endDate: '',
			employmentType: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
		console.log('state in submit', this.state, event.target.name);
		this.props.onFormComplete(state, event.target.name);
	}

	render() {
		// console.log(this.props.visibility);
		// const visibility = { visibility };
		// if (!visibility) {
		// 	console.log('its null');
		// 	return null;
		// }
		return (
			<div>
				<form name="employers" onSubmit={this.handleSubmit}>
					<label>
						Employer:
						<input name="employer" onChange={this.handleChange} />
					</label>
					<label>
						<input type="radio" value="contract" name="employmentType" onChange={this.handleChange} />
						Contract
					</label>
					<label>
						<input type="radio" value="nonContract" name="employmentType" onChange={this.handleChange} />
						Non-Contract
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
