import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import { withRouter } from 'react-router-dom';

import { deleteContact } from '../actions/index';
import DetailsContact from '../component/DetailsContact'

class DetailsContactContainer extends Component {
    editContact = () => {
        this.props.history.push('/edit');
    }
    deleteContact = (id) => {
        if(window.confirm('Вы правда хотите удалить контакт?')) {
            this.props.store.dispatch(deleteContact(id));
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <DetailsContact
                contactData={this.props.state.selectedContact}
                selectContactToDelete={this.deleteContact}
                editContact={this.editContact}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default withRouter(connect(mapStateToProps, actionCreators)(DetailsContactContainer));