import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actionCreators from '../actions/index.js';
import { deleteContact } from '../actions/index';
import DetailsContact from '../component/DetailsContact'

export class DetailsContactContainer extends Component {
  editContact = () => {
    this.props.history.push('/edit');
  }
  deleteContact = (id) => {
    if (window.confirm('Вы действительно хотите удалить контакт?')) {
      this.props.store.dispatch(deleteContact(id))
        .then(() => this.props.history.push('/'))
        .catch((err) => alert(err));
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

const mapStateToProps = (state) => {
  return state
};

export default withRouter(connect(mapStateToProps, actionCreators)(DetailsContactContainer));