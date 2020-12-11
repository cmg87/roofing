import React, {Component} from "react";
import {Helmet} from "react-helmet";

export default class Form extends Component {


    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.autocomplete = null
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
    }

    initialState() {
        return {
            name: '',
            street_address: '',
            city: '',
            state: '',
            zip_code: '',
            googleMapLink: ''
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        // this.props.dispatch(addParlor(this.state))
        // this.clearForm()
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace()
        let address = addressObject.address_components
        this.setState({
            name: addressObject.name,
            street_address: `${address[0].long_name} ${address[1].long_name}`,
            city: address[4].long_name,
            state: address[6].short_name,
            zip_code: address[8].short_name,
            googleMapLink: addressObject.url
        })
    }

    render() {
        return (
            <>
                <Helmet>
                    <script
                        src="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyCc9uBwPvqEnbM8lKUUpaWqGlLQGn1tTxA"/>
                </Helmet>
                <div>
                    <h1>Address Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input id="autocomplete"
                               className="input-field"
                               ref="input"
                               type="text"/>
                        <input
                            name={"name"}
                            value={this.state.name}
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
                        <input
                            name={"state"}
                            value={this.state.state}
                            placeholder={"State"}
                            onChange={this.handleChange}
                        />
                        <input
                            name={"zip_code"}
                            value={this.state.zip_code}
                            placeholder={"Zipcode"}
                            onChange={this.handleChange}
                        />
                        <button onSubmit={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}