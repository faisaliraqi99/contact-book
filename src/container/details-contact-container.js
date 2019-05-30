import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';

import DetailsContact from '../component/DetailsContact'

class DetailsContactContainer extends Component {
    render() {
        return (
            <DetailsContact
                contactData={this.props.state.selectedContact}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(DetailsContactContainer);