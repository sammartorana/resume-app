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
			employers: { visibility: false, employers: [] },
			projects: { visibility: false, projects: [] },
			certsTrainings: { visibility: false, certsTrainings: [] },
			summary: { visibility: false, summary: [] },
		};

		this.skills = [];
		this.experiences = [];

		this.handleChange = this.handleChange.bind(this);
		this.updateState = this.updateState.bind(this);
		this.toggleVisibility = this.toggleVisibility.bind(this);
		this.showState = this.showState.bind(this);
	}

	showState(event) {
		console.log('finalState', this.state);
	}

	handleChange(event) {
		const target = event.target.name;

		this.setState({
			[target]: event.target.value,
		});

		console.log(this.state);
	}

	updateState(childState, target) {
		const parentState = this.state[target];

		console.log('parentState', parentState);

		console.log('what I got:', 'state', childState, 'name', target);

		this.setState({
			[target]: {
				...this.state[target],
				[target]: [...parentState[target], childState],
			},
		});

		console.log('state:', this.state);
	}

	toggleVisibility(event) {
		const target = event.target.name;

		this.setState({
			[target]: { ...this.state[target], visibility: !this.state[target].visibility },
		});

		console.log(this.state);
	}

	render() {
		return (
			<div>
				<div>
					<input type="submit" value="Add Employer" name="employers" onClick={this.toggleVisibility} />
				</div>
				{this.state.employers.visibility ? <AddEmployerForm onFormComplete={this.updateState} /> : null}
				<div>
					<input type="submit" value="Add Project" name="projects" onClick={this.toggleVisibility} />
				</div>
				{this.state.projects.visibility ? <AddProjectForm onFormComplete={this.updateState} /> : null}
				<div>
					<input type="submit" value="Add Summary" name="summary" onClick={this.toggleVisibility} />
				</div>
				{this.state.summary.visibility ? <SummaryForm onFormComplete={this.updateState} /> : null}
				<div>
					<input
						type="submit"
						value="Add Cert/Training"
						name="certsTrainings"
						onClick={this.toggleVisibility}
					/>
				</div>
				{this.state.certsTrainings.visibility ? (
					<AddCertTrainingForm onFormComplete={this.updateState} />
				) : null}
				{/* <AddCertTrainingForm /> */}

				<input type="submit" value="showState" onClick={this.showState} />
			</div>
		);
	}
}

export default ResumeForm;
