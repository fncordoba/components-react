import React, { Component } from 'react';
import './App.css';
import { boilerTypes } from './boilerTypes.json';
import BoilerTypesForm from './boilerTypesForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boilerTypes
    }
    this.handleAddBoilerTypes = this.handleAddBoilerTypes.bind(this);
  }

  removeBoilerTypes(index) {
    this.setState({
      boilerTypes: this.state.boilerTypes.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddBoilerTypes(BoilerTypes) {
    this.setState({
      boilerTypes: [...this.state.boilerTypes, BoilerTypes]
    })
  }

  render() {
    const boilerTypes = this.state.boilerTypes.map((BoilerTypes, i) => {
      return (
        <div className="item-wraper" key={i}>
          <div className="item">
            <div className="item-description">
              {BoilerTypes.description}
            </div>
            <div className="item-delete">
              <button
                className="btn-delete"
                onClick={this.removeBoilerTypes.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">
        <div className="App-Header">
            Boilers Types - 
            <span className="number-of-boilerTypes">
              {this.state.boilerTypes.length}
            </span>
        </div>
        <div className="col-md-4 text-center">
          <BoilerTypesForm onAddBoilerTypes={this.handleAddBoilerTypes}></BoilerTypesForm>
        </div>
        <div className="container">
          <div className="row">
            {boilerTypes}
          </div>
        </div>
      </div>
    );
  }
}

export default App;