import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';

import AddContact from '../component/AddContact'
import { createContact } from '../actions/index';

class AddContactContainer extends Component {
    state = {
        "id": 0,
        "name": "Default",
        "lastname": "Default",
        "number": "0550112233",
        "countrycode": "+996",
        "email": "undefined@gmail.com",
        "address": "Undefined"
    }

    componentWillReceiveProps() {
        // Автоматически подставляет id: со значением длины массива contacts
        setTimeout(() => {
            this.setState({
                id: this.props.state.contacts.length
            })
        });
    }

    createContact = () => {
        this.props.store.dispatch(createContact(this.state))
            .then(console.log('success'))
            .catch(error => console.log(error));
    }

    editState = (event) => {
        const inputId = event.target.id;
        const inputVal = event.target.value;

        this.setState({ [inputId]: inputVal });
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

export default connect(mapStateToProps, actionCreators)(AddContactContainer);