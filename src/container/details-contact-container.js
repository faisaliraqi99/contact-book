import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import * as actionCreators from '../actions/index.js';
import { deleteContact } from '../actions/index';
import DetailsContact from '../component/DetailsContact'

export class DetailsContactContainer extends Component {
  editContact = () => {
    this.props.history.push('/edit');
  }
  deleteContact = (id) => {
    if (window.confirm('Вы действительно хотите удалить контакт?')) {
      this.props.deleteContacts(id)
        .then(this.props.history.push('/'))
        .catch(error => alert(error));
    }
  }
  render() {
    return (
      <DetailsContact
        contactData={this.props.state.selectedContact}
        deleteContact={this.deleteContact}
        editContact={this.editContact}
      />
    );
  }
}

export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = dispatch => {
  return {
    deleteContacts: (data) => dispatch(deleteContact(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsContactContainer));