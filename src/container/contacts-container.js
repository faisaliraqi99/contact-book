import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSelectedContact } from '../actions/index';
import Contacts from '../component/Contacts';

export class ContactsContainer extends Component {
  selectItem = (event) => {
    const contactsList = this.props.state.contacts;
    const contactId = event.target.closest('li').getAttribute('id');
    const index = contactsList.map((o) => o.id).indexOf(+contactId);

    const data = contactsList[index];
    this.props.addSelectedContacts(data);
  }

  render() {
    return (
      <Contacts
        contacts={this.props.state.contacts}
        selectItem={this.selectItem}
      />
    )
  }
}

export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = dispatch => {
  return {
    addSelectedContacts: (data) => dispatch(addSelectedContact(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);