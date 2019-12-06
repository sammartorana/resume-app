import React from 'react';
import './App.css';
import ResumeForm from './ResumeForm/resumeForm'

class ResumeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      resumeName: '',
      summary: '',
      resumeSkills: Array(1).fill(null),
      experiences: Array(1).fill(null),
      education: Array(1).fill(null),
      certifications: Array(1).fill(null),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target.name;

    this.setState({
      [target]: event.target.value
    });

    console.log(this.state)
  }

  handleSubmit(event) {
    console.log('Employee Name:', this.state.employeeName, "Summary:", this.state.summary);
    event.preventDefault();
  }

  render() {
    return (
<div>
  <ResumeForm />
</div>
    );
  }
}


export default ResumeApp;
