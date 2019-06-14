import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.css';
import contactIcon from '../img/phone-book.svg';

const Contacts = (props) => {
        return (
            <ul className="contact-list">
                {props.contacts.map((contact) =>
                    <li id={contact.id} onClick={props.selectItem} className="contact-item" key={contact.id}>
                        <Link className="contact-item-link" to="/details">
                            <img className="contact-item__img" src={contactIcon} alt="phone"></img>
                            <div className="contact-item__info">
                                <h3 className="contact-item__title">{contact.name} {contact.lastname}</h3>
                                <p className="contact-item__desc">Number: {contact.number}</p>
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
        );
}

export default Contacts;