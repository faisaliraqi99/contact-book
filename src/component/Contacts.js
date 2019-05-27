import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.contacts)}
            </div>
        );
    }
}

export default Contacts;