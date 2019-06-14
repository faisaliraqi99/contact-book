import React from 'react';

import './DetailsContact.css';

const DetailsContact = (props) => {
    return (
        <div className="container">
            <ul className="data-list">
                <li className="data-item">
                    <span className="item-title">Name: </span>
                    {props.contactData.name}
                </li>
                <li className="data-item">
                    <span className="item-title">Lastname: </span>
                    {props.contactData.lastname}
                </li>
                <li className="data-item">
                    <span className="item-title">Number: </span>
                    {props.contactData.number}
                </li>
                <li className="data-item">
                    <span className="item-title">Address: </span>
                    {props.contactData.address}
                </li>
            </ul>
            <button
                className="contact-btn edit"
                onClick={() => props.editContact()}>
                Edit contact
                </button>
            <button
                className="contact-btn delete"
                onClick={() => props.selectContactToDelete(props.contactData.id)}>
                Delete contact
                </button>
        </div>
    );
}

export default DetailsContact;