import React from 'react';

class ExperiencesForm extends React.Component { 
    constructor(props) {
        super(props);
        
        this.experience = {
            employerType: '',
            employerName: '',
            position: '',
            hireDate: '',
            endDate: ''
          };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const name = event.target.name;
        this.experience[name] = event.target.value;
    
        console.log(this.experience)
      }
    
      handleSubmit(event) {
        console.log('passed up', this.experience)
        event.preventDefault();
      }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
      <div onChange={this.handleChange}>
          Employer Type:
        <input type="radio" value="contract" name="employerType"/> Contract
        <input type="radio" value="nonContract" name="employerType"/> Non-Contract
      </div>
            <label>
            Employer:
            <textarea
                name="employerName"
                onChange={this.handleChange} />
            </label>
            <label>
            Position:
            <textarea
                name="position"
                onChange={this.handleChange} />
            </label>
            <label>
            Hire Date:
            <textarea
                name="hireDate"
                onChange={this.handleChange} />
            </label>
            <label>
            End Date:
            <textarea
                name="endDate"
                onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default ExperiencesForm;

