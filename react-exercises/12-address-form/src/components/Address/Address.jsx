import React, { Component } from "react";
import "./Address.css";
import { STATUS_CODES } from "http";
import states from "../../assets/states";
import countries from "../../assets/countries";
// Import data from "assets/countries.js" and "assets/states.js" here

class Address extends Component {
  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    submit: false
  };

  setFirstName = e => this.setState({ firstName: e.target.value });
  setLastName = e => this.setState({ lastName: e.target.value });
  setAddressLine1 = e => this.setState({ addressLine1: e.target.value });
  setCity = e => this.setState({ city: e.target.value });
  setstate = e => this.setState({ state: e.target.value });
  setPostalCode = e => this.setState({ postalCode: e.target.value });
  setCountry = e => this.setState({ country: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submit: true });
  };

  render() {
    return (
      <form className="container mt-4" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="control-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            value={this.state.firstName}
            onChange={this.setFirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="control-label">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
            value={this.state.lastName}
            onChange={this.setLastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1" className="control-label">
            Address Line 1
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            type="text"
            className="form-control"
            value={this.state.addressLine1}
            onChange={this.setAddressLine1}
          />
          <p className="help-block text-muted">
            Street address, P.O. box, company name, c/o
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="control-label">
            City / Town
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className="form-control"
            value={this.state.city}
            onChange={this.setCity}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="control-label">
            State / Province / Region
          </label>
          {/* Loop through the states you imported here */}
          <select
            id="state"
            name="state"
            className="form-control"
            value={this.state.state}
            onChange={this.setstate}
          >
            {states.map((state, key) => (
              <option key={state.id}>{state}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postalCode" className="control-label">
            Zip / Postal Code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            className="form-control"
            value={this.state.postalCode}
            onChange={this.setPostalCode}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            Country
          </label>
          {/* Loop through the countries you imported here */}
          <select
            id="country"
            name="country"
            className="form-control"
            value={this.state.country}
            onChange={this.setCountry}
          >
            {countries.map((country, key) => (
              <option key={country.id}>{country}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
          {/* {this.state.handleSubmit && ( <p> Submit <em>{this.state.submit}</em> </p> } */}
        </button>

        {/*
         * Find a way to only display this once the form has been submitted.
         * Hint: You will need to change this "this.condtion" below to something else
         */}
        {/* {this.condition && ( */}
        {this.state.submit && (
          <div className="card card-body bg-light mt-4 mb-4">
            Results:
            <ul className="list-unstyled mb-0">
              {/* Add <li></li> tags here */}
              <li>{this.state.firstName} {this.state.lastName}</li>
              {/* <li>{this.state.lastName}</li> */}
              <li>{this.state.addressLine1}</li>
              <li>{this.state.city} , {this.state.state} {this.state.postalCode}</li>
              {/* <li>{this.state.state}</li> */}
              {/* <li>{this.state.postalCode}</li> */}
              <li>{this.state.country}</li>
            </ul>
          </div>
        )}
      </form>
    );
  }
}

export default Address;
