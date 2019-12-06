import React from 'react';

class SkillsForm extends React.Component { 
  constructor(props) {
    super(props);
    const resumeSkills = {
      resumeSkills: []
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
    console.log("resume skills:", this.state.resumeSkills);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Skills:
          <textarea
            name="Skills"
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SkillsForm;

