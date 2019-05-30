import React, { Component } from 'react';
import './AddContact.css';
import { Link } from 'react-router-dom';

class DetailsContact extends Component {
    render() {
        return (
            <div className="container">
                {this.props.contactData.name}
                {this.props.contactData.lastname}
                {this.props.contactData.number}
                {this.props.contactData.address}
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default DetailsContact;