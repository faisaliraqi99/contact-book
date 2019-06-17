import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index.js';
import { addSelectedContact } from '../actions/index';
import Contacts from '../component/Contacts';

export class ContactsContainer extends Component {
  selectItem = (event) => {
    const contactId = event.target.closest('li').getAttribute('id');
    const index = this.props.state.contacts.map((o) => o.id).indexOf(+contactId);

    const data = this.props.state.contacts[index];
    this.props.store.dispatch(addSelectedContact(data));
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

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(ContactsContainer);