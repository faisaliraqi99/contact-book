import React, { Component } from 'react';

import './EditContact.css';

class EditContact extends Component {
  render() {
    return (
      <div className="container">
        <ul className="data-list">
          <li className="data-item">
            <span className="item-title">Name: </span>
            <input id="name" type="text" onInput={this.props.editState} defaultValue={this.props.contactData.name} className="edit-input"></input>
          </li>
          <li className="data-item">
            <span className="item-title">Lastname: </span>
            <input id="lastname" type="text" onInput={this.props.editState} defaultValue={this.props.contactData.lastname} className="edit-input"></input>
          </li>
          <li className="data-item">
            <span className="item-title">Number: </span>
            <input id="number" type="text" onInput={this.props.editState} defaultValue={this.props.contactData.number} className="edit-input"></input>
          </li>
          <li className="data-item">
            <span className="item-title">Address: </span>
            <input id="address" type="text" onInput={this.props.editState} defaultValue={this.props.contactData.address} className="edit-input"></input>
          </li>
        </ul>
        <button className="contact-btn" onClick={this.props.saveContact}>
          Save contact
                </button>
      </div>
    );
  }
}

export default EditContact;