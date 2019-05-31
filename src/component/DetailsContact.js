import React, { Component } from 'react';

import './DetailsContact.css';

class DetailsContact extends Component {
    render() {
        return (
            <div className="container">
                <ul className="data-list">
                    <li className="data-item">
                        <span className="item-title">Name: </span>
                        {this.props.contactData.name}
                    </li>
                    <li className="data-item">
                        <span className="item-title">Lastname: </span>
                        {this.props.contactData.lastname}
                    </li>
                    <li className="data-item">
                        <span className="item-title">Number: </span>
                        {this.props.contactData.number}
                    </li>
                    <li className="data-item">
                        <span className="item-title">Address: </span>
                        {this.props.contactData.address}
                    </li>
                </ul>
                <button
                    className="contact-btn edit"
                onClick={() => this.props.editContact()}>
                    Edit contact
                </button>
                <button 
                className="contact-btn delete"
                onClick={() => this.props.selectContactToDelete(this.props.contactData.id)}>
                    Delete contact
                </button>
            </div>
        );
    }
}

export default DetailsContact;