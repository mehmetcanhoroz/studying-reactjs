import React from 'react';
import PropTypes from 'prop-types';
import List from "./List";
import Form from "./Form";

const Contacts = (props) =>
{
    return (
        <div>
            <h1>CONTACTS!</h1>
            <List contacts={props.contacts}/>
            <div className={"listArea"}>
                <Form addContact={props.addContact}/>
            </div>
        </div>
    );
}

Contacts.propTypes = {contacts: PropTypes.array.isRequired,};

export default Contacts;