import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
    render() {
        return (
            <div className="container">
                <div className="add-contact">
                    <input id="name" onInput={this.props.editState} className="contact-input" type="text" placeholder="Name"/>
                    <input id="lastname" onInput={this.props.editState} className="contact-input" type="text" placeholder="Lastname"/>
                    <input id="number" onInput={this.props.editState} className="contact-input" type="text" placeholder="Number"/>
                    <input id="email" onInput={this.props.editState} className="contact-input" type="text" placeholder="Email"/>
                    <input id="address" onInput={this.props.editState} className="contact-input" type="text" placeholder="Address"/>
                    <button className="add-contact-btn" onClick={this.props.createContact}>Create Contact</button>
                </div>
            </div>
        );
    }
}

export default AddContact;