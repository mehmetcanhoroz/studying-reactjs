import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    state = {
        name: "",
        phone: ""
    }

    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit(e) {
        e.preventDefault();
        console.log("submitted");

        this.props.addContact({
            ...this.state
        });

        this.setState({
            name: "",
            phone: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input name={"name"} id={"name"} value={this.state.name} onChange={this.change}
                           placeholder={"Enter a name"}/>
                    <br/>
                    <input name={"phone"} id={"phone"} value={this.state.phone} onChange={this.change}
                           placeholder={"Enter a phone"}/>
                    <br/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {};

export default Form;