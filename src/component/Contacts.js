import React, { Component } from 'react';
import './Contact.css';
import contactIcon from '../img/phone-book.svg';

class Contacts extends Component {
    render() {
        // const contactItem = 
        return (
            <ul className="contact-list">
                {this.props.contacts.map((contact) =>
                    <li className="contact-item" key={contact.id}>
                        <img className="contact-item__img" src={contactIcon} alt="phone"></img>
                        <div className="contact-item__info">
                            <h3 className="contact-item__title">{contact.name} {contact.lastname}</h3>
                            <p className="contact-item__desc">Number: {contact.number}</p>
                        </div>
                    </li>
                )}
            </ul>
        );
    }
}

export default Contacts;