import React, { Component } from "react";
import "./Address.css";
// Import data from "assets/countries.js" and "assets/states.js" here
import countries from "../../assets/countries";
import states from "../../assets/states";

class Address extends Component {
  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    hasSubmited: false
  };
  set = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ hasSubmited: true });
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
            onChange={this.set}
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
            onChange={this.set}
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
            onChange={this.set}
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
            onChange={this.set}
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
            onChange={this.set}
          >
            <option value="" />
            {states.map((state, index) => {
              return <option key={`state-${index}`}>{state}</option>;
            })}
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
            onChange={this.set}
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
            onChange={this.set}
          >
            <option value="" />
            {countries.map((country, index) => {
              return <option key={`country-${index}`}>{country}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/*
         * Find a way to only display this once the form has been submitted.
         * Hint: You will need to change this "this.condtion" below to something else
         */}
        {this.state.hasSubmited && (
          <div className="card card-body bg-light mt-4 mb-4">
            Results:
            <ul className="list-unstyled mb-0">
              {Object.entries(this.state).map(([name, value]) => {
                if (name === "hasSubmited") return null;
                return (
                  <li key={`field-${name}`}>
                    {name}: {value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </form>
    );
  }
}

export default Address;
