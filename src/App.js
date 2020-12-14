import React, { Component } from 'react';
import './App.css';
import { boilerTypes } from './boilerTypes.json';
import BoilerTypesForm from './boilerTypesForm';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boilerTypes,
      deleteBoilerModalIsOpen: false,
      editBoilerModalIsOpen: false,
      boilerToBeRemoved: null,
      boilerToBeEdited: null,
      boilerTypeInput: ""
    }
    this.handleAddBoilerTypes = this.handleAddBoilerTypes.bind(this);
    this.closeEditBoilerModal = this.closeEditBoilerModal.bind(this);
    this.openEDitBoilerModal = this.openEditBoilerModal.bind(this);
    this.editBoilerTypes = this.editBoilerTypes.bind(this);
    this.closeDeleteBoilerModal = this.closeDeleteBoilerModal.bind(this);
    this.openDeleteBoilerModal = this.openDeleteBoilerModal.bind(this);
    this.renderDeleteBoilerModal = this.renderDeleteBoilerModal.bind(this);
    this.removeBoilerTypes = this.removeBoilerTypes.bind(this);

  }

  editBoilerTypes() {
    const { boilerToBeEdited, boilerTypeInput } = this.state;
    this.setState({
      boilerTypes: this.state.boilerTypes.map(boilerType => {
        if (boilerType.id === boilerToBeEdited) {
          return {
            ...boilerType,
            description: boilerTypeInput
          };
        }
        return boilerType;
      }),
      editBoilerModalIsOpen: false,
      boilerToBeEdited: null
    })
  }

  closeEditBoilerModal() {
    this.setState({
      editBoilerModalIsOpen: false,
      boilerToBeEdited: null
    })
  }

  openEditBoilerModal(boilerTypeId) {
    this.setState({
      editBoilerModalIsOpen: true,
      boilerToBeEdited: boilerTypeId
    })
  }

  closeDeleteBoilerModal() {
    this.setState({
      deleteBoilerModalIsOpen: false,
      boilerToBeRemoved: null
    })
  }

  openDeleteBoilerModal(boilerTypeId) {
    this.setState({
      deleteBoilerModalIsOpen: true,
      boilerToBeRemoved: boilerTypeId
    })
  }

  removeBoilerTypes() {
    const {boilerToBeRemoved} = this.state;
    this.setState({
      boilerTypes: this.state.boilerTypes.filter(boilerType => {
        return boilerType.id !== boilerToBeRemoved
      }),
      deleteBoilerModalIsOpen: false,
      boilerToBeRemoved: null
    });
  }

  handleAddBoilerTypes(BoilerTypes) {
    this.setState({
      boilerTypes: [...this.state.boilerTypes, BoilerTypes]
    })
  }

  renderEditBoilerModal() {
    const { editBoilerModalIsOpen } = this.state;
    if(editBoilerModalIsOpen) {
      return ( 
        <Modal 
          title="Edit Boiler"
          submitLabel="Confirm" 
          onClose={this.closeEditBoilerModal}
          onSubmit={this.editBoilerTypes}
        >
          <p>Description</p>
          <input type="text" value={this.state.boilerTypeInput} onChange={(e) => this.setState({ boilerTypeInput: e.target.value })}></input>
        </Modal>
      );
    }
    return null;
  }

  renderDeleteBoilerModal() {
    const { deleteBoilerModalIsOpen } = this.state;
    if(deleteBoilerModalIsOpen) {
      return ( 
        <Modal 
          title="Delete Boiler"
          submitLabel="Confirm" 
          onClose={this.closeDeleteBoilerModal}
          onSubmit={this.removeBoilerTypes}
        >
          <h2>Are you sure that you want to delete it?</h2>
        </Modal>
      );
    }
    return null;
  }

  render() {
    const boilerTypes = this.state.boilerTypes.map((boilerType) => {
      return (
        <div className="item-wraper" key={boilerType.id}>
          <div className="item">
            <div className="item-description">
              {boilerType.description}
            </div>
            <div className="item-delete">
              <button
                className="btn-edit"
                onClick={this.openEditBoilerModal.bind(this, boilerType.id)}>
                Edit
              </button>
              <button
                className="btn-delete"
                onClick={this.openDeleteBoilerModal.bind(this, boilerType.id)}>
                Delete
              </button>
            </div>
            <div>
              {this.renderEditBoilerModal()}
              {this.renderDeleteBoilerModal()}
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
        <div className="new-boiler-type">
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