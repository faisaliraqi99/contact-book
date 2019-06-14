import React from 'react';
import './AddContact.css';

const AddContact = (props) => {
    return (
        <div className="container">
            <div className="add-contact">
                <input id="name" onInput={props.editState} className="contact-input" type="text" placeholder="Name" />
                <input id="lastname" onInput={props.editState} className="contact-input" type="text" placeholder="Lastname" />
                <input id="number" onInput={props.editState} className="contact-input" type="text" placeholder="Number" />
                <input id="email" onInput={props.editState} className="contact-input" type="text" placeholder="Email" />
                <input id="address" onInput={props.editState} className="contact-input" type="text" placeholder="Address" />
                <button className="add-contact-btn" onClick={props.createContact}>Create Contact</button>
            </div>
        </div>
    );
}

export default AddContact;