import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EditContact from '../component/EditContact'
import { actionEditContact } from '../actions/index';

export class EditContactContainer extends Component {
  state = {
    data: {
      "id": `${this.props.state.selectedContact.id}`,
      "name": `${this.props.state.selectedContact.name}`,
      "lastname": `${this.props.state.selectedContact.lastname}`,
      "number": `${this.props.state.selectedContact.number}`,
      "countrycode": `${this.props.state.selectedContact.countrycode}`,
      "email": `${this.props.state.selectedContact.email}`,
      "address": `${this.props.state.selectedContact.address}`
    }
  }

  editState = (event) => {
    const inputId = event.target.id;
    const inputVal = event.target.value;

    this.setState({ 
      data: { ...this.state.data, [inputId]: inputVal }
     });
  }
  saveContact = () => {
    this.props.editContacts(this.state.data.id, this.state.data)
      .then(() => this.props.history.push('/'))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <EditContact
        contactData={this.props.state.selectedContact}
        editState={this.editState}
        saveContact={this.saveContact}
      />
    );
  }
}

export const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = dispatch => {
  return {
    editContacts: (id, data) => dispatch(actionEditContact(id,data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditContactContainer));