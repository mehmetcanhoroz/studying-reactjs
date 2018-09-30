import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from "./Contacts";
import Form from "./Form";

class App extends Component {
    state = {
        contacts: [
            {name: "mehmet", phone: "123423431"},
            {name: "ali", phone: "423423"},
            {name: "ayşe", phone: "6756765"}
        ]
    }

    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
    }


    addContact(contact) {
        const conts = this.state.contacts;
        //const {contacts} = this.state;

        conts.push(contact);

        this.setState({
            contacts: conts
        });
    }

    render() {
        return (
            <div className="App">
                <Contacts addContact={this.addContact} contacts={this.state.contacts}/>

            </div>
        );
    }
}

export default App;
