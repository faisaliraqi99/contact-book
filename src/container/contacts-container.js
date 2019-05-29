import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import Contacts from '../component/Contacts';

class ContactsContainer extends React.Component {
    render() {
        return(
            <Contacts contacts={this.props.contacts}></Contacts>
        )
    }
}

const mapStateToProps=(state) => {
    return state
};

export default connect( mapStateToProps, actionCreators )(ContactsContainer);