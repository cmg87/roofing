import React, {Component} from "react";

const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];


export default class Form extends Component {


    state = {
        firstName: '',
        lastName: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        phone_number: '',
    }


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handlePhone = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    handleSubmit = (event) => {
        event.preventDefault()

    }


    render() {
        return (
            <>
                <div>
                    <h1>Address Form</h1>
                    <form onSubmit={this.handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true"
                          name="contact">
                        <input type="hidden" name="bot-field"/>
                        <input type="hidden" name="form-name" value="contact"/>
                        <input
                            name={"firstName"}
                            value={this.state.firstName}
                            placeholder={"Name"}
                            onChange={this.handleChange}
                        />
                        <input
                            name={"lastName"}
                            value={this.state.lastName}
                            placeholder={"Name"}
                            onChange={this.handleChange}
                        />
                        <input
                            name={"street_address"}
                            value={this.state.street_address}
                            placeholder={"Street Address"}
                            onChange={this.handleChange}
                        />
                        <input
                            name={"city"}
                            value={this.state.city}
                            placeholder={"City"}
                            onChange={this.handleChange}
                        />
                        {/*<input*/}
                        {/*    name={"state"}*/}
                        {/*    value={this.state.state}*/}
                        {/*    placeholder={"State"}*/}
                        {/*    onChange={this.handleChange}*/}
                        {/*/>*/}
                        <select name="state" id="state" onChange={this.handleChange}>
                            {states.map(m => <option name={'state'} value={m}>{m}</option>)}</select>
                        <input
                            name={"zip_code"}
                            value={this.state.zip_code}
                            placeholder={"Zipcode"}
                            onChange={this.handleChange}
                        />
                        <input
                            name={"phone_number"}
                            value={this.state.phone_number}
                            placeholder="Phone Number (xxx) xxx-xxxx"
                            onChange={this.handlePhone}

                        />
                        <button onSubmit={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}