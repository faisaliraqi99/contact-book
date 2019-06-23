import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddContact from '../component/AddContact'
import { createContact } from '../actions/index';

export class AddContactContainer extends Component {
  state = {
    data: {
      "id": 0,
      "name": "Default",
      "lastname": "Default",
      "number": "0550112233",
      "countrycode": "+996",
      "email": "undefined@gmail.com",
      "address": "Undefined"
    }
  }

  componentDidUpdate = (prevProps) => {
    const contactsArrProps = this.props.state.contacts;

    if (contactsArrProps.length !== prevProps.state.contacts.length) {
      const index = contactsArrProps.length - 1;
      this.setState({ data: { ...this.state.data, id: contactsArrProps[index].id + 1} });
    }
  }

  createContact = () => {
    this.props.createContacts(this.state.data)
      .then(() => alert(`Контакт ${this.state.data.name} добавлен`))
      .catch(error => console.log(error));
  }

  editState = (event) => {
    const inputId = event.target.id;
    const inputVal = event.target.value;

    this.setState({ data: { ...this.state.data, [inputId]: inputVal } });
  }

  render() {
    return (
      <AddContact
        createContact={this.createContact}
        editState={this.editState}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = dispatch => {
  return {
    createContacts: (data) => dispatch(createContact(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactContainer);