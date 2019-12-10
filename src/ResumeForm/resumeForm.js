import React from 'react';
import SkillsForm from './skills';
import ExperiencesForm from './experiences';
import SummaryForm from './summary-update';

class ResumeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experience: [],
		};

		this.skills = [];
		this.experiences = [];

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}

	update(field) {
		console.log('received', field);
		this.experiences.push(field);
		console.log(ResumeForm.experiences);
	}

	handleChange(event) {
		const target = event.target.name;

		this.setState({
			[target]: event.target.value,
		});

		console.log(this.state);
	}

	handleSubmit(event) {
		console.log('Employee Name:', this.state.employeeName, 'Summary:', this.state.summary);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				{/* <SkillsForm />
                <ExperiencesForm /> */}
				<SummaryForm />
			</div>
		);
	}
}

export default ResumeForm;
