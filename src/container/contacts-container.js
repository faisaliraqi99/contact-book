import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import Contacts from '../component/Contacts';

class ContactsContainer extends React.Component {
    componentDidMount() {

    }
    render() {
        return(
            <Contacts contacts={this.props.contacts}></Contacts>
        )
    }
}

const mapSateToProps=(state) => {
    return state
};

export default connect( mapSateToProps, actionCreators )(ContactsContainer);