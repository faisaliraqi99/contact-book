import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index.js';
import { addSelectedContact } from '../actions/index';
import Contacts from '../component/Contacts';

class ContactsContainer extends Component {
    selectItem = (event, props = this.props) => {
        const contactId = event.target.closest('li').getAttribute('id');
        let objectId = -1;
        props.state.contacts.find(function(item, i){
                if(item.id === +contactId){
                    objectId = i;
                    return i;
                }
                    return '';
        }); // Небольшой костыль)
        const data = props.state.contacts[objectId];
        props.store.dispatch(addSelectedContact(data));
    }

    render() {
        return(
            <Contacts
                contacts={this.props.state.contacts}
                selectItem={this.selectItem}
            />
        )
    }
}

const mapStateToProps=(state) => {
    return state
};

export default connect( mapStateToProps, actionCreators )(ContactsContainer);