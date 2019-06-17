import React from 'react';

import './DetailsContact.css';

const DetailsContact = (props) => {
  return (
    <div className="container">
      <ul className="data-list">
        <li className="data-item">
          <span className="item-title">Name: </span>
          <span className="item-value" id="name">{props.contactData.name}</span>
        </li>
        <li className="data-item">
          <span className="item-title">Lastname: </span>
          <span className="item-value" id="lastname">{props.contactData.lastname}</span>
        </li>
        <li className="data-item">
          <span className="item-title">Number: </span>
          <span className="item-value" id="number">{props.contactData.number}</span>
        </li>
        <li className="data-item">
          <span className="item-title">Address: </span>
          <span className="item-value" id="address">{props.contactData.address}</span>
        </li>
      </ul>
      <button
        className="contact-btn edit"
        onClick={props.editContact}>
        Edit contact
                </button>
      <button
        className="contact-btn delete"
        onClick={() => props.deleteContact(props.contactData.id)}>
        Delete contact
                </button>
    </div>
  );
}

export default DetailsContact;