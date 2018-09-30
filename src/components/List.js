import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./List.css";

class List extends Component {
    constructor(props) {
        super(props);

        this.filter = this.filter.bind(this);
    }


    state = {
        filterText: ""
    }

    filter(e) {
        this.setState({
            filterText: e.target.value
        });
    }

    render() {
        const filteredContacts = this.props.contacts.filter(contact => {
            return contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1 || contact.phone.indexOf(this.state.filterText) !== -1
        });
        return (
            <div className={"listArea"}>
                <input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"}
                       value={this.state.filterText} onChange={this.filter}/>

                <ul className={"list"}>

                    {filteredContacts.map(contact => {
                        return (
                            <li key={contact.phone}><span className={"name"}>{contact.name}</span>
                                <span className={"phone"}>{contact.phone}</span>

                                <span className={"clearfix"}></span></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

List.propTypes = {};

export default List;