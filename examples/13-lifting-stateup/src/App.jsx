import React, { Component } from "react";

import Address from "./components/Address/Address";
import Results from "./components/Results/Results";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    displayResults: false
  };
  set = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ displayResults: true });
  };
  render() {
    const { displayResults, ...fields } = this.state;
    return (
      <div className="App">
        {displayResults ? (
          <Results fields={fields} />
        ) : (
          <Address
            fields={fields}
            set={this.set}
            onSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default App;
