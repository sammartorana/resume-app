import React from 'react';
import SkillsForm from './skills';
import SummaryForm from './summary-update';
import AddEmployerForm from './employer-add';
import AddProjectForm from './project-add';
import AddCertTrainingForm from './cert-training-add';

class ResumeForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			employers: { visibility: false },
			projects: { visibility: false },
			certsTrainings: { visibility: false },
			summary: { visibility: false },
		};

		this.skills = [];
		this.experiences = [];

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}

	// update(field) {
	// 	console.log('received', field);
	// 	this.experiences.push(field);
	// 	console.log(ResumeForm.experiences);
	// }

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

	toggleVisibility(event) {
		const target = event.target.name;

		this.setState({
			[target]: { visibility: !this.state[target].visibility },
		});

		console.log(this.state);
	}

	render() {
		return (
			<div>
				<div>
					<input type="submit" value="Add Employer" name="employers" onClick={this.toggleVisibility} />
				</div>
				{this.state.employers.visibility ? <AddEmployerForm /> : null}
				<div>
					<input type="submit" value="Add Project" name="projects" onClick={this.toggleVisibility} />
				</div>
				{this.state.projects.visibility ? <AddProjectForm /> : null}
				<div>
					<input type="submit" value="Add Summary" name="summary" onClick={this.toggleVisibility} />
				</div>
				{this.state.summary.visibility ? <SummaryForm /> : null}
				<div>
					<input
						type="submit"
						value="Add Certification or Training"
						name="summary"
						onClick={this.toggleVisibility}
					/>
				</div>
				{this.state.certsTrainings.visibility ? <AddCertTrainingForm /> : null}
				{/* <AddCertTrainingForm /> */}
			</div>
		);
	}
}

export default ResumeForm;
