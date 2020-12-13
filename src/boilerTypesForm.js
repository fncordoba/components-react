import React, { Component } from 'react';

class BoilerTypesForm extends Component {
  constructor () {
    super();
    this.state = {
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddBoilerTypes(this.state);
    this.setState({
      description: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="new-element">
        <form onSubmit={this.handleSubmit} className="input-wraper">
          <div className="input-description">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <button type="submit" className="btn-submit">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default BoilerTypesForm;