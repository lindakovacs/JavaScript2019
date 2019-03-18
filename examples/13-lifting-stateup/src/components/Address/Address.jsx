import React from "react";
import "./Address.css";
// Import data from "assets/countries.js" and "assets/states.js" here
import countries from "../../assets/countries";
import states from "../../assets/states";

function Address(props) {
  const { fields, set, onSubmit } = props;
  return (
    <form className="container mt-4" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={fields.firstName}
          onChange={set}
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
          value={fields.lastName}
          onChange={set}
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
          value={fields.addressLine1}
          onChange={set}
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
          value={fields.city}
          onChange={set}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select
          id="state"
          name="state"
          className="form-control"
          value={fields.state}
          onChange={set}
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
          value={fields.postalCode}
          onChange={set}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="form-control"
          value={fields.country}
          onChange={set}
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
    </form>
  );
}

export default Address;
